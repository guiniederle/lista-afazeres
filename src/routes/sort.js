import { useLocation } from 'react-router-dom';

export default function Sort() {
	const location = useLocation();
	console.log(location);
	// const participants = location.state;

	// return (
	// 	<>
	// 		<TasksForm
	// 			participants={participants}
	// 		/>
	// 	</>
	// );
}