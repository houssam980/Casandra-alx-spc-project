
import React from 'react';
import './Testimonials.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Testimonials = () => {
  const testimonials = [
    {
      text: "This is the best booking platform I've ever used! Easy to navigate and book tickets seamlessly.",
      name: "Karim Rezqi",
      role: "Frequent Traveler",
      rating: 5
    },
    {
      text: "Exceptional service and support. The team really cares about customer experience.",
      name: "Ihsan Berou",
      role: "Travel Blogger",
      rating: 4
    },
    {
      text: "A game-changer in travel booking. I recommend it to everyone looking for a hassle-free experience.",
      name: "Ahmed Bernous",
      role: "Business Executive",
      rating: 5
    },
    {
      text: "A game-changer in travel booking. I recommend it to everyone looking for a hassle-free experience.",
      name: "Halima Fahim",
      role: "Business Executive",
      rating: 4
    },
    {
      text: "A game-changer in travel booking. I recommend it to everyone looking for a hassle-free experience.",
      name: "Abeer Biniat",
      role: "Business Executive",
      rating: 4
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <h2 className="testimonials-title">
          <i className="fas fa-quote-left testimonials-icon"></i>
          What Our Customers Say
        </h2>
        <div className="testimonial-list">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i className="fas fa-star" key={i}></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
