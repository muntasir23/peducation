import React from 'react'
import RoundIcon from './icons/RoundIcon'
import { MdNotificationAdd } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiGalleryFill } from "react-icons/ri";

export default function Overview() {
  return (
    <div className='overview'>
      <div className='overview-container'>
        <h1>
            Total Notices <br></br>10+
        </h1>
        <RoundIcon>
            <MdNotificationAdd />
        </RoundIcon>
      </div>
      <div className='overview-container'>
        <h1>
            Total Event Posts <br></br>10+
        </h1>
        <RoundIcon>
            <RiGalleryFill />
        </RoundIcon>
      </div>
      <div className='overview-container'>
        <h1>
            Total Students <br></br>10+
        </h1>
        <RoundIcon>
            <PiStudentFill />
        </RoundIcon>
      </div>
    </div>
  )
}
