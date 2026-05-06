import React, { useState } from 'react';

const products = [
  {
    id: 1,
    title: "G-Shop Elite AI Drone - 8K Cinematic Edition (US Model)",
    price: 499.99,
    oldPrice: 899.00,
    discount: "SAVE 45%",
    image: "https://images.unsplash.com/photo-1473963456076-7858c04b2795?q=80&w=1000",
    rating: "4.9/5"
  },
  {
    id: 2,
    title: "Quantum AI Noise-Cancelling Headphones - Space Gray",
    price: 189.99,
    oldPrice: 349.00,
    discount: "SAVE 46%",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
    rating: "4.8/5"
  }
];

export default function App() {
  const [view, setView] = useState('home');

  return (
    <div className="min-h-screen">
      <div className="bg-[#232f3e] text-white text-[11px] text-center py-2 font-bold uppercase tracking-widest">
        ✈️ FREE EXPRESS SHIPPING TO USA, CANADA & UK ON ORDERS OVER $100
      </div>

      <nav className="bg-[#131921] text-white p-3 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <span className="text-3xl font-black tracking-tighter text-[#febd69] px-2 cursor-pointer border border-transparent hover:border-white">G-SHOP</span>
          <div className="hidden md:block text-[11px]">
             <p className="text-gray-400">Deliver to</p>
             <p className="font-bold">📍 New York 10001</p>
          </div>
        </div>
        <div className="flex-1 max-w-2xl mx-6 flex">
            <input type="text" className="w-full p-2.5 rounded-l-md text-black outline-none" placeholder="Search Global Store..." />
            <button className="bg-[#febd69] p-2.5 rounded-r-md px-6 text-black font-bold hover:bg-[#f3a847]">🔍</button>
        </div>
        <div className="flex gap-8 px-4 text-sm font-bold items-center">
            <div className="cursor-pointer relative">
               <span className="absolute -top-3 -right-2 bg-[#f08804] text-black rounded-full h-5 w-5 flex items-center justify-center text-[10px]">0</span>
               <p className="text-xl">🛒</p>
            </div>
        </div>
      </nav>

      {view === 'home' && (
        <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {products.map(p => (
            <div key={p.id} className="bg-white p-6 border border-gray-200 shadow-lg flex flex-col group">
              <div className="relative overflow-hidden aspect-video mb-4">
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-2 left-0 bg-[#cc0c39] text-white text-[10px] font-black px-3 py-1 shadow-md">EXCLUSIVE DEAL</span>
              </div>
              <h2 className="font-bold text-gray-800 text-xl mb-2">{p.title}</h2>
              <div className="flex items-baseline mb-4">
                <span className="text-sm font-bold">$</span>
                <span className="text-4xl font-black text-gray-900 tracking-tighter">{Math.floor(p.price)}</span>
                <span className="text-sm font-bold">99</span>
                <span className="text-gray-400 line-through text-sm ml-3 font-normal">${p.oldPrice}</span>
              </div>
              <button onClick={() => setView('checkout')} className="bg-[#ffd814] hover:bg-[#f7ca00] w-full py-4 rounded-full font-bold shadow-sm transition-all active:scale-95 uppercase tracking-widest text-sm">Buy Now</button>
            </div>
          ))}
        </main>
      )}

      {view === 'checkout' && (
        <div className="max-w-xl mx-auto bg-white mt-12 p-10 shadow-2xl border-t-4 border-orange-500 rounded-md">
          <h2 className="text-2xl font-black mb-8 border-b pb-4 uppercase tracking-tighter">Secure PayPal Checkout</h2>
          <div className="bg-gray-50 p-10 rounded-xl border border-gray-200 text-center">
            <p className="text-xs text-gray-500 mb-6 font-bold uppercase italic tracking-widest">Total Amount: USD ($)</p>
            <button onClick={() => setView('success')} className="bg-[#0070ba] text-white w-full py-4 rounded-full font-black shadow-xl hover:bg-blue-800 transition-all uppercase">
              Pay with PayPal
            </button>
          </div>
        </div>
      )}

      {view === 'success' && (
        <div className="max-w-xl mx-auto mt-20 p-12 bg-white shadow-2xl text-center rounded border-b-8 border-green-500">
          <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Order Successfully Placed!</h1>
          <p className="text-gray-600 mt-4 font-bold italic">Processing through Global G-Shop Node... Your profit is being secured.</p>
          <button onClick={() => setView('home')} className="mt-10 bg-[#131921] text-white px-12 py-3 rounded-full font-bold uppercase tracking-widest">Back to Store</button>
        </div>
      )}
    </div>
  );
}
