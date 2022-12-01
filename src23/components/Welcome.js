
import React from 'react';

// Here we destructure our props into their own distinct variables
export default function Welcome({ loggedIn, setLoggedIn }) {
  // Lets log our our loggedIn variable to see it change in real time
  console.log('Welcome -> loggedIn', loggedIn);

  const renderMe = ()=>{
    if(loggedIn==="maybe"){
      return<h1>Maybe logged in? ok thats weird</h1>
    }
    else if(loggedIn) {
      return (
        <div>
        <span role="img" aria-label="tada">
          🎉
        </span>
        <h3>You are signed in!</h3>
        <button type="button" onClick={() => setLoggedIn(false)}>
          Log out
        </button>
      </div>
      )
    } 
    else  if(!loggedIn) {
      return (
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          <button type="button" onClick={() => setLoggedIn(true)}>
            Log in
          </button>
        </div>
      )
    }
  }

  // If we are loggedIn render one set of elements, and if not we render another
  return (
    <div>
      {/* Conditional (ternary) operator is checking to see if loggedIn is true. If so render the following: */}
      {/* {loggedIn ? (
        <div>
          <span role="img" aria-label="tada">
            🎉
          </span>
          <h3>You are signed in!</h3>
          <button type="button" onClick={() => setLoggedIn(false)}>
            Log out
          </button>
        </div>
      ) : (
        // If we are logged out, render this:
        <div>
          <span role="img" aria-label="stopsign">
            🛑
          </span>
          <h3>You are currently logged out</h3>
          <button type="button" onClick={() => setLoggedIn(true)}>
            Log in
          </button>
        </div>
      )} */}
      {renderMe()}
    </div>
  );
}
