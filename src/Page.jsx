import { useContext } from "react";
import MovieList from "./cine/MovieList";
import { ThemeContext } from "./context/index";
import Footer from "./Footer";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
const Page = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`inset-0 ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="items-center p-4 grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
