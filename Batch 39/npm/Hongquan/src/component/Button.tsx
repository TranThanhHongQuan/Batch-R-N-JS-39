import './Button.css'
type TButtonTVGH = {
    lable:string; 
    icon?:React.ReactNode;
    type?:string;
    onClick?: ()=> void;
}
const ButtonTVGH = ({lable,onClick,icon,type='button_item'} : TButtonTVGH
    ) => {
    return(
    <button onClick={(onClick)} className={`button ${type}`}>
        {icon}{lable}
    </button>
    )
}
export default ButtonTVGH;