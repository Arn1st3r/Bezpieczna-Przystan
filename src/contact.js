import "./App.scss";
import gabinet from "./gabinet.jpg";
import logo from "./logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import mail_icon from "./mail.png";
import phone_icon from "./phone.png";
import location_icon from "./location.png";
import building from "./budynek.jpg";
function Contact() {
	return (
		<div className='container'>
			<div className='nav'>
				<div className='logo'>
					<img src={logo} alt='logo bezpieczna przystan'></img>
				</div>
				<div className='dropdown'>
					<ul>
						<li>
							<a href='Home'>Strona główna</a>
						</li>
						<li>
							<a href='Home'>Usługi</a>
						</li>
						<li>
							<a href='About'>O nas</a>
						</li>
						<li>
							<a href='Cennik'>Cennik</a>
						</li>
						<li>
							<a href='Home'>Gabinet</a>
						</li>
						<li>
							<a href='Home'>Kontakt</a>
						</li>
					</ul>
				</div>
			</div>
			<header></header>
			<main>
				<div className='picture'>
					<img src={building}></img>
				</div>
				<div className='icons'>
					<section>
						<img className='icons_email' src={mail_icon}></img>
						<p className='icons_description'>
							<span>E-mail</span>
							<br></br>psycholog.bezpiecznaprzystan@gmail.com
						</p>
					</section>
					<section>
						<img className='icons_phone' src={phone_icon}></img>
						<p className='icons_description'>
							<span>Telefon *</span>
							<br></br>516-656-486 - mgr Roksana Czarnecka<br></br>
							789-290-990 - mgr Anna Domżalska
						</p>
					</section>
					<section>
						<img className='icons_location' src={location_icon}></img>
						<p className='icons_description'>
							<span>Adres</span>
							<br></br>Pisz, ul. Rybacka 6/4 I piętro
						</p>
					</section>
				</div>
				<div className='icons_information'>
					<p>
						* Prosimy, aby dzownić pod numer specjalisty, do którego chcemy
						umówić się na wizytę.
					</p>
				</div>
				<div className='form-map'>
					<section>
						<h1 className='form-map_heading1'>Kontakt z nami</h1>
						<form>
							<label>
								Imię <span>*</span> <br></br>
								<input type='text'></input>
								<br></br>
								Nazwisko <span>*</span> <br></br>
								<input type='text'></input>
								<br></br>
								Nr tel. <span>*</span> <br></br>
								<input type='number'></input>
								<br></br>
								E-mail <span>*</span> <br></br>
								<input type='text'></input>
								<br></br>
								Wiadomość
								<br></br>
								<textarea></textarea>
							</label>
						</form>
						<button className='form-map_send'>Wyślij</button>
						<button className='form-map_reset'>Wyczyść</button>
					</section>
					<section>
						<h1 className='form-map_heading2'>Nasza lokalizacja</h1>
						<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2366.064990719825!2d21.805290172586176!3d53.62798030468045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e1e52a3bd08aed%3A0xd9841040c4b5d284!2sBezpieczna%20Przysta%C5%84%20Gabinet%20Psychoterapii%20i%20Pomocy%20Psychologicznej!5e0!3m2!1spl!2spl!4v1680036158778!5m2!1spl!2spl'></iframe>
					</section>
				</div>
			</main>
			<footer>
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default Contact;
