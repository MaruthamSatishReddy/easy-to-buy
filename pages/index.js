import { decodeBase64 } from 'bcryptjs';
import Head from 'next/head';
import ProductItem from '../components/ProductItem';
import Layout from '/components/Layout';
import db from '../utils/db';
import Product from '../models/Product';
import CarouselScreen from '../components/Carousel';
import Features from '../components/Features';
import Categories from '../components/Categories';

export default function Home({ products }) {
  return (
    <>
      <div>
        <Layout>
          <div>
            <CarouselScreen></CarouselScreen>
            <Features></Features>
            <Categories></Categories>
          </div>
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
Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  );
};
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
