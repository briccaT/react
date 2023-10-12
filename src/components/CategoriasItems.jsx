/* eslint-disable react/prop-types */

const CategoriasItems = ({ isActive = false, name }) => {
    return (
    <a className={`nav-link ${isActive ? "active fw-bolder" : null}`} aria-current="page" href="#">
        {name}
    </a>
    );
};


export default CategoriasItems;