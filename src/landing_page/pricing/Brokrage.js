import React from 'react'
function Brokrage() {
    return (

        <div className='container'>
            <div className='row  border-bottom p-5'>
                <div className='col-4 text-center'>
                    <img src="media/image/pricing0.svg"></img>
                    <h3>Free equity delivery</h3>
                    <p className='mt-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 text-center'>
               < img src="media/image/pricingEquity.svg"></img>
               <h3>Intraday and F&O trades</h3>
               <p className='mt-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
               
                <div className='col-4 text-center'>
                <img src="media/image/pricingMF.svg"></img>
                <h3>Free direct MF</h3>
                <p className='mt-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                 </div>

            </div>
            <div className='row'>
            <header className='container pb-5 mb-5' >
            <section className='row'>
               
                <div className='row text-center p-5'>
                    <h1 className='mt-5'>Open a Zerodha account</h1>
                    <p className='mt-3 fs-5 text-muted '>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                    <button style={{width:"15%", margin: "0 auto" ,backgroundColor:"#387ed1",color:"white"}} className='p-2 btn --bs-primary fs-5 mt-5'>Signup Now</button>


                </div>
            </section>
        </header>
            </div>
            <div className='row text-center mb-5'>
                <div className='col fs-4 ' style={{color:"#387ed1"}}>Brokerage calculator</div>
                <div className='col fs-4 'style={{color:"#387ed1"}}>List of charges</div>

            </div>
            <div className='row p-5 '>
                <ul className='rate-list'>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
                   
 <li>Digital contract notes will be sent via e-mail.</li>
<li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
<li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
<li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
<li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>

                </ul>
            </div>
        </div>
      );
}

export default Brokrage;