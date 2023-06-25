import { useState } from "react";
import PropTypes from "prop-types";
import { BsFillPersonFill } from "react-icons/bs";

SortResult.propTypes = {
	participants: PropTypes.array.isRequired,
	tasks: PropTypes.array.isRequired
}

function tasksByParticipant(participants, tasks) {
	participants.sort(() => Math.random() - 0.5);
	tasks.sort(() => Math.random() - 0.5);
	let tmpTasksByParticipant = [];
	const countTasksByParticipant = parseInt((tasks.length / participants.length).toFixed());
	let sliceStart = 0;
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

	const mountedTasksByParticipants = tasksByParticipant(participants, tasks)
		.map((element, index) => {
			const listedTasks = element.tasks.map((task, index) =>
				<li key={index}>{task}</li>
			);

			return (
				<div key={index} className="p-2">
					<div className="flex items-center">
						<BsFillPersonFill />
						<label className="ml-1">{element.name}:</label>
					</div>
					<div>
						<ul className="marker:text-sky-400 list-disc pl-5 space-y-3 text-slate-400">
							{listedTasks}
						</ul>
					</div>
				</div>
			);
		});

	return (
		<div className="p-2 border border-solid border-personalblue rounded bg-white w-11/12 lg:w-8/12">
			{mountedTasksByParticipants}
		</div>
	);
}