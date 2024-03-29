import React from 'react'

export default function ComunidadeCard(props) {
  return (
    <div className="rounded-sm bg-comunidade p-4">
      <span className=" text-xl text-corpo"> {props.location} </span>
      <h2 className="my-1 text-4xl text-corpo"> {props.number} </h2>
      <span className="text-xl text-textcolor"> {props.percente} </span>
    </div>
  )
}
