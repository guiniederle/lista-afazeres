import DynamicForm from "./DynamicForms/DynamicForm";
import DynamicFormV2 from "./DynamicForms/DynamicFormV2";

export default function DefaultForm(props) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const version = parseInt(urlParams.get('v') ?? 2);
    let form = null;

    if (version === 1) {
        form = <DynamicForm {...props} />
    } else {
        form = <DynamicFormV2 {...props} />
    }

    return (
        <>
            {form}
        </>
    );
}