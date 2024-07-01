import { Link, Route, Routes } from "react-router-dom";
import Card from "./Card";

const MFE1Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <h1> route 1</h1>
            
          </>
        }
      />
      <Route path="/cart" element={<Card/>} />
    </Routes>
  );
};
export default MFE1Router;
