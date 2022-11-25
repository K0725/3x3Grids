import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { ModalGateway } from "react-images";
import { photos } from "./photos";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [count, setCounter] = useState(0);
  const type = true;
  const target = "./images/F10.jpg";

  // const white = require('plain-white-background.jpg')

  // function openLightbox  useCallback((event, { photo, index }) => {
  //   setCurrentImage(index);
  //   setViewerIsOpen(true);
  // }, []);

  // const closeLightbox = () => {
  //   setCurrentImage(0);
  //   setViewerIsOpen(false);
  // };

  const change = (e) => {
    check(e);
    calculate();
    setCounter(count + 1);
    e.target.setAttribute( 'src', './images/plain-white-background.jpg');
    e.target.setAttribute('alt', 'dog');
  }

  function check (e){
    if(e === "./F10.jpg"){
      result();
    }

  }

  function calculate (){
    setCounter(count + 1)
  }


  const result = () => {
  setCounter(count + 1);
  return(
    <div>
      <p>You clicked {this.state.count} times</p>
    </div>
  )
}


// function compare (e){
//   if(e === "./images/F10/.jpg"){
//     change(e);
//   }else{
//     result(e);
//   }
// }


  return (
    <div>
      
      <Gallery photos={photos} onClick={change} />
        {viewerIsOpen ? (
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
        ) : null}
    </div>
  );

  


}
render(<App />, document.getElementById("app"));
