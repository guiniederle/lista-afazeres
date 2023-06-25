import { BsFillPersonFill } from "react-icons/bs";
import { BiTask } from "react-icons/bi";
import { FaRegDotCircle } from "react-icons/fa";
import { isMobile } from 'react-device-detect';
import { Tooltip } from 'react-tooltip';

export default function PersonalLabel({title, index}) {
	let componentRender = null;
	const iconClassName = "text-indigo-500 flex justify-center items-center";
	switch(title) {
		case 'Participante':
			componentRender = <BsFillPersonFill />;
			break;
		case 'Tarefas':
			componentRender = <BiTask />;
			break;
		default:
			componentRender = <FaRegDotCircle />;
			break;
	}

	const formatRender = isMobile ? componentRender : title;

	return (
		<>
			<label
				data-tooltip-id="my-tooltip"
				data-tooltip-content={title}	
				className={iconClassName}
			>
				{formatRender} {index}:
			</label>
			<Tooltip id="my-tooltip" />
		</>
	)
}