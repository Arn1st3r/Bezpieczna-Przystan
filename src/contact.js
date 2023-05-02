import "./App.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mail_icon from "./components/galery/mail.png";
import phone_icon from "./components/galery/phone.png";
import location_icon from "./components/galery/location.png";
import building from "./components/galery/building.jpg";
import ScrollToTop from "./components/scroll-button.js";
import Collapsible from "./components/collapsible";
function Contact() {
	return (
		<div className='container'>
			<nav>
				<ScrollToTop />
				<Collapsible></Collapsible>
			</nav>
			<div className='home'>
				<div className='home__images--building'>
					<img src={building} alt='budynek'></img>
				</div>
				<div className='home__icons'>
					<section>
						<img className='home__icons--email' src={mail_icon}></img>
						<div className='home__icons--description'>
							<span>E-mail</span>
							<br></br>psycholog.bezpiecznaprzystan@gmail.com
						</div>
					</section>
					<section>
						<img className='home__icons--phone' src={phone_icon}></img>
						<div className='home__icons--description'>
							<span>Telefon *</span>
							<br></br>516-656-486 - mgr Roksana Czarnecka<br></br>
							789-290-990 - mgr Anna Domżalska
						</div>
					</section>
					<section>
						<img className='home__icons--address' src={location_icon}></img>
						<div className='home__icons--description'>
							<span>Adres</span>
							<br></br>Pisz, ul. Rybacka 6/4 I piętro
						</div>
					</section>
				</div>
				<div className='home__information'>
					<p>
						* Prosimy, aby dzownić pod numer specjalisty, do którego chcemy
						umówić się na wizytę.
					</p>
				</div>
			</div>
			<div className='home'>
				<div className='home__sec'>
					<section className='home__form'>
						<h1 className='home__heading heading-form'>Formularz kontaktowy</h1>
						<form>
							<label>
								Imię <span>*</span> <br></br>
								<input type='text' required></input>
								<br></br>
								Nazwisko <span>*</span> <br></br>
								<input type='text' required></input>
								<br></br>
								Nr tel. <span>*</span> <br></br>
								<input type='number' required></input>
								<br></br>
								E-mail <span>*</span> <br></br>
								<input type='text' required></input>
								<br></br>
								Wiadomość
								<br></br>
								<textarea></textarea>
							</label>
						</form>
						<button className='form-map_send'>Wyślij</button>
					</section>
					<section className='home__map'>
						<h1 className='home__heading'>Nasza lokalizacja</h1>
						<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.077120316609!2d21.804635712746226!3d53.627763972257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1e52a3bd08aed%3A0xd9841040c4b5d284!2sBezpieczna%20Przysta%C5%84%20Gabinet%20Psychoterapii%20i%20Pomocy%20Psychologicznej!5e0!3m2!1spl!2spl!4v1682335348017!5m2!1spl!2spl'></iframe>
					</section>
				</div>
			</div>
			<footer>
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default Contact;
