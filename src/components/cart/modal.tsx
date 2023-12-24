import { Cart } from '@/lib/shopify/types';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import CartItem from './item';

export default function CartModal({ cart }: { cart: Cart | undefined }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <Sheet>
          <SheetTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant='outline' size='icon'>
                <ShoppingCart className='w-5' />
                {cart?.totalQuantity ? (
                  <div className='absolute flex justify-center items-center right-3 top-2 w-4 h-4 text-[10px] text-primary-foreground font-medium rounded-full bg-primary'>
                    <p>{cart?.totalQuantity}</p>
                  </div>
                ) : null}
              </Button>
            </TooltipTrigger>
          </SheetTrigger>
          <TooltipContent>
            <p>Shopping cart</p>
          </TooltipContent>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Shopping cart</SheetTitle>
            </SheetHeader>
            {cart?.lines && cart.lines.length > 0 ? (
              <ul className='py-10'>
                {cart.lines.map((item) => (
                  <li className='border-b pb-5' key={item.id}>
                    <CartItem {...item} />
                  </li>
                ))}
              </ul>
            ) : (
              <section className='pt-20 flex flex-col items-center gap-4'>
                <h4 className='text-lg font-semibold text-center'>
                  Your cart is empty!
                </h4>
                <SheetClose asChild>
                  <Button className='mx-auto'>Keep shopping</Button>
                </SheetClose>
              </section>
            )}
          </SheetContent>
        </Sheet>
      </Tooltip>
    </TooltipProvider>
  );
}
