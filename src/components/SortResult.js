import { useState } from "react";
import PropTypes from "prop-types";

SortResult.propTypes = {
	participants: PropTypes.array.isRequired,
	tasks: PropTypes.array.isRequired
}

function tasksByParticipant(participants, tasks) {
	participants.sort(() => Math.random() - 0.5);
	tasks.sort(() => Math.random() - 0.5);
	let tmpTasksByParticipant = []
	let sliceStart = 0;
	const countTasksByParticipant = parseInt((tasks.length / participants.length).toFixed());
	let sliceEnd = countTasksByParticipant;

	participants.forEach((element, index) => {
		let tmpTasks = (participants.length-1) === index ?
			tasks.slice(sliceStart) :
			tasks.slice(sliceStart, sliceEnd);
		tmpTasksByParticipant.push({
			name: element,
			tasks: tmpTasks
		});

		sliceStart += countTasksByParticipant;
		sliceEnd += countTasksByParticipant;
	});

	return tmpTasksByParticipant;
}

export default function SortResult(props) {
	const [participants] = useState(props.participants);
	const [tasks] = useState(props.tasks);

	const mountedTasksByParticipants = tasksByParticipant(participants, tasks).map((element, index) => {
		const listedTasks = element.tasks.map((task, index) =>
			<li key={index}>{task}</li>
		);

		return (
			<div key={index}>
				<div>
					<label>Participante {element.name}:</label>
				</div>
				<div>
					{listedTasks}
				</div>
			</div>
		);
	});

	return (
		<>
			{mountedTasksByParticipants}
		</>
	);
}