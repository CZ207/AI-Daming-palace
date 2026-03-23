import React, { useState } from 'react';
import TopNav from '../components/TopNav';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HanyuanSearch() {
  const [query, setQuery] = useState('');
  const recommendations = ['含元殿复原图', '大朝正宫', '龙首塬', '栖凤阁', '翔鸾阁', '含元殿遗址'];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white font-sans">
      <TopNav />
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=2000&auto=format&fit=crop" 
          alt="Hanyuan Hall" 
          className="w-full h-full object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-medium tracking-widest mb-4 drop-shadow-2xl">数字含元殿</h1>
          <p className="text-gray-300 text-sm md:text-base tracking-widest mb-12 text-center">
            检索含元殿的历史文献、复原图像与考古资料
          </p>

          {/* Search Bar */}
          <div className="w-full relative group">
            <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full transition-all group-hover:bg-red-600/30"></div>
            <div className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full overflow-hidden p-1">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="输入关键词，如“含元殿复原图”..."
                className="flex-1 bg-transparent px-6 py-3 md:py-4 text-white placeholder-white/50 outline-none text-sm md:text-base"
              />
              <button className="bg-red-700 hover:bg-red-600 text-white p-3 md:p-4 rounded-full transition-colors flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
            <span className="text-gray-400 text-sm py-1">推荐搜索：</span>
            {recommendations.map((rec, idx) => (
              <button
                key={idx}
                onClick={() => setQuery(rec)}
                className="text-xs md:text-sm px-4 py-1.5 rounded-full border border-white/20 text-gray-300 hover:bg-white/10 hover:text-white transition-colors"
              >
                {rec}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
