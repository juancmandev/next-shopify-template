'use client';

import { Minus, Plus } from 'lucide-react';
import { updateItemQuantity } from '@/components/cart/actions';
import LoadingDots from '@/components/loading-dots';
import type { CartItem } from '@/lib/shopify/types';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

type TSubmitButton = {
  type: 'plus' | 'minus';
};

function SubmitButton({ type }: TSubmitButton) {
  const { pending } = useFormStatus();

  return (
    <Button
      size='icon'
      type='submit'
      variant='outline'
      disabled={pending}
      aria-disabled={pending}
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      aria-label={
        type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'
      }
    >
      {pending ? (
        <LoadingDots className='bg-black dark:bg-white' />
      ) : type === 'plus' ? (
        <Plus className='w-5' />
      ) : (
        <Minus className='w-5' />
      )}
    </Button>
  );
}

type TEditItemQuantityButton = {
  item: CartItem;
  type: 'plus' | 'minus';
};

export function EditItemQuantityButton({
  item,
  type,
}: TEditItemQuantityButton) {
  const [message, formAction] = useFormState(updateItemQuantity, null);
  const payload = {
    lineId: item.id,
    variantId: item.merchandise.id,
    quantity: type === 'plus' ? item.quantity + 1 : item.quantity - 1,
  };
  const actionWithVariant = formAction.bind(null, payload);

  return (
    <form action={actionWithVariant}>
      <SubmitButton type={type} />
      <p aria-live='polite' className='sr-only' role='status'>
        {message}
      </p>
    </form>
  );
}
