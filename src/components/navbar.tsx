import Link from 'next/link';
import { Button } from './ui/button';
import Cart from './cart';

export default function Navbar() {
  return (
    <nav className='w-screen px-5 py-4 flex justify-between items-center bg-background border-b'>
      <section>
        <Button asChild variant='link' className='px-0'>
          <Link href='/'>Next.js Shopify</Link>
        </Button>
      </section>
      <section>
        <Cart />
      </section>
    </nav>
  );
}
