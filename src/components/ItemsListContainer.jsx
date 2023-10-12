// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import productos from './Productos';

const ItemsListContainer = () => {
const [items, setItems] = useState([]);

useEffect(() => {
    const fetchItems = () => {
    setTimeout(() => {
        const itemsData = productos.map((producto, index) => ({ id: index + 1, ...producto }));
        setItems(itemsData);
    }, 2000);
    };

    fetchItems();
}, []);

return (
    <div className='container text-center'>
    <h1>Lista de productos</h1>
    <ItemList items={items} />
    </div>
);
};

export default ItemsListContainer;

