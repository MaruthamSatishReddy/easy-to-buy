import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { Store } from '../utils/Store';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(
    () => setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0)),
    [cart.cartItems]
  );
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };

  return (
    <>
      <Head>
        <title> {title ? title + ' Easy To Buy ' : 'Easy To Buy'}</title>

        <link rel="icon" href="/images/easytobuy.png" />
      </Head>
      <header className="py-2 shadow-lg md:bg-gradient-to-br lg:bg-white">
        <div className="container flex items-center justify-between">
          <a href="#" className="block w-32">
            <Image
              src="/images/easytobuy.png"
              className="rounded shadow object-cover h-50 w-full"
              width={5}
              height={5}
              layout="responsive"
              objectFit="cover"
            />
          </a>

          <div className="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden ">
            <span className="absolute left-4 top-3 text-lg text-gray-400 ">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              className="pl-12 w-full border border-r-0 border-primary  py-3 px-3 rounded-l-md focus:ring-primary "
              placeholder="Search"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition  "
            >
              Search
            </button>
          </div>

          <div className="space-x-4 flex items-center ">
            <a
              href="#"
              className="block text-center text-gray-700 hover:text-primary transition relative "
            >
              <span className=" absolute -right-0 -top-3 w-4 h-4 rounded-full flex items-center justify-center  bg-primary text-white text-xs ">
                {' '}
                5{' '}
              </span>
              <div className="text-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </a>
            <Link href="/cart">
              <a className="block text-center text-gray-700 hover:text-primary transition relative">
                {cartItemsCount > 0 && (
                  <span className="absolute -right-2 -top-2 w-4 h-4 rounded-full flex items-center justify-center  bg-primary text-white text-xs">
                    {cartItemsCount}
                  </span>
                )}
                <div className="text-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
              </a>
            </Link>

            <div className="group relative flex cursor-pointer items-center">
              <Link href="/account">
                <span className="ml-2 font-semibold capitalize text-white py-4 px-10">
                  <Image
                    src="/images/images/profile1.jpeg"
                    alt="profile"
                    className="rounded-full"
                    height={50}
                    width={50}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <nav className="hidden bg-gray-800 lg:block">
          <div className="container">
            <div className="flex">
              <div className="bg-primary group relative flex cursor-pointer items-center px-8 py-4">
                <span className="text-white">
                  <i className="fas fa-bars"></i>
                </span>
                <span className="ml-2 font-semibold capitalize text-white">
                  All categories
                </span>

                <div className="invisible absolute left-0 top-full z-50 w-full divide-y divide-dashed divide-gray-300 bg-white py-3 opacity-0 shadow-md transition duration-300 group-hover:visible group-hover:opacity-100">
                  <a
                    href="#"
                    className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                  >
                    <Image
                      src="/images/icons/bed.svg"
                      className="rounded shadow object-cover h-50 w-full"
                      width={5}
                      height={5}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <span className="ml-6 text-sm font-semibold text-gray-700">
                      BedRoom
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                  >
                    <Image
                      src="/images/icons/sofa.svg"
                      className="rounded shadow object-cover h-50 w-full"
                      width={5}
                      height={5}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <span className="ml-6 text-sm font-semibold text-gray-700">
                      Sofa
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                  >
                    <Image
                      src="/images/icons/office.svg"
                      className="rounded shadow object-cover h-50 w-full"
                      width={5}
                      height={5}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <span className="ml-6 text-sm font-semibold text-gray-700">
                      Office
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                  >
                    <Image
                      src="/images/icons/outdoor-cafe.svg"
                      className="rounded shadow object-cover h-50 w-full"
                      width={5}
                      height={5}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <span className="ml-6 text-sm font-semibold text-gray-700">
                      OutDoor
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                  >
                    <Image
                      src="/images/icons/terrace.svg"
                      className="rounded shadow object-cover h-50 w-full"
                      width={5}
                      height={5}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <span className="ml-6 text-sm font-semibold text-gray-700">
                      Mattress
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center px-6 py-3 transition hover:bg-gray-100"
                  >
                    <Image
                      src="/images/icons/sofa.svg"
                      className="rounded shadow object-cover h-50 w-full"
                      width={5}
                      height={5}
                      layout="responsive"
                      objectFit="cover"
                    />
                    <span className="ml-6 text-sm font-semibold text-gray-700">
                      Sofa
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex flex-grow items-center justify-between pl-12">
                <div className="flex items-center space-x-6 text-base capitalize">
                  <a
                    href="index.html"
                    className="font-semibold text-gray-200 transition hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="shop.html"
                    className="font-semibold text-gray-200 transition hover:text-white"
                  >
                    Shop
                  </a>
                  <a
                    href="index.html"
                    className="font-semibold text-gray-200 transition hover:text-white"
                  >
                    About Us
                  </a>
                  <a
                    href="index.html"
                    className="font-semibold text-gray-200 transition hover:text-white"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="container m-auto mt-t px-4">{children}</main>
      <footer className="flex h-12 justify-center items-center shadow-inner bg-white">
        <p>Copyright © 2022 Easy To Buy</p>
      </footer>
    </>
  );
}
