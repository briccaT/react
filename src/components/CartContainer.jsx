import CartIcon from "./CartIcon"
import CartItems from "./CartItems"


const CartContainer = () => {
    return (
        <div className="bg-primary rounded-circle p-4 position-relative">
            <CartIcon color="black"/>
            <CartItems count={6}/>
        </div>
    )
}


export default CartContainer