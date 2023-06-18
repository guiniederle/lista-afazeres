import React from "react";
import DynamicForm from "./DynamicForm";

class TasksForm extends React.Component
{
    render() {
        return (
            <>
                <DynamicForm
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