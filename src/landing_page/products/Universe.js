import React from 'react'
function Universe() {
    return (

        <div className='container p-5'>
            <div className='row text-center'>
<h1>The Zerodha Universe</h1>
<p className='color-#424242 mt-5 mb-3 fs-5'> Extend your trading and investment experience even further with our partner platforms</p>
<div className='col-4 p-3  mt-5'>
    <img src="media/image/smallcaseLogo.png" style={{height:"55px"}}></img>
<p className='text-muted text-small'>Thematic investment platform</p>
</div>
<div className='col-4 p-3  mt-5'>
<img src="media/image/streakLogo.png" style={{height:"55px"}}></img>
<p className='text-muted text-small'>Algo & strategy platform</p>

</div>
<div className='col-4 p-3  mt-5'>
<img src="media/image/sensibullLogo.svg" style={{height:"55px"}}></img>
<p className='text-muted text-small'>Options trading platform</p>

</div>
<div className='col-4 p-3 mt-5'>
    <img src="media/image/zerodhaFundhouse.png " style={{height:"55px"}}></img>
<p className='text-muted text-small'>Asset management</p>
</div>
<div className='col-4 p-3  mt-5'>
<img src="media/image/goldenpiLogo.png" style={{height:"55px"}}></img>
<p className='text-muted text-small'>Fundamental research platform</p>

</div>
<div className='col-4 p-3  mt-5'>
<img src="media/image/dittoLogo.png" style={{height:"55px"}}></img>
<p className='text-muted text-small'>Insurance</p>

</div>
<button style={{width:"15%", margin: "0 auto" ,backgroundColor:"#387ED1",color:"white"}} className='p-2 btn --bs-primary fs-5 mb-5 mt-5'>Signup Now</button>
            </div>
        </div>
      );
}

export default Universe;