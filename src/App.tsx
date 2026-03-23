/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Architecture from './pages/Architecture';
import History from './pages/History';
import HanyuanSearch from './pages/HanyuanSearch';
import AIChat from './pages/AIChat';
import CursorEffects from './components/CursorEffects';

export default function App() {
  return (
    <Router>
      <CursorEffects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
        <Route path="/history" element={<History />} />
        <Route path="/hanyuan" element={<HanyuanSearch />} />
        <Route path="/ai" element={<AIChat />} />
      </Routes>
    </Router>
  );
}
