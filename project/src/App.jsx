import React from 'react'
// import { Route, Router } from 'react-router-dom'
import { fetchPhotos, fetchVideo } from './api/mediaapi'

const App = () => {

  return (
    <div className='bg-black h-screen w-full'>
      <button className='bg-green-300 px-4 py3 m-5' onClick={async () => {
        const data = await fetchPhotos('cat')

        console.log(data.results);
        
      }} >Get Photos</button>
      <button className='bg-green-300 px-4 py3 m-5' onClick={async () => {
        const data = await fetchVideo('cat')

        console.log(data.videos);
        
      }} >Get Video</button>
     
    </div>
  )
}

export default App