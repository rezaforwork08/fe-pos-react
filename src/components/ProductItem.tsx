import React from 'react';
import beep from '../assets/beep-29.mp3';

const ProductItem = ({ product, onSelect }: any) => {
    return <div role="button"
        onClick={() => {
            onSelect(product);
            const sound = new Audio();
            sound.src = beep;
            sound.play();
        }} className="select-none cursor-pointer transition-shadow overflow-hidden rounded-2xl bg-white shadow hover:shadow-lg">
        <img src={product.image} alt={product.name} className='rounded' />
        <div className="flex pb-3 px-3 text-sm mt-3 flex-col">
            <p className="flex-grow truncate mr-1 font-semibold">{product.name}</p>
            <div className="flex justify-between mt-3">
                <span className='bg-red-100 text-red-500 rounded px-3 text-xs py-1'>Category</span>
                <p className="nowrap font-semibold">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
            </div>
        </div>
    </div>;
};

export default ProductItem; 