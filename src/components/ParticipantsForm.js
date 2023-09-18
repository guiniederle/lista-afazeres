import React from "react";
import DefaultForm from "./DefaultForm";

class ParticipantsForm extends React.Component
{
	render() {
		return (
			<>
				<DefaultForm
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