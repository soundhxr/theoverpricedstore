import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer>
            <Container>
                <Row>
                    <Col className='textcenter py-3'>
                        <p>TheOverpricedStore &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;