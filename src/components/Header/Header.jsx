import { Link, NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row className='justify-content-between'>
          <Col sx='auto'>
            <Link to='#!' className='header_link header_title'>
              Photo App
            </Link>
          </Col>

          <Col sx='auto' className='right'>
            <NavLink to='/photos' className='header_link header_title'>
              Actions
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
