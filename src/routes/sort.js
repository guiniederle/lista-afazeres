import { useLocation } from 'react-router-dom';
import SortResult from '../components/SortResult';

export default function Sort() {
	const location = useLocation();
	const participants = location.state.data.participants;
	const tasks = location.state.data.tasks;

	return (
		<>
			<SortResult
				participants={participants}
				tasks={tasks}
			/>
		</>
	);
}