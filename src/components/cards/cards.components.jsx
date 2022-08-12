import React from "react";
import "./cards.styles.css";

export const Cards = (props) => {
	return (
		<div key={props.monsters.id} className="cards">
			<img
				src={`https://robohash.org/${props.monsters.id}?set=set3&size=180x180`}
				alt="monster"
			/>
			<h2>{props.monsters.name}</h2>
			<p>{props.monsters.email}</p>
		</div>
	);
};
