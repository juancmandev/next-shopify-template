'use client';

import { Trash } from 'lucide-react';
import { removeItem } from '@/components/cart/actions';
import LoadingDots from '@/components/loading-dots';
import type { CartItem } from '@/lib/shopify/types';
import { useFormState, useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type='submit'
      variant='destructive'
      size='icon'
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
      disabled={pending}
      aria-disabled={pending}
      aria-label='Remove cart item'
    >
      {pending ? (
        <LoadingDots className='bg-white' />
      ) : (
        <Trash className='w-5' />
      )}
    </Button>
  );
}

export function DeleteItemButton({ item }: { item: CartItem }) {
  const [message, formAction] = useFormState(removeItem, null);
  const itemId = item.id;
  const actionWithVariant = formAction.bind(null, itemId);

  return (
    <form action={actionWithVariant}>
      <SubmitButton />
      <p aria-live='polite' className='sr-only' role='status'>
        {message}
      </p>
    </form>
  );
}
