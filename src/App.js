import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { NavBar } from './components/NavBar';
import { CalendarPage } from './pages/calendar-page';
import { HomePage } from './pages/homepage/home-page';
import { LibraryCategories } from './pages/library-page/library-books';
import { LibraryPage } from './pages/library-page/library-page';
import { ThemeContextProvider } from './providers/ThemeContext';
import SwitchThemeButton from './components/SwitchThemeButton';
import { ProductPage } from './pages/product-page';

// const CurrentThemeContext = createContext('themeOne');

function App() {





  return (
    <>
      <BrowserRouter>
          <ThemeContextProvider>
            <SwitchThemeButton></SwitchThemeButton>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={<HomePage></HomePage>}></Route>
              <Route path="library">
                <Route index={true} element={<LibraryPage></LibraryPage>}></Route>
                {
                  Object.keys(LibraryCategories).map((categoryEnum, index) => (
                    <Route key={index} path={`/library/${categoryEnum}`} element={<ProductPage category={LibraryCategories[categoryEnum]}></ProductPage>}></Route>
                  ))
                }
              </Route>
              <Route path="calendar" element={<CalendarPage></CalendarPage>}></Route>
            </Routes>
          </ThemeContextProvider>
      </BrowserRouter>
    </>
    
  );
}

export default App;
