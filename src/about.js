import "./App.scss";
import person1 from "./components/galery/person1.png";
import person2 from "./components/galery/person2.png";
import ReactDOM from "react-dom";
import icon from "./components/galery/bars-solid.svg";
import React, { useState, useEffect } from "react";
import ScrollToTop from "./components/scroll-button.js";
import Collapsible from "./components/collapsible";
function About() {
	return (
		<div className='container'>
			<ScrollToTop />
			<nav>
				<Collapsible></Collapsible>
			</nav>
			<div className='home'>
				<div className='home__heading'>
					<h1>Kto tworzy Bezpieczną Przystań?</h1>
				</div>
				<div className='home__box--about'>
					<div className='home__images'>
						<img
							className='home__image_of_person'
							src={person1}
							alt='roksana_czarnecka'></img>
					</div>
					<div className='home__description--about'>
						<h2>mgr Roksana Czarnecka</h2>
						<p>
							Nazywam się Roksana Czarnecka. Jestem psychologiem o specjalności
							klinicznej oraz psychoterapeutą egzystencjalnym w trakcie
							szkolenia (analiza egzystencjalna i logoterapia GLE
							International). Ukończyłam szkolenie I stopnia Terapii
							Skoncentrowanej na Rozwiązaniach oraz studia podyplomowe z
							przygotowania pedagogicznego. Dodatkowo uzupełniałam wiedzę biorąc
							udział w szkoleniach dotyczących pracy z osobami starszymi,
							doświadczającymi chorób psychicznych, niepełnosprawności oraz
							pomocy osobom po stracie. Obecnie prowadzę własną praktykę
							"Bezpieczną Przystań". W gabinecie pracuję z młodzieżą oraz
							osobami dorosłymi. Od kilku lat pracuję w Środowiskowych Domach
							Samopomocy udzielając wsparcia osobom starszym, z
							niepełnosprawnościami oraz osobami doświadczającymi chorób
							psychicznych i zaburzeń. Doświadczenie zawodowe zbierałam pracując
							w Centrum Integracji Społecznej, Centrum Praw Kobiet oraz na
							praktykach w Ośrodku Profilaktyki i Terapii Uzależnień , a także
							na oddziale psychiatrycznym. Prowadziłam również szkolenia i
							warsztaty. W swojej pracy czerpię z nurtu egzystencjalnego oraz
							elementów terapii krótkoterminowych. Uważam, że w procesie
							terapeutycznym najważniejsza jest relacja. I to tutaj dopiero w
							atmosferze akceptacji, wsparcia, życzliwości i szacunku jest
							możliwość rozpoczęcia podróży w głąb siebie. W „Bezpiecznej
							Przystani”, tym, którzy tego potrzebują, towarzyszę na krętych
							odcinkach życia, na rozdrożach. Nasze spotkania mogą pomóc Ci
							odnaleźć sens, lepiej zrozumieć siebie, przejść przez kryzys,
							wdrożyć zmiany swoim życiu. Pracujemy na obszarach związanych z
							relacją ze światem, życiem, samym sobą, sensem, stawaniem się sobą
							w szerszym kontekście. Spotkania mają indywidualny charakter,
							zapewniam bezpieczeństwo, akceptację oraz przestrzeń do poznawania
							siebie. Swoją pracę poddaję regularnej superwizji. Prywatnie
							jestem żoną, świeżo upieczoną mamą, posiadaczką psa z
							charakterkiem. Moją pasją są książki, uwielbiam jazdę na rowerze,
							słucham jazzu. Kocham zwierzęta i cenię sobie bliski kontakt z
							naturą.
						</p>
						<h3 className='home__description--about_down'>
							Znajdziesz mnie również na:
						</h3>
						<a
							className='home__description--about_down-a'
							href='https://www.znanylekarz.pl/roksana-czarnecka/psycholog-psychoterapeuta/pisz'>
							Znanylekarz.pl
						</a>
						<a
							className='home__description--about_down-a'
							href='https://twojpsycholog.pl/profil-psychologa/roksana-czarnecka-1285'>
							Twójpsycholog.pl
						</a>
					</div>
				</div>
				<div className='home__box--about'>
					<div className='home__images'>
						<img
							className='home__image_of_person'
							src={person2}
							alt='Anna Domżalska'></img>
					</div>
					<div className='home__description--about'>
						<h2>mgr Anna Domżalska</h2>
						<p>
							Nazywam się Anna Domżalska jestem pedagogiem, psychologiem,
							oligofrenopedagogiem, psychoterapeutą poznawczo-behawioralnym w
							trakcie szkolenia. Członkiem Polskiego Towarzystwa Terapii
							Poznawczej i Behawioralnej ( PTTPB). Swoją pracę poddaję
							regularnej superwizji. Ukończyłam również liczne szkolenia w
							nurcie terapii krótkoterminowej. Oprócz własnej praktyki pracuję w
							Specjalnym Ośrodku Szkolno-Wychowawczym w Łupkach. W swojej pracy
							stawiam na atmosferę akceptacji, zaufania i szacunku do drugiego
							człowieka. Wychodzę z założenia, że ważnym czynnikiem leczącym
							jest przede wszystkim relacja. W mojej pracy pragnę zachęcać do
							rozumienia sytuacji pacjenta, poprzez pryzmat jego myśli i
							zachowań, ale również poprzez pryzmat ważnych dla niego wartości.
							Spotkania ze mną mogą pomóc Ci lepiej zrozumieć swój wewnętrzny
							świat myśli, emocji i zachowań oraz odnaleźć sposoby na to, aby
							przejść przez trudności czy kryzys. Zapewniam bezpieczną
							przestrzeń, indywidualne podejście, życzliwość i akceptację.
						</p>
					</div>
				</div>
			</div>
			<footer>
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default About;
