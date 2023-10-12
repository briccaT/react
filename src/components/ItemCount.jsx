
import { useEffect, useState } from "react";
import productos from "./Productos";


const response = new Promise((resolve) => {
setTimeout(() => {
    resolve(productos);
}, 3000);
});

function ItemCount() {
const [productos, setProducts] = useState([]);

const decrementar = (id) => {
    const newProductos = productos.map((product) => {
    if (product.id === id) {
    
        return {
        ...product,
        count: product.count - 1,
        };
    }
    return product;
    });
    setProducts(newProductos); 
};

const incrementar = (id) => {
    const newProductos = productos.map((product) => {
    if (product.id === id) {
        
        return {
        ...product,
        count: product.count + 1,
        };
    }
    return product;
    });
    setProducts(newProductos); 
};

useEffect(() => {
    response.then((productos) => {
    
    setProducts(mapProducts(productos));
    });
}, []);

const mapProducts = (productos) =>
    productos.map((product) => ({
    ...product,
    count: 0,
    }));

if (productos.length === 0) return <p>Cargando...</p>;

return (
    <>
    <div
        style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "20px",
        }}
    >
        {productos.map((product) => (
        <div
            style={{
            backgroundColor:
                product.count >= product.stock ? "tomato" : "black",
            borderRadius: "10px",
            padding: "20px",
            }}
            key={product.id}
        >
            <h4>{product.name}</h4>
            {product.count >= product.stock && <p>Los llevas a todos!</p>}
            <div>
            <button
                disabled={product.count === 0}
                onClick={() => decrementar(product.id)}
            >
                -
            </button>
            <button
                disabled={product.count >= product.stock}
                onClick={() => incrementar(product.id)}
            >
                +
            </button>
            </div>
            <p>Cantidad a llevar: {product.count}</p>
        </div>
        ))}
    </div>
    </>
);
}

export default ItemCount;
