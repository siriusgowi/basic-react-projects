import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [tours, setTours] = useState([])


const removeTour = (id)=>{
 const newTour = tours.filter((tour)=> tour.id !== id)
 setTours(newTour)
}


const fetchingTours = async()=>{
  setIsLoading(true)
  try{
 const response = await fetch(url)
  const tours = await response.json()
  console.log(tours)
   setIsLoading(false)
  setTours(tours)
  }catch(e){
    setIsLoading(false)
    console.log(e)
  }
 
 
}

useEffect(()=>{
fetchingTours()
},[])

  if(isLoading){
    return <div>
      <Loading/>
    </div>
  }

  if(tours.length === 0){
    return <main className='title'>
      <div>
        <h1>no tours left</h1>
      </div>
      <button className='btn'onClick={()=> fetchingTours()}>refresh</button>
    </main>
  }

  return <>
 <Tours tours={tours} removeTour={removeTour}/>
  </>
}

export default App
