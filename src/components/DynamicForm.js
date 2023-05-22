import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdPersonRemove } from "react-icons/md";
import { Form, Link } from "react-router-dom";
import PropTypes from "prop-types";

class DynamicForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			records: [],
			return: null
		};

		this.formName = props.name;
		this.url = "/" + props.url;
		this.data = props.data;
		this.handleInsertRecord = this.handleInsertRecord.bind(this);	
		this.handleRemoveRecord = this.handleRemoveRecord.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
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

		this.setState({
			records: records
		});
	}

	handleInputChange(event) {
		const name = event.target.name;
		const value = event.target.value;
		let records = this.state.records;
		records[name] = value;

		this.setState({
			records
		});
	}

	render() {
		const records = this.state.records.map(
			(record, index) =>
				<div key={index}>
					<label className="">{this.formName} {index+1}</label>
					<input
						type='text'
						value={record}
						className=""
						onChange={this.handleInputChange}
						name={index}
					/>
					<button
						type="button"
						className="p-1"
						onClick={this.handleRemoveRecord.bind(this, index)}>
							<MdPersonRemove className="text-red-500" />
					</button>
				</div>
		);

		return (
			<Form>
				<div>
					{records}
				</div>
				<div>
					<button type="button" onClick={this.handleInsertRecord} className="">
						<FaUserPlus className="" />
						<label className="">Adicionar {this.formName.toLowerCase()}</label>
					</button>
					<Link to={this.url} state={{records: this.state.records, data: this.data}}>{this.nextPage}</Link>
				</div>
			</Form>
		);
	}
}

DynamicForm.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	nextPage: PropTypes.string.isRequired,
	data: PropTypes.object
}

export default DynamicForm;