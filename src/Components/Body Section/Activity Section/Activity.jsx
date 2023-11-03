import React from 'react'
import './Activity.css'

//Imported Images ===========>
import user1 from '../../../Assets/user1.jpg'

//Imported Icons ============>
import {BsArrowRightShort} from 'react-icons/bs'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Alexa
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity