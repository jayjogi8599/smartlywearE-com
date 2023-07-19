import React from 'react';
import Link from 'next/link';
import Product from '../../models/Product';
import mongoose from 'mongoose';

function hoodies ({products}) {
 console.log(products)
  return (
    <>
    <section className="text-gray-600 body-font bg-sky-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center">
          {Object.keys(products).length === 0 && <p>Sorry all the hoodies are curruntly out of stock. New stock coming soon.stay tuned !</p>}
          {Object.keys(products).map((item)=>{
            return <div key={products[item]._id}  className="lg:w-1/5 md:w-1/2 p-4 w-full  cursor-pointer shadow-lg m-5 ">
              <Link href={`/product/${products[item].slug}`}>
                <div className="block relative  rounded overflow-hidden">
                  <img alt="ecommerce" className="m-autoh-[30vh]  md:h-[36vh] block" src={products[item].img}/>
                </div>
                <div className="mt-4 text-center md:text-left">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
                  <h4 className="mt-1">₹{products[item].price}</h4>
                  <div className="mt-1">
                   {products[item].size.includes('s')&&<span className='border border-gray-400 px-1 mx-1'>S,</span>}
                   {products[item].size.includes('m')&&<span className='border border-gray-400 px-1 mx-1'>M,</span>}
                   {products[item].size.includes('l')&&<span className='border border-gray-400 px-1 mx-1'>L,</span>}
                   {products[item].size.includes('xl')&&<span className='border border-gray-400 px-1 mx-1'>XL,</span>}
                   {products[item].size.includes('xxl')&&<span className='border border-gray-400 px-1 mx-1'>XXL,</span>} 
                   </div>
                   <div className='mt-1'>
                   {products[item].color.includes('red')&&<button className="border border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                   {products[item].color.includes('blue')&&<button className="border border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                   {products[item].color.includes('black')&&<button className="border border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                   {products[item].color.includes('yellow')&&<button className="border border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                   {products[item].color.includes('green')&&<button className="border border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                   {products[item].color.includes('purple')&&<button className="border border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                   </div>
                </div>
              </Link>
            </div>
          })}
        </div>
      </div>
    </section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connection[0] && mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  } 
   
   let products = await Product.find({category:"hoodies"})
   let hoods ={}
    for(let item of products){
        if(item.title in hoods){
            if(!hoods[item.title].color.includes(item.color) && item.availableQty > 0){
                hoods[item.title].color.push(item.color)
            }
            if(!hoods[item.title].size.includes(item.size) && item.availableQty > 0){
                hoods[item.title].size.push(item.size)
        }
    }
    else{
        hoods[item.title]=JSON.parse(JSON.stringify(item))
        if(item.availableQty > 0){
            hoods[item.title].color = [item.color]
            hoods[item.title].size = [item.size]
        }
    }
} 
    
  return {
    props: {products: JSON.parse(JSON.stringify(hoods))}, // will be passed to the page component as props
  }
}

export default hoodies;


