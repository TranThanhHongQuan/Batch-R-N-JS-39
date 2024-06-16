import React from 'react'

const UseEffect = ({name}:{name:string}) => {
    const message = `Hello, ${name}!`; // Calculates output
    
    const [title,setTitle] = React.useState('')
    React.useEffect(()=>{
        document.title = `${title}`; // Side-effect!
    },[]);
    return (
    <div>
        {message}
        <div>
            <input type="text" onChange={(e)=>{
                setTitle(e.target.value);
            }
            } />
        </div>
    </div>
);
}

export default UseEffect
