import React from 'react'
import HeaderStudent from '../components/StundentCompo/HeaderStudent'
import MainStudent from '../components/StundentCompo/MainStudent'

export default function Student() {
  return (
    <div className='student'>
      <HeaderStudent />
      <div className='student-main'>
      <MainStudent />
      </div>
    </div>
  )
}
