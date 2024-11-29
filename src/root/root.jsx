import { Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      <Route element={<h1>Navbar</h1>}>
        <Route path="/" element={<h1 className="text-white">Home</h1>} />
        <Route path="about" element={<h1>About</h1>} />
      </Route>
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default Root;
