import "./App.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scroll-button.js";
import SingleQuestion from "./components/SingleQuestion";
import { useState } from "react";
import { questions } from "./components/questions";
import Collapsible from "./components/collapsible";
function Uslugi() {
	const [quests] = useState(questions);
	return (
		<div className='container'>
			<ScrollToTop />
			<nav>
				<Collapsible></Collapsible>
			</nav>
			<div className='home'>
				<div className='home__section'>
					<h1 className='home__heading'>Kiedy warto udać się do psychologa?</h1>
					<p className='home__box description'>
						Warto udać się do psychologa, jeśli masz trudności w radzeniu sobie
						z życiem codziennym, relacjami interpersonalnymi, emocjami lub
						zachowaniami, które wpływają negatywnie na Twoje samopoczucie i
						jakość życia.
					</p>
					<p className='home__box description'>
						Oto kilka sygnałów, które mogą wskazywać, że warto skonsultować się
						z psychologiem:
					</p>
					<ul>
						<li>
							Odczuwasz intensywne emocje, takie jak lęk, smutek, gniew,
							frustracja, zniechęcenie, bezradność lub bezsensowność, które
							utrzymują się przez dłuższy czas.
						</li>
						<li>
							Doświadczasz trudności w radzeniu sobie z codziennymi wyzwaniami,
							takimi jak praca, szkoła, życie rodzinne, związki lub życie
							towarzyskie.
						</li>
						<li>
							Masz trudności w utrzymaniu zdrowych relacji interpersonalnych lub
							doświadczasz problemów z komunikacją z innymi.
						</li>
						<li>
							Masz trudności w kontrolowaniu swojego zachowania lub nawyków,
							które wpływają negatywnie na Twoje życie, takie jak nadużywanie
							substancji, zaburzenia odżywiania lub uzależnienia.
						</li>
						<li>
							Odczuwasz, że Twoje myśli, zachowania lub uczucia utrudniają Ci
							osiągnięcie Twoich celów życiowych.
						</li>
						<li>
							Doświadczasz trudności z radzeniem sobie ze stresem, traumą lub
							stratą.
						</li>
					</ul>
				</div>
			</div>
			<div className='home__box'>
				<div className='home__box'>
					<section className='home__box item--first'>
						<h2>Konsultacja psychologiczna</h2>
						<p className='home__box description'>
							Konsultacje są pierwszym etapem kontaktu z psychologiem. Zazwyczaj
							obejmują od jednego do trzech spotkań, które dotyczą poznania
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
					</section>
				</div>
				<div className='home__box'>
					<section className='home__box item--last'>
						<h2>Wsparcie psychologiczne</h2>
						<p>
							Jest to krótkoterminowa forma pomocy, poprzedzona konsultacjami
							psychologicznymi. Zazwyczaj obejmuje do czternastu spotkań, które
							odbywają się raz w tygodniu lub raz na dwa tygodnie. Każde trwa
							około 50 minut. Jeśli doświadczasz stresującej sytuacji życiowej,
							czujesz się przeciążony wieloma zadaniami, które masz do
							zrelizowania albo doświadczasz problemów w adaptacji do zmian to
							ta forma pomocy jest dla Ciebie. Zadaniem psychologa podczas
							kontakt wsparciowego jest towarzyszenie w danym problemie i
							szukanie razem z Tobą opcji jego rozwiązań. Kontakt ten ma na celu
							wzmacnianie Twoich zasobów, poczucia sprawstwa w życiu oraz
							obniżanie poziomu stresu. Dzięki temu będzie Ci potem łatwiej
							radzić sobie samodzielnie.
						</p>
					</section>
				</div>
				<div className='home__box'>
					<section className='home__box item--last'>
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
					</section>
				</div>
			</div>
			<hr></hr>
			<div className='home'>
				<div className='home__section'>
					<h1 className='home__heading'>
						Kiedy warto udać się do psychoterapeuty?
					</h1>
					<p className='home__box description'>
						Warto udać się do psychoterapeuty, jeśli doświadczasz trudności
						emocjonalnych lub psychicznych, które utrudniają Twoje codzienne
						funkcjonowanie, relacje z innymi ludźmi lub osiągnięcie swoich celów
						życiowych. Oto kilka sygnałów, które mogą wskazywać, że warto
						rozważyć terapię:
					</p>
					<p className='home__box description'>
						Oto kilka sygnałów, które mogą wskazywać, że warto skonsultować się
						z psychoterapeutą:
					</p>
					<ul>
						<li>
							Odczuwasz trudności w kontrolowaniu swoich emocji lub doświadczasz
							silnych, niepokojących uczuć, takich jak lęk, depresja, gniew lub
							złość, które utrzymują się przez dłuższy czas.
						</li>
						<li>
							Masz trudności w nawiązywaniu i utrzymywaniu zdrowych,
							satysfakcjonujących relacji z innymi ludźmi.
						</li>
						<li>
							Masz trudności w radzeniu sobie z codziennymi wyzwaniami, takimi
							jak praca, szkoła, życie rodzinne, związki lub życie towarzyskie.
						</li>
						<li>
							Doświadczasz trudności w utrzymaniu równowagi między życiem
							prywatnym a zawodowym, co wpływa na Twoje samopoczucie i jakość
							życia.
						</li>
						<li>
							oświadczasz powtarzających się myśli, zachowań lub nawyków, które
							utrudniają Ci osiągnięcie Twoich celów życiowych.
						</li>
						<li>
							Doświadczasz traumy lub straty, które wpłynęły negatywnie na Twoje
							samopoczucie i jakość życia.
						</li>
					</ul>
				</div>
			</div>
			<div className='home__box'>
				<div className='home__box'>
					<section className='home__box item--first'>
						<h2>Psychoterapia</h2>
						<p>
							Psychoterapia to wyjątkowe spotkania pomiędzy przygotowaną do tego
							fachowo osobą terapeuty, a klientem znajdującym się w szczególnym
							miejscu swojego życia.Towarzyszy im atmosfera uważnego
							doświadczania, życzliwości oraz zaufania. Częstotliwość sesji oraz
							czas trwania terapii jest ustalany indywidualnie, przede wszystkim
							w zgodzie z potrzebami klienta. Dzięki psychoterapii możesz
							bardziej poznać siebie, zrozumieć swoje zachowania, znaleźć
							odpowiedzi na ważne dla Ciebie pytania. Psychoterapia pomaga w
							trudnych sytuacjach życiowych, rozwiązywaniu problemów czy
							podejmowaniu zmian w swoim życiu. Plusów jest wiele. Przede
							wszystkim psychoterapia to podróż, która rozwija na wielu
							płaszczyznach życia, wspiera, rozwija i wnosi nowe światło w Twoje
							życie.
						</p>
					</section>
				</div>
				<div className='home__box'>
					<section className='home__box item--last'>
						<h2>Przekierowanie do innego specjalisty</h2>
						<p>
							Podczas konsultacji psychologicznych lub w trakcie terapii,
							psychoterapeuta może skierować Cię na konsultacje do lekarza.
							Najczęściej będzie to konsultacja z psychiatrą, endokrynologiem
							lub neurologiem. Psychiatra, w odróżnieniu od psychologa, może
							wypisywać recepty i zwolnienia. W razie potrzeby dobierze
							odpowiednie leki, ktore zmniejszą nasilenie objawów i poprawią
							jakość życia. Enokrynolog może m. in. sprawdzić, czy podłoże
							Twoich problemów nie jest somatyczne - przykładowo zaburzenia
							hormonalne mogą imitowac objawy depresji. Równoczesne stosowanie
							pomocy psychoterapeutycznej i konsultacji lekarskich przyspiesza
							powrót do zdrowia.
						</p>
					</section>
				</div>
				<div className='home__box'>
					<section className='home__box item--last'>
						<h2>Psychoedukacja</h2>
						<p>
							Jest to podstawowa edukacja w zakresie zabrzueń psychicznych i
							emocjonalnych, np. uświadamianie pacjentowi, jego rodzienie,
							bliskim, czym jest choroba, na czym polega, jak sobie z nią radzić
							itd. Psychoedukacja jest ważnym elementem leczenia zaburzeń
							psychicznych, w swej zaawansowanej formie obejmuje również uczenie
							rodziny klienta pewnych umiejętności, sprzyjających jego powrotowi
							do zdrowia. (np. radzenie sobie ze stresem, wiedza).
						</p>
					</section>
				</div>
			</div>
			<hr></hr>
			<div className='home'>
				<h1 className='home__heading faq'>Najczęściej zadawane pytania:</h1>
				<article className='home__description'>
					{quests.map((quest, index) => (
						<SingleQuestion key={index} {...quest} />
					))}
				</article>
			</div>
			<footer>
				<p> © Copyright 2023. Created and designed by Rafał Arnista</p>
			</footer>
		</div>
	);
}

export default Uslugi;
