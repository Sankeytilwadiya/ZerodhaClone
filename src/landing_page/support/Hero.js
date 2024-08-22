import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supporthero">
      <div className="  p-5 ml-5 " id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="#"> Track Ticket</a>
      </div>
      <div className="row p-3 mx-5">
        <div className="col-6 p-5 ">
          <h1 className="fs-3 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="EG:how do i activate F&O"></input>
          <br />
          <a href="#">Track account opening</a>
          <a href="#"> Track segment activation</a>
          <a href="#">Intraday margins</a>
          <a href="#">Kite user manual</a>
        </div>
        <div className="col-6 p-5 ">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="#" style={{lineHeight:"2.5"}}> Surveillance measure on scrips - July 2024</a>
            </li>
            <li>
              <a href="#" style={{lineHeight:"2.5"}}>Latest Intraday leverages and Square-off timings</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
