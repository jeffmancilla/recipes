const Filter = (props) => {
    const handleChange = (e) => {
        console.log(e.target.value)
        props.setQuery(e.target.value)
    }
	// const categoryCheckbox = props.categories?.map((category, idx) => (<span key={idx}>x{category}</span>))
	return (
		<section className="Filter">
			<h1>Cook your next meal.</h1>
			<search>
				<input onChange={(e)=>handleChange(e)} type="search" placeholder="search" value={props.query}></input>
				{/* <div>{ categoryCheckbox }</div> */}
				{/* <div>{ props.categories[0].strCategory }</div> */}
			</search>
		</section>
	)
}

export default Filter
