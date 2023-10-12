// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Item from './Item';

const ItemDetailContainer = () => {
const [item, setItem] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fetchItem = async () => {
    try {
        const mockAsyncFetch = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
            id: 1,
            titulo: "Sahumerio Armonía Celestial",
            stock: 1,
            descripcion: "Sumérgete en una experiencia celestial con nuestros sahumerios Armonía Celestial. Cada varilla está impregnada con una mezcla exquisita de inciensos naturales que despiertan tus sentidos y crean una atmósfera de serenidad. Disfruta de fragancias dulces y florales que elevan tu espacio, proporcionando equilibrio y paz interior.",
            pictureUrl: "../img/SahumeriosFluo.png",
            precio: 1900
            });
        }, 2000);
        });

        const result = await mockAsyncFetch;
        setItem(result);
        setLoading(false);
    } catch (error) {
        setError(error);
        setLoading(false);
    }
    };

    fetchItem();
}, []);

return (
    <div className='container'>
    {loading && <p>Cargando...</p>}
    {error && <p>Error: {error.message}</p>}
    {item && (
        <div>
        <h2>Detalles del Item</h2>
        <Item
            key={item.id}
            title={item.titulo}
            description={item.descripcion}
            price={item.precio}
            pictureUrl={item.pictureUrl}
        />
        <p>ID: {item.id}</p>
        <p>Stock: {item.stock}</p>
        </div>
    )}
    </div>
);
};

export default ItemDetailContainer;
