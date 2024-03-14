import {useParams, Link} from 'react-router-dom'
import flights from '../../../database/flights_data';
import '../BookingFlights.css'
import depart_plane from '../../../assets/images/booking/depart_plane.png'
import watch from '../../../assets/images/booking/watch.png'

const ViewDetails = ()=>{

    const {fid} = useParams()
 
    const flightObj = flights.find(fli=>fli.id==fid)


return(

    <div className='container ' style={{width:'820px'}} >  
        {/* <h2 className='text-success'>{flightObj.airlines} </h2> */}
      
        {/* <h4>Price: &#8377; {flightObj.farePrice} </h4> */}
        <div className='container'>
                <h3 style={{fontFamily:'serif', fontWeight:'bold'}} className='text-center'>Flight Detail</h3>

                <div className='flight-details-div container rounded-2 border border-dark '>

                    <div className='mt-3 border border-1 border-dark rounded-2'>
                        <div className='row'>
                            <div className='d-flex justify-content top-0 mt-1 '>
                                <img src={depart_plane} alt='plane' height={40} width={40} />
                                <p style={{fontSize:'20px'}}>Departing</p>
                            </div>
                        </div>
                        
                    <div className='row container text-center' style={{width:'900px',margin:'auto'}}>
                    
                        <div className='col-md-2'>
                            <p>{flightObj.from}</p>
                        </div>
                    {/* <div className='col-md-2'>
                        <p>---------</p>
                    </div> */}
                        <div className='col-md-2'>
                            <p>{flightObj.to}</p>
                        </div>

                        <div className='col-md-2'>
                            <p>{flightObj.flightDescription}</p>
                        </div>

                        <div className='col-md-2'>
                            <p>{flightObj.timing}</p>
                        </div>

                        <div className='col-md-2'>
                            <p>{flightObj.flightClass}</p>
                        </div>
                    </div>

                </div>

                <div className='row mt-4 container text-center' style={{width:'800px',margin:'auto'}} >
                    <div className='col-md-2'>
                        <div className='container' >
                            <img src={flightObj.image} alt={flightObj.arrivalTime} style={{width:'50px',height:'50px'}} />
                            <p style={{color:'black', fontWeight:'bold'}} > {flightObj.airlines} </p>
                        </div>

                    </div>

                    <div className='col-md-2'>
                        <div className='row'>
                            <p>{flightObj.from}</p>
                            <p style={{fontSize:'15px',fontWeight:'normal'}}> {flightObj.date} </p>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='row justify-content-center' style={{margin:'auto'}}>
                            <img src={watch} alt='timing'  style={{borderRadius:'50%',height:'25px',width:'50px'}}  />
                            <p style={{fontSize:'15px',fontWeight:'normal'}}> {flightObj.timing} </p>
                        </div>
                    </div>

                    <div className='col-md-2'>
                        <div className='row'>
                            <p>{flightObj.to}</p>
                            <p style={{fontSize:'15px',fontWeight:'normal'}} > {flightObj.date} </p>
                        </div>
                    </div>

                </div>



                <div className='row'>
                    <div className='d-flex justify-content-end bottom-0 '>
                    <p className='m-2 p-2'>&#8377; {flightObj.farePrice}</p>
                        <button className="rounded rounded-2 p-2 bg-warning"> <Link to="/booking" 
                                className="link-book"> Book Now </Link> </button>

                    </div>
                </div>

            </div>


            <div>

        </div>

        
    </div>

  
</div>
)
}

export default ViewDetails;