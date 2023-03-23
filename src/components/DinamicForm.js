import React from "react";
import { FaUserPlus } from 'react-icons/fa';
import { MdPersonRemove } from 'react-icons/md';

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
			<form onSubmit={this.handleSubmit} className="">
				<div>
					{participants}
				</div>
				<div>
					<button type="button" onClick={this.handleParticipantInsert} className="">
						<FaUserPlus className="" />
						<label className="">Adicionar Participante</label>
					</button>
					<button type="submit" onClick={this.handleSubmit}>
						Ir para tarefas
					</button>
				</div>
			</form>
		);
	}
}

export default DinamicForm;