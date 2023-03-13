import React from "react";
import { MdPersonRemove } from 'react-icons/md';

class ParticipantsInput extends React.Component {
	constructor(props) {
		super(props);
console.log('construtor');
console.log(props);
		this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			participants: [] //criar o participante aqui
		};
		// console.log(props);
	}

	componentDidMount() {
		// console.log('componentDidMount');
		// this.setState({
		// 	participants
		// });
	}

	handleRemoveParticipant(divParticipantId) {
		// console.log('clicado');
		// if (document.body.querySelector(participant)) {
		// 	document.body.removeChild(document.body.querySelector(participant));
		// }
		console.log('handleRemoveParticipant');
		console.log(divParticipantId);
		// this.setState({
		// 	participants: {
		// 		id: event.target.dataset.id
		// 	}
		// });
	}

	handleInputChange(event) {
		const inputName = event.target.name;
		const value = event.target.value;
console.log('handleInputChange');
console.log(this.state);
		this.setState({
			participants: {[inputName]: value}
		});
	}

	render() {
		const participantNumber = this.props.number + 1;
		const divParticipantId = 'participant_' + participantNumber;

		return(
			<div id={divParticipantId} className="">
				<label className="my-1 mx-2">Participante {participantNumber}</label>
				<input
					type='text'
					defaultValue={null}
					className="border-b-2 border-gray-200 focus:border-0 focus-visible:border-0"
					onChange={this.handleInputChange}
					name={divParticipantId}
				/>
				<button
					type="button"
					className="p-1"
					onClick={this.handleRemoveParticipant.bind(this, divParticipantId)}>
						<MdPersonRemove className="text-red-500" />
				</button>
			</div>
		);
	}
}

export default ParticipantsInput;