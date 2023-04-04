import "./App.scss";
import gabinet from "./gabinet.jpg";
import logo from "./logo.png";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import children from "./children.png";
import couple from "./couple.png";
import senior from "./senior.png";
import teenagers from "./teenagers.png";
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
							<a href='Contact'>Kontakt</a>
						</li>
					</ul>
				</div>
			</div>
			<div className='box1'>
				<div className='box1_headline1'>
					<h1 className='heading'>Potrzebujesz porozmawiać?</h1>
					<h1 className='heading2'>Jesteśmy tu dla Ciebie!</h1>
					<button onClick={routeChange}>W czym pomagamy?</button>
				</div>
			</div>
			<div className='box2'>
				<h1 className='box2_headline'>
					Bezpieczna Przystań <br></br>Gabinet Psychoterapii i Pomocy
					Psychologicznej
				</h1>
				<p className='box2_description'>
					Gabinet psychologiczny "Bezpieczna przystań" to miejsce, w którym
					każda osoba może poczuć się bezpiecznie i komfortowo, a także otrzymać
					wsparcie i pomoc w trudnych sytuacjach emocjonalnych. Gabinet
					prowadzony jest przez wykwalifikowanych psychologów, którzy oferują
					profesjonalną pomoc w zakresie psychoterapii, poradnictwa oraz
					konsultacji psychologicznych. Pracując z różnymi problemami, takimi
					jak zaburzenia nastroju, lęki, problemy w relacjach, trudności w
					radzeniu sobie ze stresem czy kryzysy życiowe, psycholog stosuje
					podejście indywidualne i holistyczne, biorąc pod uwagę potrzeby i
					sytuację każdej osoby. Nasz gabinet to także miejsce, w którym panuje
					atmosfera empatii, zrozumienia i szacunku dla każdej osoby. Gabinet
					stawia na zaufanie i współpracę, co pozwala na budowanie trwałych i
					pozytywnych relacji z klientami. W gabinecie psychologicznym
					"Bezpieczna przystań" znajdują się przestronne i komfortowe
					pomieszczenia, zapewniające prywatność i intymność, co jest
					szczególnie ważne w czasie terapii. Ponadto, gabinet oferuje
					elastyczny grafik, a także możliwość konsultacji online, co pozwala na
					dostępność pomocy w każdym momencie. Wszystko to sprawia, że gabinet
					psychologiczny "Bezpieczna przystań" jest miejscem, w którym każda
					osoba może znaleźć wsparcie, zrozumienie i pomoc w trudnych chwilach,
					a także rozwijać swoje umiejętności radzenia sobie z emocjami i
					wyzwaniami życiowymi.
				</p>
			</div>
			<div className='box3'>
				<h1 className='box3_headline'>
					Formy pomocy dostępne w naszym gabinecie
				</h1>
				<section>
					<div className='box3_box'>
						<h2>Konsultacja psychologiczna</h2>
						<p>
							Konsultacje są pierwszym etapem kontaktu z psychologiem. Zazwyczaj
							obejmują od jednego do tzech spotkań, które dotyczą poznania
							Twojego problemu, jego przyczyn i konsekwencji. Każda sesja trwa
							50 minut. Po zakończeniu tego etapu psycholog informuje Cię o
							diagnozie i opracowuje plan pomocy, wraz z informacją jakie mogą
							być rezultaty i szacunkowy czas trwania. Czasem współpraca może
							się zakończyć na konsultacjach. Jeśli natomiast okaże się, że
							potrzebujesz kontynouwać, to zostaniesz skierowany na
							psychoterapię, wsparcie psychologiczne lub interwencję kryzysową.
							Pamietaj, że zawsze to Ty podejmujesz decyzję, czy chcesz z tego
							skorzystać. Psycholog może Cię w tym miejscu pokierować również do
							innego specjalisty.
						</p>
					</div>
					<div className='box3_box'>
						<h2>Wsparcie psychologiczne (poradnictwo)</h2>
						<p>
							Jest to krótkoterminowa forma pomocy, poprzedzona konsultacjami
							psychologicznymi. Zazwyczaj obejmuje do czternastu spotkań, które
							odbywają się raz w tygodniu lub raz na dwa tygodnie. Każde trwa
							około 50 minut. Jeśli doświadczas stresującej sytuacji życiowej,
							czujesz się przeciążony wieloma zadaniami, które masz do
							zrealizowania albo doświadczasz problemów w adaptacji do zmian to
							ta forma pomocy jest dla Ciebie. Zadaniem psychologa podczas
							kontaktu wsparciowego jest towarzyszenie w danym problemie i
							szukanie razem z Tobą opcji jego rozwiązań. Kontakt ten ma na celu
							wzmacnianie Twoich zasobów, poczucia sprawstwa w życiu oraz
							obniżanie poziomu stresu. Dzięki temu będzie Ci potem łatwie
							radzić sobie samodzielnie.
						</p>
					</div>
					<div className='box3_box'>
						<h2>Interwencja kryzysowa</h2>
						<p>
							Pomoc krótkoterminowa. Obejmuje od jednego do dwunastu spotkań,
							których długość dostosowana jest do potrzeb pacjenta. To pomoc w
							nagłych przypadkach, jakim są momenty wstąpienia kryzysu
							psychicznego. Ich typową cechą jest przekraczanie naszych
							zdolności do radzenia sobie i duża zmienność objawów. Najczęściej
							występujące kryzysy dotyczą: śmierci bliskiej osoby, rozstanie,
							utraty pracy, przemocy, wystąpienia choroby somatycznej. Zdarzają
							się kryzysy egzystencjalne(np. dotyczące sensu życia, wolności)
							lub spowodowane przez wystąpienie katastrofy naturalnej. Celem
							interwencji jest powrót pacjenta do równowagi psychicznej. Dzieje
							się to, dzięki zajęciu się bieżącymi, trudnymi uczuciami oraz
							trudnościami w funkcjonowaniu bezpośrednio związanymi z aktualną
							sytuacją.
						</p>
					</div>
				</section>
			</div>
			<div className='box4'>
				<h1 className='box4_headline'>Kto może szukać u nas pomocy?</h1>
				<div className='box4_icons'>
					<section>
						<img className='box4_icon' src={children}></img>
						<p className='box4_description'>Dzieci</p>
					</section>
					<section>
						<img className='box4_icon' src={teenagers}></img>
						<p className='box4_description'>Młodzież</p>
					</section>
					<section>
						<img className='box4_icon' src={couple}></img>
						<p className='box4_description'>Dorośli</p>
					</section>
					<section>
						<img className='box4_icon' src={senior}></img>
						<p className='box4_description'>Seniorzy</p>
					</section>
				</div>
			</div>
			<footer>
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default Home;
