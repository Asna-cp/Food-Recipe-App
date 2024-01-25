import React from 'react';
const CardDish = (props) => {
  

   
  return (
    <li
        onClick={()=>props.showPopUp(props.menuItem.strMeal)}>
        <img src={props.menuItem.strMealThumb} className="br-10" alt={props.menuItem.strMeal} />
    <h4>{props.menuItem.strMeal}</h4>
  
  </li>
  )
}

export default CardDish
