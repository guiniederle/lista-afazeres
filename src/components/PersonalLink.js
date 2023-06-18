import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";

export default function PersonalLink({to, state, nextPage, disabled}) {
	let url = to;
	const baseClassName = "border border-solid rounded p-1 flex justify-center items-center ";
	let className = baseClassName + "border-blue-800 bg-blue-300 text-blue-800";
	let classNameIcon = "p-0.5";
	let classNameLabel = "";

	if (disabled) {
		url = "";
		className = baseClassName + "border-gray-400 bg-gray-200 text-gray-400 opacity-70 cursor-no-drop";
		classNameIcon += " opacity-40";
		classNameLabel += "cursor-no-drop";
	}

	return (
		<>
			<Link
				to={url}
				state={state}
				className={className}
			>
				<GrLinkNext className={classNameIcon} />
				<label className={classNameLabel}>{nextPage}</label>
			</Link>
		</>
	);
}