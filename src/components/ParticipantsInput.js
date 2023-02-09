import React from "react";
import { MdPersonRemove } from 'react-icons/md';

class ParticipantsInput extends React.Component {
	render() {
		const participantNumber = this.props.number + 1;

		return(
			<div className="">
				<label className="my-1 mx-2">Participante {participantNumber}</label>
				<input type='text' defaultValue={null} className="border-b-2 border-gray-200 focus:border-0 focus-visible:border-0" />
				<button type="button" className="p-1"><MdPersonRemove className="text-red-500" /></button>
			</div>
		);
	}
}

export default ParticipantsInput;