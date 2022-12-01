import React from 'react';

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case

  const card =  {
    margin: 20,
    background: '#e8eaf6',
  }
  const heading= {
    background: '#9a74db',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  };


// In Navbar, we can assign a style from an object by using curly braces
function Navbar() {
  return (
    <div style={card}>
      <div style={heading}>Home</div>
      <h1>This is a header</h1>
    </div>
  );
}

export default Navbar;
