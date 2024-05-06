import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Lands from "./pages/landproperties/Lands";
import Properties from "./pages/properties/Properties";
import Items from "./pages/items/Items";
import LandDetails from "./pages/landproperties/LandDetails";
import PropertyDetails from "./pages/properties/PropertyDetails";
import ItemDetails from "./pages/items/ItemDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landproperties" element={<Lands />} />
      <Route path="/landproperties/:id" element={<LandDetails />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetails />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items/:id" element={<ItemDetails />} />
    </Routes>
  );
}

export default App;
