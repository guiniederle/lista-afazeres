import { FaPlus } from "react-icons/fa";
import PersonalLink from "../PersonalLink";
import { Form } from "react-router-dom";
import PersonalLabel from "../PersonalLabel";
import { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";

export default function DynamicFormV2({ url, name, nextPage, objectName, formTitle }) {
	const inputLabel = objectName === 'participants' ? `Nome do ${name}` : `Informe a ${name}`;
	let disabledLink = true;
	const [records, setRecords] = useState([]);
	const [recordsWithElements, setRecordsWithElements] = useState(<></>);

	const handleUpdateRecordsWithElements = () => {
		setRecordsWithElements(
			records.map(
				(record, index) =>
					<div key={index} className="m-1 lg:w-8/12 flex">
						<PersonalLabel
							title={name}
							index={index+1}
							className="flex-none"
						/>
						<label
							className="transition duration-150 ease-in focus:border-b focus:border-dotted focus:border-personalblue flex-auto px-1"
						>
							{record.value}
						</label>
						<button
							type="button"
							className="flex-none"
							onClick={handleRemoveParticipant.bind(this, index)}
						>
							<IoMdRemoveCircleOutline className="text-red-500" />
						</button>
					</div>
			)
		);
	}

	const handleRemoveParticipant = (index) => {
		let recordsTemp = records;

		recordsTemp.splice(index, 1);
		setRecords(recordsTemp);

		handleUpdateRecordsWithElements();
	}

	function handleInsert() {
		const dynamicInputValue = document.getElementById('dynamicInput');
		let temp = records;

		temp.push({
			id: records.length,
			value: dynamicInputValue.value
		});
		setRecords(temp);

		handleUpdateRecordsWithElements();

		dynamicInputValue.value = '';
		dynamicInputValue.focus();
	}

	return(
		<>
			<div className="p-2 border border-solid border-personalblue rounded bg-white w-11/12 lg:w-8/12">
				<div>
					<Form className="">
						<div className="m-1 lg:w-8/12 flex">
							<PersonalLabel
								title={name}
								index={null}
								className="flex-none"
							/>
							<input
								type='text'
								className="transition duration-150 ease-in focus:border-b focus:border-dotted focus:border-personalblue flex-auto px-1"
								name='dynamicInput'
								id='dynamicInput'
								placeholder={inputLabel}
							/>
							<button
								type="button"
								className="flex-none"
								onClick={handleInsert}
							>
								<FaPlus className="text-green-700" />
							</button>
						</div>
					</Form>
				</div>
				<div className="flex flex-col items-center">
					{recordsWithElements}
				</div>
				
				<PersonalLink
					to={url}
					state={{data: []}}
					nextPage={nextPage}
					disabled={disabledLink}
				>
				</PersonalLink>
			</div>
		</>
	);
}