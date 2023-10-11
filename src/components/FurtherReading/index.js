import React, { useEffect, useState } from 'react'
import Menu from '../Menu'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { services, skills } from '../../data/data'
import { useParams } from 'react-router-dom'


const FurtherReading = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [letterText, setLetterText] = useState('Welcome');
  const [articular, setArticlar] = useState('')
  // const navigate = useNavigate()
  const { title } = useParams()
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  
  const handleMenuItemClick = (ide, run) => {
    const article = services.filter((flair) => flair.id === ide)
    console.log(ide)
    const [xatr] = article
    
    setLetterText(xatr.title); // Update the text when a menu item is clicked
    setArticlar(xatr.article)
    console.log()
  };

  const filteredServices = services.filter(
    (service) => service.skillId.toString() === title
  )

  const filteredSkill = skills.filter(
    (skill) => skill.id.toString() === title
    
  )
  const [titled] = filteredSkill
   
  // const [xatr] = letterText
  // console.log(xatr.article)
  return (
    <>
      <div className="container contact-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={titled.title.split('')}
            idx={15}
          />
        </h1>
        <div className="single">
          <div className="content">
            <img
              src={titled.images}
              alt="PostImage"
            />
            <h2>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={letterText.split('')}
                idx={15}
              />
            </h2>
            <p>
              {articular ? articular : titled.article}
            </p>{' '}
          </div>
          <Menu data={filteredServices} onMenuItemClick={handleMenuItemClick} />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default FurtherReading
