import React from 'react'

function App() {
  const [count,setCount] = React.useState(0);
  const Export = () => {
    setCount(count+1)
    console.log(count)
  }
  const Hander = (number) => {
    console.log('Bạn đã click vào Login', number);
  }
  const [list, setList] = React.useState([
    {id: 1, text: "Songuku"},
    {id: 2, text: "Lù"},
    {id: 3, text: "Yoro"},
  ]);
  const Remover = (id) =>{
    const updateList = list.filter((lists) => lists.id !== id);
    setList(updateList);
  }
  const [name,setName] = React.useState([
    {id: 1, text: "hong Quan"},
    {id: 2, text: "hong Quan"},
    {id: 3, text: "hong Quan"},
    {id: 4, text: "hong Quan"},

  ])
  const TRemover = (id) =>{
    const abc = name.filter((items) =>items.id !==id);
    setName(abc)
  }



  

  return (
     <div>{count}
        Hello
        <button onClick={()=>Hander(1)}>Login 1</button>
        <button onClick={()=>Hander(2)}>Login 2</button>
        <button onClick={()=>Export()}>Login 3</button>
        <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text} <button onClick={() => Remover(item.id)}>Xóa</button>
          </li>
        ))}
      </ul>
      <ul>
      {name.map((items) => (
          <li key={items.id}>
            {items.text} <button onClick={()=>TRemover(items.id)}>Remove</button>
            
          </li>
        ))
      }
      </ul>
     
     </div> 
  )

};

export default App;
