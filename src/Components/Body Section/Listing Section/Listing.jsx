import React from 'react'
import './Listing.css'

//Imported Images ===========>
import plant2 from '../../../Assets/image3.png'
import plant3 from '../../../Assets/image6.png'
import plant4 from '../../../Assets/image7.png'
import plant5 from '../../../Assets/image8.png'
import user1 from '../../../Assets/user1.jpg'
import user2 from '../../../Assets/user2.jpg'
import user3 from  '../../../Assets/user3.jpg'
import user4 from '../../../Assets/user4.jpg'

//Imported Icons ============>
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
          See All<BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContainer flex'>
      <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src={plant2} alt='plant2'/>
          <h3>Annual Vince</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={plant3} alt='plant2'/>
          <h3>Palm Tree</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={plant4} alt='plant2'/>
          <h3>Button Fern</h3>
        </div>
        <div className='singleItem'>
          <AiOutlineHeart className='icon'/>
          <img src={plant5} alt='plant2'/>
          <h3>Spider Plant</h3>
        </div>
      </div>

    <div className="sellers flex">
      <div className="topSellers">
        <div className="heading flex">
          <h3>Top Sellers</h3>
            <button className='btn flex'>
              See All<BsArrowRightShort className='icon'/>
            </button>
        </div>
        <div className="card flex">
          <div className="users">
            <img src={user1} alt='user1'/>
            <img src={user2} alt='user2'/>
            <img src={user3} alt='user3'/>
            <img src={user4} alt='user4'/>
          </div>
          <div className="cardText">
            <span>
              14.556 Plant Sold<br/>
              <small>
                21 Sellers<br/><span className='data'>7 Days</span>
              </small>
            </span>
          </div>
        </div>
      </div>
      <div className="featuredSellers">
        <div className="heading flex">
          <h3>Featured Sellers</h3>
            <button className='btn flex'>
              See All<BsArrowRightShort className='icon'/>
            </button>
        </div>
        <div className="card flex">
          <div className="users">
            <img src={user2} alt='user2'/>
            <img src={user1} alt='user1'/>
            <img src={user4} alt='user4'/>
            <img src={user3} alt='user3'/>
          </div>
          <div className="cardText">
            <span>
              28,556 Plant Sold<br/>
              <small>
                26 Sellers<br/><span className='data'>31 Days</span>
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Listing