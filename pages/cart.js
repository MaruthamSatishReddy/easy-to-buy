import React, { useContext, useState } from 'react';
import { Store } from '../utils/Store';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import axios from 'axios';

function CartScreen() {
  const { state, dispatch } = useContext(Store);
  const [count, setCount] = useState();
  const {
    cart: { cartItems },
  } = state;
  const removeItemHandler = (item) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item });
  };
  const updateCartHandler = async (item, qty) => {
    const quantity = Number(qty);
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      return toast.error('Sorry. Product is out of stock');
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } });

    toast.success('Product updated in the cart');
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
      {cartItems.length === 0 ? (
        <div>
          Cart is empty. <Link href="/">Go shopping</Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-4 md:gap-5">
          <div className="overflow-x-auto md:col-span-3">
            <table className="min-w-full ">
              <thead className="border-b">
                <tr>
                  <th className="p-5 text-left">Item</th>
                  <th className="p-5 text-left">Quantity</th>
                  <th className="p-5 text-left">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.slug} className="border-b">
                    <td>
                      <Link href={`/product/${item.slug}`}>
                        <a className="flex items-center">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={65}
                            height={65}
                          ></Image>
                          &nbsp; &nbsp;
                          {item.name}
                        </a>
                      </Link>
                    </td>
                    <td className="p-5 text-left">
                      <div className="custom-number-input h-10 w-32">
                        <label
                          htmlFor="custom-input-number"
                          className="w-full text-gray-700 text-sm font-semibold"
                        ></label>
                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                          <button
                            onClick={decrement}
                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                          >
                            <span className="m-auto text-2xl font-thin">−</span>
                          </button>
                          <input
                            type="number"
                            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700"
                            name="custom-input-number"
                            value={item.quantity}
                          ></input>

                          <button
                            onClick={(e) =>
                              incrementCount(item, e.target.value)
                            }
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                          >
                            <span className="m-auto text-2xl font-thin">+</span>
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="p-5 text-left">${item.price}</td>
                    <td className="p-5 text-center">
                      <div className="space-x-4 flex items-center ">
                        <button
                          className="block text-center text-gray-700 hover:text-primary transition relative"
                          onClick={() => removeItemHandler(item)}
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
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="card p-5">
            <ul>
              <li>
                <div className="pb-3 text-xl">
                  Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                  {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                </div>
              </li>
              <li>
                <button
                  onClick={() => router.push('login?redirect=/shipping')}
                  className=" bg-primary borde hover:text-primary transition w-full"
                ></button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Layout>
  );
}
export default dynamic(() => Promise.resolve(CartScreen, { ssr: false }));
