import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/partials/Header";
import Footer from "./components/partials/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import { createContext, useState } from "react";
import { useAuth } from "./hooks/useAuth";

export const UserContext = createContext({
  loggedIn: false,
  setLoggedIn: () => {}
});

function App() {
  const {token} = useAuth();
  const [loggedIn, setLoggedIn] = useState(token?true:false);
  return (
    <BrowserRouter>
      <UserContext.Provider  value={{loggedIn, setLoggedIn}}>
        <div className="grid-container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </UserContext.Provider >
    </BrowserRouter>
  );
}

export default App;
