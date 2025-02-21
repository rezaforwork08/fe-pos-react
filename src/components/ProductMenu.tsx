import React from 'react';
import ProductItem from './ProductItem';

import rice from '../assets/rice.jpg';
import shrimp from '../assets/shrimp.jpg';
import steak from '../assets/steak.jpg';
import salad from '../assets/salad.jpg';

import burger from '../assets-new/burger.jpeg';
import donut from '../assets-new/donut.jpeg';
import sandwich from '../assets-new/sandwich.jpeg';
import cinnamonroll from '../assets-new/cinnamonroll.jpeg';
import crosaint from '../assets-new/crosaint.jpeg';
import espresso from '../assets-new/espresso.jpeg';
import frappe from '../assets-new/frappe.jpeg';
import milktea from '../assets-new/milktea.jpeg';
import blackcoffee from '../assets-new/blackcoffee.jpeg';

const products = [
    {
        name: 'Burger',
        image: burger,
        price: 25000,
        category: 'Snack'
    },
    {
        name: 'Donut',
        price: 15000,
        image: donut,
        category: 'Snack'
    },
    {
        name: 'Sandwich',
        image: sandwich,
        price: 35000,
        category: 'Snack'
    },
    {
        name: 'Cinnamon Roll',
        image: cinnamonroll,
        price: 50000,
        category: 'Snack'
    },
    {
        name: 'Crosaint',
        image: crosaint,
        price: 20000,
        category: 'Snack'
    },
    {
        name: 'Espresso',
        image: espresso,
        price: 40000,
        category: 'Coffe'
    },
    {
        name: 'Frappe',
        image: frappe,
        price: 35000,
        category: 'Ice Cream'
    },
    {
        name: 'Milk Tea',
        image: milktea,
        price: 15000,
        category: 'Drink'
    },
    {
        name: 'Black Coffee',
        image: blackcoffee,
        price: 10000,
        category: 'Coffe'
    }
];


const ProductMenu = ({ searchKey, onSelect, onFilter }: any) => {

    return <div className="h-full overflow-y-auto px-2">
        <div className="grid grid-cols-4 gap-4 pb-3">
            {
                products
                    .filter(product => !searchKey || product.name.toLowerCase().indexOf(searchKey.toLowerCase()) > -1)
                    .map((product, index) => <ProductItem key={index} product={product} onSelect={onSelect} />)
            }
        </div>
    </div>;
};

export default ProductMenu; 