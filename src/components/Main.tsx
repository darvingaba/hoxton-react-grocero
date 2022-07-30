import { MainList } from "./MainList";
export function Main({cartItems, totalPrice, decreaseQuantity, increaseQuantity, getItemImagePath}) {
    return (
      <MainList 
        cartItems={cartItems} 
        totalPrice={totalPrice} 
        decreaseQuantity={decreaseQuantity} 
        increaseQuantity={increaseQuantity} 
        getItemImagePath={getItemImagePath}/>
    );
} 