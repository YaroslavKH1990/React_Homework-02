import React from 'react';
import Feedback from './components/Feedback';
import Phonebook from './components/Phonebook';

const App = () => {
	return (
		<>
			{/* <Feedback /> */}
			<Phonebook />
		</>
	);
};

export default App;

// export default class App extends Component {
// 	state = {};

// 	formSubmitHandler = (data) => {
// 		console.log(data);
// 	};

// 	render() {
// 		return (
// 			<>
// 				{/* <Feedback /> */}
// 				<Phonebook onSubmit={this.formSubmitHandler} />
// 				{/* <Phonebook /> */}
// 			</>
// 		);
// 	}
// }
