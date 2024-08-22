import React from 'react'
function Award() {
    return ( 
   <div className='container mt-5'>
    <div className='row'>
    <div className='col-6 p-5'>
        <img src="./media/image/largestBroker.svg"></img>
    </div>
    <div className='col-6 p-5 mt-5'>
<h1>Largest Broker in India</h1>
<p className='mb-5'>1.5+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
<div className='row'>
    <div className='col-6'><ul>
<li> <p>Futures and Options</p></li>
<li><p>Commodity derivatives</p></li>
<li><p>Commodity derivatives</p></li>
</ul></div>
<div className='col-6 '><ul>
<li> <p>Stocks & IPOs</p></li>
<li><p>Direct mutual funds</p></li>
<li><p>Bonds and Govt. Securities</p></li>
</ul></div>


</div>
<img src="./media/image/pressLogos.png" style={{width:"90%"}}></img>
    </div>

    </div>
   </div>
     );
}

export default Award;