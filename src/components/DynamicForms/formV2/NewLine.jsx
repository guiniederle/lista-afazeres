import PersonalLabel from "../../PersonalLabel";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export default function NewLine(props) {
	return(
		<>
			<div className="m-1 flex">
				<PersonalLabel
					title={props.name}
					index={props.index+1}
					className="flex-none"
				/>
				<label
					className="transition duration-150 ease-in focus:border-b focus:border-dotted focus:border-personalblue flex-auto px-1"
				>
					{props.record}
				</label>
				<button
					type="button"
					className="flex-none"
					onClick={props.removeLineFunc.bind(this, props.index)}
				>
					<IoMdRemoveCircleOutline className="text-red-500" />
				</button>
			</div>
		</>
	);
}