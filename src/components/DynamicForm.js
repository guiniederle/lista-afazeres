import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdPersonRemove } from "react-icons/md";
import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";

class DynamicForm extends React.Component {
	constructor(props) {
		super(props);

		this.formName = props.name;
		this.url = "/" + props.url;
		this.data = props.data ?? [];
		this.handleInsertRecord = this.handleInsertRecord.bind(this);
		this.handleRemoveRecord = this.handleRemoveRecord.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		this.state = {
			records: []
		};
	}

	handleInsertRecord() {
		let records = this.state.records;

		records.push('');

		this.setState({
			records: records
		});
	}

	handleRemoveRecord(recordNumber) {
		let records = this.state.records;

		records.splice(recordNumber, 1);
		this.data[this.props.objectName] = records;

		this.setState({
			records: records
		});
	}

	handleInputChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		let records = this.state.records;
		records[name] = value;
		this.data[this.props.objectName] = records;
		
		this.setState({
			records
		});
	}

	render() {
		const records = this.state.records.map(
			(record, index) =>
				<div key={index} className="m-1 w-full lg:w-8/12 flex">
					<label className="flex-none">{this.formName} {index+1}: </label>
					<input
						type='text'
						value={record}
						className="transition duration-150 ease-in focus:border-b focus:border-dotted focus:border-sky-500 flex-auto"
						onChange={this.handleInputChange}
						name={index}
					/>
					<button
						type="button"
						className="flex-none"
						onClick={this.handleRemoveRecord.bind(this, index)}>
							<MdPersonRemove className="text-red-500" />
					</button>
				</div>
		);

		return (
			<Form className="p-2 border border-solid border-sky-500 rounded bg-white w-11/12">
				<div className="flex flex-col items-center">
					{records}
				</div>
				<div className="flex flex-col items-center">
					<div className="w-full lg:w-8/12 flex justify-around">
						<button
							type="button"
							onClick={this.handleInsertRecord}
							className="border border-solid border-green-700 rounded bg-green-200 text-green-700"
						>
							<FaUserPlus className="" />
							<label className="">Adicionar {this.formName.toLowerCase()}</label>
						</button>
						<Link to={this.url} state={{data: this.data}}>{this.props.nextPage}</Link>
					</div>
				</div>
			</Form>
		);
	}
}

DynamicForm.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	nextPage: PropTypes.string.isRequired,
	objectName: PropTypes.string.isRequired,
	data: PropTypes.array
}

export default DynamicForm;