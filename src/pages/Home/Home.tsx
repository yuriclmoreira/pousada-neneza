import { Button, Carousel, Container } from "react-bootstrap";
import imagem1 from "../../assets/externo/1.jpg";
import imagem2 from "../../assets/externo/2.jpg";
import imagem3 from "../../assets/externo/6.jpg";
import imagem4 from "../../assets/externo/4.jpg";
import quarto from "../../assets/quartos/9.jpg"
import eventos from "../../assets/externo/10.jpg"
import galeria from "../../assets/externo/9.jpg"
import "./Home.css"

function Home() {
    return (
        <>
            <Carousel fade className="carousel">


                <Carousel.Item>
                    <img
                        className="d-flex w-100  fluid"
                        src={imagem2}
                        alt="First slide"
                        style={{ maxHeight: '90vh' }}
                    />
                    <Carousel.Caption>
                        <h1>Pousada da Neneza</h1>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100  fluid"
                        src={imagem3}
                        alt="First slide"
                        style={{ maxHeight: '90vh' }}
                    />
                    <Carousel.Caption>
                        <h1>Pousada da Neneza</h1>
                    </Carousel.Caption>

                </Carousel.Item>

            </Carousel>
            <Container>
                <div className="cards">

                    <div className="information">

                        <h1>Hospedagem</h1>
                        <p>
                            Os quartos da pousada são cuidadosamente decorados, pensados para proporcionar aos hóspedes uma estadia memorável. Cada detalhe foi planejado para criar um ambiente acolhedor e relaxante, onde é possível descansar e recarregar as energias após um dia de passeios pelas belas paisagens da região.
                        </p>
                        <Button href="/acomodacoes" variant="outline-dark">Conheca nosso quarto</Button>
                    </div>
                    <img src={quarto} alt="quarto" className="image" />
                </div>
                <div className="cards reverse">

                    <div className="information">

                        <h1>Eventos</h1>
                        <p>
                            Imagine-se desfrutando de uma festa de aniversário ao ar livre, com os verdes exuberantes das montanhas como pano de fundo, ou um casamento dos sonhos em um ambiente charmoso e intimista. A pousada dispõe de espaços amplos e encantadores, perfeitos para a realização de cerimônias e recepções inesquecíveis.
                        </p>
                        <Button href="/eventos" variant="outline-dark">Eventos</Button>
                    </div>
                    <img src={eventos} alt="quarto" className="image" />
                </div>
                <div className="cards">

                    <div className="information">

                        <h1>Conheça nosso espaço</h1>
                        <p>
                            Explore nossos espaços e encante-se! Clique aqui para conhecer mais.
                        </p>
                        <Button href="/galeria" variant="outline-dark">Conheça nosso espaço</Button>
                    </div>
                    <img src={galeria} alt="quarto" className="image" />
                </div>

                <div className="containerMap">
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.755192889607!2d-44.217511085065745!3d-21.12232398594773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c7a03ee4b331%3A0x8363943fac1ef6f3!2sPousada%20da%20Neneza!5e0!3m2!1spt-BR!2sbr!4v1684266878645!5m2!1spt-BR!2sbr"
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>

        </>

    );
}

export default Home;
