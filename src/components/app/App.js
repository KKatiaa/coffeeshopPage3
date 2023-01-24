import {Component} from 'react';
import  Header from '../header/header';
import Footer from '../footer/footer';
import Articles from '../articles/articles';
import SearchPanel from '../search-panel/searchPanel';
import FilterElem from '../filterElem/filterElem';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            data: [
            {name: 'Arabica coffee', country: 'Brasil', price: 6.99, id:'1'},
            {name: 'Arabica Plus coffee', country: 'Kenya', price: 8.99, id:'2'},
            {name: 'Green coffee', country: 'Brasil', price: 3.99, id:'3'},
            {name: 'Green Asian coffee', country: 'Kenya', price: 2.99, id:'4'},
            {name: 'Arabica Super coffee', country: 'Brasil', price: 16.99, id:'5'},
            {name: 'Green Malasia coffee', country: 'Kenya', price: 4.99, id:'6'}],
            term:'',
            filter:''
        }
    }

    SortByCountry = (items, country) => {
        if (country.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.country.indexOf(country) > -1
        })
    }

    SearchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    CompareAsc( a, b ) {
        if ( a.price < b.price ){
          return -1;
        }
        if ( a.price > b.price ){
          return 1;
        }
        return 0;
    }

    CompareDesc( a, b ) {
        if ( a.price < b.price ){
          return 1;
        }
        if ( a.price > b.price ){
          return -1;
        }
        return 0;
    }

    FilterSelect = (items, filter) => {
        switch(filter){
            case "asc":return items.sort(this.CompareAsc);
            case "desc":return items.sort(this.CompareDesc);
            case "Brasil":return this.SortByCountry(items, filter);
            case "Kenya":return this.SortByCountry(items, filter);
            default:return items
        }
    }

    OnUpdateSearch = (term) => {
        this.setState({term});
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }
  
    render(){
        const {data, term, filter} = this.state;
        const visibleData = this.FilterSelect(this.SearchEmp(data, term), filter);
        return(
            <div>
                <div>
                    <Header/>
                </div>  
                <div>
                    <SearchPanel OnUpdateSearch={this.OnUpdateSearch}/>
                    <FilterElem data={visibleData} onFilterSelect={this.onFilterSelect}/>
                    <Articles data={visibleData}/>
                </div>
                <div>
                    <Footer/>
                </div> 
            </div>
        );
    }
}

export default App;