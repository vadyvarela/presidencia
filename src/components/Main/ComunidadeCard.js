import React from 'react'

export default function ComunidadeCard(props) {
  return (
    <div className="rounded-sm bg-comunidade p-4">
      <span className="font-bold text-xl text-textcolor"> {props.location} </span>
      <h2 className="my-1 font-bold text-4xl text-textcolor"> {props.number} </h2>
      <span className="text-xl text-textcolor"> {props.percente} </span>
    </div>
  )
}
