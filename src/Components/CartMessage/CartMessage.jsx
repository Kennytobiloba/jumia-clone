import React from 'react'
import { assets } from '../../assets/assets'

const CartMessage = () => {
  return (
    <div className='cart-message'>
     <div className='cart-message-icon'>
        <img src={assets.correct} alt="" className='img' />
     </div>
     <h6 className='text-white fs-[14px] font-bold'>An item has been added to your shopping cart</h6>
    </div>
  )
}

export default CartMessage