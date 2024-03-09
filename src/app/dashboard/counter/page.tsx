
import { CartCounter } from "@/shopping-cart";


export const metadata = {
  title: 'Shopping-cart',
  description: 'Contador',
};

export default function CounterPage() {

  return (
    <div className=" flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={47} />
    </div>
  );
}