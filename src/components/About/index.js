import { useEffect, useState } from 'react'
import {
  faPython,
  faNode,
  faGitAlt,
  faDocker,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Segun is a product-focused software engineer building server-side
            applications and documenting solutions in server-side development.
            He has been lucky to build scalable software products that are
            thriving, that cut across Finance, Education, and Marketing and He
            is always looking to explore more areas and fields.
          </p>
          <p align="LEFT">
            He has built in Python with web frameworks such as Django and Flask,
            and also in Javascript with Nodejs, Express and NextJs. He is currently
            work with NextJs and Django. He has also picked up a skills along
            the way such as continuous integration, continuous deployment,
            systems design and architecture, containers and orchestration.
          </p>
          <p>
            Currently, He is working with a team to build a Performance
            Management System, Ecommerce App (Mobile and WebApp), exploring new
            product ideas, tinkering with architectures and He is documenting
            what he is learning via technical articles. If I need to define
            myself in one sentence that would be a family person,a fitness enthusiast,
            a food lover, and tech-obsessed.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4584b6" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faDocker} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faNode} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
