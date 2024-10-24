
import React from 'react'
import useNoticePaginated from '../../hooks/useNoticePaginated'
import NoticeCard from './NoticeCard'
import './Notice.css'
import useNotice from '../../hooks/useNotice';

export default function MainNotice() {
  
  const { notice } = useNotice();
 const {articles , loading, handleLoadMore } = useNoticePaginated()

  return (
    <>

    <div className='notice-container'>
      {
        articles.map((value, index)=>(
          <div key={index} >
            <NoticeCard value={value} />
          </div>
        ))
      }
    </div>

    <div className="load-more-btn">
        {articles.length === notice.length ? (
          articles.length < 5 ? (
            ""
          ) : (
            <button onClick={handleLoadMore}>
              {loading ? <h1>Loading</h1> : "No More Blogs"}
            </button>
          )
        ) : (
          <button onClick={handleLoadMore}>
            {loading ? <h1>Loading</h1> : "Watch More Blogs"}
          </button>
        )}
      </div>
    </>
  )
}
