import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'chat' | 'profile'>('home');

  const services = [
    { icon: '💬', label: 'Instant Messaging' },
    { icon: '👥', label: 'Group Chats' },
    { icon: '📷', label: 'QR Payments' },
    { icon: '✉️', label: 'Digital Envelopes' },
    { icon: '🧩', label: 'Mini Programs' },
    { icon: '🍔', label: 'Online Food' },
    { icon: '🎫', label: 'Ticket Bookings' },
    { icon: '🚕', label: 'Cab Services' },
    { icon: '📄', label: 'Bill Payments' },
    { icon: '✂️', label: 'Split Bills' },
    { icon: '🏛️', label: 'Official Accounts' },
    { icon: '🪪', label: 'Digital IDs' },
    { icon: '📜', label: 'License / Certificate' },
    { icon: '📱', label: 'Phone Top-ups' },
    { icon: '🎟️', label: 'Lottery Tickets' },
    { icon: '🏥', label: 'Medical Services' },
    { icon: '👮', label: 'Police Reports' },
    { icon: '🎮', label: 'Gaming / Streams' },
    { icon: '➕', label: 'Add Contacts' },
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
          <div className="px-3 py-1 bg-zinc-900 rounded-full text-xs">🔥 47 day streak</div>
        </div>
      </header>

      {/* HOME TAB */}
      {activeTab === 'home' && (
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-1">Good evening, Savage 👋</h2>
            <p className="text-gray-400">What do you want to do today?</p>
          </div>

          {/* Quick Actions */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-400">QUICK ACTIONS</h3>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: '📷', label: 'Scan QR' },
                { icon: '💸', label: 'Send Money' },
                { icon: '🧾', label: 'Pay Bill' },
                { icon: '🍕', label: 'Order Food' },
              ].map((item, i) => (
                <div key={i} className="bg-zinc-900 active:scale-95 transition-all rounded-2xl p-4 text-center cursor-pointer">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-xs font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-gray-400">ALL SERVICES</h3>
              <span className="text-xs text-gold">See all →</span>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-zinc-900 hover:bg-zinc-800 active:scale-[1.02] transition-all cursor-pointer rounded-2xl p-4 flex flex-col items-center justify-center text-center border border-white/5"
                >
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <div className="text-[11px] font-medium leading-tight">{service.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-6" />
        </div>
      )}

      {/* CHAT TAB */}
      {activeTab === 'chat' && (
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <h2 className="text-3xl font-bold mb-6">Messages</h2>
          <div className="space-y-3">
            {['Mama Textiles', 'AfriAI Assistant', 'Delivery Team', 'Savings Group', 'Support'].map((name, i) => (
              <div key={i} className="flex items-center gap-4 bg-zinc-900 active:bg-zinc-800 p-4 rounded-2xl cursor-pointer">
                <div className="w-12 h-12 bg-zinc-700 rounded-2xl flex items-center justify-center text-2xl">👤</div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold">{name}</div>
                  <div className="text-sm text-gray-400 truncate">Tap to open chat</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PROFILE TAB (Wallet + Me combined) */}
      {activeTab === 'profile' && (
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-zinc-700 rounded-2xl"></div>
            <div>
              <div className="font-bold text-xl">Savage ★</div>
              <div className="text-gold text-sm">@leo_savage01 • Level 12</div>
            </div>
          </div>

          {/* Wallet Balance */}
          <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
            <div className="text-sm text-gray-400">Available Balance</div>
            <div className="text-5xl font-bold text-gold mt-1">₦284,750</div>
            <div className="text-emerald-400 text-sm mt-1">+₦12,400 this week</div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {['Send Money', 'Receive', 'QR Pay', 'Split Bill'].map((action, i) => (
              <div key={i} className="bg-zinc-900 active:scale-[0.985] transition-all rounded-2xl p-5 text-center cursor-pointer">
                <div className="text-3xl mb-2">💸</div>
                <div className="font-semibold text-sm">{action}</div>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            {['Digital ID', 'My Rewards (2,840 pts)', 'Saved Cards & Accounts', 'Transaction History', 'Settings'].map((item, i) => (
              <div key={i} className="bg-zinc-900 px-5 py-4 rounded-2xl active:bg-zinc-800 cursor-pointer">{item}</div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation - 3 Tabs */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-white/10 z-50">
        <div className="max-w-7xl mx-auto flex justify-around py-2 text-xs">
          {[
            { id: 'home', icon: '🏠', label: 'Home' },
            { id: 'chat', icon: '💬', label: 'Chat' },
            { id: 'profile', icon: '👤', label: 'Profile' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex flex-col items-center px-6 py-1 transition-colors ${activeTab === tab.id ? 'text-gold' : 'text-gray-400 hover:text-white'}`}
            >
              <span className="text-2xl mb-0.5">{tab.icon}</span>
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;