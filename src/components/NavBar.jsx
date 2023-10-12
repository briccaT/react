import CartContainer from "./CartContainer"
import CategoriasItems from "./CategoriasItems"
import BotonMenu from "./botonMenu"
import Brand from "./brand"


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <Brand />
        <BotonMenu />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <CategoriasItems isActive={true} name="OFERTAS"/>
            </li>
            <li className="nav-item">
            <CategoriasItems isActive={false} name="SAHUMERIOS"/>
            </li>
            <li className="nav-item">
            <CategoriasItems isActive={false} name="MATES"/>
            </li>
            <li className="nav-item">
            <CategoriasItems isActive={false} name="REGALOS"/> 
            </li>
            </ul>
        </div>
        <CartContainer />
        </div>
    </nav>
    )
}

export default NavBar