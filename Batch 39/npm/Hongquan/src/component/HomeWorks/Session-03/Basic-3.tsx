import React from 'react'
import {FaShoppingCart,} from 'react-icons/fa'
import { IoIosCall } from "react-icons/io";
import './Basic-3.css'
type Baisic3_item = {
    name: string
    icon?: React.ReactNode
    type?:string;
}
const TBasic3 =({name,icon,type='buttonn_itemGioHang'}:Baisic3_item)=> {
    return (
        <div className=''>
            <button className={`buttonn${type}`}>{icon}{name}</button>
        </div>
    )

}
const Basic3 = () => {
  return (
    <div className='flex'>
        <div><TBasic3 type='buttonn_itemGoi' icon={<FaShoppingCart/>} name='Thêm Vào Giỏ Hàng'/></div>
        <div><TBasic3 icon={<IoIosCall />} name='Gọi tư vấn' /></div>
    </div>
  )
}

export default Basic3;
