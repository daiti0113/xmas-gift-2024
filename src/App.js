import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Search } from 'lucide-react';

const GiftCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const products = [
    {
      id: 1,
      name: "Brady",
      price: 0,
      rating: 4.5,
      reviews: 128,
      image: "./brady_bag.png",
      url: "https://jp.brady1887.com/",
      prime: true
    },
    {
      id: 2,
      name: "adidas",
      price: 0,
      rating: 4.2,
      reviews: 85,
      image: "./samba.png",
      url: "https://www.adidas.jp/%E3%83%AC%E3%83%87%E3%82%A3%E3%83%BC%E3%82%B9-%E3%82%B7%E3%83%A5%E3%83%BC%E3%82%BA%E3%83%BB%E9%9D%B4-%E3%82%B9%E3%83%8B%E3%83%BC%E3%82%AB%E3%83%BC",
      prime: true
    },
    {
      id: 3,
      name: "IL BISONTE",
      price: 0,
      rating: 4.7,
      reviews: 256,
      image: "./ilbisonte.jpg",
      url: "https://www.ilbisonte.jp/",
      prime: true
    },
    {
      id: 4,
      name: "Refa",
      price: 0,
      rating: 4.3,
      reviews: 67,
      image: "./refa.jpg",
      url: "https://www.mtgec.jp/shop/c/c1010a110",
      prime: true
    },
    {
      id: 5,
      name: "ROSE BUD",
      price: 0,
      rating: 4.3,
      reviews: 92,
      image: "./rosebud.jpg",
      url: "https://www.rosebud-web.com/",
      prime: true
    },
    {
      id: 6,
      name: "8-1（EIGHT ONE）",
      price: 0,
      rating: 4.3,
      reviews: 57,
      image: "./eightone.jpg",
      url: "https://www.instagram.com/8_1eightone/",
      prime: true
    },
    {
      id: 7,
      name: "Clarks",
      price: 0,
      rating: 4.3,
      reviews: 273,
      image: "./clarks.png",
      url: "https://www.clarks.co.jp/",
      prime: true
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* ヘッダー */}
      <header className="bg-[#232f3f] text-white p-4">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
          <div className="flex items-center justify-between">
            <img src="./yamakon_logo.png" alt="Gift Catalog" width={100} height={36} />
            {/* モバイルのみアイコンを表示 */}
            <div className="flex items-center space-x-4 md:hidden">
              <Heart className="cursor-pointer" size={20} strokeWidth={2.5} />
              <ShoppingCart className="cursor-pointer" size={20} strokeWidth={2.5} />
            </div>
          </div>
          
          <div className="flex-1 md:mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="プレゼントを検索"
                className="w-full p-2 pl-4 pr-10 rounded text-black font-normal"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-2.5 text-gray-500" size={20} />
            </div>
          </div>
          
          {/* デスクトップのみアイコンを表示 */}
          <div className="hidden md:flex items-center space-x-4">
            <Heart className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </header>

      {/* メインコンテンツ（省略）... */}
      <main className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded"
                />
                <button className="absolute top-2 right-2 bg-white rounded-full p-1 shadow">
                  <Heart size={20} className="text-gray-500 hover:text-red-500" />
                </button>
              </div>
              
              <div className="mt-4">
                <h2 className="text-lg tracking-tight leading-tight text-gray-800">{product.name}</h2>
                <div className="flex items-baseline mt-2">
                  <span className="text-xs font-normal">￥</span>
                  <span className="text-xl font-medium tracking-tight">{product.price.toLocaleString()}</span>
                </div>
                
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>

                {product.prime && (
                  <div className="mt-2">
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded tracking-tight">
                      Prime
                    </span>
                  </div>
                )}

                <button onClick={() => window.open(product.url, "_blank")} className="w-full mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-normal py-2 px-4 rounded transition-colors">
                  詳しく見る
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GiftCatalog;