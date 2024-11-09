import React from 'react'
import Header from '../components/template/Header'
import OrganismBoxShoppingCart from '../components/organisms/organism-box-shopping-cart'

function Cart() {
  return (
    <div>
      <Header/>
      <div className='mt-8'>
        <OrganismBoxShoppingCart/>
      </div>
    </div>
  )
}

export default Cart
