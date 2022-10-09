import CopyRight from "./components/CopyRight";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="divide-y divide-slate-200">
      <Homepage />
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
