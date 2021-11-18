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



export default App;
