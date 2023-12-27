import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Product } from '@/lib/shopify/types';
import Image from 'next/image';
import AddToCartButton from './cart/add-to-cart';
import Link from 'next/link';
import { Button } from './ui/button';

export default function ProductCard(props: Product) {
  return (
    <Card className='max-w-[280px]'>
      <CardHeader>
        <Button
          asChild
          variant='link'
          size={null}
          className='w-full flex flex-col items-start'
        >
          <Link href={`/product/${props.handle}`}>
            <CardTitle>{props.title}</CardTitle>
            <Image
              className='w-full'
              src={props.images[0].url}
              width={200}
              height={200}
              alt={props.title}
            />
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <CardDescription className='line-clamp-4'>
          {props.description}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex flex-col items-start gap-2'>
        <span>${props.priceRange.minVariantPrice.amount}</span>
        <AddToCartButton variants={props.variants} availableForSale />
      </CardFooter>
    </Card>
  );
}
