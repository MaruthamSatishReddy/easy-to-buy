import Head from 'next/head';
import Link from 'next/link';
import React, { useContext } from 'react';
import { Store } from '../utils/Store';
export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <Head>
        <title> {title ? title + ' Easy To Buy ' : 'Easy To Buy'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-14 items-center px-4 justify-between shadow-md bg-white">
            <Link href="/">
              <a className="text-lg font-bold">Easy To Buy</a>
            </Link>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link href="/cart">
                <a className="flex-col justify-between">
                  {cart.cartItems.length > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                    </span>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </a>
              </Link>
              <Link href="/login">
                <a className="flex-col justify-between  pl-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-t px-4">{children}</main>
        <footer className="flext h-10 justify-center items-center shadow-inner text-center bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16 text-white">
              © 2022 Copyright:
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
