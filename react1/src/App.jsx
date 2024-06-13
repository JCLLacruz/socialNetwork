import './App.css';
import Person from './components/Person/Person.jsx';

function App() {
	const pepe = {name: 'Pepe',surname: 'Garcia', age: '18'};
	const jose = {name: 'Jose',surname: 'Jiménez', age: '45'};
	const juan = {name: 'Juan',surname: 'Martínez', age: '28'};
	return (
		<div>
			<Person person = {pepe}/>
			<Person person = {jose}/>
			<Person person = {juan}/>
		</div>
	);
}

export default App;
