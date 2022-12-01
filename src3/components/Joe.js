import React from 'react'

export default function Joe() {
    const url = `http://placekitten.com/${Math.floor(Math.random()*200)+200}/${Math.floor(Math.random()*200)+200}`
  return (
    <div>
        <img src={url}alt="cute kitten"/>
    </div>
  )
}
