import "./App.scss";
import gabinet from "./gabinet.jpg";
import logo from "./logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Home() {
	let navigate = useNavigate();
	const routeChange = () => {
		let path = `/about`;
		navigate(path);
	};
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
			<div className='list'>
				<table>
					<tr>
						<td>Usługa</td>
						<td>Czas trwania</td>
						<td>Cena</td>
					</tr>
					<tr>
						<td>Konsultacja psychologiczna</td>
						<td>50 min. </td>
						<td>150 zł</td>
					</tr>
					<tr>
						<td>Konsultacja psychoterapetyczna</td>
						<td>50 min.</td>
						<td>150 zł</td>
					</tr>
					<tr>
						<td>Psychoterpia indywidualna</td>
						<td>50 min.</td>
						<td>150 zł</td>
					</tr>
					<tr>
						<td>Opinia psychologiczna*</td>
						<td>-</td>
						<td>150 zł</td>
					</tr>
				</table>
				<p className='under_table'>
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
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default Home;
