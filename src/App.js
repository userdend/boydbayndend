import Navbar from "./component/nav";
import About from "./component/about";
import Work from "./component/work";
import Contact from "./component/contact";
import Footer from "./component/footer";
import "./App.scss";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
