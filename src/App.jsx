import { Route, Routes } from "react-router-dom";
import MainDashboard from "./components/MainDashboard";
import Guides from "./pages/Guides";
import Reference from "./pages/Reference";
import Changelog from "./pages/Changelog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainDashboard />}>
          {/* Guides */}
          <Route index element={<Guides />} />
          <Route path="guides">
            <Route index element={<Guides />} />
            <Route path=":slug" element={<Guides />} />
          </Route>

          {/* Reference */}
          <Route path="reference">
            <Route index element={<Reference />} />
            <Route path=":slug" element={<Reference />} />
          </Route>

          {/* Changelog */}
          <Route path="changelog" element={<Changelog />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

