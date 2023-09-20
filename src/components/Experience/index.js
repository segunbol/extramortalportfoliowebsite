import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { workExperience, skills } from '../../data/data'
import TimeLine from '../Timeline'

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
          <h2 className="skills--section--heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills'.split('')}
              idx={25}
            />{' '}
          </h2>
        </div>
        <div className="skills--section--container">
          {skills?.map((item, index) => (
            <div className='skills--section--container--inner'>
              <div key={index} className="skills--section--card front">
                <div className="skills--section--img">
                  <img src={item.image} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                  <h3 className="skills--section--title">{item.title}</h3>
                  <p className="skills--section--description">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* <div key={index} className="skills--section--card back">
                <div className="skills--section--img">
                  <img src={item.image} alt="Product Chain" />
                </div>
                <div className="skills--section--card--content">
                  <h3 className="skills--section--title">{item.title}</h3>
                  <p className="skills--section--description">
                    {item.description}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
        <div className="portfolio--container">
          <h2 className="skills--section--heading">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Experience'.split('')}
              idx={25}
            />{' '}
          </h2>
        </div>
        <TimeLine />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Experience
// <TimeLine />