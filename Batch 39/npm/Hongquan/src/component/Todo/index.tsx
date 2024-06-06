type TTodo = {
    text: string;
};

const TodoItem = ({text}:TTodo) => {
  return <li>{text}</li>

};
const Todo = () => {
    return (
        <ul>
            <TodoItem text='Giặt quần áo'/>
            <TodoItem text='Nấu cơm'/>
            <TodoItem text='Cho con ăn'/>
            <TodoItem text='Lau nhà'/>
        </ul>
    )
}

export default Todo;
