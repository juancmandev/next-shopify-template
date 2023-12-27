import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className='pt-20 w-max mx-auto flex flex-col items-center gap-10'>
      <h1 className='text-3xl font-semibold'>Product not found!</h1>
      <Button variant='default' asChild>
        <Link href='/'>Go back home</Link>
      </Button>
    </div>
  );
}
