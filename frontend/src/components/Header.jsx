import { Nav, Navbar, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from '../assets/logo.png';

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart)

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='logo' style={{ height: '30px', marginRight: '10px' }} />
            TheOverpricedStore
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link as={Link} to='/cart'>
                <FaShoppingCart /> Cart
                {
                  cartItems.length > 0 && (
                    <Badge pill bg='success' style={{marginLeft: '5px'}}>
                      { cartItems.reduce((a,c) => a + c.qty, 0)}
                    </Badge>
                  )
                }
              </Nav.Link>
              <Nav.Link as={Link} to='/login'>
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
