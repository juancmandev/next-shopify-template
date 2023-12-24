'use client';

import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { addItem } from './actions';
import { useFormState, useFormStatus } from 'react-dom';
import { useSearchParams } from 'next/navigation';
import { ProductVariant } from '@/lib/shopify/types';
import LoadingDots from '@/components/loading-dots';

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const { pending } = useFormStatus();

  if (!availableForSale) {
    return (
      <Button aria-disabled disabled className='w-full'>
        Out of stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        aria-disabled
        className='w-full'
        aria-label='Please select an option'
      >
        <ShoppingCart className='w-5 mr-2' /> Select an option
      </Button>
    );
  }

  return (
    <Button
      aria-label='Add to cart'
      className='w-full'
      disabled={pending}
      aria-disabled={pending}
      onClick={(e: React.FormEvent<HTMLButtonElement>) => {
        if (pending) e.preventDefault();
      }}
    >
      {pending ? (
        <LoadingDots className='bg-white' />
      ) : (
        <ShoppingCart className='w-5 mr-2' />
      )}
      Add to cart
    </Button>
  );
}

export default function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [message, formAction] = useFormState(addItem, null);
  const searchParams = useSearchParams();
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase())
    )
  );
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);

  return (
    <form className='w-full' action={actionWithVariant}>
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live='polite' className='sr-only' role='status'>
        {message}
      </p>
    </form>
  );
}
