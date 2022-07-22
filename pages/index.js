import Head from 'next/head';
import Image from 'next/image';
import ProductItem from '../components/ProductItem';
import data from '../utils/data';
import Layout from '/components/Layout';

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-2">
          {data.products.map((product) => (
            // eslint-disable-next-line react/jsx-key
            <ProductItem product={product} key={product.slug}></ProductItem>
          ))}
        </div>
      </Layout>
    </div>
  );
}
