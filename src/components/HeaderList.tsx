import {HeaderListItem} from "./HeaderItem";

type Item = {
  id: number;
  name: string;
  price: number;
  stock: number;
  inCart: number;
};
type Props = {
    items: Item[];
    increaseQuantity: Function;
    getItemImagePath: Function;
}
export function HeaderList({items, increaseQuantity, getItemImagePath}: Props) {
    return (
      <ul className="item-list store--item-list">
        {items.map((items) => (
          <HeaderListItem
            key={items.id}
            item={items}
            increaseQuantity={increaseQuantity}
            getItemImagePath={getItemImagePath}
          />
        ))}
      </ul>
    );
}