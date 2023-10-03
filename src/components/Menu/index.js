import React from 'react'
import './index.scss'
import { services } from '../../data/data'
import {
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

// const posts = [
//   {
//     id: 1,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 2,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 3,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 4,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 10,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 20,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 30,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
//   {
//     id: 40,
//     title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
//     desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!',
//     img: 'https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
//   },
// ]

const Menu = ({data, onMenuItemClick}) => {
  return (
    <div>
      <div className="menu">
        <h2>Other Rendered Services</h2>
        {data.map((post, index) => (
          <div className='list' key={index}>
            <FontAwesomeIcon icon={faArrowRight} color="rgba(88, 156, 228, 0.907)" />
            <div onClick={() => onMenuItemClick(post.id)}> {/* Call the callback function on button click */}
              {post?.title}
            </div>
            {/* {console.log(post.id)} */}
          </div> 
        ))}
      </div>
      <div>
        <h3>
            Download CV
        </h3>
      </div>
    </div>
  )
}

export default Menu
