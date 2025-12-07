import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import OriginalsStudio from '@/pages/OriginalsStudio';
import Karaoke from '@/pages/Karaoke';
import VoiceLab from '@/pages/VoiceLab';
import Discover from '@/pages/Discover';
import MyStudio from '@/pages/MyStudio';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<OriginalsStudio />} />
          <Route path="/karaoke" element={<Karaoke />} />
          <Route path="/voice-lab" element={<VoiceLab />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/my-studio" element={<MyStudio />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;