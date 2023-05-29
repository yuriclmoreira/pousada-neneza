import { Container, Carousel, ListGroup, Card, Accordion, Button } from "react-bootstrap";

import imagem1 from "../../assets/quartos/1.jpg";
import imagem2 from "../../assets/quartos/2.jpg";
import imagem3 from "../../assets/quartos/3.jpg";
import imagem4 from "../../assets/quartos/4.jpg";
import imagem5 from "../../assets/quartos/5.jpg";
import imagem6 from "../../assets/quartos/6.jpg";
import imagem7 from "../../assets/quartos/7.jpg";
import imagem8 from "../../assets/quartos/8.jpg";
import imagem9 from "../../assets/quartos/9.jpg";

import "./Acomodacoes.css"
import {
    FaParking,
    FaWifi,
    FaBreadSlice,
    FaWalking,
    FaDog,
    FaSwimmingPool,
    FaUtensils,
    FaVolumeMute,
    FaWind,
    FaBed,
    FaTv,
    FaShower,
    FaSoap,
    FaBath,
    FaConciergeBell,
    FaDoorClosed,
    FaDoorOpen,
    FaWhatsapp,
    FaChild,
    FaBaby
} from "react-icons/fa";

const img = [
    imagem1,
    imagem2,
    imagem3,
    imagem4,
    imagem5,
    imagem6,
    imagem7,
    imagem8,
    imagem9,

];

const servicos = [
    {
        logo: FaWifi,
        texto: 'Wi-Fi',
    },
    {
        logo: FaWalking,
        texto: 'Caminhada',
    },
    {
        logo: FaDog,
        texto: 'Permite pets',

    },
    {
        logo: FaUtensils,
        texto: 'Churrasqueira',
    },
    {
        logo: FaSwimmingPool,
        texto: 'Piscina externa',
    },
    {
        logo: FaConciergeBell,
        texto: 'Serviço de quarto',
    },
    {
        logo: FaBreadSlice,
        texto: 'Café da manhã gratuito',
    },
    {
        logo: FaParking,
        texto: 'Estacionamento gratuito',
    },
]

const comodidades = [
    {

        logo: FaWind,
        texto: 'Frigobar',

    },
    {

        logo: FaWind,
        texto: 'Ar condicionado',

    },
    {

        logo: FaBed,
        texto: 'Cama Queen size',
    },
    {

        logo: FaShower,
        texto: 'Banheira/chuveiro',
    },
    {

        logo: FaBath,
        texto: 'Secador de cabelo',
    },
    {

        logo: FaSoap,
        texto: 'Serviço de limpeza',
    },
    {

        logo: FaTv,
        texto: 'TV com canais abertos',
    },
    {

        logo: FaVolumeMute,
        texto: 'Quartos com isolamento acústico',
    },
]
function Acomodacoes() {
    function openWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5532999595304');
    }
    return (

        <Container>
            <div className="cards reverse quartos">
                <Carousel fade>
                    {
                        img.map(img => (
                            <Carousel.Item >

                                <img
                                    className=" quarto image"
                                    src={img}
                                    alt="First slide"

                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>

                <div className="information">

                    <h1>Hospedagem</h1>
                    <p >
                        Os quartos da pousada são cuidadosamente decorados, pensados para proporcionar aos hóspedes uma estadia memorável. Cada detalhe foi planejado para criar um ambiente acolhedor e relaxante, onde é possível descansar e recarregar as energias após um dia de passeios pelas belas paisagens da região.
                    </p>
                    <Button variant="outline-dark" onClick={openWhatsapp}>Reserve agora</Button>
                </div>
            </div>
            <div className="box">
                <Accordion defaultActiveKey="0" style={{ width: '20rem' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Serviços</Accordion.Header>
                        <Accordion.Body style={{ padding: "0" }}>
                            <Card style={{ width: '100%' }}>

                                <ListGroup variant="flush">
                                    {servicos.map(servico => (
                                        <ListGroup.Item >
                                            <servico.logo className="logo" />

                                            {servico.texto}

                                        </ListGroup.Item>
                                    ))}

                                </ListGroup>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

                <Accordion defaultActiveKey="0" style={{ width: '20rem' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Comodidades nos quartos</Accordion.Header>
                        <Accordion.Body style={{ padding: "0" }}>
                            <Card style={{}}>

                                <ListGroup variant="flush">
                                    {comodidades.map(comodidade => (
                                        <ListGroup.Item >
                                            <comodidade.logo className="logo" />

                                            {comodidade.texto}

                                        </ListGroup.Item>
                                    ))}

                                </ListGroup>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>

                <Accordion defaultActiveKey="0" style={{ width: '20rem' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Regras da casa</Accordion.Header>
                        <Accordion.Body style={{ padding: "0" }}>
                            <Card style={{}}>

                                <ListGroup variant="flush">

                                    <ListGroup.Item >
                                        <FaDoorOpen className="logo" />
                                        Entrada - 14:00 - 16:00
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <FaDoorClosed className="logo" />
                                        Saida - 10:00 - 12:00
                                    </ListGroup.Item>
                                    <ListGroup.Item >
                                        <FaWhatsapp className="logo" />
                                        Consulte condições de cancelamento pelo nosso WhatsApp
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <FaChild className="logo" />
                                        Crianças de qualquer idade são bem-vindas.
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <div className="fw-bold">Cama extra e berço</div>

                                        <FaChild className="logo" />
                                        Consulte disponibilidade pelo nosso WhatsApp.<br />
                                        <FaBaby className="logo" />
                                        Berço mediante pedido.
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>





            </div>
            <div className="box">
                <h1>Perguntas frequentes</h1>
                <Accordion defaultActiveKey={['0']} alwaysOpen style={{ width: '62rem' }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            O centro de Santa Cruz de Minas fica a que distância de Pousada da Neneza?
                        </Accordion.Header>
                        <Accordion.Body>
                            Pousada da Neneza fica a 1,8 km do centro de Santa Cruz de Minas.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Que tipo de café da manhã é servido em Pousada da Neneza?
                        </Accordion.Header>
                        <Accordion.Body>

                            Os hóspedes em Pousada da Neneza podem aproveitar um café da manhã bem-avaliado durante a estadia.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Pousada da Neneza é popular entre famílias?
                        </Accordion.Header>
                        <Accordion.Body>

                            Sim, Pousada da Neneza é popular entre hóspedes que reservam estadias para famílias.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            Quais são os horários de check-in e check-out em Pousada da Neneza?
                        </Accordion.Header>
                        <Accordion.Body>

                            O check-in em Pousada da Neneza é a partir das 14h00. O check-out é até as 12h00.
                        </Accordion.Body>
                    </Accordion.Item>


                </Accordion>
                <Button onClick={openWhatsapp} variant="secondary" className="btn-wt" size="lg">
                    Reserve Já
                </Button>
            </div>

        </Container >

    );
}

export default Acomodacoes;
