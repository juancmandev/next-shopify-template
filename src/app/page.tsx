import ProductCard from '@/components/product-card';
import { getCollectionProducts } from '@/lib/shopify';

export default async function Home() {
  const products = await getCollectionProducts({ collection: 'frontpage' });

  return (
    <>
      <h1 className='text-2xl font-semibold mb-5'>Home</h1>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard {...product} />
          </li>
        ))}
      </ul>
    </>
  );
}
