/* eslint-disable react/prop-types */
import Item from './Item';

const ItemList = ({ items }) => {
return (
    <div>
    <h1></h1>
    {items.map(item => (
        <Item
        key={item.id}
        title={item.titulo}
        description={item.descripcion}
        price={item.precio}
        pictureUrl={item.pictureUrl}  
        />
    ))}
    </div>
);
};

export default ItemList;







