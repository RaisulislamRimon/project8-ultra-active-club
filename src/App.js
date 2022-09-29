import "./App.css";
import Header from "./components/Header/Header";
import MainClub from "./components/MainClub/MainClub";
import "react-toastify/dist/ReactToastify.css";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainClub />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
