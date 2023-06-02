import TasksForm from "../components/TasksForm";
import { useLocation } from 'react-router-dom';

export default function Tasks() {
	const location = useLocation();
	const participants = location.state.data;

	return (
		<>
			<TasksForm
				participants={participants}
			/>
		</>
	);
}