CASANDRA README File :

Author : Houssam Ghmari
Email  : houssam.ghmari1243@gmail.com
GitHub : houssam980

Welcome To CASANDRA , A Frontend web application Simulate Backend using Mock Api And json servers 
CASANDRA is A web application that gives the user the ability to book Their Travel.
Users need to create account To book and pay then download there Tickets in PDF form .

* Please Note 0 : payment getaway its just a simulation its not real
* please note 1 : application doesn't manage sessions it needs to be managed by backend developer it's simulation


Technologies Used :

HTML : Web Structure
REACT.js :  Library / Framework
JsPdf : Giving the Ability To The users to make them Download Their Tickets As PDF
CSS : styling web pages
API using Json files and Json servers to simulate Backend

Third Party Application/services  Used:

DatePicker.css : used to style a date picker component 
Lucide-React: It provides a collection of SVG-based icons that you can easily use
Google fonts: using Fonts from Google for texts .
FontAwesome : importing Icons from FontAwesome


Installation / How To Use:

BEFORE ALL READ CARFULY THIS :

* remove the “ “ Befor Using the Commands bellow 
* Befor Getting Started Please Make sure you have Node.js installed in your Computer .
* Please Make sure You Downloaded all required files From the Repo .
* Node Modules are not included Please make sure you have them in your root project (bus-booking-app)


-	Cd To the Root of the Project (bus-booking-app) and Run “json-server --watch public/users.json --port 5000” To start users EndPoint to make it work fine for SignIn and signUp simulation
-	Cd to Public Directory and Run “npx json-server --watch db.json --port 3000” run the server to make Tickets ,Cities Endpointe Work Fine for fetching and saving data simulation
-	Cd .. and run npm start to make the application start it will ask for changing the port from 3000 because its already used by another Thing (Tickets, Cities Endpoint is using the port 3000)
-	Done , and Thank You :) 

