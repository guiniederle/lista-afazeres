import React from "react";
import DefaultForm from "./DefaultForm";

class TasksForm extends React.Component
{
	render() {
		return (
			<>
				<DefaultForm
					url="sort"
					name="Tarefas"
					nextPage="Sortear"
					objectName="tasks"
					data={this.props.participants}
					formTitle="Adicione pelo menos uma tarefa:"
				/>
			</>
		);
	}
}

export default TasksForm;