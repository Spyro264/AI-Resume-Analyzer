import { Routes, Route } from "react-router-dom";
import Resumeoverview from "../Pages/Resumeoverview";

import Home from "../Pages/Home";

const Index = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/resumeoverview" element={<Resumeoverview />} />
    </Routes>
  );
};

export default Index;
