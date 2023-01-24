import '../filterElem/filterElem.scss'

const FilterElem = (props) => {
    const buttonsData =[
        {name:"desc", label:"price descending"},
        {name:"asc", label:"price ascending"},
        {name:"Brasil", label:"Brasil"},
        {name:"Kenya", label:"Kenya"}
    ]

    const buttons=buttonsData.map(({name, label})=>{
        return (
            <button type="button"
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    });

    return(
        <div className="dropdown">
            <button className="dropbtn">Or filter</button>
                <div class="dropdown-content">
                    {buttons}
                </div>
        </div>
    )
}

export default FilterElem;