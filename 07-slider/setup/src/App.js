import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaAngleLeft, FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
const[people, setPeople] = useState(data)
const[index, setIndex] = useState(0)

return (
<section className='section'>
<div className='title'>
<h1>
  <span>/</span> reviews
</h1>
</div>
<div className='section-center'>
  {
    people.map((person, personIndex)=>{
 const{id, name, title, quote, image} = person
 return (<article key={id}>
<img src={image} alt={name} className='person-img'></img>
<h4>{name}</h4>
<p className='title'>{title}</p>
<p className='text'>{quote}</p>
<FaQuoteRight className='icon'/>
 </article>)
})
  }
<button className='prev'><FaChevronLeft /></button>
<button className='next'><FaChevronRight /></button>
</div>
</section>

);
}

export default App;
