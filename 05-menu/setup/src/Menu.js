import React from 'react';
import menu from './data';

const Menu = ({items}) => {
  return <div>
    {
      items.map((menuItem)=>{
        const {id, title, desc, img, price} = menuItem
        return <article key={id} className='menu-image'>
          <img src={img} alt={title} className='photo'></img>
         <header className='menu-info'>
           <h4>{title}</h4>
           <h4 className='price'>{price}</h4>
         </header>
         <p>{desc}</p>
        </article>
      })
    }
  </div>
};

export default Menu;
