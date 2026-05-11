import { useState, useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-black text-white' : 'bg-white text-black'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 dark:bg-black/90 border-b border-gold/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            <h1 className="text-2xl font-bold tracking-tight text-gold">AFRIKA HUB</h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            {isLoggedIn ? (
              <button onClick={() => setIsLoggedIn(false)} className="px-5 py-2 text-sm font-medium rounded-full border border-gold/50 hover:bg-gold hover:text-black transition-all">
                Logout
              </button>
            ) : (
              <button onClick={() => setIsLoggedIn(true)} className="px-6 py-2.5 bg-gold text-black font-semibold rounded-full hover:bg-amber-400 transition-all">
                Login
              </button>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">Africa's Trusted Escrow Marketplace</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Buy and sell safely with secure escrow protection across Africa</p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: 'Ankara Fabric', price: '₦15,000', img: '🧵' },
            { name: 'Shea Butter', price: '₦10,000', img: '🧴' },
            { name: 'Kente Cloth', price: '$50', img: '🪢' },
            { name: 'Artisan Coffee', price: '₦8,000', img: '☕' },
          ].map((product, i) => (
            <div key={i} className="bg-zinc-900 dark:bg-zinc-900 border border-gold/10 rounded-3xl overflow-hidden hover:border-gold/50 transition-all group">
              <div className="h-48 flex items-center justify-center text-7xl bg-gradient-to-br from-amber-900/30 to-black">
                {product.img}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                <p className="text-2xl font-bold text-gold mb-4">{product.price}</p>
                <button className="w-full py-3.5 bg-gold hover:bg-amber-400 text-black font-semibold rounded-2xl transition-all active:scale-95">
                  BUY WITH ESCROW
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Floating AfriAI */}
      <div className="fixed bottom-20 right-6 bg-zinc-900 border border-gold/30 rounded-3xl p-4 shadow-2xl max-w-[280px]">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-gradient-to-br from-gold to-amber-500 rounded-2xl flex items-center justify-center text-black font-bold">AI</div>
          <div>
            <p className="font-semibold">AfriAI</p>
            <p className="text-xs text-gray-400">Ask me anything</p>
          </div>
        </div>
        <input type="text" placeholder="How does escrow work?" className="w-full bg-black border border-gold/30 rounded-2xl px-4 py-3 text-sm" />
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gold/20 py-2">
        <div className="flex justify-around max-w-7xl mx-auto text-xs">
          {['🏠 Home', '🛍️ Shop', '📦 Sell', '🔒 Escrow', '👤 Me'].map((item, i) => (
            <div key={i} className="text-center cursor-pointer hover:text-gold transition-colors py-1 px-3">{item}</div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;