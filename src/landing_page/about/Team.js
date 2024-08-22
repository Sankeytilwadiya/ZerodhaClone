import React from 'react'
function  Team() {
    return ( 
    <div className='container'>
        <div className='row  border-top mt-5 p-3 '>
        <h2 className='text-center'>People</h2>
        </div> 
        <div className='row  p-3 text-muted' style={{fontSize:"1.2em " ,lineHeight:"1.5"}}>
        <div className='col-6 p-3 text-center'>
        <img src="media/image/nithinKamath.jpg" style={{borderRadius:"100%" ,width:"60%"}} ></img>
        <h4 className='mt-5' >Nithin Kamath</h4>
        <h6>Foundr,CEO</h6>
        </div>
        <div className='col-6 p-3 mt-5'>
         <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        
         <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        
        <p>Playing basketball is his zen.</p>
        
        <p>Connect on<a href="#" style={{textDecoration:"none"}}> Homepage</a> /<a href="#"  style={{textDecoration:"none"}}> TradingQnA </a>/ <a href="#"  style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
        </div>
      
        </div>
        );
}

export default Team ;