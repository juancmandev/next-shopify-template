import ProductCard from '@/components/product-card';
import { getCollectionProducts, getCollections } from '@/lib/shopify';

export default async function Home() {
  const collections = await getCollections();
  const products = await getCollectionProducts({
    collection: collections[1].handle,
  });

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
