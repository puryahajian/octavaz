import React from 'react'
import Title from '../atoms/title'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function BoxShoppingCart() {
    return (
        <div className='border border-white mt-8 max-w-[1140px] m-auto'>
            <Title className={`gap-2 flex items-center text-greenCostom`}>
                <ShoppingCartIcon/>
                سبد خرید
            </Title>
            
        </div>
    )
}

export default BoxShoppingCart
