import "./App.scss";
import roksana_czarnecka from "./roksana_czarnecka.jpg";
import anna from "./anna.jpg";
import logo from "./logo.png";
function About() {
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
							<a href='Home'>Cennik</a>
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
			<div className='headline'>
				<h1>Kto tworzy Bezpieczną Przystań?</h1>
			</div>
			<div className='box'>
				<div className='box_img'>
					<img
						className='Roksana'
						src={roksana_czarnecka}
						alt='roksana_czarnecka'></img>
					<div className='box_description1'>
						<h2>mgr Roksana Czarnecka</h2>
						<p>
							Nazywam się Roksana Czarnecka. Jestem psychologiem. Obecnie szkolę
							się na psychoterapeutę w nurcie analizy egzystencjalnej i
							logoterapii (GLE International). Ukończyłam szkolenie I stopnia
							Terapii Skoncentrowanej na Rozwiązaniach oraz wiele innych szkoleń
							dotyczących pracy z osobami starszymi, doświadczającymi chorób
							psychicznych, niepełnosprawności oraz pomocy osobom po stracie.
							Obecnie zawodowo jestem związana z dwoma wyjątkowymi miejscami,
							pełnymi wartościowych ludzi - Środowiskowym Domem Samopomocy w
							Piszu oraz Powiatowym Środowiskowym Domem Samopomocy w Białej
							Piskiej. W swojej pracy czerpię z nurtu egzystencjalnego oraz
							elementów terapii krótkoterminowych. Uważam, że w procesie
							terapeutycznym najważniejsza jest relacja. I to tutaj dopiero w
							atmosferze akceptacji, wsparcia, życzliwości i szacunku jest
							możliwość rozpoczęcia podróży w głąb siebie. W „Bezpiecznej
							Przystani”, tym, którzy tego potrzebują, pragnę towarzyszyć na
							drodze życia, na jej czasem krętych odcinkach, na rozdrożach.
							Nasze spotkania mogą pomóc Ci odnaleźć sens, lepiej zrozumieć
							siebie, przejść przez kryzys, wdrożyć zmiany swoim życiu.
							Pracujemy na obszarach związanych z relacją ze światem, życiem,
							samym sobą, sensem, stawaniem się sobą w szerszym kontekście.
							Spotkania mają indywidualny charakter, zapewniam bezpieczeństwo,
							akceptację oraz przestrzeń do poznawania siebie.{" "}
						</p>
					</div>
				</div>
				<div className='box_img'>
					<img className='Ania' src={anna} alt='Anna Domżalska'></img>
					<div className='box_description2'>
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
							przestrzeń, indywidualne podejście, życzliwość i akceptację.{" "}
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
