import React from 'react'
function RightSection({imageURL,
    ProductName,
    ProductDiscription,
    
    learnMore,
    }) {
    return (

        <div className="container ">
      <div className="row">
        
        <div className="col-6 p-5 mt-5 "  >
        <h1>{ProductName}</h1>
        <p >{ProductDiscription}</p>
        <div >
         
          <a href={learnMore} style={{marginRight:"50px"}}>Learn More</a>
        </div>
        
        </div>
        <div className="col-6 mb-5">
          <img src={imageURL}></img>
        </div>
      </div>
      
    </div>
      );
}

export default RightSection;

