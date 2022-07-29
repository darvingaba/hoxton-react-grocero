import {HeaderListItem} from "./HeaderItem";

export function HeaderList({items, increaseQuantity, getItemImagePath}) {
    return (
      <ul className="item-list store--item-list">
        {items.map((items) => (
          <HeaderListItem
            // key={item.id}
            item={items}
            increaseQuantity={increaseQuantity}
            getItemImagePath={getItemImagePath}
          />
        ))}
      </ul>
    );
}