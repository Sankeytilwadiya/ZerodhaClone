import React from 'react'
function Education() {
    return ( 
        <div className='container mt-5 px-5'>
        <div className='row px-5'>
            <div className='col-4 '>
           <img src="media/image/education.svg" style={{width:"95%"}}></img>
            </div>
            <div className='col-2'></div>
            <div className='col-6 mt-5 ' >
                <div className='row '>
                <h2 className='fs-4 mb-4'>Free and open market education</h2>
                <p className='text-muted mb-3'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a  className="mb-5" href="" style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>

                
                <p className='text-muted mb-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a  className="mt-3" href="" style={{textDecoration:"none"}}>Trading Q&A <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            
                
            </div>


        </div>
    </div>
     );
}

export default Education;