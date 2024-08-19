import React, { useState, useEffect } from 'react';
import { jsPDF } from 'jspdf';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import './MainContent.css';

const Dashboard = () => {
  const [cities, setCities] = useState([]);
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [userName, setUserName] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [tripDate, setTripDate] = useState(new Date());

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data);
        setCities(data.cities);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (fromCity && toCity) {
      const filtered = cities.filter(city =>
        city.name.toLowerCase() !== fromCity.toLowerCase() &&
        city.name.toLowerCase().includes(toCity.toLowerCase())
      );
      setFilteredCities(filtered);
    } else {
      setFilteredCities([]);
    }
  }, [fromCity, toCity, cities]);

  useEffect(() => {
    fetchTickets();
  }, [paymentConfirmed]);

  const fetchTickets = () => {
    fetch('http://localhost:3000/tickets')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched tickets:', data);
        setTickets(data);
      })
      .catch(error => {
        console.error('Error fetching tickets:', error);
      });
  };

  const handleSearch = () => {
    if (fromCity && toCity) {
      const filtered = cities.filter(city =>
        city.name.toLowerCase() !== fromCity.toLowerCase() &&
        city.name.toLowerCase().includes(toCity.toLowerCase())
      );
      setFilteredCities(filtered);
    }
  };

  const handleBook = (city) => {
    setSelectedCity(city);
    setSelectedSeats([]);
  };

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats(prevSeats => {
      if (prevSeats.includes(seatNumber)) {
        return prevSeats.filter(seat => seat !== seatNumber);
      } else {
        return [...prevSeats, seatNumber];
      }
    });
  };

  const handleConfirmBooking = () => {
    if (selectedCity && selectedSeats.length > 0 && userName.trim() !== '') {
      setBookingConfirmed(true);
    }
  };

  const handlePayment = () => {
    if (creditCard.trim() !== '' && cvc.trim() !== '' && expiryDate.trim() !== '') {
      if (selectedCity) {
        const pricePerSeat = parseFloat(selectedCity.price);
        const totalPrice = pricePerSeat * selectedSeats.length;

        fetch('http://localhost:3000/tickets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: userName,
            bookingId: new Date().getTime(),
            toCity: selectedCity.name,
            seats: selectedSeats,
            price: totalPrice,
            paid: true,
            date: format(tripDate, 'yyyy-MM-dd')
          }),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Ticket booked:', data);
          setBookingId(data.bookingId);
          setPaymentConfirmed(true);
          fetchTickets(); // Refresh tickets after booking
        })
        .catch(error => {
          console.error('Error booking ticket:', error);
        });
      }
    }
  };


  // Ticket Delete
  const handleDeleteTicket = (ticketId) => {
    fetch(`http://localhost:3000/tickets/${ticketId}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
       alert('Are you sure Tou wan to delete Tickets ? it Will be permently Deleted')
        setTickets(prevTickets => prevTickets.filter(ticket => ticket.id !== ticketId));
      } else {
        throw new Error('Failed to delete ticket');
      }
    })
    .catch(error => {
      console.error('Error deleting ticket:', error);
    });
  };

  const downloadTicket = (ticket) => {
    const doc = new jsPDF();

    doc.setFontSize(24);
    doc.setTextColor(0, 102, 204);
    doc.text('CASANDRA', 10, 20);

    doc.setDrawColor(0, 102, 204);
    doc.setLineWidth(2);
    doc.line(10, 25, 200, 25);

    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);

    doc.text(`Booking ID: ${ticket.bookingId}`, 10, 40);
    doc.text(`Name: ${ticket.name}`, 10, 50);
    doc.text(`Destination: ${ticket.toCity}`, 10, 60);
    doc.text(`Seats: ${ticket.seats.join(', ')}`, 10, 70);
    doc.text(`Price: MAD ${ticket.price.toFixed(2)}`, 10, 80);
    doc.text(`Date: ${ticket.date}`, 10, 90);

    doc.setFontSize(14);
    doc.setTextColor(0, 170, 76);
    doc.text('Thank you for Choosing CASANDRA!', 10, 100);
    doc.text('Need Help? Please Contact Us +212 632979856', 10, 110);

    doc.save(`ticket_${ticket.bookingId}.pdf`);
  };

  const filteredTickets = tickets.filter(ticket =>
    ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.bookingId.toString().includes(searchQuery)
  );

  const renderSeatMap = () => {
    const totalSeats = 40;
    const rows = 10;
    const seatsPerRow = 4;
  

    const unavailableSeats = new Set([1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15,16,17]); // unavailable seats
  
    return (
      <div className="seat-map">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
              const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
              const isSelected = selectedSeats.includes(seatNumber);
              const isUnavailable = unavailableSeats.has(seatNumber);
  
              return (
                <div
                  key={seatIndex}
                  className={`seat ${isSelected ? 'selected' : ''} ${isUnavailable ? 'unavailable' : ''}`}
                  onClick={() => !isUnavailable && handleSeatSelection(seatNumber)}
                >
                  {seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };
  
  return (
    <main className="dashboard-content">
      <br></br>
      <br></br>
      <section className="search-section">
        <div className="search-content">
          <h2 className="search-title">
            <i className="fas fa-search search-icon"></i>
            Find Your Next Destination
          </h2>
          <div className="search-bar">
            <select
              className="search-select"
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}>
              <option value="">Select From City</option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            <select
              className="search-select"
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}>
              <option value="">Select To City</option>
              {cities.map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          <div className="city-list">
            {filteredCities.length > 0 ? (
              filteredCities.map((city, index) => (
                <div className="city-item" key={index}>
                  <h3 className="city-name">{city.name}</h3>
                  <p className="city-price">Price per seat: MAD {city.price}</p>
                  <br />
                  <button className="book-button" onClick={() => handleBook(city)}>
                    Book Now
                  </button>
                </div>
              ))
            ) : (
              <p className="no-results">Please Choose Cities From The Available Options</p>
            )}
          </div>
        </div>
      </section>
      {selectedCity && !bookingConfirmed && (
        <section className="booking-section">
          <div className="booking-container">
            <h2 className="booking-title">Book Your Trip</h2>
            <div className="booking-details">
              <div className="form-group">
                <label htmlFor="name">Your Full Name:</label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="search-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tripDate">Trip Date:</label>
                <DatePicker
                  id="tripDate"
                  selected={tripDate}
                  onChange={(date) => setTripDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="date-picker"
                />
              </div>
              <label htmlFor="seats">Available Seats:</label>
              {renderSeatMap()}
              <div className="selected-seats">
                <p>Selected Seats: {selectedSeats.join(', ')}</p>
                <p>Total Price: MAD {(selectedCity.price * selectedSeats.length).toFixed(2)}</p>
              </div>
              <button className="confirm-button" onClick={handleConfirmBooking}>
                Confirm Booking
              </button>
            </div>
          </div>
        </section>
      )}



      {bookingConfirmed && !paymentConfirmed && (
        <section className="payment-section">
          <div className="payment-container">
            <h2 className="payment-title">Payment Details</h2>
            <div className="payment-form">
              <div className="form-group">
                <label htmlFor="creditCard">Credit Card Number</label>
                <input
                  type="text"
                  id="creditCard"
                  value={creditCard}
                  onChange={(e) => setCreditCard(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    id="cvc"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    placeholder="123"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expiryDate">Expiry Date</label>
                  <input
                    type="text"
                    id="expiryDate"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                  />
                </div>
              </div>
              <button className="payment-button" onClick={handlePayment}>
                Pay Now
              </button>
            </div>
          </div>
        </section>
      )}
      {paymentConfirmed && (
        <section className="success-section">
          <div className="success-container">
            <h2 className="success-title">Payment Successful!</h2>
            <p>Your Booking ID: {bookingId}</p>
            <p>Thank you for booking with CASANDRA! have a nice trip</p>
            <button className="download-button" onClick={() => downloadTicket(tickets.find(ticket => ticket.bookingId === bookingId))}>
              Download Ticket
            </button>
          </div>
          <br />
        </section>
      )}
      <section className="ticket-list-section">
        <div className="ticket-list-container">
          <h2 className="ticket-list-title">Search Your Ticket by Name or Booking ID</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
            placeholder="Search by Name or Booking ID"
          />
          <br />
          <br />
          <div className="ticket-list">
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket, index) => (
                <div className="ticket-item" key={index}>
                  <h3 className="ticket-name">{ticket.name}</h3>
                  <p className="ticket-id">Booking ID: {ticket.bookingId}</p>
                  <p className="ticket-toCity">To: {ticket.toCity}</p>
                  <p className="ticket-seats">Seats: {ticket.seats.join(', ')}</p>
                  <p className="ticket-price">Total Price: MAD {ticket.price.toFixed(2)}</p>
                  <p className="ticket-date">Date: {ticket.date}</p>
                  <button className="download-button" onClick={() => downloadTicket(ticket)}>
                    Download Ticket
                  </button>
                  <br></br>
                  <br></br>
                  <button className="delete-button" onClick={() => handleDeleteTicket(ticket.id)}>
                    Delete Ticket
                  </button>
                  <br></br>
                  <br></br>
                  <p className="alert-msg"> Please Note, Delete Your Tickets Only After Using It , Do Not Delete It if you didn't , incase You Lost It we're Not Responsible, Thank You</p>
                </div>
              ))
            ) : (
              <p className="no-tickets">No Tickets Found</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;