// Exercise3.js
import React, { useState } from 'react';
import './Exercise3.css';
import Modal from './Ex3.tsx';

type TExercise3 = {
    label: string;
    icon?: React.ReactNode;
    type?: string;
    onClick?: () => void;
}

const Exercise3 = ({ label, onClick, icon, type = 'button_item' }: TExercise3) => {
    const [showModal, setShowModal] = useState(false);
    const [favorite, setFavorite] = useState(false);

    const handleAddToCart = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleFavorite = () => {
        console.log('Đã thêm vào sản phẩm yêu thích');
        setFavorite(true);
    };

    return (
        <div>
            <button onClick={onClick ? onClick : label === 'Thêm giỏ hàng' ? handleAddToCart : handleFavorite} 
                    className={`button ${type}`}
                    style={favorite && label === 'Yêu thích' ? { color: 'pink' } : {}}>
                {icon}{label}
            </button>
            {showModal && label === 'Thêm giỏ hàng' && (
                <Modal message="Đã thêm vào giỏ hàng thành công!" onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default Exercise3;
