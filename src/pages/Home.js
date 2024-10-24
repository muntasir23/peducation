import React from 'react';
import { useNavigate } from 'react-router-dom';
import Overview from '../components/Overview';
import Teacher from '../components/Teacher/Teacher';

export default function Home() {
  
  const navigate = useNavigate();

  const handleAddTeacher = () =>{
    navigate('/addteacher')
  }

  return (
    <div>
      <Overview />
      <div className='teacher-heading-add'>
        <h1>All <strong>Teacher</strong> Info Is Here</h1>
        <button className='addTeacherBtn' onClick={handleAddTeacher} >Add Teacher</button>
      </div>
      <Teacher />
    </div>
  )
}
