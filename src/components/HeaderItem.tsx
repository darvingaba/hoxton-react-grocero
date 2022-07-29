export function HeaderListItem({ item, increaseQuantity, getItemImagePath }) {
    return (
      <li>
        <div className=".store--item-icon">
          <img src={getItemImagePath(item)} />
        </div>
        <button onClick={() => increaseQuantity(item)}>
          Add to cart {item.stock}
        </button>
      </li>
    );
}