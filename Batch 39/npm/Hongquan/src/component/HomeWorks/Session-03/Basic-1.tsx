import './Mausac.css'
const MausacItem = ({lable}:{lable:string}) => {
    return (<span className='mau_item'>{lable}</span>)
}
const Mausac = () => {
  return (
    <div>
      <span>Màu sắc</span>
      < MausacItem lable="Đen"/>
      < MausacItem lable="Hồng"/>
      < MausacItem lable="Xanh"/>
    </div>
  )
}

export default Mausac
