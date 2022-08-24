function ComponentComposition(){
  const username = 'Joe'
  return <>
    <WelcomePage title={<WelcomeMessage username={username}/>}/>
  </>
}

function WelcomePage({title}){
  return <>
    {title}
  </>
}

function WelcomeMessage({username}){
  // console.log(username)
  return <h1>Hey, {username}!</h1>
}

export default ComponentComposition;


// // import React from 'react'

// function ComponentComposition() {
//     const userName = 'Joe';
  
//     return (
//       <WelcomePage title={<WelcomeMessage userName={userName} />} />
//     );
// }

// export default ComponentComposition
  
//   const WelcomePage = ({ title }) => {
//     return (
//       <>
//         {title}
//         {/** Some other welcome page code */}
//       </>
//     );
//   }
  
//   const WelcomeMessage = ({ userName }) => {
//     return (
//       <h1>Hey, {userName}!</h1>
//     );
//   }