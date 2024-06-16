
import './App.css'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ButtonTGH from './component/ButtonTGH.tsx'
import ButtonAddToCart from './component/ButtonAddToCart.tsx'
import TenVaTuoi from './component/TenVaTuoi.tsx'
import {FaShoppingCart,FaHeart,FaCheckSquare,FaCartPlus} from 'react-icons/fa'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoIosReturnLeft } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import ButtonTVGH from './component/Button.tsx'
import Mausac from './component/HomeWorks/Session-03/Basic-1.tsx'
import Todo from "./component/Todo"
import Basic2 from './component/HomeWorks/Session-03/Basic2.tsx'
import Exercise from './component/HomeWorks/Session-04-Rendering/Exercise-6.tsx'
import KeyboardEventsExample from './component/KeyboardEventsExample.tsx'
import Exercise5 from './component/HomeWorks/Session-04-Rendering/Exercise-5-Block-Ui-7.tsx'
import ButtonLike from './component/ButtonLike/index.tsx'
import TBasic3 from './component/HomeWorks/Session-03/Basic-3.tsx'
import ColorPicker from './component/HomeWorks/Session-05/Exercise1.tsx'
import Exercise3 from './component/HomeWorks/Session-05/Exercise3.tsx'
import Categories from './component/Categories/index.tsx'
import Product from './component/Product/index.tsx'
const queryClient = new QueryClient()
function App() {
  /* Đặt tên bắt đầu bằng prefix handle  */
  const handleClickButtonLongin= ()=> {
    console.log('bạn đã click chuột lên loin');
  };
  const handleClickButtonChonKenh= (kenh:string)=> {
    console.log('bạn đã click chọn kênh',kenh);
  };
  const handleClickButtonChonKenhV2= (kenh:string)=> {
    console.log(kenh);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
        <p>task2: 
        <ButtonTGH/>
        <ButtonAddToCart/>
        </p>
        <p>Task3</p>
          <img src="./public/ghegd.jpg" alt="" />
          <p>
            Task 4
          </p>
          <TenVaTuoi/>
          <p>Task 5
          <img src="./public/task4.png" alt="" /></p>
          <p>Task 6</p>
          <h1>Props</h1>
          <div>
          <ButtonTVGH onClick={() => handleClickButtonChonKenhV2('đã nhấn nút thêm vào giõ hàng')} type='button_item' icon={<FaShoppingCart/>} lable="Thêm vào giỏ hàng"/>
          <ButtonTVGH onClick={() => handleClickButtonChonKenhV2('đã nhấn nút yêu thích')} type='button_no' icon={<FaHeart/>} lable="Yêu thích"/>
          <ButtonTVGH type='button_xu' lable="Đăng ký"/>
          </div>
          <Mausac/>
          <Todo/>
          <Basic2 icon={<FaCheckSquare/>} s1='Bộ sản phẩm gồm:' s2='Hộp,sách,cáp,cây lấy sim'/>
          <Basic2 icon={<IoShieldCheckmarkOutline/>} s1='Bảo hành:' s2='Chính hảng 12 tháng'/>
          <Basic2 icon={<IoIosReturnLeft />} s1='Đổi trả:' s2='Hư gì đổi nấy 12 tháng' />
          <div className='flex'>
          <h1 className='text-left'><b>Tin tức</b></h1>
          <h1 className='text-center'><b>Xem thêm</b></h1>
          </div>
          <Exercise/>
        <button  onClick={handleClickButtonLongin
          }>Login</button>
        <KeyboardEventsExample/>
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        //Ngăn chặn form fresh lại trang
        e.preventDefault();
        //test alert
        alert('Submitting!');
      }}>
        <input name="username" />
        <button type="submit">Send</button>
      </form>

      <button  onClick={()=>handleClickButtonChonKenh('VTV1')}>Chọn kênh VTV1</button>
      <button  onClick={()=>handleClickButtonChonKenh('VTV2')}>Chọn kênh VTV2</button>

        <Exercise5/>
        <ButtonLike icon={<AiFillLike />}/>
        <TBasic3/>

        <ColorPicker/>
        <Exercise3 label="Thêm giỏ hàng" icon={<FaCartPlus />} />
        <Exercise3 label="Yêu thích" icon={<FaHeart />} />
        <Categories/>
        <Product/>
      </>
    </QueryClientProvider>
  );
}

export default App
