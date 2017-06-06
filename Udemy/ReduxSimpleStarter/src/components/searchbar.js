import React, {Component} from 'react'; // import react and pull of component and store in const component

/* every component that is classed based needs to have a render method that returns JSX

--------------- Events ---------------

handling events in react has 2 steps
declare event handler
pass the event handler to the element that we want to monitor for events

onChange is a prop or property acess to the change event react specific
---------------------------------------------



--------------- State ---------------
is a plain JS object that is used to record and react to a user's event. Each class based component has it's own state object.When a component changes the render function runs and the state changes.


---------------------------------------------
*/

// const SearchBar = () => { //functional component as its a function
// 	return <input />

// };




class SearchBar extends Component { //SearchBar class component JS object define a new class and give it access to all react.component functionality
	constructor(props) {
		super(props);

		this.state = { term: ''}; // this is the only place we manipulate state. this.state = object everywhere else in the component we use this.setState to change the state
	}
	render() { // this is a method on a class return some JSX
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value})} />

			</div>
		);
	}
}

export default SearchBar; // exports only the search bar components