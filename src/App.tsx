import React from 'react';

const products = [
  { id: 1, tag: "HOT DEAL", title: "Elite Wireless Pods Pro", price: "89.99", reviews: "2,847", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
  { id: 2, tag: "TOP SELLER", title: "UltraSlim 4K Dash Cam", price: "119.99", reviews: "1,293", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300" },
  { id: 3, tag: "EXCLUSIVE", title: "SmartWatch Pro X7", price: "149.99", reviews: "3,156", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300" },
  { id: 4, tag: "LIMITED", title: "Portable Gaming Controller", price: "49.99", reviews: "987", img: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300" },
  { id: 5, tag: "POPULAR", title: "Wireless Charging Pad Trio", price: "54.99", reviews: "4,321", img: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=300" },
  { id: 6, tag: "PREMIUM", title: "Mini Projector 1080p", price: "249.99", reviews: "734", img: "https://images.unsplash.com/photo-1535016120720-40c646bebbdc?w=300" },
  { id: 7, tag: "BEST VALUE", title: "Mechanical Gaming Keyboard", price: "99.99", reviews: "2,103", img: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=300" },
  { id: 8, tag: "BEST SELLER", title: "Smart Security Camera 2K", price: "74.99", reviews: "1,876", img: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=300" }
];

export default function App() {
  return (
    <div className="font-sans text-[#0f1111]">
      {/* Top Black Bar */}
      <header className="bg-[#131921] text-white">
        <div className="flex items-center p-2 gap-4 max-w-[1500px] mx-auto">
          <div className="text-2xl font-bold border border-transparent hover:border-white p-1 px-2 text-[#febd69]">G-Shop</div>
          <div className="flex-1 flex h-10">
            <select className="bg-gray-100 text-black text-xs p-2 rounded-l border-r outline-none"><option>All</option></select>
            <input type="text" className="w-full p-2 text-black outline-none" placeholder="Search G-Shop..." />
            <button className="bg-[#febd69] px-5 rounded-r text-black font-bold">🔍</button>
          </div>
          <div className="text-xs font-bold leading-tight border border-transparent hover:border-white p-1 px-2">
            <p className="font-normal">Hello, Gurpreet</p>
            <p>Account & Lists</p>
          </div>
          <div className="text-xs font-bold leading-tight border border-transparent hover:border-white p-1 px-2">
            <p className="font-normal">Returns</p>
            <p>& Orders</p>
          </div>
          <div className="flex items-center font-bold border border-transparent hover:border-white p-1 px-2">
             <span className="text-2xl">🛒</span> <span>Cart</span>
          </div>
        </div>
        
        {/* Blue Sub Nav */}
        <div className="bg-[#232f3e] text-white flex gap-4 px-4 py-1.5 text-[13px] font-medium">
          <span>All Products</span>
          <span>Audio</span>
          <span>Wearables</span>
          <span>Gaming</span>
          <span>Electronics</span>
          <span>Smart Home</span>
          <span>Automotive</span>
          <span className="ml-auto text-[#febd69]">Track Order</span>
          <span className="font-bold text-[#febd69] border border-[#febd69] px-2">Admin Panel</span>
        </div>
      </header>

      <main className="max-w-[1500px] mx-auto flex p-4 gap-6">
        {/* Sidebar */}
        <aside className="w-48 flex-shrink-0 text-[13px]">
          <h3 className="font-bold mb-2">Department</h3>
          <ul className="space-y-1 text-gray-700">
            <li>All</li>
            <li>Audio</li>
            <li>Wearables</li>
            <li>Gaming</li>
            <li className="text-[#e47911] font-bold">Electronics</li>
            <li>Smart Home</li>
            <li>Automotive</li>
            <li>Accessories</li>
          </ul>
        </aside>

        {/* Product Section */}
        <section className="flex-1">
          <div className="border p-2 mb-4 bg-white flex justify-between items-center text-sm">
             <span>1-8 of 8 results in <span className="font-bold">Electronics</span></span>
             <span className="text-[#007185] cursor-pointer">Clear filters</span>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {products.map(p => (
              <div key={p.id} className="bg-white border hover:shadow-lg transition-shadow p-4 flex flex-col">
                <span className="bg-[#e47911] text-white text-[10px] font-bold px-2 py-0.5 w-fit mb-2">{p.tag}</span>
                <div className="h-40 flex items-center justify-center mb-4">
                   <img src={p.img} className="max-h-full object-contain" alt={p.title} />
                </div>
                <h2 className="text-sm font-medium mb-1 line-clamp-2">{p.title}</h2>
                <div className="text-xs text-[#007185] mb-2">⭐⭐⭐⭐⭐ {p.reviews}</div>
                <div className="flex items-baseline mb-3">
                  <span className="text-[10px] font-bold align-top">$</span>
                  <span className="text-xl font-bold">{p.price.split('.')[0]}</span>
                  <span className="text-[10px] font-bold">{p.price.split('.')[1]}</span>
                </div>
                <button className="bg-[#ffa41c] hover:bg-[#fa8914] w-full py-1.5 rounded-full text-xs font-bold mb-2 shadow-sm border border-[#ee940b]">Add to Cart</button>
                <button className="bg-[#ffd814] hover:bg-[#f7ca00] w-full py-1.5 rounded-full text-xs font-bold shadow-sm border border-[#fcd200]">Buy Now</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-10 bg-[#232f3e] text-white pt-10 pb-10">
        <div className="text-center bg-[#37475a] py-3 mb-10 text-sm hover:bg-[#485769] cursor-pointer">Back to top</div>
        <div className="max-w-[1000px] mx-auto grid grid-cols-4 text-xs gap-10 px-4">
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Get to Know Us</h4>
            <p>About G-Shop</p><p>Careers</p><p>Press Center</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Make Money with Us</h4>
            <p>Sell on G-Shop</p><p>Affiliate Program</p><p>Advertise Your Products</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Payment Products</h4>
            <p>G-Shop Business Card</p><p>Shop with Points</p><p>Reload Your Balance</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold text-sm">Let Us Help You</h4>
            <p>Track My Order</p><p>My Orders</p><p>Shipping Rates</p><p>Returns & Replacements</p>
          </div>
        </div>
      </footer>
    </div>
  );
            }

