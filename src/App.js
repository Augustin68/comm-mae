import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Navbarre } from './components/navbarre/navbarre';
import { CalendarPage } from './pages/calendar-page';
import { HomePage } from './pages/homepage/home-page';
import { libraryBooks } from './pages/library-page/library-books';
import { LibraryPage } from './pages/library-page/library-page';
import ThemeContext from './providers/ThemeContext';

function App() {
  return (
    <>
      <BrowserRouter>
          <ThemeContext>
            <Navbarre></Navbarre>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="library">
                <Route index={true} element={<LibraryPage></LibraryPage>}></Route>
                {
                  libraryBooks.map((book, index) => (
                    <Route key={index} path={`/library/${book.url}`} element={book.page}></Route>
                  ))
                }
              </Route>
              <Route path="calendar" element={<CalendarPage></CalendarPage>}></Route>
            </Routes>
          </ThemeContext>
      </BrowserRouter>
    </>
    
  );
}

export default App;
