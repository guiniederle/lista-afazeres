import React from "react";
import { FaUserPlus } from 'react-icons/fa';
import { MdPersonRemove } from 'react-icons/md';
import { Form, Link } from "react-router-dom";

class DinamicForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			participants: []
		};

		this.handleParticipantInsert = this.handleParticipantInsert.bind(this);	
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleParticipantInsert() {
		let participants = this.state.participants;

		participants.push('');

		this.setState({
			participants: participants
		});
	}

	handleSubmit(e) {
		console.log('handleSubmit');
		e.preventDefault();
		console.log('Você clicou em enviar.');
		console.log(this.state.participants);
	}

	handleRemoveParticipant(participantNumber) {
		let participants = this.state.participants;

		participants.splice(participantNumber, 1);

		this.setState({
			participants: participants
		});
	}

	handleInputChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		const participants = this.state.participants;
		participants[name] = value;

		// const dispatch = useDispatch();
		// const data = useSelector(state => state.data.data);

		// const handleChange = event => {
		// dispatch(updateData(event.target.value));
		// }

		this.setState({
			participants
		});
	}

	render() {
		const participants = this.state.participants.map(
			(participant, index) =>
				<div key={index}>
					<label className="">Participante {index+1}</label>
					<input
						type='text'
						value={participant}
						className=""
						onChange={this.handleInputChange}
						name={index}
					/>
					<button
						type="button"
						className="p-1"
						onClick={this.handleRemoveParticipant.bind(this, index)}>
							<MdPersonRemove className="text-red-500" />
					</button>
				</div>
		);

		return (
			<Form>
				<div>
					{participants}
				</div>
				<div>
					<button type="button" onClick={this.handleParticipantInsert} className="">
						<FaUserPlus className="" />
						<label className="">Adicionar Participante</label>
					</button>
					<Link to='/tasks' state={{ nome: 'gui teste' }}>Task</Link>
					{/* <button
						type="submit"
					>
						Ir para tarefas
					</button> */}
				</div>
			</Form>
		);
	}
}

export default DinamicForm;