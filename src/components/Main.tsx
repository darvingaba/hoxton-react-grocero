type Item = {
    id: number;
    name: string;
    price: number;
    stock: number;
    inCart: number;
};
type Props = {
  cartItems: Item[];
  totalPrice: number;
  decreaseQuantity: Function;
  increaseQuantity: Function;
  getItemImagePath: Function;
};

import { MainList } from "./MainList";
export function Main({
  cartItems,
  totalPrice,
  decreaseQuantity,
  increaseQuantity,
  getItemImagePath,
}: Props) {
  return (
    <MainList
      cartItems={cartItems}
      totalPrice={totalPrice}
      decreaseQuantity={decreaseQuantity}
      increaseQuantity={increaseQuantity}
      getItemImagePath={getItemImagePath}
    />
  );
}
