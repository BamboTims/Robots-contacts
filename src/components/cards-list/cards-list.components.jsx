import React from "react";
import "./cards-list.styles.css";
import { Cards } from "../cards/cards.components"

export const CardsList = (props) => {
	return (
		<div className="cards-list">
			{props.monsters.map((monster) => (
				<Cards monsters={monster} />
			))}
		</div>
	);
};
