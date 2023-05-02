import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import Cennik from "./cennik.js";
import Gabinet from "./gabinet.js";
import Uslugi from "./uslugi.js";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='' element={<Home />} />
					<Route path='/About' element={<About />} />
					<Route path='/Contact' element={<Contact />} />
					<Route path='/Cennik' element={<Cennik />} />
					<Route path='/Gabinet' element={<Gabinet />} />
					<Route path='/Uslugi' element={<Uslugi />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
