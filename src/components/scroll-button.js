import React, { useEffect, useState } from "react";
import arrow from "./galery/arrow.png";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
		});
	}, []);
	return (
		<div className='scroll-to-top'>
			{isVisible && (
				<button onClick={scrollToTop}>
					<img src={arrow}></img>
				</button>
			)}
		</div>
	);
}
