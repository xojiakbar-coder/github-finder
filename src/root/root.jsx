import Layout from "./layout";
import navbar_items from "../utils/navbar";
import { Route, Routes } from "react-router-dom";

const Root = () => {
  return (
    <Routes>
      {navbar_items.map(({ id, href, element: Element }) => (
        <Route
          key={id}
          path={href}
          element={
            <Layout>
              <Element />
            </Layout>
          }
        />
      ))}
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default Root;
