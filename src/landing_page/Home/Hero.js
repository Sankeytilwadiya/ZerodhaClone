// import React from 'react';

// function Hero() {
//     return (
//         <div className='container'>
//             <div className='row'>
//                 <img src="media/image/homeHero.png" />
//                 <h1>Invest in everything</h1>
//             <p>Online plateform to invest in stock ,derivatives,mutual funds;</p>
//            <button>Signup Now</button>
//             </div>
//         </div>
//     );
// }

// export default Hero;

import React from 'react';

function Hero() {
    return (
        <header className='container pb-5 mb-5' >
            <section className='row'>
                <img src="media/image/homeHero.png" alt="Invest in everything" className='mb-5'/>
                <div className='row text-center'>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds.</p>
                    <button style={{width:"18%", margin: "0 auto" ,backgroundColor:"blue",color:"white"}} className='p-2 btn --bs-primary fs-5 mb-5'>Signup Now</button>
                </div>
            </section>
        </header>
    );
}

export default Hero;



