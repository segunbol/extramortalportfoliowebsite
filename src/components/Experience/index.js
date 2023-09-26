import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { workExperience, skills } from '../../data/data'
import { motion } from 'framer-motion'
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
    <div className="container">
      <section className="one">
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
        </div>
      </section>
      <section className="two">
        <div className="container skills-page">
          <div className="portfolio--container">
            <h2 className="skills--section--heading">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Skills'.split('')}
                idx={25}
              />{' '}
            </h2>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="skills--section--container">
              {skills?.map((item, index) => (
                <div className="skills--section--container--inner" key={index}>
                  <div key={index} className="skills--section--card front">
                    <div className="skills--section--img">
                      <img src={item.image} alt="Product Chain" />
                    </div>
                    <div className="skills--section--card--content">
                      <h3 className="skills--section--title">{item.title}</h3>
                      <p className="skills--section--description">
                        {item.description}
                      </p>
                      <button className='btn'>
                        click here
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <section className="three">
        <div className="container skills-page">
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
      </section>
      <Loader type="pacman" />
    </div>
  )
}

export default Experience
// <TimeLine />
