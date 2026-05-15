import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'chat' | 'profile'>('home');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

const services = [
  { icon: '💬', label: 'Messaging' },           // Merged Instant Messaging + Group Chats
  { icon: '📷', label: 'QR Payments' },
  { icon: '✉️', label: 'Digital Envelopes' },
  { icon: '🧩', label: 'Mini Programs' },
  { icon: '🍔', label: 'Online Food' },
  { icon: '🎫', label: 'Ticket Bookings' },
  { icon: '🚕', label: 'Cab Services' },
  { icon: '💰', label: 'Payments' },            // Merged Bill Payments + Phone Top-ups
  { icon: '✂️', label: 'Split Bills' },
  { icon: '🏛️', label: 'Official Accounts' },
  { icon: '🪪', label: 'Digital IDs' },
  { icon: '📜', label: 'License / Certificate' },
  { icon: '🚨', label: 'Emergency' },           // Merged Medical + Police
  { icon: '🎟️', label: 'Lottery Tickets' },
  { icon: '🎮', label: 'Gaming / Streams' },
  { icon: '➕', label: 'Add Contacts' },
];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-zinc-100 dark:bg-zinc-900 rounded-2xl mb-6 border border-black/10 dark:border-white/10">
                <span className="text-5xl">🌍</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter">AFRIKA</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2">Everything Africa. One App.</p>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-black/10 dark:border-white/10 rounded-3xl p-8">
              <div className="flex mb-6 bg-zinc-100 dark:bg-zinc-950 rounded-2xl p-1">
                <button className="flex-1 py-2.5 rounded-2xl text-sm font-medium bg-white dark:bg-white text-black shadow-sm">Login</button>
                <button className="flex-1 py-2.5 rounded-2xl text-sm font-medium text-gray-500 dark:text-gray-400">Sign Up</button>
              </div>

              <div className="flex mb-5 text-sm">
                <button className="flex-1 pb-2 border-b-2 border-black dark:border-white text-black dark:text-white">Phone Number</button>
                <button className="flex-1 pb-2 border-b-2 border-transparent text-gray-400">Email</button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400 block mb-1.5">Phone Number</label>
                  <div className="flex">
                    <div className="bg-zinc-100 dark:bg-zinc-950 border border-black/10 dark:border-white/10 px-4 flex items-center rounded-l-2xl text-sm">+234</div>
                    <input type="tel" placeholder="801 234 5678" className="flex-1 bg-zinc-100 dark:bg-zinc-950 border border-black/10 dark:border-white/10 px-5 py-3.5 rounded-r-2xl text-sm focus:outline-none" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400 block mb-1.5">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-zinc-100 dark:bg-zinc-950 border border-black/10 dark:border-white/10 px-5 py-3.5 rounded-2xl text-sm focus:outline-none" />
                </div>
              </div>

              <button onClick={() => setIsLoggedIn(true)} className="mt-6 w-full bg-black dark:bg-white hover:bg-zinc-800 dark:hover:bg-gray-200 transition-all text-white dark:text-black font-semibold py-4 rounded-2xl">
                Login to AFRIKA
              </button>

              <p className="text-center text-[10px] text-gray-400 mt-4">By continuing, you agree to our Terms & Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white pb-20">
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-black/95 border-b border-black/10 dark:border-white/10 backdrop-blur-lg">
     {/* Header without logo */}
<div className="flex items-center justify-between">
  <div></div> {/* Empty space on left */}
  <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xl">
    {theme === 'dark' ? '☀️' : '🌙'}
  </button>
