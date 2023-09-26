import React, { useEffect, useState } from 'react'
import Menu from '../Menu'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { services } from '../../data/data'
const post = []
// const moment = () => {}

const FurtherReading = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })
  return (
    <>
      <div className="container contact-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Backend Services'.split('')}
            idx={15}
          />
        </h1>
        <div className="single">
          <div className="content">
            <img
              src={
                'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              }
              alt="PostImage"
            />
            <h2><AnimatedLetters
            letterClass={letterClass}
            strArray={'Backend Development'.split('')}
            idx={25}
          /></h2>
            <p
            //   dangerouslySetInnerHTML={{
            //     __html: DOMPurify.sanitize(post.desc),
            //   }}
            >
              To convert a row into a column in Excel, you can use the
              "Transpose" feature. Here's how you can do it: Select the row that
              you want to transpose into a column. Click and drag your mouse
              cursor over the cells in the row to select them. Once the row is
              selected, right-click on the selected cells. In the context menu
              that appears, look for the "Copy" option and click on it. This
              will copy the selected row to your clipboard. Now, select the cell
              in the worksheet where you want to paste the transposed column.
              This cell should be the top-left cell of your desired column.
              Right-click on the selected cell. In the context menu, you should
              see a special paste option called "Transpose" or "Transpose
              Values." Click on this option. Excel will paste the copied row as
              a column, starting from the selected cell and extending downward.
              That's it! You've now converted a row into a column in Excel using
              the "Transpose" feature Database Design and Optimization In the
              ever-evolving world of software engineering, database design and
              optimization play a crucial role in building robust, efficient,
              and scalable systems. As a software engineer specializing in
              database management, I bring a wealth of knowledge and experience
              in creating high-performance databases that serve as the backbone
              of modern applications. In this essay, I will delve into the
              importance of database design, explore optimization techniques,
              and highlight the impact they have on overall system performance.
              Database Design: The Foundation of Success: At the core of any
              successful application lies a well-designed database. Effective
              database design involves carefully considering the structure,
              relationships, and integrity of the data model. By employing
              techniques such as entity-relationship modeling and normalization,
              I ensure that the database schema is optimized for efficient data
              storage, retrieval, and manipulation. Through thoughtful analysis
              of the application's requirements, I design tables, define
              relationships, and establish constraints to maintain data
              integrity and minimize redundancy. Performance Optimization:
              Unleashing the Power of Data: Optimizing database performance is a
              continuous process that involves various strategies and
              techniques. One key aspect is index optimization. By strategically
              creating indexes on frequently accessed columns, I significantly
              improve query performance, enabling rapid data retrieval even in
              large datasets. Moreover, I employ query optimization techniques,
              such as query rewriting and execution plan analysis, to fine-tune
              the efficiency of SQL queries, reducing response times and
              minimizing resource consumption. Another area of focus is database
              normalization and denormalization. While normalization ensures
              data consistency and reduces redundancy, denormalization
              techniques, such as materialized views or caching, can enhance
              performance for specific read-intensive scenarios. I carefully
              evaluate trade-offs between normalization and denormalization to
              strike the right balance based on the application's requirements.
              Additionally, I leverage advanced indexing techniques, such as
              B-trees, hash indexes, or bitmap indexes, based on the specific
              workload and query patterns. These techniques optimize data
              access, enabling rapid searching, sorting, and filtering
              operations. Scaling for Success: Ensuring Scalability and
              Availability: As applications grow and user demands increase,
              scalability and availability become critical factors. I employ
              various strategies to ensure the database can handle high loads
              and accommodate future growth. Horizontal partitioning, also known
              as sharding, allows distributing data across multiple servers,
              enabling parallel processing and improving scalability. Vertical
              partitioning, on the other hand, focuses on splitting a table into
              separate entities to improve performance for specific operations.
              Additionally, I implement replication and clustering techniques to
              enhance database availability and fault tolerance. By setting up
              master-slave or multi-master replication, I ensure data redundancy
              and provide failover mechanisms to mitigate the impact of hardware
              failures or network outages. Powering Efficient and Scalable
              Systems: In conclusion, effective database design and optimization
              are essential elements in building efficient and scalable software
              systems. By employing sound database design principles,
              performance optimization techniques, and scalability strategies, I
              create databases that can handle increasing data volumes, complex
              queries, and high user loads. My expertise in database management
              enables me to develop systems that deliver fast and reliable
              access to data, empowering applications to meet the demands of
              modern-day businesses. As a software engineer specializing in
              database design and optimization, I am committed to implementing
              best practices, staying updated with the latest technologies, and
              continuously improving performance. Through meticulous attention
              to detail and a deep understanding of database management, I am
              dedicated to building reliable and high-performing systems that
              drive success for businesses and end-users alike.
            </p>{' '}
          </div>
          <Menu cat={post.cat} />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default FurtherReading
