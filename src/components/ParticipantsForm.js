import React from "react";
import DynamicForm from "./DynamicForm";

class ParticipantsForm extends React.Component
{
	render() {
		return (
			<>
				<DynamicForm
					url="tasks"
					name="Participante"
					nextPage="Ir para tarefas"
					objectName="participants"
					formTitle="Adicione pelo menos um participante:"
				/>
			</>
		);
	}
}

export default ParticipantsForm;