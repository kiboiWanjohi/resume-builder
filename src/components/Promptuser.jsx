import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Inputitem from './Inputitem'
import {HiArrowRight} from 'react-icons/hi'
import {AiOutlineMail} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {GiAges} from 'react-icons/gi';
import {FaBirthdayCake} from 'react-icons/fa'
import {MdOutlineSchool} from 'react-icons/md';
import {CgWebsite} from 'react-icons/cg';
import 'animate.css';
import Resume from './Resume';
const Promptuser = (handleChange, OnButtonClick, imageSource, userObject) => {
const navigate = useNavigate();
const onButtonClick = () => {
  alert(`WINDOWS DIMENSION ${window.innerWidth}, ${window.innerHeight}`)
  navigate('/resume')
}
  return (
    <>
    {OnButtonClick ? <Resume userObject= {userObject} imageSource = {imageSource}/> : <div className="prompt-container animate_animated animated_bounce"><div className="inputs">
      <Inputitem className='first-name' onChange={handleChange} label = "First Name" placeholder='Enter your first name' name='firstName'/>
      <Inputitem className='last-name' onChange={handleChange} label = "Last Name" placeholder='Enter your last name' name='lastName'/>
      <Inputitem className='email' onChange={handleChange} label = {<AiOutlineMail/>} placeholder='Enter your email' name='email'/>
      <Inputitem className='phone' onChange={handleChange} label = {<BsTelephone/>} placeholder='Enter your phone number' name='phone'/>
      <Inputitem className='website' onChange={handleChange} label = {<CgWebsite/>} placeholder='Enter your website' name='website'/>
      <Inputitem className='birth-date' onChange={handleChange} label = {<FaBirthdayCake/>} type = 'date' name = "DOB"/>
      <Inputitem className = 'age' onChange={handleChange} label = {<GiAges/>} type = 'number' name='age' placeholder='Enter your age'/>
      <Inputitem className = 'skills' onChange={handleChange} label = 'Skill' name = "Skills" placeholder='List one required skill' />
      <Inputitem className = 'experience' onChange={handleChange} label = {<MdOutlineSchool/>} name = "Experience" placeholder='Enter your experience'/>
      <Inputitem className = 'graduation-year' onChange={handleChange} label = 'Graduation Year' name = "graduationYear" placeholder='Enter graduation year'/>
      <Inputitem className = 'accomplishment' onChange={handleChange} label = 'Accomplishment' name = "accomplishment" placeholder='List one major accomplishment'/>
      <Inputitem className = 'university' onChange={handleChange} label = 'University' name = "university" placeholder='List univesity name'/>
      <Inputitem className = 'profile' onChange={handleChange} isTextArea = {true} name = "profile" placeholder='Write about yourself'/>
<button className="generate-button" onClick={() => {onButtonClick()}}>Generate Resume <HiArrowRight /></button>
      </div>
      </div>}
    </>
  )
}

export default Promptuser