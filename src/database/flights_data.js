import indigo_flight_logo from '../assets/images/booking/indigo_flight_logo.png'
import alaska_flight_logo  from '../assets/images/booking/alaska_flight_logo.png'
import priceline_flight_logo from '../assets/images/booking/priceline_flight_logo.png'
import expedia_flight_logo from '../assets/images/booking/expedia_flight_logo.png'
import thai_flight_logo from '../assets/images/booking/thai_flight_logo.jpg'

const flights = [
    {
        id : 1,
        airlines : "Indigo",
        link : "View Details",
        from : "Pune ",
        to : "Mumbai",
        departureTime : "12:30",
        arrivalTime : "14:50",
        timing : "0.2 h 20 m",
        flightDescription : "Non-Stop",
        farePrice : 5092.00,
        btnBookNow : "Book Now",
        image : indigo_flight_logo ,
        flightClass : 'Business Class',
        date : "Tue, 28 Jan 2024"


    },

    {
        id : 2,
        airlines : "Alaska",
        link : "View Details",
        from : "Pune",
        to : "Mumbai",
        departureTime : "03:40",
        arrivalTime : "05:45",
        timing : "0.2 h 05 m",
        flightDescription : "Non-Stop",
        farePrice : 5398.00,
        btnBookNow : "Book Now",
        image : alaska_flight_logo ,
        flightClass : 'First Class',
        date : "Tue, 28 Jan 2024"


    },

    {
        id : 3,
        airlines : "Priceline",
        link : "View Details",
        from : "Pune",
        to : "Mumbai",
        departureTime : "05.30",
        arrivalTime : "07:35",
        timing : "0.2 h 05 m",
        flightDescription : "Non-Stop",
        farePrice : 5407.00,
        btnBookNow : "Book Now",
        image : priceline_flight_logo ,
        flightClass : 'Economy Class',
        date : "Tue, 28 Jan 2024"


    },

    {
        id : 4,
        airlines : "Expedia",
        link : "View Details",
        from : "Pune",
        to : "Mumbai",
        departureTime : "20.10",
        arrivalTime : "22:25",
        timing : "0.2 h 15 m",
        flightDescription : "Non-Stop",
        farePrice : 14407.00,
        btnBookNow : "Book Now",
        image : expedia_flight_logo ,
        flightClass : 'Business Class',
        date : "Tue, 28 Jan 2024"


    },

    
    {
        id : 5,
        airlines : "Thai",
        link : "View Details",
        from : "Pune",
        to : "Mumbai",
        departureTime : "19.10",
        arrivalTime : "21:25",
        timing : "0.2 h 15 m",
        flightDescription : "Non-Stop",
        farePrice : 10500.00,
        btnBookNow : "Book Now",
        image : thai_flight_logo ,
        flightClass : 'First Class',
        date : "Tue, 28 Jan 2024"



    }




]

export default flights;