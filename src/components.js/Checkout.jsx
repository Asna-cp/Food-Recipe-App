import React, { useContext } from 'react'
import { StateContext } from '../context/AppProvider'

const Checkout = () => {
  const cartPackage = useContext(StateContext);
  let cartitemsAre = cartPackage.cartItem.map((item)=> {
    return (
      <div>
    <img src={item.img}/>
            <h6>{item.title}</h6>
      </div>
    )
  })
  return (
    <div className="checkout">
  
      <h1>This is a Checkout page</h1>
     {cartitemsAre}
    
</div>
  )
}

export default Checkout
