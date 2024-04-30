import Index  from './pages/Index';
import Cyber from './pages/Cyber'
import Linux from './pages/Linux';
import Dev from './pages/Dev';
import ContactUs from './pages/ContactUsNav';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
        <Routes>
          <Route index element={<Index/>} />
          <Route path="/UI-UX" element={<Cyber />} />
          <Route path="/Linux-Administration" element={<Linux/>} />
          <Route path="/Web-development" element={<Dev />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
