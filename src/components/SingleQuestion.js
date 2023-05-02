import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function SingleQuestion({ question, answer }) {
	const [isShowing, setIsShowing] = useState(false);

	return (
		<>
			<div className='article-question'>
				<article onClick={() => setIsShowing(!isShowing)}>
					<h2>{question}</h2>
					{isShowing ? (
						<FaChevronUp className='icon' />
					) : (
						<FaChevronDown className='icon' />
					)}
				</article>
				{isShowing && <p>{answer}</p>}
			</div>
		</>
	);
}
export default SingleQuestion;
