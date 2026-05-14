import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'chat' | 'wallet' | 'me'>('home');
  const [darkMode] = useState(true);

  const services = [
    { icon: '💬', label: 'Instant Messaging', color: 'bg-blue-500/10' },
    { icon: '👥', label: 'Group Chats', color: 'bg-purple-500/10' },
    { icon: '📷', label: 'QR Payments', color: 'bg-emerald-500/10' },
    { icon: '✉️', label: 'Digital Envelopes', color: 'bg-amber-500/10' },
    { icon: '🧩', label: 'Mini Programs', color: 'bg-pink-500/10' },
    { icon: '🍔', label: 'Online Food', color: 'bg-orange-500/10' },
    { icon: '🎫', label: 'Ticket Bookings', color: 'bg-red-500/10' },
    { icon: '🚕', label: 'Cab Services', color: 'bg-yellow-500/10' },
    { icon: '📄', label: 'Bill Payments', color: 'bg-sky-500/10' },
    { icon: '✂️', label: 'Split Bills', color: 'bg-teal-500/10' },
    { icon: '🏛️', label: 'Official Accounts', color: 'bg-indigo-500/10' },
    { icon: '🪪', label: 'Digital IDs', color: 'bg-violet-500/10' },
    { icon: '📜', label: 'License / Certificate', color: 'bg-rose-500/10' },
    { icon: '📱', label: 'Phone Top-ups', color: 'bg-cyan-500/10' },
    { icon: '🎟️', label: 'Lottery Tickets', color: 'bg-lime-500/10' },
    { icon: '🏥', label: 'Medical Services', color: 'bg-fuchsia-500/10' },
    { icon: '👮', label: 'Police Reports', color: 'bg-slate-500/10' },
    { icon: '🎮', label: 'Gaming / Streams', color: 'bg-zinc-500/10' },
    { icon: '➕', label: 'Add Contacts', color: 'bg-neutral-500/10' },
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/95 border-b border-gold/20 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🌍</span>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-gold">AFRIKA</h1>
              <p className="text-[10px] text-gold/60 -mt-1">Everything Africa. One App.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 bg-zinc-900 rounded-full text-xs">🔥 47 day streak</div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        {/* HOME TAB */}
        {activeTab === 'home' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-1">Good evening, Savage 👋</h2>
              <p className="text-gray-400">What do you want to do today?</p>
            </div>

            {/* Quick Actions */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">QUICK ACTIONS</h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: '📷', label: 'Scan QR' },
                  { icon: '💸', label: 'Send Money' },
                  { icon: '🧾', label: 'Pay Bill' },
                  { icon: '🍕', label: 'Order Food' },
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900 hover:bg-zinc-800 active:scale-95 transition-all rounded-2xl p-4 text-center cursor-pointer">
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <div className="text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-400 mb-3">TRENDING IN AFRIKA</h3>
              <div className="bg-zinc-900 rounded-3xl p-5">
                <div className="flex items-center gap-4">
                  <div className="text-4xl">🎮</div>
                  <div className="flex-1">
                    <div className="font-semibold">Gaming Tournaments</div>
                    <div className="text-sm text-gray-400">Join live streams & win rewards</div>
                  </div>
                  <button className="px-5 py-2 bg-gold text-black text-sm font-semibold rounded-2xl">Join</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES TAB */}
        {activeTab === 'services' && (
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold mb-2">Services</h2>
              <input 
                type="text" 
                placeholder="Search services..." 
                className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-3.5 text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold/50"
              />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`${service.color} hover:scale-[1.02] active:scale-95 transition-all cursor-pointer rounded-3xl p-4 flex flex-col items-center justify-center text-center border border-white/5`}
                >
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <div className="text-xs font-medium leading-tight">{service.label}</div>
                </div>
              ))}
            </div>

            <p className="text-center text-[10px] text-gray-500 mt-8">Tap any service to open • 19 services available</p>
          </div>
        )}

        {/* CHAT TAB */}
        {activeTab === 'chat' && (
          <div className="pt-4">
            <h2 className="text-3xl font-bold mb-6">Messages</h2>
            <div className="space-y-3">
              {['Mama Textiles', 'AfriAI Assistant', 'Delivery Team', 'Savings Group'].map((name, i) => (
                <div key={i} className="flex items-center gap-4 bg-zinc-900 p-4 rounded-2xl active:bg-zinc-800">
                  <div className="w-12 h-12 bg-zinc-700 rounded-2xl flex items-center justify-center text-2xl">👤</div>
                  <div className="flex-1">
                    <div className="font-semibold">{name}</div>
                    <div className="text-sm text-gray-400">Tap to open chat</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WALLET TAB */}
        {activeTab === 'wallet' && (
          <div>
            <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
              <div className="text-sm text-gray-400">Available Balance</div>
              <div className="text-5xl font-bold text-gold mt-1">₦284,750</div>
              <div className="text-emerald-400 text-sm mt-1">+₦12,400 this week</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['Send Money', 'Receive', 'QR Pay', 'Split Bill'].map((action, i) => (
                <div key={i} className="bg-zinc-900 hover:bg-zinc-800 active:scale-[0.985] transition-all rounded-2xl p-5 text-center cursor-pointer">
                  <div className="text-3xl mb-2">💸</div>
                  <div className="font-semibold text-sm">{action}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ME TAB */}
        {activeTab === 'me' && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-zinc-700 rounded-2xl"></div>
              <div>
                <div className="font-bold text-xl">Savage ★</div>
                <div className="text-gold text-sm">@leo_savage01 • Level 12</div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              {['Digital ID', 'My Rewards (2,840 pts)', 'Saved Cards & Accounts', 'Transaction History', 'Settings'].map((item, i) => (
                <div key={i} className="bg-zinc-900 px-5 py-4 rounded-2xl active:bg-zinc-800 cursor-pointer">{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-around py-2 text-xs">
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'services', icon: '⚡', label: 'Services' },
            { id: 'chat', icon: '💬', label: 'Chat' },
            { id: 'wallet', icon: '💰', label: 'Wallet' },
            { id: 'me', icon: '👤', label: 'Me' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center px-4 py-1 transition-colors ${activeTab === tab.id ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="text-xl mb-0.5">{tab.icon}</span>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;