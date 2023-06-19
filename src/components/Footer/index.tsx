import React from "react";
import { FaInstagram, FaWhatsapp, FaTripadvisor, FaMapMarkerAlt } from "react-icons/fa"
import "./styles.css"
import { Container } from "react-bootstrap";
import { TbBrandBooking } from "react-icons/tb";
const Footer = () => {
    function openInsta() {
        window.open('https://www.instagram.com/pousadaneneza/');
    }
    function openWhatsapp() {
        window.open('https://api.whatsapp.com/send?phone=5532999595304');
    }
    function openTripadvisor() {
        window.open('https://www.tripadvisor.com.br/Hotel_Review-g3845079-d6429608-Reviews-Pousada_Da_Neneza-Santa_Cruz_de_Minas_State_of_Minas_Gerais.html');
    }
    function openRota() {
        window.open('https://www.tripadvisor.com.br/Hotel_Review-g3845079-d6429608-Reviews-Pousada_Da_Neneza-Santa_Cruz_de_Minas_State_of_Minas_Gerais.html');
    }
    function openBooking() {
        window.open(' https://www.booking.com/hotel/br/pousada-da-neneza.pt-br.html');

    }

    return (

        <div className="footer">
            <Container>
                <div className="location">
                    <FaMapMarkerAlt size={30} />
                    <p onClick={openRota}>
                        Avenida Ministro Gabriel Passos, 1947
                        Santa Cruz de Minas

                    </p>
                </div>
                <div className="social">
                    <p>CNPJ: 14.793.437/0001-34 </p>
                    <p>Visite nossas redes sociais </p>
                    <ul className="social_list">
                        <li><button className="social-icon" onClick={openInsta}><FaInstagram /></button></li>
                        <li><button className="social-icon" onClick={openWhatsapp}><FaWhatsapp /></button></li>
                        <li><button className="social-icon" onClick={openTripadvisor}><FaTripadvisor /></button></li>
                        <li><button className="social-icon" onClick={openBooking}><TbBrandBooking /></button></li>
                    </ul>

                </div>
            </Container>
        </div>

    )
}

export default Footer;