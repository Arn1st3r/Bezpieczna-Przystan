import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import Cennik from "./price_list.js";
import Gabinet from "./office.js";
import Uslugi from "./services.js";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Onas' element={<About />} />
					<Route path='/Kontakt' element={<Contact />} />
					<Route path='/Cennik' element={<Cennik />} />
					<Route path='/Gabinet' element={<Gabinet />} />
					<Route path='/Uslugi' element={<Uslugi />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
