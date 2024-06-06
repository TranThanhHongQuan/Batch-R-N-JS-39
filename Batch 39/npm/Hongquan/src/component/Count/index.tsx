import React from 'react'
type TCount = {
    icon?: React.ReactNode;
    name: string;
}
const Count = ({icon,name}:TCount) => {
    const [index,setIndex] = React.useState(1)
  return (
    <>
        <button onClick={() => 
            {setIndex(index +1)}}> {icon}{name} Login</button>
        <h3>{index}</h3>
    </>
  )

}

export default Count;
