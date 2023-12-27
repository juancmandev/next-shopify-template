import { getProduct } from '@/lib/shopify';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type TProductDetail = {
  params: {
    handle: string;
  };
};

export default async function ProductaDetail(props: TProductDetail) {
  const product = await getProduct(props.params.handle);

  if (!product) {
    return notFound();
  }

  return (
    <div className='min-w-full prose dark:prose-invert'>
      <div className='md:hidden'>
        <h1>{product.title}</h1>
        <Image
          src={product.images[0].url}
          alt={product.title}
          width={200}
          height={200}
        />
        <article
          dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
        />
      </div>
      <div className='hidden md:grid md:grid-cols-2'>
        <section>
          <h1>{product.title}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        </section>
        <Image
          className='md:justify-self-center'
          src={product.images[0].url}
          alt={product.title}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
