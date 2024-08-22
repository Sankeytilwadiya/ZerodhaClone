import React from 'react'

function Stats () {
    return ( 
        <div className='container mt-5 p-3'>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h1 className='fs-2 mb-5'>
                    Trust with confidence
                    </h1>
 <h4 className='fs-4 pb-2'>Customer-first always</h4>
  <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores worth of equity investments.</p>

<h4 className='fs-4  pb-2'>No spam or gimmicks</h4>
<p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
<h4 className='fs-4  pb-2'>The Zerodha universe</h4>
<p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
<h4 className='fs-4  pb-2'>Do better with money</h4>
<p className='text-muted'>With initiatives like <a>Nudge</a> and <a>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src="./media/image/ecosystem.png" style={{width:"95%"}}></img>
                    
                    <div className='text-center'>
                        <a  className="mx-5" href="" style={{textDecoration:"none"}}>Explore our products  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kit Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                </div>

            </div>
        </div>
     );
}

export default Stats ;
