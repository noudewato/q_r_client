import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Lands from "./pages/landproperties/Lands";
import Properties from "./pages/properties/Properties";
import Items from "./pages/items/Items";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landproperties" element={<Lands />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/items" element={<Items />} />
    </Routes>
  );
}

export default App;
