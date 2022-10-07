import React from 'react';
import Layout from '../components/Layout';
export default function Main() {
  return (
    <Layout>
      <>
        {' '}
        <div className="bg-cover bg-no-repeat bg-center py-1">
          <div className="bg-scroll bg-[url('/images/banner-bg.jpg')] h-[602px]">
            <div className="container">
              <h1 className="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-semibold mb-4 ">
                Best Collection For Home Decoration
              </h1>
              <p className="text-base text-gray-600 leading-6 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate rhoncus pellentesque id integer neque, vel accumsan
                dolor diam.
              </p>

              <div className="mt-12">
                <a
                  href="shop.html"
                  className="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition "
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}
