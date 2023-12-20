const Filter = (props) => {

    const handleChange = (e) => {
        console.log(e.target.value)
        props.setQuery(e.target.value)
    }

	
	return (
		<section className="Filter">
			<search>
				<input onChange={(e)=>handleChange(e)} type="search" placeholder="search" value={props.query}></input>
			</search>
		</section>
	)
}

export default Filter
