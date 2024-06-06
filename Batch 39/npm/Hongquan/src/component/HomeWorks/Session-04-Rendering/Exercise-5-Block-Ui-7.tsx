import React from 'react';
import { FaRegStar, FaStar } from "react-icons/fa";
type MExercise5 ={
    Dealoftheday: string;
    end: string;
    view: string;
}
type TExercise5 = {
    price: number;
    name: string;
    sold: number;
    percent: string;
    image: string;
    promoPrice?: number;
}
const MExercise5Item = ({Dealoftheday,end,view}:MExercise5) =>{
    return (
        <div className='flex'>
            <div className='text-left flex-1'>{Dealoftheday}</div>
            <div className='text-center bg-red-600 text-white flex-1'>{end}</div>
            <div className='text-right flex-1'>{view}</div>
        </div>
    )
}

const Exercise5Item = ({ price, name, sold, image, percent, promoPrice = 0 }: TExercise5) => {
    const stars = [1, 2, 3, 4, 5];
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const discount = promoPrice > 0 ? Math.round(((price - promoPrice) / price) * 100) : 0;
    return (
        <div className="flex-1 p-4">
            <div className="relative">
                {discount > 0 ? (
                    <span className="absolute top-2 right-2 z-10 bg-orange-500 text-white py-1 px-2 rounded">
                        -{discount}%
                    </span>
                ) : null}
                <div className="photo w-full h-[160px] bg-slate-200 scroll-mb-4">
                    <img src={image} alt={name} className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="text-left text-sm">YOUNG SHOP</div>
            <hr className="w-40" />
            <div className="text-left">
                <div className="flex space-x-2 items-center">
                    <div>
                        <strong className="text-lime-300">{price}</strong>
                        {promoPrice > 0 ? <del className="text-xs">{promoPrice}</del> : null}
                    </div>
                    <div className="text-red-600">{percent}</div>
                </div>
                <div className="text-sky-300">{name}</div>
                    <div className="flex">
                        {stars.map((star, index) => {
                        return (
                            <div key={index}>
                            {currentIndex >= star ? (
                                <FaStar
                                onMouseEnter={() => {
                                    console.log("re chuot len ", star);
                                    if (currentIndex == star) {
                                    setCurrentIndex(0);
                                    } else {
                                    setCurrentIndex(star);
                                    }
                                }}
                                onClick={() => {
                                    console.log(star);
                                    if (currentIndex == star) {
                                    setCurrentIndex(0);
                                    } else {
                                    setCurrentIndex(star);
                                    }
                                }}
                                />
                            ) : (
                                <FaRegStar
                                onMouseEnter={() => {
                                    console.log("re chuot len ", star);
                                    if (currentIndex == star) {
                                    setCurrentIndex(0);
                                    } else {
                                    setCurrentIndex(star);
                                    }
                                }}
                                onClick={() => {
                                    console.log(star);
                                    if (currentIndex == star) {
                                    setCurrentIndex(0);
                                    } else {
                                    setCurrentIndex(star);
                                    }
                                }}
                                />
                            )}
                            </div>
                        );
                        })}
                    </div>
                </div>
                
                <div>Sold: {sold}</div>
            </div>
    );
}

const Exercise5 = () => {
    return (
        <div>
            <div className='flex-1'>
                <MExercise5Item Dealoftheday='Deal of the day' end='End in: 6:17:17:39' view='View all'/>
            </div>
            <div className="flex flex-wrap">
                <Exercise5Item
                image="./public/1.jpg"
                price={1422.7}
                promoPrice={1025.5}
                name="LG White Load Steam Washer"
                sold={10}
                percent='18% off'
                />
                <Exercise5Item 
                image="./public/2.jpg" 
                price={96} 
                promoPrice={85} 
                name="LG White Load Steam Washer" 
                sold={15} 
                percent='18% off' 
                />
                <Exercise5Item 
                image="3.jpg" 
                price={1422.7} 
                promoPrice={1025.5} 
                name="LG White Load Steam Washer" 
                sold={20} 
                percent='18% off' 
                />
                <Exercise5Item 
                image="4.jpg" 
                price={1422.7} 
                promoPrice={1025.5} 
                name="LG White Load Steam Washer" 
                sold={22} 
                percent='18% off' 
                />
                <Exercise5Item 
                image="5.jpg" 
                price={1422.7} 
                promoPrice={1025.5} 
                name="LG White Load Steam Washer" 
                sold={10} 
                percent='18% off' 
                />
                <Exercise5Item 
                image="6.jpg" 
                price={1422.7} 
                promoPrice={1025.5} 
                name="LG White Load Steam Washer" 
                sold={79} 
                percent='18% off' 
                />
            </div>
        </div>
    );
}

export default Exercise5;
