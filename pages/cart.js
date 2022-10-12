import React, { useContext, useState } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { toast, ToastContainer } from 'react-nextjs-toast';
import axios from 'axios';

function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const [count, setCount] = useState();
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    toast.notify('Product Removed From Cart');
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });

    toast.notify('Product updated in the cart');
    toast.remove();
  };

  const incrementCount = (item, qty) => {
    const quantityVal = Number(3);

    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantityVal } });
  };
  const decrement = (event) => {
    setCount(count - 1);
  };

  return (
    <Layout title="Shopping Cart">
      <Link href="/">
        <HiArrowNarrowLeft></HiArrowNarrowLeft>
      </Link>

      <h1 className="mb-1 text-xl">Shopping Cart</h1>
      <ToastContainer />
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="container lg:grid grid-cols-12 gap-4 items-start pb-16 pt-4 ml-10">
          <div className="xl:col-span-8 lg:col-span-8 ">
            <div className="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex ">
              <p className="text-gray-600 text-center">Product </p>
              <p className="text-gray-600 text-center ml-auto mr-10 xl:mr-20">
                Quantity{' '}
              </p>
              <p className="text-gray-600 text-center">Price </p>
            </div>
            {cartItems.map((items, i) => (
              <>
                <div className="space-y-4">
                  <div className="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap bg-gray-100 ">
                    <div className="w-32 flex-shrink-0">
                      <img src={items.image} alt={items.name} class="w-full" />
                    </div>

                    <div className="md:w-1/4 w-full ">
                      <h2 class="text-gray-800 mb-3 text-md font-medium uppercase">
                        {items.name}
                      </h2>

                      <p className="text-gray-500">Size: L</p>
                    </div>
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max ">
                      <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        {' '}
                        -{' '}
                      </div>
                      <div class="h-8 w-10 flex items-center justify-center">
                        {' '}
                        {items.quantity}{' '}
                      </div>
                      <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">
                        {' '}
                        +{' '}
                      </div>
                    </div>

                    <div className="ml-auto md:ml-0">
                      <p className="text-primary text-lg font-semibold "></p>
                    </div>

                    <div className="text-gray-600 hover:text-primary cursor-pointer ">
                      ${items.price}
                      <i className="fas fa-trash"></i>
                    </div>
                    <div>
                      <button
                        className="block text-center text-gray-700 hover:text-primary transition relative"
                        onClick={() => removeItemHandler(items)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 bg-inherit"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0 bg-gray-100">
            <h3 className="text-gray-800 text-lg mb-4 font-medium uppercase ">
              Order Summary
            </h3>

            <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200 ">
              <div className="flex justify-between font-medium">
                <p>Subtotal</p>
                <p>
                  {' '}
                  ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </p>
              </div>

              <div className="flex justify-between font-medium">
                <p>Delivery</p>
                <p>Free</p>
              </div>

              <div className="flex justify-between font-medium">
                <p>Tax</p>
                <p>Free</p>
              </div>
            </div>

            <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
              <h4>Total</h4>
              <h4>
                {' '}
                ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
              </h4>
            </div>

            <div className="flex mb-4">
              <input
                type="text"
                className="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm "
                placeholder="Coupon"
              />

              <button
                type="submit"
                className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover\:bg-transparent hover\:text-primary transition text-sm w-full block text-center "
              >
                Apply
              </button>
            </div>

            <a
              href=""
              className="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm w-full block text-center "
            >
              checkout
            </a>
          </div>
        </div>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(CartScreen, { ssr: false }));
