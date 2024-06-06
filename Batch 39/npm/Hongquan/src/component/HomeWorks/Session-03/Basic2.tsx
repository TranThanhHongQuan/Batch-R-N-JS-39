import "./Basic2.css"
type TBasic2 = {
    icon?:React.ReactNode;
    s1: string;
    s2: string;
    type?:string;
}
const Basic2 = ({icon,s1,s2, type}: TBasic2) => {
  return (
    <div className='flex'>
        <div>{icon}</div>
        <div><b>{s1}</b></div>
        <div>{s2}</div>
    </div>
  )
}

export default Basic2;
