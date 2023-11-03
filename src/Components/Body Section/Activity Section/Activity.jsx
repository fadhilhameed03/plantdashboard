import React from 'react'
import './Activity.css'

//Imported Images ===========>
import user1 from '../../../Assets/user1.jpg'
import user2 from '../../../Assets/user2.jpg'
import user5 from '../../../Assets/user5.jpg'
import user6 from '../../../Assets/user6.jpg'
import user7 from '../../../Assets/user7.jpg'
import user8 from '../../../Assets/user8.jpg'
import user9 from '../../../Assets/user9.jpg'

//Imported Icons ============>
import {BsArrowRightShort} from 'react-icons/bs'


const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See All
          <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user5} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Alexa
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
          <div className="duration">
            2 min ago 
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user6} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Ami
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
          <div className="duration">
            4 min ago 
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user7} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Ella
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
          <div className="duration">
            7 min ago 
          </div>
        </div>
      </div>
      
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user8} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Alice
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
          <div className="duration">
            9 min ago 
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user9} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Grace
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
          <div className="duration">
            18 min ago 
          </div>
        </div>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt='customer image'/>
          <div className="customerDetails">
            <span className="name">
              Ava
            </span>
            <small>
              Ordered a new plant
            </small>
          </div>
          <div className="duration">
            24 min ago 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity