import React from 'react'
import './Sidebar.css'

//Imported Images ===========>
import logo from '../../Assets/logo.png'

//Imported Icons ============>
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsQuestionCircle, BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsCreditCard2Front} from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex"><center>
          <img src= {logo}  alt="logo" />
          <h2>Planti.</h2></center>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
          <u1 className="menuLists grid">

            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <IoMdSpeedometer className="icon"/>      
                <span className="smallText">
                  DashBoard
                </span> 
              </a>
            </li>
            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <MdDeliveryDining className="icon"/>      
                <span className="smallText">
                  My Orders
                </span> 
              </a>
            </li>
            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <MdOutlineExplore className="icon"/>      
                <span className="smallText">
                  Explore
                </span> 
              </a>
            </li>
            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <BsTrophy className="icon"/>      
                <span className="smallText">
                  Products
                </span> 
              </a>
            </li>
          </u1>
      </div> 

      <div className="SettingDiv">
        <h3 className="divTitle">
          SETTING
        </h3>
          <u1 className="menuLists grid">

            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <AiOutlinePieChart className="icon"/>      
                <span className="smallText">
                  Charts
                </span> 
              </a>
            </li>
            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <BiTrendingUp className="icon"/>      
                <span className="smallText">
                  Trends
                </span> 
              </a>
            </li>
            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <MdOutlinePermContactCalendar className="icon"/>      
                <span className="smallText">
                  Contact
                </span> 
              </a>
            </li>
            <li className="listItem">
              <a href='####' className='menuLink flex'>
                <BsCreditCard2Front className="icon"/>      
                <span className="smallText">
                  Billing
                </span> 
              </a>
            </li>
          </u1>
      </div>

      <div className="sideBarCard">
      <div className='cardContent'>
      <center><BsQuestionCircle className='icon'/></center>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Help Center</h3>
          <center><p>Having troble in Planti,please contact us for more questions</p></center>
          <center><button className='btn'>Go to help center </button></center>
      </div>
      </div>

    </div>
  )
}

export default Sidebar