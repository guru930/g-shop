import React, { useState } from 'react';

// Product List (Sab Active Hai)
const INITIAL_PRODUCTS = [
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
  const [view, setView] = useState('home'); 
  const [orders, setOrders] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [profit, setProfit] = useState(0);

  const placeOrder = (e) => {
    e.preventDefault();
    const newOrder = {
      id: `#GS${Math.floor(Math.random()*9000)+1000}`,
      product: selectedProduct.title,
      price: selectedProduct.price,
      date: new Date().toLocaleDateString()
    };
    setOrders([newOrder, ...orders]);
    setProfit(prev => prev + (selectedProduct.price * 0.20)); // 20% Profit calculation
    setSelectedProduct(null);
    setView('success');
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Navigation Header */}
      <header className="bg-[#131921] text-white p-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div onClick={() => setView('home')} className="text-2xl font-bold text-[#febd69] cursor-pointer">G-Shop</div>
          <div className="flex-1 max-w-2xl flex">
            <input type="text" className="w-full p-2 rounded-l text-black outline-none" placeholder="Search products..." />
            <button className="bg-[#febd69] px-4 rounded-r text-black font-bold">🔍</button>
          </div>
          <div className="flex gap-4 text-xs font-bold items-center">
            <div className="cursor-pointer border border-transparent hover:border-white p-1">
              <p className="font-normal text-gray-400">Hello, Gurpreet</p>
              <p>Account & Lists</p>
            </div>
            <div onClick={() => setView('admin')} className="bg-[#febd69] text-black px-3 py-2 rounded font-black cursor-pointer">ADMIN</div>
          </div>
        </div>
      </header>

      {view === 'home' && (
        <main className="max-w-7xl mx-auto p-4 flex gap-6">
          <aside className="w-48 hidden md:block">
            <h3 className="font-bold border-b pb-2 mb-2">Category</h3>
            <ul className="text-sm space-y-2 text-gray-600">
              <li className="text-[#e47911] font-bold underline">Electronics</li>
              <li>Smart Home</li>
              <li>Gaming</li>
            </ul>
          </aside>
          <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INITIAL_PRODUCTS.map(p => (
              <div key={p.id} className="bg-white border p-4 flex flex-col hover:shadow-lg transition">
                <span className="bg-[#e47911] text-white text-[10px] font-bold px-2 py-0.5 w-fit mb-2">{p.tag}</span>
                <img src={p.img} className="h-40 object-contain mb-4 mx-auto" />
                <h2 className="text-sm font-bold mb-2 h-10 line-clamp-2">{p.title}</h2>
                <div className="text-2xl font-black mb-4">${p.price}</div>
                <button onClick={() => setSelectedProduct(p)} className="bg-[#ffd814] w-full py-2 rounded-full font-bold text-xs border border-[#fcd200]">Buy Now</button>
              </div>
            ))}
          </section>
        </main>
      )}

      {view === 'admin' && (
        <div className="max-w-5xl mx-auto p-10 bg-white shadow mt-10 rounded">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h1 className="text-2xl font-black uppercase">Admin Dashboard</h1>
            <button onClick={() => setView('home')} className="text-blue-600 font-bold">← Store</button>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-black text-[#febd69] p-6 rounded">
              <p className="text-xs font-bold mb-1">TOTAL PROFIT (20%)</p>
              <h2 className="text-4xl font-black">${profit.toFixed(2)}</h2>
            </div>
            <div className="bg-blue-50 p-6 rounded border border-blue-200">
              <p className="text-xs font-bold text-blue-600 mb-1">TOTAL ORDERS</p>
              <h2 className="text-4xl font-black text-blue-900">{orders.length}</h2>
            </div>
          </div>
          <table className="w-full text-left text-sm border">
            <thead className="bg-gray-100">
              <tr><th className="p-3">ID</th><th className="p-3">Product</th><th className="p-3">Price</th><th className="p-3">Status</th></tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id} className="border-t">
                  <td className="p-3 text-blue-600 font-bold">{o.id}</td>
                  <td className="p-3">{o.product}</td>
                  <td className="p-3 font-bold">${o.price}</td>
                  <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold">PAID</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {view === 'success' && (
        <div className="max-w-md mx-auto mt-20 p-10 bg-white text-center shadow-xl rounded border-t-8 border-green-500">
          <h1 className="text-3xl font-black mb-4">ORDER PLACED!</h1>
          <p className="text-gray-500 mb-6 font-medium">Customer details saved in Admin Panel.</p>
          <button onClick={() => setView('home')} className="bg-[#131921] text-white px-8 py-2 rounded-full font-bold">Go Back</button>
        </div>
      )}

      {/* CHECKOUT POPUP */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded shadow-2xl relative overflow-hidden animate-in zoom-in duration-200">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-xl">✕</button>
            <div className="p-6 border-b bg-gray-50 font-bold text-lg">Checkout Details</div>
            <form onSubmit={placeOrder} className="p-6 space-y-4">
              <div className="flex gap-4 p-3 border rounded bg-white items-center">
                <img src={selectedProduct.img} className="w-12 h-12 object-contain" />
                <p className="text-xs font-bold flex-1">{selectedProduct.title}</p>
                <p className="font-black text-[#B12704]">${selectedProduct.price}</p>
              </div>
              <input required type="text" placeholder="Full Name" className="w-full border p-3 rounded outline-[#e47911]" />
              <input required type="email" placeholder="Email" className="w-full border p-3 rounded outline-[#e47911]" />
              <textarea required placeholder="Full Shipping Address (US/Canada/UK)" className="w-full border p-3 rounded h-20 outline-[#e47911]" />
              <button type="submit" className="w-full bg-[#ffa41c] hover:bg-[#fa8914] py-4 rounded font-black text-lg shadow-lg">PLACE YOUR ORDER</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
