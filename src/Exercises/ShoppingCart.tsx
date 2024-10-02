import { useState } from "react";
import ItemCard from "../components/ItemCard";

interface CartProp {
  name: string;
  quantity: number;
  price: number;
}

const items = [
  { name: "Apple", price: 2 },
  { name: "Orange", price: 1 },
  { name: "Manggo", price: 1 },
];

const ShoppingCart = () => {
  const [cart, setCart] = useState<CartProp[] | null>([]);

  const handleAddtoCart = (item: { name: string; price: number }) => {
    const existingItem = cart?.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      const updatedCart = cart?.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      setCart(updatedCart!);
    } else {
      setCart([...cart!, { ...item, quantity: 1 }]);
    }
  };

  const total = cart?.reduce(
    (acc, currentItem) => acc + currentItem.price * currentItem.quantity,
    0
  );

  return (
    <div className="flex justify-center p-5 space-x-96">
      <div className="flex flex-col space-y-5">
        {items.map((item) => (
          <ItemCard
            title={item.name}
            price={item.price}
            onClick={() => handleAddtoCart(item)}
          />
        ))}
      </div>
      <div>
        <div>
          <h2>Shopping Cart</h2>
        </div>
        <div>
          <ul>
            {cart!.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              cart!.map((cartItem) => (
                <li key={cartItem.name}>
                  {cartItem.name} - ${cartItem.price} x {cartItem.quantity}
                </li>
              ))
            )}
          </ul>
        </div>
        <div>
          <h3>Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
