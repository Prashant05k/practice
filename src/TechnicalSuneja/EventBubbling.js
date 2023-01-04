import React, { useEffect } from "react";

function EventBubbling() {
  useEffect(() => {
    var div = document.querySelector("div");
    var span = document.getElementById("span");
    var button = document.getElementById("button");

    // Event Bubbling
    // div.addEventListener("click", () => {
    //   console.log("Div");
    // });

    // span.addEventListener("click", () => {
    //   console.log("Span");
    // });

    // button.addEventListener("click", () => {
    //   console.log("Button");
    // });

    //Event Capturing
    // div.addEventListener('click', () => {
    //   console.log('div')
    // }, true)

    // span.addEventListener('click', () => {
    //   console.log('span')
    // }, true)

    // button.addEventListener('click', () => {
    //     console.log('button')
    // }, true)

    // Stop Propogattion
    div.addEventListener("click", () => {
      console.log("Div");
    });

     span.addEventListener('click', () => {
      console.log('span')
    }, true)

    button.addEventListener("click", (event) => {
      // event.stopPropagation();
      console.log("Button");
    });

    // Immediate Propogation
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
        <span id="span">
          <button id="button">Button</button>
        </span>
      </div>
    </>
  );
}

export default EventBubbling;
