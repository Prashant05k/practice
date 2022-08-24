function EventDelegation() {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <>
      <div onClick={handleClick}>
        <button>Click 1</button>
        <button>Click 2</button>
        <button>Click 3</button>
      </div>

      {/* <div>
        <button onClick={handleClick}>Click 1</button>
        <button onClick={handleClick}>Click 2</button>
        <button onClick={handleClick}>Click 3</button>
      </div> */}

      {/* <div>
            <button onClick={() => {console.log('Clicked')}}>Click 1</button>
            <button onClick={() => {console.log('Clicked')}}>Click 2</button>
            <button onClick={() => {console.log('Clicked')}}>Click 3</button>
        </div> */}
    </>
  );
}

export default EventDelegation;