</div>            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      {activeTab === 'home' && (
        <div className="max-w-7xl mx-auto px-5 pt-6">
          <div className="mb-8">
            <div className="text-sm text-gray-500 dark:text-gray-400">Good evening</div>
            <h2 className="text-3xl font-semibold tracking-tight">Savage</h2>
          </div>

          <div className="mb-8">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 px-1">QUICK ACTIONS</div>
            <div className="grid grid-cols-4 gap-3">
              {[{icon:'📷',label:'Scan to Pay'},{icon:'💸',label:'Send'},{icon:'🧾',label:'Pay Bills'},{icon:'🍕',label:'Food'}].map((item,i)=>(
                <div key={i} className="bg-zinc-100 dark:bg-[#111] active:scale-[0.985] transition-all rounded-2xl p-4 text-center border border-black/5 dark:border-white/5">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-xs font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-4 px-1">
              <div className="text-sm font-medium text-gray-500 dark:text-gray-400">SERVICES</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {services.map((service, index) => (
                <div key={index} className="bg-zinc-100 dark:bg-[#111] active:scale-[0.985] transition-all rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-black/5 dark:border-white/5">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <div className="text-xs font-medium">{service.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'chat' && (
        <div className="max-w-7xl mx-auto px-5 pt-6">
          <h2 className="text-2xl font-semibold mb-6 tracking-tight">Messages</h2>
          <div className="space-y-2">
            {['Mama Textiles', 'AfriAI Assistant', 'Delivery Partner', 'Savings Circle'].map((name, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-100 dark:bg-[#111] active:bg-zinc-200 dark:active:bg-[#1a1a1a] p-4 rounded-2xl border border-black/5 dark:border-white/5">
                <div className="w-11 h-11 bg-zinc-300 dark:bg-zinc-700 rounded-2xl flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="font-medium">{name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Tap to open conversation</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="max-w-7xl mx-auto px-5 pt-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-zinc-300 dark:bg-zinc-700 rounded-2xl"></div>
            <div>
              <div className="font-semibold text-xl">Savage ★</div>
              <div className="text-emerald-600 dark:text-emerald-400 text-sm">Verified • Level 12</div>
            </div>
          </div>

          <div className="bg-zinc-100 dark:bg-[#111] border border-black/5 dark:border-white/5 rounded-3xl p-6 mb-6">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">AVAILABLE BALANCE</div>
            <div className="text-5xl font-semibold tracking-tighter text-emerald-600 dark:text-emerald-400">₦284,750</div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {['Send Money', 'Receive', 'QR Code', 'Split Bill'].map((label, i) => (
              <div key={i} className="bg-zinc-100 dark:bg-[#111] active:bg-zinc-200 dark:active:bg-[#1a1a1a] border border-black/5 dark:border-white/5 rounded-2xl p-5 text-center text-sm font-medium cursor-pointer">{label}</div>
            ))}
          </div>

          <div className="space-y-px bg-zinc-100 dark:bg-[#111] rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
            {['Digital ID', 'Rewards & Points', 'Transaction History', 'Security', 'Help & Support'].map((item, i) => (
              <div key={i} className="px-5 py-4 active:bg-zinc-200 dark:active:bg-[#1a1a1a] cursor-pointer text-sm border-b border-black/5 dark:border-white/5 last:border-none">{item}</div>
            ))}
          </div>

          <button onClick={() => setIsLoggedIn(false)} className="mt-8 w-full py-3.5 text-sm text-red-600 dark:text-red-400">Log Out</button>
        </div>
      )}

      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-black/10 dark:border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-around py-[10px]">
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'chat', icon: '💬', label: 'Chat' },
            { id: 'profile', icon: '👤', label: 'Profile' },
          ].map((tab) => (
            {/* Bottom Navigation - 3 Icons Clean Design */}
{/* Bottom Navigation - 3 Icons */}
<nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 z-50">
  <div className="flex items-center justify-around py-3 px-8 max-w-md mx-auto">
    
    {/* Home */}
    <button 
      onClick={() => setActiveTab('home')}
      className={`flex flex-col items-center text-white active:scale-95 transition-transform ${activeTab === 'home' ? 'text-emerald-400' : 'text-gray-400'}`}
    >
      <span className="text-3xl">🏠</span>
      <span className="text-xs mt-1">Home</span>
    </button>

    {/* Chat */}
    <button 
      onClick={() => setActiveTab('chat')}
      className={`flex flex-col items-center text-white active:scale-95 transition-transform ${activeTab === 'chat' ? 'text-emerald-400' : 'text-gray-400'}`}
    >
      <span className="text-3xl">💬</span>
      <span className="text-xs mt-1">Chat</span>
    </button>

    {/* Profile */}
    <button 
      onClick={() => setActiveTab('profile')}
      className={`flex flex-col items-center text-white active:scale-95 transition-transform ${activeTab === 'profile' ? 'text-emerald-400' : 'text-gray-400'}`}
    >
      <span className="text-3xl">👤</span>
      <span className="text-xs mt-1">Profile</span>
    </button>

  </div>
</nav>
