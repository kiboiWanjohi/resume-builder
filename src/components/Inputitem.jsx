import React from 'react'

const Inputitem = ({label, placeholder = '', name, onChange, type = 'text', isTextArea = false, className}) => {

  return (
    <div className={`row${className}`}>
      <div className="input">{!isTextArea ? <input onChange = {onChange} placeholder = {placeholder} name = {name} type = {type}/> : <textarea name = {name} id="text-area" onChange={onChange} placeholder = {placeholder} ></textarea>}</div>
      <label >{label}</label>
    </div>
  )
}

export default Inputitem