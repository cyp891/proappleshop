import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <p>SweetShop &copy; {currentYear}</p>
            <p>phone:  000-111-2222 </p>
            <p>address: somewhere in the world</p>
            <p>email: unknown@email.com</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;