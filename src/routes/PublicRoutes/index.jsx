import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandPage from "../../pages/LandPage";

function PublicRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={LandPage} />
      </Routes>
    </Router>
  );
}

export default PublicRoutes;