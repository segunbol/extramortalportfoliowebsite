import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import data from '../../data/index.json'
import { workExperience } from '../../data/data'

const Experience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              'S',
              'k',
              'i',
              'l',
              'l',
              's',
              ' ',
              '&',
              ' ',
              'E',
              'x',
              'p',
              'e',
              'r',
              'i',
              'e',
              'n',
              'c',
              'e',
            ]}
            idx={15}
          />
        </h1>
        <div className="portfolio--container">
          <h2 className="skills--section--heading"><AnimatedLetters letterClass={letterClass} strArray={'Skills'.split('')} idx={25}/>  </h2>
        </div>
        <div className="skills--section--container">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img
                  src={require('../../data/img/product-chain-1.png')}
                  alt="Product Chain"
                />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="portfolio--container">
          <h2 className="skills--section--heading"><AnimatedLetters letterClass={letterClass} strArray={'Experience'.split('')} idx={25}/>  </h2>
        </div>
        <div className="experience--section--container">
          {workExperience?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
                <img
                  src={require('../../data/img/product-chain-1.png')}
                  alt="Product Chain"
                />
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.companyName}</h3>
                <p className="skills--section--description">
                  {item.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Experience
