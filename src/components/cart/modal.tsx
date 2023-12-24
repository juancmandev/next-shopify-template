import { Cart } from '@/lib/shopify/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import CartItem from './item';

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline' size='icon'>
          <ShoppingCart className='w-5' />
          {cart?.totalQuantity ? (
            <div className='absolute flex justify-center items-center right-3 top-2 w-4 h-4 text-[10px] text-primary-foreground font-medium rounded-full bg-primary'>
              <p>{cart?.totalQuantity}</p>
            </div>
          ) : null}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        <ul className='py-10'>
          {cart?.lines.map((item) => (
            <li className='border-b pb-5' key={item.id}>
              <CartItem {...item} />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
