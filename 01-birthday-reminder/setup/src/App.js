import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return <main>
    <section>
      <div className='container'>
         <List people={people}/>
           <button onClick={()=> setPeople([])} className='btn'>clear all</button>
      </div>
    
    </section>
  </main>;
}


const data = items.map((item)=>{
   const {name, email, password} = item
   return (<h1>{name}</h1>,  {...item})
})


export default App;
