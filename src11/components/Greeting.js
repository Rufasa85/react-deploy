// First we import `useState` with React so that we can take advantage of the hook
import React, { useState } from 'react';

export default function Greeting() {
  // To set a state variable using `useState`, we give our variable a name of `greeting` and a function to update it.
  // We also provide an initial value
  let [greeting, setGreeting] = useState('Welcome! React state is awesome!');
  const [formState, setFormState] = useState("")
  const changeGreet = ()=>{
   setGreeting("oh no the cat has the zoomies!")
    console.log(greeting)
  }

  const inputChangeHandle =(e)=>{
    setFormState(e.target.value)
  }

  const handleSubmit = e=>{
    e.preventDefault();
    setGreeting(formState);
    setFormState('');
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">
        Greeting from state:
      </div>
      <form onSubmit={handleSubmit}>
        <input placeholder="new greeting" name="greeting" value={formState} onChange={inputChangeHandle}/>
        <button>Update greeting!</button>
      </form>
      <div className="card-body">
        <p className="card-text" style={{ fontSize: '50px' }}>
          {greeting}
        </p>
        <p className="card-text" style={{ fontSize: '50px' }}>
          {greeting}
        </p>
        <p className="card-text" style={{ fontSize: '50px' }}>
          {greeting}
        </p>
       <button onClick={changeGreet}>Change greeting!</button>
      </div>
    </div>
  );
}
