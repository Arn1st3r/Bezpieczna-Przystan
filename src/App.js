import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Contact from "./contact.js";
import Cennik from "./cennik.js";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/home' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/cennik' element={<Cennik />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
