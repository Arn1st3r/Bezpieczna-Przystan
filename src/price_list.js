import "./App.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collapsible from "./components/collapsible";
import ScrollToTop from "./components/scroll-button";
function Cennik() {
	return (
		<div className='container'>
			<nav>
				<ScrollToTop />
				<Collapsible></Collapsible>
			</nav>
			<div className='home'>
				<table className='home__table'>
					<tr className='home__table-item'>
						<td>Usługa</td>
						<td>Czas trwania</td>
						<td>Cena</td>
					</tr>
					<tr className='home__table-item'>
						<td>Konsultacja psychologiczna</td>
						<td>50 min. </td>
						<td>170 zł</td>
					</tr>
					<tr className='home__table-item'>
						<td>Konsultacja psychoterapetyczna</td>
						<td>50 min.</td>
						<td>170 zł</td>
					</tr>
					<tr className='home__table-item'>
						<td>Psychoterpia indywidualna</td>
						<td>50 min.</td>
						<td>170 zł</td>
					</tr>
					<tr className='home__table-item'>
						<td>Opinia psychologiczna*</td>
						<td>-</td>
						<td>Ustalana indywidualnie</td>
					</tr>
				</table>
				<p className='home__under-table'>
					* - Wystawiamy opinie dotyczące aktualnego stanu psychicznego osoby
					badanej, w tym opinie na potrzeby Komisji ds. Orzekania o
					Niepełnosprawności. Opinia jest wystawiana na podstawie wywiadu,
					obserwacji z mozliwościa użycia wybranych testów psychologicznych.
					Opinie oraz zaświadczenia są dodatkowo płatne.
					<br></br>
					<br></br>
					Dostępne usługi pełnione są również online. W razie zainteresowania
					taką formą, trzeba zaznaczyć to w trakcie kontaktu ze specjalistą.
				</p>
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

export default Cennik;
