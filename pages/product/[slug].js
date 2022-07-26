import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';
import { Store } from '../../utils/Store';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <Layout title="Produt Not Found">Produt Not Found</Layout>;
  }
  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity } });
  };

  return (
    <>
      <Layout title={product.name}>
        <div className="py-2">
          <Link href="/">
            <HiArrowNarrowLeft></HiArrowNarrowLeft>
          </Link>
        </div>
        <div className="grid md:grid-cols-4 md:gap-3">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              layout="responsive"
            ></Image>
          </div>
          <div>
            <ul>
              <li>
                <h1 className="text-lg">{product.name}</h1>
              </li>
              <li className="text-gray-500">Category: {product.category}</li>
              <li className="text-gray-500">Brand: {product.brand}</li>
              <li className="text-gray-500">
                {product.rating} of {product.numReviews} reviews
              </li>
              <li className="text-gray-500">
                Description: {product.description}
              </li>
            </ul>
          </div>
          <div>
            <div className="card p-5">
              <div className="mb-2 flex justify-between">
                <div className="text-gray-500">Price</div>
                <div>${product.price}</div>
              </div>
              <div className="mb-2 flex justify-between">
                <div className="text-gray-500">Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
              <button
                className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b font-medium hover:bg-transparent hover:text-primary transition "
                onClick={addToCartHandler}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
