import React from "react";
import DynamicForm from "./DynamicForm";

class TasksForm extends React.Component
{
    constructor(props) {
        super(props);

        this.participants = {
            participants: props.participants
        };
    }

    render() {
        return (
            <>
                <DynamicForm
                    url="sort"
                    name="Tarefas"
                    nextPage="Sortear"
                    data={this.participants}
                />
            </>
        );
    }
}

export default TasksForm;