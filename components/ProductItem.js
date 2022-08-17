/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          ></img>
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg text-gray-500">{product.name}</h2>
          </a>
        </Link>
        <p className="mb-2 text-gray-500">{product.brand}</p>
        <p className="text-gray-500">${product.price}</p>
        <button className="primary-button" type="button">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
