import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


function Footer() {
    return (
        <div style={{
            backgroundColor: '#dbd9d5',
          }}>
            <footer>
                <Container>
                    <Row>
                        <Col className="text-center py-3"><strong>Copyright © 2021 AfroShopMe.de All rights reserved mignoncharly</strong></Col>
                    </Row>
                </Container>
            </footer>
        </div>        
    )
}

export default Footer
