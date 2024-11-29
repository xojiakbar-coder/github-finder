import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
