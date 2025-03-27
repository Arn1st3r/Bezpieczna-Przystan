import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import Cennik from "./price_list.js";
import Gabinet from "./office.js";
import Uslugi from "./services.js";
import { Helmet } from "react-helmet";
function App() {
	return (
		<div>
			<Helmet>
			<script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="be65bb22-0a38-4120-9fa3-3737460ffa76" data-blockingmode="auto" type="text/javascript"></script>
			</Helmet>
			<body>
			<script id="CookieDeclaration" src="https://consent.cookiebot.com/be65bb22-0a38-4120-9fa3-3737460ffa76/cd.js" type="text/javascript" async></script>
			</body>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Onas' element={<About />} />
					<Route path='/Kontakt' element={<Contact />} />
					{/* <Route path='/Cennik' element={<Cennik />} /> */}
					<Route path='/Gabinet' element={<Gabinet />} />
					<Route path='/Uslugi' element={<Uslugi />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
