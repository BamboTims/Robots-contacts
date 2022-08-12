import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import { CardsList } from "./components/cards-list/cards-list.components";
import { Search } from "./components/search/search.components";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	async componentDidMount() {
		try {
			const url = "https://jsonplaceholder.typicode.com/users";
			const res = await fetch(url);
			const result = await res.json();
			this.setState({ monsters: result });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Robots Contacts</h1>
				<Search
					placeholder="Search for monsters"
					handleChange={this.handleChange}
				/>
				<CardsList monsters={filteredMonsters}></CardsList>
			</div>
		);
	}
}

export default App;
