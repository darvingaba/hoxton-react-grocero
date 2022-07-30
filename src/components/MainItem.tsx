

export function MainItem({item, decreaseQuantity, increaseQuantity, getItemImagePath}) {
    return (
      <li>
        <img
          className="cart--item-icon"
          src={getItemImagePath(item)}
          alt={item.name}
        />
        <p>{item.name}</p>
        <button
          onClick={() => decreaseQuantity(item)}
          className="quantity-btn remove-btn center"
        >
          -
        </button>
        <span className="quantity-text center">{item.inCart}</span>
        <button
          onClick={() => increaseQuantity(item)}
          className="quantity-btn add-btn center"
        >
          +
        </button>
      </li>
    );
}