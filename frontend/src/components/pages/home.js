import React, { Component } from "react";
import "./home.css";
import NavigationBar from '../../common/Navigation/navigation'
const navs=[{to:'/app/home',title:"HOME"},{to:'/app/about',title:"ABOUT US"},{to:'/app/home',title:"BOOK CAR"},{to:'/app/home',title:"REVIEWS"},{to:'/app/home',title:"OUR NEWS"},{to:'/app/home',title:"CONTACT US"}]

class Home extends Component {
  state = {};
  handleClick = () => {
    console.log("Clicked");
  };

 
  render() {
    return (
      <div className="body-main-container">
        <div className="main-container">
          <div>
          <NavigationBar navs={navs}/>
          </div>
          <div className="text-main-container">     
          <div className='text-container'>
              <p className='text-p-1 slideInLeft'>YOU'RE IN SAFE HAND</p>
              <p className='text-p-2'>Best taxi service</p>
          </div>
          </div>
  
          {/* <div className='input-main-container'>
            <div className="input-container">
              <div className="input">
                <input type="text" className="form-control" />
              </div>
              <div className="input">
                <input type="text" className="form-control" />
              </div>
              <div className="input">
                <input type="text" className="form-control" />
              </div>
              <div className="input">
                <input type="text" className="form-control" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Home;
