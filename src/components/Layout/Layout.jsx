/* eslint-disable react/prop-types */
import Footer from './Footer/Footer';
import Navbar from './Navabar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
