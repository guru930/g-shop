import React, { useState } from 'react';

const products = [
  { id: 1, tag: "HOT DEAL", title: "Elite Wireless Pods Pro", price: 89.99, oldPrice: 119.99, reviews: "2,847", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
  { id: 2, tag: "TOP SELLER", title: "UltraSlim 4K Dash Cam", price: 119.99, oldPrice: 149.99, reviews: "1,293", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300" },
  { id: 3, tag: "EXCLUSIVE", title: "SmartWatch Pro X7", price: 149.99, oldPrice: 199.99, reviews: "3,156", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
  { id: 4, tag: "LIMITED", title: "Portable Gaming Controller", price: 49.99, oldPrice: 69.99, reviews: "987", img: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300" },
  { id: 5, tag: "POPULAR", title: "Wireless Charging Pad Trio", price: 54.99, oldPrice: 84.99, reviews: "4,321", img: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=300" },
  { id: 6, tag: "PREMIUM", title: "Mini Projector 1080p", price: 249.99, oldPrice: 299.99, reviews: "734", img: "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?w=300" },
  { id: 7, tag: "BEST VALUE", title: "Mechanical Gaming Keyboard", price: 99.99, oldPrice: 129.99, reviews: "2,103", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300" },
  { id: 8, tag: "BEST SELLER", title: "Smart Security Camera 2K", price: 74.99, oldPrice: 99.99, reviews: "1,876", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=300" }
];

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openCheckout = (product) => setSelectedProduct(product);
  const closeCheckout = () => setSelectedProduct(null);

  return (
    <div className="font-sans text-[#0f1111] bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-[#131921] text-white">
        <div className="flex items-center p-2 gap-4 max-w-[1500px] mx-auto">
          <div className="text-2xl font-bold text-[#febd69] px-2 cursor-pointer border border-transparent hover:border-white">G-Shop</div>
          <div className="flex-1 flex h-10 shadow-sm">
            <select className="bg-[#f3f3f3] text-black text-xs p-2 rounded-l border-r border-gray-300 outline-none"><option>All</option></select>
            <input type="text" className="w-full p-2 text-black outline-none" placeholder="Search G-Shop..." />
            <button className="bg-[#febd69] px-5 rounded-r text-black font-bold hover:bg-[#f3a847]">🔍</button>
          </div>
          <div className="text-xs font-bold leading-tight px-2 cursor-pointer border border-transparent hover:border-white p-1">
            <p className="font-normal text-gray-300">Hello, Gurpreet</p>
            <p>Account & Lists</p>
          </div>
          <div className="flex items-center font-bold px-2 cursor-pointer border border-transparent hover:border-white p-1">
             <span className="text-2xl">🛒</span> <span className="ml-1">Cart</span>
          </div>
        </div>
        
        <div className="bg-[#232f3e] text-white flex gap-4 px-4 py-1.5 text-[13px] font-medium border-t border-gray-700">
          <span className="hover:border-white border border-transparent px-1 cursor-pointer">All Products</span>
          <span className="hover:border-white border border-transparent px-1 cursor-pointer">Electronics</span>
          <span className="hover:border-white border border-transparent px-1 cursor-pointer">Smart Home</span>
          <span className="ml-auto text-[#febd69] hover:underline cursor-pointer">Track Order</span>
          <span className="font-bold text-[#febd69] border border-[#febd69] px-2 rounded-sm cursor-pointer hover:bg-gray-700">Admin Panel</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1500px] mx-auto flex p-4 gap-6">
        <aside className="w-48 hidden md:block text-[13px]">
          <h3 className="font-bold mb-2 border-b pb-1 text-black">Department</h3>
          <ul className="space-y-1.5 text-gray-700">
            <li className="hover:text-[#e47911] cursor-pointer">All</li>
            <li className="text-[#e47911] font-bold">Electronics</li>
            <li className="hover:text-[#e47911] cursor-pointer">Smart Home</li>
            <li className="hover:text-[#e47911] cursor-pointer">Automotive</li>
          </ul>
        </aside>

        <section className="flex-1">
          <div className="border border-gray-200 p-2.5 mb-4 bg-gray-50 flex justify-between items-center text-xs text-gray-600 rounded">
             <span>1-8 of 8 results in <span className="font-bold text-black">Electronics</span></span>
             <span className="text-[#007185] hover:text-[#c45500] cursor-pointer font-medium">Clear filters</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map(p => (
              <div key={p.id} className="bg-white border border-gray-200 hover:shadow-xl transition-all p-4 flex flex-col rounded-sm">
                <span className="bg-[#e47911] text-white text-[10px] font-black px-2 py-0.5 w-fit mb-3 rounded-sm">{p.tag}</span>
                <div className="h-44 flex items-center justify-center mb-4">
                   <img src={p.img} className="max-h-full object-contain hover:scale-105 transition-transform" alt={p.title} />
                </div>
                <h2 className="text-sm font-semibold mb-1 text-[#0f1111] line-clamp-2 h-10">{p.title}</h2>
                <div className="text-xs text-[#007185] mb-2 font-medium">⭐⭐⭐⭐⭐ <span className="hover:text-[#c45500] cursor-pointer">{p.reviews}</span></div>
                <div className="flex items-baseline mb-4">
                  <span className="text-[11px] font-bold mt-1">$</span>
                  <span className="text-2xl font-bold">{Math.floor(p.price)}</span>
                  <span className="text-[11px] font-bold">99</span>
                </div>
                <div className="mt-auto space-y-2">
                  <button className="bg-[#ffa41c] hover:bg-[#fa8914] w-full py-2 rounded-full text-xs font-bold shadow-sm border border-[#ee940b]">Add to Cart</button>
                  <button onClick={() => openCheckout(p)} className="bg-[#ffd814] hover:bg-[#f7ca00] w-full py-2 rounded-full text-xs font-bold shadow-sm border border-[#fcd200]">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CHECKOUT POPUP MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg rounded shadow-2xl overflow-hidden relative animate-in fade-in zoom-in duration-200">
            <button onClick={closeCheckout} className="absolute top-3 right-4 text-gray-400 hover:text-black text-xl">✕</button>
            
            <div className="p-5 border-b">
               <h2 className="text-xl font-bold">Checkout</h2>
               <p className="text-xs text-gray-500">Purchasing: <span className="font-bold">{selectedProduct.title}</span></p>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto max-h-[70vh]">
              <div className="flex gap-4 items-center bg-gray-50 p-3 rounded border">
                <img src={selectedProduct.img} className="w-16 h-16 object-contain bg-white border" />
                <div>
                  <p className="font-bold text-sm">{selectedProduct.title}</p>
                  <p className="text-[#B12704] font-bold text-lg">${selectedProduct.price}</p>
                </div>
              </div>

              <div className="grid gap-3">
                <label className="text-xs font-bold uppercase text-gray-600">Full Name</label>
                <input type="text" placeholder="John Doe" className="border p-2 rounded text-sm w-full outline-[#e47911]" />
                
                <label className="text-xs font-bold uppercase text-gray-600">Email Address</label>
                <input type="email" placeholder="john@example.com" className="border p-2 rounded text-sm w-full outline-[#e47911]" />
                
                <label className="text-xs font-bold uppercase text-gray-600">Shipping Address</label>
                <textarea placeholder="123 Main St, New York, NY 10001" className="border p-2 rounded text-sm w-full h-20 outline-[#e47911]" />
              </div>

              <div className="bg-white border rounded p-4 text-sm space-y-2">
                <div className="flex justify-between"><span>Items:</span><span>${selectedProduct.price}</span></div>
                <div className="flex justify-between"><span>Shipping:</span><span className="text-green-700 font-bold">FREE</span></div>
                <div className="flex justify-between text-green-700 font-medium">
                  <span>⚡ Instant Savings:</span>
                  <span>-${(selectedProduct.oldPrice - selectedProduct.price).toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-t pt-2 text-lg font-bold text-[#B12704]">
                  <span>Order Total:</span>
                  <span>${selectedProduct.price}</span>
                </div>
              </div>

              <button className="bg-[#ffa41c] hover:bg-[#fa8914] w-full py-3 rounded-lg font-bold text-sm shadow-md transition-colors" onClick={() => alert('Order Placed Successfully!')}>
                Place Your Order
              </button>
            </div>
            <div className="bg-gray-100 p-3 text-center text-[10px] text-gray-500">
               🔒 Secure checkout • 🚛 Free shipping
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
