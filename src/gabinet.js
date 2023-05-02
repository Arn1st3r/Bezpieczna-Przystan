import "./App.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carousel from "./components/carousel";
import gab1 from "./components/galery/gab1.jpeg";
import gab2 from "./components/galery/gab2.jpeg";
import gab3 from "./components/galery/gab3.jpg";
import gab4 from "./components/galery/gab4.jpeg";
import gab5 from "./components/galery/gab5.jpeg";
import Collapsible from "./components/collapsible";
import ScrollToTop from "./components/scroll-button";
function Gabinet() {
	const galleryImages = [
		{
			img: gab1,
		},
		{
			img: gab3,
		},
		{
			img: gab2,
		},
		{
			img: gab4,
		},
		{
			img: gab5,
		},
	];
	return (
		<div className='container'>
			<nav>
				<ScrollToTop />
				<Collapsible></Collapsible>
			</nav>
			<div className='home'>
				<h1 className='home__headline'>Gabinet</h1>
				<p className='home__description--gab'>
					Wchodząc do gabinetu psychologicznego, natychmiast czujemy się
					przyjemnie i spokojnie. Wszystko zostało zaprojektowane w taki sposób,
					aby stworzyć atmosferę relaksu i bezpieczeństwa dla pacjenta. W
					gabinecie panuje cisza i spokój, a terapeuta jest uważny i empatyczny,
					co dodatkowo przyczynia się do poczucia bezpieczeństwa pacjenta. To
					miejsce, w którym pacjent może swobodnie wyrażać swoje emocje i
					przeżycia, wiedząc, że znajduje się w bezpiecznym i przyjaznym
					otoczeniu.
				</p>
			</div>
			<div className='home'>
				<Carousel galleryImages={galleryImages}></Carousel>
			</div>
			<footer>
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default Gabinet;
