import React from 'react';

// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  console.log(props)
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placekitten.com/${randomWidth()}/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {props.canine.name}</h5>
          <p className="card-text">Description: {props.canine.description}</p>
          <p className="card-text">ID: {props.canine.id}</p>
          <a href="#" className="btn btn-primary">
            Adopt {props.canine.name}
          </a>
        </div>
      </div>
    </div>
  );
}