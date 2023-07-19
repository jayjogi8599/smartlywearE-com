import React from 'react'

function order() {
  return (
    <section className="text-gray-600 body-font bg-sky-100 overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0"> 
        <h2 className="text-sm title-font text-gray-500 tracking-widest">SMARTLY WEAR</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order id: #03377</h1>
        <p className="leading-relaxed mb-4">Your order has been successfully placed.</p>
        <div className="flex mb-4">
          <a className="flex-grow text-center border-b-2 py-2 text-lg px-1">Item Description</a>
          <a className="flex-grow text-center border-b-2  py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow text-center border-b-2  py-2 text-lg px-1">Item Total</a>
        </div>
        
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">SmartlyWear-(XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">SmartlyWear-(XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
          <span className="text-gray-500">SmartlyWear-(XL/Black)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">₹499</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">Subtotal:₹1258.00</span>
          <button className="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/home1.jpg"/>
    </div>
  </div>
</section>
  )
}

export default order