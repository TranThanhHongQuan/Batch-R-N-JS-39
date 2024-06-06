import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { TbMoodCry } from "react-icons/tb";
import { FaGrinBeam,FaGrinTongueWink ,FaHandMiddleFinger  } from "react-icons/fa";
type TCount = {
    icon?: React.ReactNode;
}
const ButtonLike = ({icon}:TCount) => {
    const [Islike,setIslike] = React.useState(false)
    const [IsShow,setIsshow] = React.useState(false)
    console.log("Islike",Islike)
  return (
    <>
      <div
        onClick={()=> {setIsshow(!IsShow);}}
      >
      <button className={Islike === true ? 'btn_Inlike':'btn_like'}
        onClick={() => 
                setIslike(true)}>
                  {icon}
      </button>
      {IsShow && (
        <div className='flex'>
          <ul className='flex-1'><AiFillLike/></ul>
          <ul className='flex-1'><FcLike /></ul>
          <ul className='flex-1'><TbMoodCry /></ul>
          <ul className='flex-1'><FaGrinBeam /></ul>
          <ul className='flex-1'><FaGrinTongueWink /></ul>
          <ul className='flex-1'><FaHandMiddleFinger /></ul>
        </div>
      )}
      </div>
    </>
  )
}

export default ButtonLike;
