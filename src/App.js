import Footer from "./components/Footer";
import Header from "./components/Header";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Title />
      <Subtitle />
      <Footer />
    </div>
  );
}

export default App;
