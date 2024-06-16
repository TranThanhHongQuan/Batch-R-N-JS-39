import React from 'react'
import {useCount} from '../store/useCount';
const CountHangxom = () => {
    const {setCount} = useCount();
  return (
    <div>
      <button onClick={()=>console.log('Mua ngay')}>
        Mua ngay
      </button>
    </div>
  )
}

export default CountHangxom
