import './Person.css';

const Person = (props) => {
	return <div>Welcome {props.person.name} {props.person.surname}. You are {props.person.age}.</div>;
};

export default Person;
