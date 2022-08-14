import { useState } from "react"
import { FormRow, FormRowSelect } from "./index"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/SearchContainer"
const SearchContainer = () => {
	const {
		isLoading,
		// search,
		// searchStatus,
		// searchType,
		// sort,
		sortOptions,
		statusOptions,
		jobTypeOptions,
		setSearch,
		clearFilters
	} = useAppContext()
	const [values, setValues] = useState({
		search: "",
		searchStatus: "all",
		searchType: "all",
		sort: "latest"
	})
	const handleSearch = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(values)
		setSearch(values)
	}
	const handleClear = (e) => {
		e.preventDefault()
		clearFilters()
		setValues({
			search: "",
			searchStatus: "all",
			searchType: "all",
			sort: "latest"
		})
	}
	return (
		<Wrapper>
			<form className="form">
				<h4>search form</h4>
				{/* search position */}
				<div className="form-center">
					<FormRow
						type="text"
						name="search"
						value={values.search}
						handleChange={handleSearch}
					></FormRow>
					{/* search by status */}
					<FormRowSelect
						labelText="job status"
						name="searchStatus"
						value={values.searchStatus}
						handleChange={handleSearch}
						list={["all", ...statusOptions]}
					></FormRowSelect>
					{/* search by type */}

					<FormRowSelect
						labelText="job type"
						name="searchType"
						value={values.searchType}
						handleChange={handleSearch}
						list={["all", ...jobTypeOptions]}
					></FormRowSelect>
					{/* sort */}

					<FormRowSelect
						name="sort"
						value={values.sort}
						handleChange={handleSearch}
						list={sortOptions}
					></FormRowSelect>
					<button
						className="btn btn-block btn-success"
						disabled={isLoading}
						onClick={handleSubmit}
					>
						submit
					</button>
					<button
						className="btn btn-block btn-danger"
						disabled={isLoading}
						onClick={handleClear}
					>
						clear filters
					</button>
				</div>
			</form>
		</Wrapper>
	)
}

export default SearchContainer
