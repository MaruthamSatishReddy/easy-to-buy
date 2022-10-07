import { decodeBase64 } from 'bcryptjs';
import Head from 'next/head';
import ProductItem from '../components/ProductItem';
import Layout from '/components/Layout';
import db from '../utils/db';
import Product from '../models/Product';

export default function Home({ products }) {
  return (
    <>
      <div>
        <Layout>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 mt-2">
            {products.map((product) => (
              <ProductItem product={product} key={product.slug}></ProductItem>
            ))}
          </div>
        </Layout>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
