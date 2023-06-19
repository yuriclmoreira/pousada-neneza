import { Container, Carousel, Button } from "react-bootstrap";



import imgQ1 from "../../assets/quartos/1.jpg";
import imgQ2 from "../../assets/quartos/2.jpg";
import imgQ3 from "../../assets/quartos/3.jpg";
import imgQ4 from "../../assets/quartos/4.jpg";
import imgQ5 from "../../assets/quartos/5.jpg";
import imgQ6 from "../../assets/quartos/6.jpg";
import imgQ7 from "../../assets/quartos/7.jpg";
import imgQ8 from "../../assets/quartos/8.jpg";
import imgQ9 from "../../assets/quartos/9.jpg";
import imgk1 from "../../assets/kids/1.jpg";
import imgk2 from "../../assets/kids/2.jpg";
import imgk3 from "../../assets/kids/3.jpg";
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
import imgE12 from "../../assets/externo/12.jpg";
import imgE13 from "../../assets/externo/13.jpg";
import imgB1 from "../../assets/bistro/1.jpg";
import imgB2 from "../../assets/bistro/2.jpg";
import imgB3 from "../../assets/bistro/3.jpg";
import imgB4 from "../../assets/bistro/4.jpg";
import imgB5 from "../../assets/bistro/5.jpg";
import imgB6 from "../../assets/bistro/6.jpg";
import imgB7 from "../../assets/bistro/7.jpg";
import imgB8 from "../../assets/bistro/8.jpg";

const imgQuarto = [
    imgQ1,
    imgQ2,
    imgQ3,
    imgQ4,
    imgQ5,
    imgQ6,
    imgQ7,
    imgQ8,
    imgQ9,

];



const imgKids = [
    imgk1,
    imgk2,
    imgk3,
]
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
    imgE11,
    imgE12,
    imgE13
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

function Galeria() {
    function openBooking() {
        window.open(' https://www.booking.com/hotel/br/pousada-da-neneza.pt-br.html');
    }
    return (

        <Container className="quartos">

            <div className="cards  quartos">
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
                    <p className="">Bistrô, com capacidade para 40 pessoas, com estacionamento, mobiliário e utensílios de cozinha incluso.Fogão industrial, geladeira, forno industrial e micro-ondas. Não temos freezer.Um lugar aconchegante e romântico.</p>
                    <Button variant="outline-dark" onClick={openBooking}>Reserve agora</Button>
                </div>
            </div>
            <div className="cards reverse quartos ">
                <Carousel fade>
                    {
                        imgQuarto.map(img => (
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
                    <p className=""> Os quartos da pousada são cuidadosamente decorados, pensados para proporcionar aos hóspedes uma estadia memorável. Cada detalhe foi planejado para criar um ambiente acolhedor e relaxante, onde é possível descansar e recarregar as energias após um dia de passeios pelas belas paisagens da região.</p>
                    <Button variant="outline-dark" onClick={openBooking}>Reserve agora</Button>
                </div>
            </div>

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
                        Área verde, com um lindo gramado em meio à natureza, lugar ideal para um evento com capacidade para 50 pessoas, com estacionamento e mobiliário de jardim incluso. Não temos área coberta!
                    </p>
                    <Button variant="outline-dark" onClick={openBooking}>Reserve agora</Button>
                </div>
            </div>

            <div className="cards reverse quartos reverse">

                <Carousel fade>
                    {
                        imgKids.map(img => (
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

                    <h1>Área infantil </h1>
                    <p >
                        Enquanto seu filho se diverte em nossa encantadora casa de bonecas, você pode apreciar momentos de tranquilidade no gramado, degustando uma garrafa de vinho. Deixe que a imaginação dos pequenos voe livremente, enquanto você desfruta de momentos de serenidade. Uma combinação perfeita para toda a família em nossa pousada.
                    </p>
                    <Button variant="outline-dark" onClick={openBooking}>Reserve agora</Button>
                </div>
            </div>
        </Container>
    );
}

export default Galeria;
