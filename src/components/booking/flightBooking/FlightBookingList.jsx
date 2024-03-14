import {Link} from 'react-router-dom'
import flights from "../../../database/flights_data";
import FlightBookingCard from './FlightBookingCard';

const FlightBookingList = () =>{

    const flightBookingCardList = flights.map(fli=><Link to={"viewdetail/"+fli.id}  key={fli.id}> 
    <FlightBookingCard flight={fli}/> </Link>   )

    

    return (
        <div>
            {flightBookingCardList}
        </div>
    )

}

export default FlightBookingList;