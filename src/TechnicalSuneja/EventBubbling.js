import React, { useEffect } from "react";

function EventBubbling() {
  useEffect(() => {
    var div = document.querySelector("div");
    var button = document.querySelector("button");

    // Event Bubbling
    div.addEventListener("click", () => {
      console.log("Div");
    });

    button.addEventListener("click", () => {
      console.log("Button");
    });

    //Event Capturing
    // div.addEventListener('click', () => {
    //   console.log('div')
    // }, true)
    // button.addEventListener('click', () => {
    //     console.log('button')
    // }, true)

    // Stop Propogattion
    // div.addEventListener("click", () => {
    //   console.log("Div");
    // });

  //   button.addEventListener("click", (event) => {
  //     // event.stopPropagation();
  //     console.log("Button");
  //   });



  //Immediate Propogation
  // div.addEventListener("click", () => {
  //   console.log("Div")
  // })

  // button.addEventListener("click", (event) => {
  //     console.log("Button")
  // })

  // button.addEventListener("click", (event) => {
  //     event.stopImmediatePropagation()
  //     console.log("Button1")
  // })
});
  return (
    <>
      <div>
        <button>Button</button>
      </div>
    </>
  );
}

export default EventBubbling;
