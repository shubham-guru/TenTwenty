import React from "react";
import NavBar from "./NavBar";


const MainSlider = () => {
  return (
    <div>
    <NavBar />
      <div className="slider">
        <div className="slider__slide slider__slide--active" data-slide={1}>
          <div className="slider__wrap">
            <div className="slider__back" />
          </div>
          <div className="slider__inner">
            <div className="slider__content">
                <h6>Welcome To TenTwenty Farms</h6>
              <h1>
              From our Farms <br/> to your hands
              </h1>
              <div className="toggle-btns">
                <a className="go-to-next">next</a>
                <a className="go-to-pre">previous</a>
              </div>
            </div>
          </div>
        </div>
        <div className="slider__slide" data-slide={2}>
          <div className="slider__wrap">
            <div className="slider__back" />
          </div>
          <div className="slider__inner">
            <div className="slider__content">
            <h6>Welcome To TenTwenty Farms</h6>
            <h1>
              From our Farms <br/> to your hands
              </h1>
              <div className="toggle-btns">
                <a className="go-to-next">next</a>
                <a className="go-to-pre">previous</a>
              </div>    	
            </div>
          </div>
        </div>
      
        <div className="slider__indicators" />
      </div>
    </div>

  );
};
export default MainSlider;
