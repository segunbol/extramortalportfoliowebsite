import './App.css'
import './index.scss'
import { ReactComponent as WorkIcon } from './work.svg'
import { ReactComponent as SchoolIcon } from './school.svg'
// import { workExperience } from '../../data/data'
import timelineElements from './timelineElements'

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css'

const TimeLine = () => {
  let workIconStyles = { background: '#06D6A0' }
  let schoolIconStyles = { background: '#f9c74f' }

  return (
    <div>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === 'work'
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== ''

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date .skills--section--title"
              contentArrowStyle={{
                borderRight: '7px solid  rgb(33, 150, 243)',
              }}
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              className="vertical-timeline-element--work"
              contentStyle={{
                background: 'rgb(33, 150, 243)',
                color: 'rgba(88, 156, 228, 0.907)',
                backgroundImage:
                  'linear-gradient(to right, rgb(29, 29, 56), #022c43, #3b3b6d, #444d79, #314fa0)',
                borderRadius: '19.6px',
                minHeight: '150px',
                // maxHeight:'200px',
              }}
            >
              <div>
                <h3 className="vertical-timeline-element-title">
                  {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {element.location}
                </h5>
                <p id="description">{element.description}</p>
                {showButton && (
                  <a
                    className={`button ${
                      isWorkIcon ? 'workButton' : 'schoolButton'
                    }`}
                    href="/"
                  >
                    {element.buttonText}
                  </a>
                )}
              </div>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
    </div>
  )
}

export default TimeLine
