// import React from 'react'

// function FunctionalComponent(props) {
//     console.log(props)
//   return (
//     <div>FunctionalComponent by {props.name} age: {props.age}
//     <div>
//         {`Expample of template string: ${props.address.city}, ${props.address.pincode}`}
//     </div></div>
//   )
// }

function FunctionalComponent({name, age, address}) {
    const {city, pincode, street} = address
  return (
    <div>FunctionalComponent by {name} age: {age}
    <div>
        address: {street}, {city}, {pincode}
    </div></div>
    
  )
}

export default FunctionalComponent