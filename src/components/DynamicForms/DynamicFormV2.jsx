import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import PersonalLink from "../PersonalLink";
import PersonalLabel from "../PersonalLabel";
import NewLine from "./formV2/NewLine";

export default function DynamicFormV2({ url, name, nextPage, objectName, data }) {
	const buttonColorOff = "text-grey-200";
	const buttonColorOn = "text-green-700";
	const inputLabel = objectName === 'participants' ? `Nome do ${name}` : `Informe a ${name}`;
	const [ disabledLink, setDisabledLink ] = useState(true);
	const [ records, setRecords ] = useState([]);
	const [ recordsWithElements, setRecordsWithElements ] = useState(<></>);
	const [ buttonColor, setButtonColor ] = useState(buttonColorOff);
	const [ dynamicInput, setDynamicInput ] = useState('');
	const [ dataTmp, setDataTmp ] = useState(data ?? []);

	useEffect(() => {
		dataTmp[objectName] = [];
		setDataTmp(dataTmp);
	}, [dataTmp, objectName]);

	const handleDynamicInputChange = event => {
		const value = event.target.value.trim();
		setDynamicInput(value);
		if (value !== '') {
			setButtonColor(buttonColorOn);
		} else {
			setButtonColor(buttonColorOff);
		}
	}

	const handleUpdateRecordsWithElements = () => {
		setRecordsWithElements(
			records.map(
				(record, index) =>
					<NewLine
						key={index}
						record={record}
						index={index}
						name={name}
						removeLineFunc={handleRemove}
					/>
			)
		);
	}

	const handleUpdateLink = () => {
		if (records.length > 0) {
			setDisabledLink(false);
		} else {
			setDisabledLink(true);
		}
	}

	const handleRemove = (index) => {
		let recordsTemp = records;

		recordsTemp.splice(index, 1);
		setRecords(recordsTemp);
		let tmp = dataTmp[objectName];
		tmp = records;
		setDataTmp(tmp);

		handleUpdateRecordsWithElements();
		handleUpdateLink();
	}

	const handleInsert = () => {
		if (dynamicInput.trim() === '' || dynamicInput.trim() === null) {
			alert('Informe um nome válido!');
			return;
		}

		let temp = records;

		temp.push(
			dynamicInput.trim()
		);
		setRecords(temp);
		dataTmp[objectName] = records;
		setDataTmp(dataTmp);

		handleUpdateRecordsWithElements();
		handleUpdateLink();

		const dynamicInputValue = document.getElementById('dynamicInput');
		dynamicInputValue.value = '';
		setDynamicInput('');
		setButtonColor(buttonColorOff);
		dynamicInputValue.focus();
	}

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleInsert();
		}
	}

	return(
		<>
			<div className="p-2 border border-solid border-personalblue rounded bg-white w-11/12 lg:w-8/12">
				<div className="m-1 flex">
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
						onChange={handleDynamicInputChange}
						onKeyDown={handleKeyDown}
					/>
					<button
						type="button"
						className="flex-none"
						onClick={handleInsert}
					>
						<FaPlus className={buttonColor} />
					</button>
				</div>
				<div className="flex flex-col">
					{recordsWithElements}
				</div>
				
				<PersonalLink
					to={'/' + url}
					state={{data: dataTmp}}
					nextPage={nextPage}
					disabled={disabledLink}
				/>
			</div>
		</>
	);
}