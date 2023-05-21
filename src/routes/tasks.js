import TasksForm from "../components/TasksForm";
import { useLocation } from 'react-router-dom';

export default function Tasks() {
    const location = useLocation();
    console.log(location);
    // const { nome } = location.state;

    // console.log('Nome: ' + nome);

    return (
        <>
            <TasksForm />
        </>
    );
}