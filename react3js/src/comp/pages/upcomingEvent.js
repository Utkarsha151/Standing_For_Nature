import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];


const upcomingEvent = () => {
    return(
        <div className="container">
            <div className="py-4">
              <>
                <h1 style={{ textAlign: "center" ,color:"#407294",marginTop:"1%" ,marginBottom:"10%"}}>upcoming Events</h1>
                  <div className="App">
                    <Carousel breakPoints={breakPoints}>
                      <Item>Hadpsar(Near sindicate Bank)at 12'o clock</Item>
                      <Item>Indraprasth</Item>
                      <Item>Magarpatta</Item>
                      <Item>sinhagad</Item>
                      <Item>Sentosv</Item>
                      <Item>Alandi</Item>
                      <Item>Shanivar vada</Item>
                      <Item>omkareshwar</Item>
                    </Carousel>
                  </div>
              </>
            </div>
        </div>
    
    );
};

export default upcomingEvent ;
 