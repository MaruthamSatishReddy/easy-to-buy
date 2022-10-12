import React from 'react';

export default function Features() {
  return (
    <div>
      {' '}
      <div className="container py-16 ">
        <div className="lg:w-10/12 grid md:grid-cols-3 lg:gap-6 mx-auto justify-center ">
          <div className="border-primary border rounded-sm px-8 lg:px-3 lg:py-4 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-gray-200 duration-300 ">
            <img
              src="/images/icons/delivery-van.svg"
              className="lg:w-12 w-10 h-12 object-contain "
            />
            <div>
              <h4 className="font-medium capitalize text-lg ">
                Free Shipping{' '}
              </h4>
              <p className="text-gray-500 text-xs lg:text-sm ">
                {' '}
                Order Over $200{' '}
              </p>
            </div>
          </div>

          <div className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-gray-200 duration-300 ">
            <img
              src="/images/icons/money-back.svg"
              className="lg:w-12 w-10 h-12 object-contain "
            />
            <div>
              <h4 className="font-medium capitalize text-lg ">
                Money Returns{' '}
              </h4>
              <p className="text-gray-500 text-xs lg:text-sm ">
                {' '}
                30 Days Money Return{' '}
              </p>
            </div>
          </div>

          <div className="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5 transition hover:border-slate-400 hover:bg-gray-200 duration-300 ">
            <img
              src="/images/icons/service-hours.svg"
              className="lg:w-12 w-10 h-12 object-contain "
            />
            <div>
              <h4 className="font-medium capitalize text-lg ">24/7 Support </h4>
              <p className="text-gray-500 text-xs lg:text-sm ">
                {' '}
                Customer Support{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
