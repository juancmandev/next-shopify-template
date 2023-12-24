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

export default function ProductCard(props: Product) {
  return (
    <Card className='max-w-[280px]'>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <Image
          src={props.images[0].url}
          width={280}
          height={280}
          alt={props.title}
        />
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
