import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ReadingPlan from './pages/ReadingPlan';
import QNA from './pages/QNA';


function App() {
  return (
    <Router>
      <Navbar />
      <div classname="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading-plan" element={<ReadingPlan />} />
          <Route path="/qna" element={<QNA />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App
