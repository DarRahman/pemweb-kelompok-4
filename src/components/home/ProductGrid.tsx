export default function ProductGrid() {
    const dummyProducts = [
      { id: 1, name: "Xiaomi 17 Ultra", price: "Mulai Rp 19.999.000", img: "📱", desc: "Leica 200MP", featured: true },
      { id: 2, name: "Xiaomi 17", price: "Mulai Rp 14.999.000", img: "📱", desc: "Leica 50MP", featured: false },
      { id: 3, name: "Xiaomi Pad 8", price: "Mulai Rp 7.199.000", img: "💻", desc: "144Hz AMOLED", featured: false },
      { id: 4, name: "Xiaomi Watch 5", price: "Mulai Rp 4.699.000", img: "⌚", desc: "Wear OS", featured: false },
      { id: 5, name: "REDMI Buds 8 Pro", price: "Mulai Rp 999.000", img: "🎧", desc: "ANC 50dB", featured: false },
      { id: 6, name: "Xiaomi TV A Pro", price: "Mulai Rp 5.499.000", img: "📺", desc: "4K HDR", featured: false },
      { id: 7, name: "Mijia Robot", price: "Mulai Rp 4.299.000", img: "🤖", desc: "Vacuum Mop", featured: false },
      { id: 8, name: "Mi Screen Bar", price: "Mulai Rp 599.000", img: "💡", desc: "Eye Care", featured: false },
    ];
  
    return (
      <section className="w-full bg-transparent py-8 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end pb-3 mb-6">
            <div className="flex items-center gap-4">
               <h2 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">Pilihan Harian <span className="text-yellow-500">⚡</span> &gt;</h2>
               <div className="hidden md:flex items-center gap-2 text-sm font-bold text-[#ff6700]">
                  Berakhir dalam
                  <div className="flex gap-1 items-center bg-gray-900 text-white px-2 py-1 rounded-md text-xs font-mono ml-1">
                     <span>23</span> : <span>41</span> : <span>35</span>
                  </div>
               </div>
            </div>
          </div>
    
          {/* Main Content Area - Flat Design */}
          <div className="flex flex-col gap-6">
             
             {/* Big Hero Product Banner matching POCO style */}
             <div className="w-full bg-white rounded-[2rem] flex flex-col md:flex-row overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                {/* Left Dark Area with tilted "miring" product */}
                <div className="w-full md:w-1/2 bg-[#1a1a1a] p-8 md:p-12 flex items-center justify-center relative overflow-hidden group min-h-[300px] md:min-h-0">
                    {/* Horizontal Tilted Phone */}
                    <div className="relative w-[70%] aspect-[2.2/1] bg-gradient-to-br from-[#2a2a2a] to-black border border-gray-700/50 rounded-2xl md:rounded-[2rem] shadow-2xl flex items-center justify-center -rotate-6 group-hover:-rotate-3 transition-transform duration-500 z-10 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/5 before:to-transparent before:rounded-2xl md:before:rounded-[2rem]">
                        <div className="text-white text-[10px] sm:text-xs font-bold font-sans tracking-widest absolute left-8 top-1/2 -translate-y-1/2 opacity-60">XIAOMI</div>
                        {/* Camera bumps */}
                        <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 p-2 bg-[#111] rounded-3xl border border-white/5 shadow-inner">
                           <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-600 bg-black flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]"><div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-blue-900/40"></div></div>
                           <div className="w-8 h-8 md:w-12 md:h-12 rounded-full border border-gray-600 bg-black flex items-center justify-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.1)]"><div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-blue-900/40"></div></div>
                        </div>
                    </div>
                    {/* Floating accessory badge */}
                    <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-2 w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center z-20 border border-white/20 shadow-2xl">
                       <div className="text-2xl md:text-3xl drop-shadow-lg">🎧</div>
                       <span className="text-[8px] md:text-[9px] font-medium text-white/90 mt-1">+Rp 249.000</span>
                    </div>
                </div>
                {/* Right White Area with details */}
                <div className="w-full md:w-1/2 bg-white flex flex-col justify-center p-8 md:p-14">
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-2 md:mb-3">
                       <h3 className="text-gray-900 text-2xl md:text-[32px] font-bold leading-none tracking-tight">Xiaomi 17 Max Ultra</h3>
                       <span className="text-xs text-gray-700 border border-gray-300 rounded-full px-3 py-1 bg-white font-medium">16 GB + 1 TB</span>
                    </div>
                    <p className="text-gray-500 text-sm md:text-[15px] mb-4 md:mb-6 leading-relaxed">Flagship Snapdragon® 8 Gen 4 Ultra</p>
                    <div className="inline-block bg-[#ff6700] text-white text-xs font-bold px-3 py-1.5 rounded-full w-fit mb-8 md:mb-12 shadow-sm">
                       Hemat Rp 500.000
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mt-auto gap-4">
                       <div>
                         <div className="flex items-baseline gap-2 mb-1">
                           <span className="text-3xl md:text-[34px] font-bold text-gray-900 tracking-tight">Rp 19.499.000</span>
                           <span className="text-sm md:text-[15px] text-gray-400 line-through font-medium">Rp 19.999.000</span>
                         </div>
                       </div>
                       <button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3.5 rounded-[14px] font-bold text-[15px] hover:bg-black hover:scale-[1.02] shadow-lg shadow-gray-900/20 transition-all duration-300">Beli sekarang</button>
                    </div>
                </div>
             </div>

             {/* Right Grid Smaller Cards */}
             <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-2">
                {dummyProducts.filter(p => !p.featured).slice(0, 4).map((product) => (
                  <div key={product.id} className="bg-white rounded-[2rem] hover:-translate-y-1 hover:shadow-xl shadow-gray-200/50 transition-all duration-300 flex flex-col items-center justify-between p-6 md:p-8 text-center cursor-pointer group border border-gray-100">
                    {product.name.includes("Mijia") || product.name.includes("17") ? 
                      <span className="bg-yellow-100 border border-yellow-200 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-sm absolute top-6 left-6 hidden md:block">Baru</span> : null
                    }
                    {/* Image Box */}
                    <div className="w-24 h-24 md:w-32 md:h-32 mb-6 mt-4 flex items-center justify-center text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-lg">
                      {product.img}
                    </div>
                    
                    {/* Details */}
                    <div className="flex flex-col items-center w-full">
                      <h3 className="font-bold text-gray-900 text-[16px] md:text-[18px] mb-1 leading-tight">{product.name}</h3>
                      <p className="text-gray-500 text-[12px] md:text-[13px] mb-4 font-medium">{product.desc}</p>
                      <p className="text-[#ff6700] font-bold text-[15px] md:text-[17px] mt-auto tracking-tight">{product.price}</p>
                    </div>
                  </div>
                ))}
             </div>

          </div>
        </div>
      </section>
    );
  }
