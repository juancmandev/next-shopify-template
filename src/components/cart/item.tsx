import { CartItem } from '@/lib/shopify/types';
import Image from 'next/image';
import { EditItemQuantityButton } from './edit-quantity';
import { DeleteItemButton } from './delete-item';

export default function CartItem(props: CartItem) {
  return (
    <article className='flex items-center gap-4'>
      <section>
        <Image
          className='border rounded-md p-1'
          width={64}
          height={64}
          src={props.merchandise.product.featuredImage.url}
          alt={props.merchandise.product.title}
        />
      </section>
      <section>
        <h3 className='text-xl font-semibold'>
          {props.merchandise.product.title}
        </h3>
      </section>
      <section className='flex gap-2'>
        <EditItemQuantityButton item={props} type='minus' />
        <p className='w-4 text-center mt-1.5'>
          <span className='w-full text-sm'>{props.quantity}</span>
        </p>
        <EditItemQuantityButton item={props} type='plus' />
      </section>
      <section>
        <DeleteItemButton item={props} />
      </section>
    </article>
  );
}
