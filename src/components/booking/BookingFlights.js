import {Outlet} from 'react-router-dom'

import './BookingFlights.css'

function BookingFlights(){



    return(
        <>

            {/* <div>
                <div class="container mt-3 me-3" >
                    <div>
                        <button class='btn btn-outline-success m-3 rounded-5 '  style={{width:170,height:50,fontFamily:''}} >
                            Cheapest
                        </button>
                        <button class='btn btn-outline-danger rounded-5 'style={{width:170,height:50}}>
                            Fastest
                        </button>
                    </div>
                </div>

            </div>  */}

        <div className="container mt-5">
      <div className="row">
        <div className="col-9">
          <div>
            <Outlet/>
          </div>         
        </div>

        <div className="col-3">
          <div style={{ height:'600px',width:'400px' }}>
            <div class='hero-img' style={{height:'600px'}}>
                <p className='text-center text-light fs-4 font-weight-bold mt-5' 
                    style={{fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
                        Get Up to INR 5000 off on International Flights Booking
                </p>   
            </div>
          </div>
        </div>

      </div>
    </div>
        
            


            

          </>
    )
}

export default BookingFlights;