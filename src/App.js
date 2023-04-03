import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbarre } from './components/navbarre/navbarre';
import { CalendarPage } from './pages/calendar-page';
import { HomePage } from './pages/homepage/home-page';
import { LibraryPage } from './pages/library-page/library-page';

function App() {
  return (
    <>
      <BrowserRouter>
            <Navbarre></Navbarre>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="/library" element={<LibraryPage></LibraryPage>}></Route>
              <Route path="/calendar" element={<CalendarPage></CalendarPage>}></Route>
            </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
