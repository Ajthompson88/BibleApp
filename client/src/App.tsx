import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReadingPlan from './pages/ReadingPlan';
import QNA from './pages/QNA';
import About from './pages/About';
import Questions from './pages/Questions';
import VerseLookup from './pages/VerseLookUp'; // or 'VerseLookUp' if that’s your filename

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading-plan" element={<ReadingPlan />} />
            <Route path="/qna" element={<QNA />} />
            <Route path="/about" element={<About />} />
            <Route path="/questions" element={<Questions />} />
            <Route path="/verse-lookup" element={<VerseLookup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
