import { useState } from 'react'
import './App.css'
import inStoreItems ,{Item} from  "./data/index";
import {Header} from "./components/Header";
import {Main} from "./components/Main";



function App() {
  const [items, setItems] = useState(inStoreItems);
  
  function getItemImagePath(item: Item) {
    let id = String(item.id).padStart(3, "0");
    return `/assets/icons/${id}-${item.name}.svg`;
  }

  

  function getCartItems() {
    return items.filter((item) => item.inCart > 0);
  }
  const cartItems = getCartItems();
  console.log(cartItems);

  function getTotalPrice() {
    return cartItems.reduce((total, item) => total + item.price * item.inCart, 0);  
  }
  let totalPrice = getTotalPrice();

  function increaseQuantity(item: Item) {
    let newItems = structuredClone(items);
    if(item.stock===0)return;
    let itemCopy = newItems.find((i: { id: number; }) => i.id === item.id);
    itemCopy.inCart++;
    itemCopy.stock --;
    setItems(newItems);
  }

  function decreaseQuantity(item: Item) {
    let newItems = structuredClone(items);
    if(item.inCart===0)return;
    let itemCopy = newItems.find((i: { id: number; }) => i.id === item.id);
    itemCopy.inCart--;
    itemCopy.stock ++;
    setItems(newItems);
  }

  return (
    <div className="App">
      <Header 
        items={items}
        increaseQuantity={increaseQuantity}
        getItemImagePath={getItemImagePath}
      />
      <Main 
        cartItems={cartItems}
        totalPrice={totalPrice}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        getItemImagePath={getItemImagePath}
      />

    </div>
  );
}

export default App
