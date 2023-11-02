import React from 'react'
import './Listing.css'

//Imported Images ===========>
import plant2 from '../../../Assets/image2.jpg'

//Imported Icons ============>
import {BsArrowRightShort} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

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
      </div>




    </div>
  )
}

export default Listing