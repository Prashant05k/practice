function PassingMultiplePropsFun() {
    const name = "Prashant";
    const getName = (name) => {
      return name;
    };
  
    return (
      <>
        <div>
          {/* <Example1 name={name} fun={getName} /> */}
          <Child details={{ name, getName }} />
        </div>
      </>
    );
  }
  
  // function Example1({name, fun}) {
  //   console.log(name, fun('Gupta'));
  function Child({details}) {
    console.log(details.name, details.getName('Gupta'));
    return (
      <>
        <div>PassingMultiplePropsFun</div>
      </>
    );
  }
  
  export default PassingMultiplePropsFun;