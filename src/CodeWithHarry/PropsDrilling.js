import React from 'react'

function PropsDrilling() {
    const userName = 'Joe';
  
    return (
      <WelcomePage userName={userName} />
    );
}

export default PropsDrilling
  
  const WelcomePage = ({ userName }) => {
    return (
      <>
        <WelcomeMessage userName={userName} />
        {/** Some other welcome page code */}
      </>
    );
  }
  
  const WelcomeMessage = ({ userName }) => {
    return (
      <h1>Hey, {userName}!</h1>
    );
  }