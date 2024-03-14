import { Link } from "react-router-dom";
import '../BookingFlights.css'


const FlightBookingCard = ({flight})=>{



    return (

        <div>
            <div className="container justify-content-center " style={{width:'850px'}}>
                <div className="container card mb-3 mx-2 d-inline-block  " 
                        style={{height:'5rem',backgroundColor:'lightsteelblue'}}>
                    <div className="d-inline-block "> 
                        <img src={flight.image} alt={flight.airlines}  className="d-inline-block img-fluid rounded-2 mb-4 ms-3" 
                            style={{height:'3rem',width:'3rem',position:'sticky'}} />
                    </div>        
                    

                    <div className=" container-fluid  d-inline-block text-center "  style={{width:'600px', alignItems:'center', justifyContent:'center',fontFamily:'serif', fontWeight:'bold', fontSize:'18px' }} >
                
                        <div className="d-inline-block ">
                            <div className="d-inline-block"  >
                                <h4 style={{fontFamily:'serif',fontWeight:'bold'}}>{flight.airlines}</h4>
                                <Link style={{fontWeight:'normal',fontSize:'15px'}} to={"viewdetail/"}> {flight.link}</Link>
                                  

                                {/* {flights.map((fli)=>{
                                    return(
						            <Link to={"viewdetail/" + fli.id}> {fli.link}</Link>
                                    );
                                }
                                )} */}
                                
                            </div>  
                        </div>
                    
                        <div className="d-inline-block  " style={{marginLeft:"40px"}}>
                            <p style={{fontFamily:'sans-serif'}}> {flight.departureTime} </p>
                            <p style={{fontFamily:'sans-serif', }}> {flight.from} - {flight.to} </p>
                        </div>



                        <div className=" d-inline-block" style={{marginLeft:"40px"}}>
                            <p style={{fontFamily:'sans-serif'}}> {flight.arrivalTime} </p>
                          
                        </div>

                        <div className=" d-inline-block"  style={{marginLeft:"40px"}}>
                            <p style={{fontFamily:'sans-serif'}}> {flight.timing} </p>
                            <p style={{fontFamily:'sans-serif', color:"red"}}> {flight.flightDescription} </p>
                        </div>

                        <div className="d-inline-block"  style={{marginLeft:"25px"}}>
                            <p style={{fontFamily:'sans-serif'}}> &#8377; {flight.farePrice} </p> 
                        </div>   
                    </div>
                    
                        <div className="d-inline-block me-4 m-3 float-end" style={{marginTop:'25px'}}>
                            <button className="rounded rounded-2 p-2 bg-warning"><Link to="viewdetail/1" 
                            className="link-book">Book Now</Link>  </button>
                        </div>

                </div>

            </div>
      </div>
   

    )


}

export default FlightBookingCard;