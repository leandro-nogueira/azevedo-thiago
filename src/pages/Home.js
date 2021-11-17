import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Carrosel from '../components/Carrossel';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <Carrosel />
      <CardGroup className="container-md m-auto bg-dark">
        <Card className="bg-dark text-light">
          <Card.Img variant="top" src="https://scontent.fplu1-1.fna.fbcdn.net/v/t1.6435-9/79881447_2662590650499735_5683807389921312768_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeF59ecCqkvtpB2hDpTrpKy1fCNv4Fmjzep8I2_gWaPN6nX2Ns38s2WaRncBEL_X2H1LVKPDOlmONIQ4TBbuDytI&_nc_ohc=zt13eaZrf5AAX_OqNw_&_nc_ht=scontent.fplu1-1.fna&oh=830ca975d0736b6e80cc669a3880d234&oe=61B62D17" />
          <Card.Body>
            <Card.Title>Entrevista no SEF</Card.Title>
            <Card.Text>
              O SEF (serviço de estrangeiro e fronteiras ) em Lisboa está rermarcando as entrevistas agendadas para o mês de Novembro para Dezembro...
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Img variant="top" src="https://www.melhoresdestinos.com.br/wp-content/uploads/2017/01/lisboa-portugal-capa-1-820x430.jpg" />
          <Card.Body>
            <Card.Title>Lisboa reabre as fronteiras</Card.Title>
            <Card.Text>
              As fronteiras estão reabertas a novos turistas e quem deseja vir morar em Portugal...{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card className="bg-dark text-light">
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Ordem_dos_Advogados.png" />
          <Card.Body>
            <Card.Title>Ordem dos Advogados Portugues</Card.Title>
            <Card.Text>
              A OAP está com isncrições abertas para novos estagiários para 1º semestre de 2022.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Footer />
    </>
  )
}
