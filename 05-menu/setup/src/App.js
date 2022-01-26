import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {

  const[menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState([])

  
  const filterItems = (category)=>{
    let newItems = items.map((item)=> item.category === category)
    return setMenuItems(newItems)
  }

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
           <h1>our menus</h1>
           <div className='underline'></div>
        </div>
         <Categories filterItems={filterItems}/>
        <Menu items={menuItems}/>
        </section>
    </main>
  )
}

export default App;
