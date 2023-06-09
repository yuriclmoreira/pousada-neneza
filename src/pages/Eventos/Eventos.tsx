import { Container, Carousel, Button } from "react-bootstrap";



import imgE1 from "../../assets/externo/1.jpg";
import imgE2 from "../../assets/externo/2.jpg";
import imgE3 from "../../assets/externo/3.jpg";
import imgE4 from "../../assets/externo/4.jpg";
import imgE5 from "../../assets/externo/5.jpg";
import imgE6 from "../../assets/externo/6.jpg";
import imgE7 from "../../assets/externo/7.jpg";
import imgE8 from "../../assets/externo/8.jpg";
import imgE9 from "../../assets/externo/9.jpg";
import imgE10 from "../../assets/externo/10.jpg";
import imgE11 from "../../assets/externo/11.jpg";
import imgB1 from "../../assets/bistro/1.jpg";
import imgB2 from "../../assets/bistro/2.jpg";
import imgB3 from "../../assets/bistro/3.jpg";
import imgB4 from "../../assets/bistro/4.jpg";
import imgB5 from "../../assets/bistro/5.jpg";
import imgB6 from "../../assets/bistro/6.jpg";
import imgB7 from "../../assets/bistro/7.jpg";
import imgB8 from "../../assets/bistro/8.jpg";

const imgExterno = [
    imgE1,
    imgE2,
    imgE3,
    imgE4,
    imgE5,
    imgE6,
    imgE7,
    imgE8,
    imgE9,
    imgE10,
    imgE11
];


const imgBistro = [
    imgB1,
    imgB2,
    imgB3,
    imgB4,
    imgB5,
    imgB6,
    imgB7,
    imgB8,

];

function Eventos() {
    function openBooking() {
        window.open(' https://www.booking.com/hotel/br/pousada-da-neneza.pt-br.html');
    }
    return (

        <Container className="quartos">
            <div className="cards  quartos">
                <Carousel fade>
                    {
                        imgExterno.map(img => (
                            <Carousel.Item >

                                <img
                                    className=" quarto image"
                                    src={img}
                                    alt="Exteno"

                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel>

                <div className="information">

                    <h1>Área externa</h1>
                    <p >
                        Área verde, com um lindo gramado em meio à natureza, lugar ideal para um evento com capacidade para 150 pessoas, com estacionamento e mobiliário de jardim incluso. Não temos área coberta!
                    </p>
                    <Button variant="outline-dark" onClick={openBooking}>Reserve agora</Button>
                </div>
            </div>

            <div className="cards reverse quartos">
                <Carousel fade>
                    {
                        imgBistro.map(img => (
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

                    <h1>Bistro</h1>
                    <p>Bistrô, com capacidade para 40 pessoas, com estacionamento, mobiliário e utensílios de cozinha incluso. Nossa cozinha está equipada com aparelhos industriais capazes de atender a qualquer tipo de evento.</p>
                    <Button variant="outline-dark" onClick={openBooking}>Reserve agora</Button>
                </div>
            </div>


        </Container>
    );
}

export default Eventos;
