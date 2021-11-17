import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import '../style/HomeCards.css'

export default function HomeCards() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="col-md-4">
        <Card  className="bg-dark text-center">
          <Card.Body className="text-light">
            <Card.Title>Áreas de atuação:</Card.Title>
            <Card.Text>
              <ListGroup >
                <ListGroup.Item variant="dark">Direito empresarial </ListGroup.Item>
                <ListGroup.Item variant="dark">Direito civil</ListGroup.Item>
                <ListGroup.Item variant="dark">Direito das Sucessões</ListGroup.Item>
                <ListGroup.Item variant="dark">Registros e Notariados</ListGroup.Item>
                <ListGroup.Item variant="dark">Obtenção de título de residência</ListGroup.Item>
                <ListGroup.Item variant="dark">Nacionalidade Portuguesa</ListGroup.Item>
                <ListGroup.Item variant="dark">Ordem dos Advogados</ListGroup.Item>
                <ListGroup.Item variant="dark">Regularização e obtenção de documentos</ListGroup.Item>
                <ListGroup.Item variant="dark">Correspondência internacional</ListGroup.Item>
                <ListGroup.Item variant="dark">Consultoria jurídica</ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}