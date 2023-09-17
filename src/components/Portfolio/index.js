import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

// import { getDocs, collection } from 'firebase/firestore'
// import { db } from '../../firebase'

const portfolio = [
  {
    id: 100,
    image:
      'https://res.cloudinary.com/djt6ixhup/image/upload/v1694305675/mobile-app_yg6864.png',
    name: 'Ecommerce Web App',
    description:
      'This App pulls its uniquness from the ability to connect to the inventory of the supermarket',
    url: 'https://github.com/segunbol',
  },
  {
    id: 200,
    image:
      'https://res.cloudinary.com/djt6ixhup/image/upload/v1673398546/samples/food/fish-vegetables.jpg',
    name: 'Ecommerce Mobile App',
    description:
      'This App pulls its uniquness from the ability to connect to the inventory of the supermarket',
    url: 'https://github.com/segunbol',
  },
  {
    id: 300,
    image:
      'https://res.cloudinary.com/djt6ixhup/image/upload/v1673398546/samples/animals/reindeer.jpg',
    name: 'Study Buddy Web App',
    description:
      'This app was created to connect student across the globe for the purpose of research, learning and ideation',
    url: 'https://github.com/segunbol',
  },
  {
    id: 400,
    image:
      'https://res.cloudinary.com/djt6ixhup/image/upload/v1673398544/samples/ecommerce/analog-classic.jpg',
    name: 'Chat App',
    description:
      'This is an in-app chat, that enables customers to easily communicate with vendors',
    url: 'https://github.com/segunbol',
  },
]
const Portfolio = () => {
  const [flip, setFlip] = useState(false);
  const [letterClass, setLetterClass] = useState('text-animate')
  //   const [portfolio, setPortfolio] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  //   useEffect(() => {
  //     getPortfolio()
  //   }, [])

  //   const getPortfolio = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'portfolio'))
  //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  //   }

  const renderPortfolio = (portfolio) => {
    return (
      
        <div className="images-container">
          {portfolio.map((port, idx) => {
            return (
               
                <div className="image-box" key={port.id}>
                  <img
                    src={port.image}
                    className="portfolio-image"
                    alt="portfolio"
                  />
                  <div className="content">
                    <p className="title">{port.name}</p>
                    <h4 className="description">{port.description}</h4>
                    <button className="btn" onClick={() => setFlip(!flip)}>
                      View
                    </button>
                  </div>
                </div>
                 
            )
          })}
        </div>
      
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'My Work'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
// onClick={() => window.open(port.url)}