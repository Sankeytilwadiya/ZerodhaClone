import React from "react";
function LeftSection({
  imageURL,
  ProductName,
  ProductDiscription,
  tryDemo,
  learnMore,
  googleStore,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-6">
          <img src={imageURL}></img>
        </div>
        <div className="col-6 p-5 mt-5">
        <h1>{ProductName}</h1>
        <p>{ProductDiscription}</p>
        <div >
          <a href={tryDemo}>Try Demo</a>
          <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
        </div>
        <div className="mt-3">
          <a href={googleStore}>
            <img src="media/image/googlePlayBadge.svg"></img>
          </a>
          <a href={appStore} style={{marginLeft:"50px"}}>
            <img src="media/image/appstoreBadge.svg"></img>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
