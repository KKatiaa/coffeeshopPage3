import { Component } from "react"
import "./searchPanel.scss"

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }


getInput = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.OnUpdateSearch(term);
}

    render() {
        return (
            <div className="searchingPanel">
                <h2>Looking for</h2>
                <input type="text"
                placeholder="start typing here..."
                className="form-control search-input"
                value={this.state.term}
                onChange={this.getInput}/>
            </div>

        )
    }
}

export default SearchPanel;