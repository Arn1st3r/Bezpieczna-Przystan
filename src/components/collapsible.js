import { useState } from "react";
import React from "react";
import logo from "./galery/logo.png";
import icon from "./galery/bars-solid.svg";
import { useNavigate } from "react-router-dom";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

export default function Collapsible() {
	const [activeClass, setActiveClass] = useState("menu collapsible");

	const handleButtonClick = () => {
		setActiveClass(
			activeClass === "menu collapsible"
				? "menu collapsible--expanded"
				: "menu collapsible"
		);
	};
	return (
		<div className={activeClass}>
			<div>
				<img className='menu__logo' src={logo}></img>
				<img
					onClick={handleButtonClick}
					className='menu__icon'
					src={icon}></img>
			</div>
			<ul className='menu__items  collapsible_content'>
				<li>
					<Link className='menu__link' to='/'>
						Strona główna
					</Link>
				</li>
				<li>
					<Link className='menu__link' to='/Uslugi'>
						Usługi
					</Link>
				</li>
				<li>
					<Link className='menu__link' to='/Onas'>
						O nas
					</Link>
				</li>
				{/* <li>
					<Link className='menu__link' to='/Cennik'>
						Cennik
					</Link>
				</li> */}
				<li>
					<Link className='menu__link' to='/Gabinet'>
						Gabinet
					</Link>
				</li>
				<li className='menu__last_element'>
					<Link className='menu__link' to='/Kontakt'>
						Kontakt
					</Link>
				</li>
			</ul>
		</div>
	);
}
