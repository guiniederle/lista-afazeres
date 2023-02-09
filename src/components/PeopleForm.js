import React from "react";
import ParticipantsInput from "./ParticipantsInput";
import { FaUserPlus } from 'react-icons/fa';

class PeopleForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			participants: []
		};
		this.handleParticipantInsert = this.handleParticipantInsert.bind(this);	
	}

	handleParticipantInsert() {
		let participants = this.state.participants;

		participants.push({name: ''});

		this.setState({
			participants: participants
		});
	}

	render() {
		const participants = this.state.participants.map((p, i) => <ParticipantsInput key={i} number={i} name={p} />);

		return (
			<form className="border-2 border-sky-500 place-self-center">
				<div>
					{participants}
				</div>
				<div>
					<button type="button" onClick={this.handleParticipantInsert} className="p-2 m-2 border border-green-600 rounded bg-green-50">
						<FaUserPlus className="text-green-600" />
						<label className="text-green-600">Adicionar Participante</label>
					</button>
					<button type="button">
						Ir para tarefas
					</button>
				</div>
			</form>
		);
	}
}

export default PeopleForm;