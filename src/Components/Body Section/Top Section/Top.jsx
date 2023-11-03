import React from 'react'
import './Top.css'

//Imported Icons ===========>
import {BiSearchAlt} from 'react-icons/bi'
import{TbMessageCircle} from 'react-icons/tb'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsArrowRightShort } from 'react-icons/bs'


//Imported Image ==========>
import pics from '../../../Assets/user.jpg'
import plant1 from '../../../Assets/image7.png'
import video from '../../../Assets/video.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className='title'>
          <h1>Welcome to Planti.</h1>
          <p>Hello Fadhil,Welcome back!</p>
        </div>

        <div className="searchBar flex">    
          <input type='text' placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>

      <div className='adminDiv flex'>
        <TbMessageCircle className='icon'/>
        <IoMdNotificationsOutline className='icon'/>
        <div className='adminImage'>
          <img src={pics} alt="Admin " />
        </div>
      </div>

      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and Sell Extraordinary Products </h1>
          <p>The World's Fast Growing Industry Today Are Natural Made Products</p>

        <div className='button flex'>
              <button className='btn'>Explore More</button>
              <button className='btn transparent'>Top Seller</button>
        </div>

        <div className="videoDiv">
          <video src= {video} autoPlay loop muted></video>
        </div>
        </div>

        <div className="leftCard flex">
          <div className='main flex'>

            <div className='textDiv'>
              <h1>My stat</h1>

              <div className="flex">
                <span>
                  Today <br/> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br/> <small>127 Orders</small>
                </span>
              </div> 

              <span className='flex link'>
                Go to my orders <BsArrowRightShort className='icon '/>
              </span>

            </div>

            <div className="imgDiv">
              <img src={plant1} alt='plant1' />
            </div>

            {/*s<div className='cardContent'>
              <center><BsQuestionCircle className='icon'/></center>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Help Center</h3>
          <center><p>Having troble in Planti,please contact us for more questions</p></center>
          <center><button className='btn'>Go to help center </button></center>
            </div>*/}

          </div>
        </div>
      </div>
    </div>
  )
}

export default Top