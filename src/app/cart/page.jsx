import React from 'react'
import Header from '../components/template/Header'
import BoxShoppingCart from '../components/molecules/box-shopping-cart'

function Cart() {
  return (
    <div>
      <Header/>
      <div className='mt-8'>
        <BoxShoppingCart/>
      </div>
    </div>
  )
}

export default Cart
