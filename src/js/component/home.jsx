import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [selectedColor, setSelectedColor] = useState("yellow");
	const [showPurple, setShowPurple] = useState(false);

	return (
		<div>
		<div className="traffic-light text-center">
			<div
				onClick={() => {
					setSelectedColor("red");
					setShowPurple(false); // Oculta el morado
				}}
				className={"light red" + (selectedColor === "red" ? " glow1" : "")}
			></div>

			<div
				onClick={() => {
					setSelectedColor("yellow");
					setShowPurple(false); // Oculta el morado
				}}
				className={"light yellow" + (selectedColor === "yellow" ? " glow2" : "")}
			></div>

			<div
				onClick={() => {
					setSelectedColor("green");
					setShowPurple(false); // Oculta el morado
				}}
				className={"light green" + (selectedColor === "green" ? " glow3" : "")}
			></div>

			
			

			{showPurple && (
				<div
					onClick={() => {
						setSelectedColor("purple");
						setShowPurple(true);
					}}
					className={"light purple" + (selectedColor === "purple" ? " glow4" : "")}
				></div>
			)}
		</div>
		<button type="button" class="btn btn-secondary" onClick={() => setShowPurple(!showPurple)}>Botón</button>
		</div>
	);

}

export default Home;
