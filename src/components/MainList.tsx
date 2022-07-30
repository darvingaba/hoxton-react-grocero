import { MainItem } from "./MainItem";

export function MainList({cartItems, totalPrice, decreaseQuantity, increaseQuantity, getItemImagePath}) {
    return (
      <main id="cart">
        <h2>Your Cart</h2>

        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {cartItems.map((item) => (
                <MainItem 
                    // key={item.id}
                    item={item}
                    decreaseQuantity={decreaseQuantity}
                    increaseQuantity={increaseQuantity}
                    getItemImagePath={getItemImagePath}
                />
            ))}
          </ul>
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </main>
    );
}