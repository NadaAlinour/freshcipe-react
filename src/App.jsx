import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/PageNotFound";
import AppRoutes from "./pages/router/AppRoutes";
import "./App.css";

function App() {
  return (
    <>
      <Navbar /> {/* might change navbar on some pages to just have the icon (like login) */ }
      <AppRoutes />
      {/*<Footer />*/}
    </>
  );
}

export default App;
