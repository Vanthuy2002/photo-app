import Header from '../Header/Header';
import Banner from '../Banner';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Banner title='Pick your amazing photo 😎' />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
