import "./App.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import children from "./components/galery/children.png";
import couple from "./components/galery/couple.png";
import senior from "./components/galery/senior.png";
import youth from "./components/galery/teenage.png";
import ScrollToTop from "./components/scroll-button.js";
import SingleQuestion from "./components/SingleQuestion";
import { useState } from "react";
import { questions } from "./components/questions";
import Collapsible from "./components/collapsible";
import phone_icon from "./components/galery/phone.png";
import fb_logo from "./components/galery/facebook.png";
function Home() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/uslugi`;
		navigate(path);
	};
	return (
		<div className='container'>
			<ScrollToTop />
			<nav>
				<Collapsible></Collapsible>
			</nav>
			<div className='home'>
				<div className='home__heading--background'>
					<h2 className='home__heading--first'>Potrzebujesz porozmawiać?</h2>
					<h2 className='home__heading--last'>Jesteśmy tu dla Ciebie!</h2>
					<button className='home__heading--button' onClick={routeChange}>
						W czym pomagamy?
					</button>
				</div>
			</div>
			<div className='home'>
				<h1 className='home__heading home_heading'>
					Bezpieczna Przystań <br></br>Gabinet Psychoterapii i Pomocy
					Psychologicznej
				</h1>
				<p className='home__description--home'>
					"Bezpieczna Przystań" to miejsce, w którym każda osoba może poczuć się
					bezpiecznie i komfortowo, a także otrzymać wsparcie i pomoc w trudnych
					sytuacjach emocjonalnych. Gabinet prowadzony jest przez
					wykwalifikowanych psychologów oraz psychoterapeutów, którzy oferują
					profesjonalną pomoc w zakresie psychoterapii, poradnictwa oraz
					konsultacji psychologicznych. Pracując z różnymi problemami, takimi
					jak zaburzenia nastroju, lęki, problemy w relacjach, trudności w
					radzeniu sobie ze stresem czy kryzysy życiowe, specjalista stosuje
					podejście indywidualne i holistyczne, biorąc pod uwagę potrzeby i
					sytuację każdej osoby. Nasz gabinet to także miejsce, w którym panuje
					atmosfera empatii, zrozumienia i szacunku dla każdej osoby. Ponadto,
					oferujemy elastyczny grafik, a także możliwość konsultacji online, co
					pozwala na dostępność pomocy w każdym momencie. Wszystko to sprawia,
					że "Bezpieczna przystań" jest miejscem, w którym każda osoba może
					znaleźć wsparcie, zrozumienie i pomoc w trudnych chwilach, a także
					rozwijać swoje umiejętności radzenia sobie z emocjami i wyzwaniami
					życiowymi.
				</p>
			</div>
			<hr></hr>
			<h2 className='home__heading large'>Jak możemy pomóc?</h2>
			<div className='home__box home_page'>
				<div className='home__box'>
					<section className='home__box item--last'>
						<h2>Psycholog</h2>
						<p>
							Pomoc psychologa może być przydatna w wielu sytuacjach i dla
							różnych osób. Psycholog może pomóc w rozwiązaniu problemów
							emocjonalnych, psychicznych lub związanych z zachowaniem, a także
							w radzeniu sobie z trudnościami w życiu osobistym i zawodowym.
						</p>
					</section>
				</div>
				<div className='home__box'>
					<section className='home__box item--last'>
						<h2>Psychoterapia</h2>
						<p>
							Psychoterapia jest zalecana w sytuacjach, gdy osoba ma problemy
							emocjonalne lub natury psychicznej, które wymagają bardziej
							intensywnego i długotrwałego wsparcia niż jednorazowa wizyta u
							psychologa. Psychoterapia jest procesem terapeutycznym, który
							obejmuje regularne spotkania z terapeutą, mające na celu pomóc
							osobie w przepracowaniu trudnych emocji i problemów życiowych.
						</p>
					</section>
				</div>
			</div>
			<hr></hr>
			<div className='home'>
				<h2 className='home__heading large'>Kto może szukać u nas pomocy?</h2>
				<div className='home__icons--picture'>
					<section>
						<img className='home__icons--element' src={children}></img>
						<p className='home__icons--down'>Dzieci*</p>
					</section>
					<section>
						<img className='home__icons--element second' src={youth}></img>
						<p className='home__icons--down--second'>Młodzież</p>
					</section>
					<section>
						<img className='home__icons--element' src={couple}></img>
						<p className='home__icons--down'>Dorośli</p>
					</section>
					<section>
						<img className='home__icons--element last' src={senior}></img>
						<p className='home__icons--down--last'>Seniorzy</p>
					</section>
				</div>
				<div className='home__information'>
					<p>* Przyjmujemy dzieci od 7 roku życia.</p>
				</div>
			</div>
			<hr></hr>
			<div className='home'>
				<h2 className='home__heading large'>Czekamy na Ciebie!</h2>
				<div className='home__icons'>
					<section>
						<img className='home__icons--phone' src={phone_icon}></img>
						<p className='home__icons--description'>
							<span>mgr Roksana Czarnecka</span>
							<p>tel. 516-656-486</p>
						</p>
					</section>
					<section>
						<img className='home__icons--phone' src={phone_icon}></img>
						<p className='home__icons--description'>
							<span>mgr Anna Domżalska</span>
							<p>tel. 789-290-990</p>
						</p>
					</section>
				</div>
			</div>
			<hr></hr>
			<div className='home'>
				<h2 className='home__heading large'>Bądź z nami na bieżąco!</h2>
				<a href='https://www.facebook.com/profile.php?id=100066750367342'>
					<img className='home__icons--fb' src={fb_logo} alt='facebook'></img>
				</a>
			</div>
			<footer>
				<p>
					© Copyright 2023. Created and designed by Rafał Arnista <br></br>
					Icons created by Freepik - Flaticon
				</p>
			</footer>
		</div>
	);
}

export default Home;
