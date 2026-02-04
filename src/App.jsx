import { Route, Routes } from "react-router-dom";
import { ModalContextProvider } from "./context/ModalProvider";
import { Home } from "./layouts/Home";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Privacy } from "./layouts/Legal/Privacy";
import { Rights } from "./layouts/Legal/Rights";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div>
      <ModalContextProvider>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/rights" element={<Rights />} />
        </Routes>
        <Footer />
      </ModalContextProvider>
    </div>
  );
}

export default App;
