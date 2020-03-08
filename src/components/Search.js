import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchRestaurants} from '../store/actions/actions';

class Search extends Component {

    state = {
        selectedType: 'year',
        search: ''
    }

    search = (e) => {
        this.setState({
            search: e.target.value
        }, () => this.getRestaurantsBySearchText());
    }

    searchOptionSelected = (type) => {
        this.setState({
            selectedType: type,
            search: ''
        }, () => this.getRestaurantsBySearchText());
    }

    getRestaurantsBySearchText = () => {
        this.props.fetchRestaurants(this.state.search,this.state.selectedType);
    }

    render() {

    return (
        <div>
            <input 
                type="text" 
                placeholder="Select an option below to start searching..." 
                size="50"
                value={this.state.search}
                onChange={this.search} />
            <br />
            <div>Search by : <br />
                <input 
                    type="radio" 
                    className="select" 
                    name="search"
                    checked={this.state.selectedType === 'year'} 
                    onChange={() => this.searchOptionSelected('year')}/>Year
                <input 
                    type="radio" 
                    className="select" 
                    name="search"
                    checked={this.state.selectedType === 'country'}
                    onChange={(e) => this.searchOptionSelected('country')} />Country
                <input 
                    type="radio" 
                    className="select" 
                    name="search" 
                    checked={this.state.selectedType === 'stars'}
                    onChange={() => this.searchOptionSelected('stars')} />Stars
                <input 
                    type="radio" 
                    className="select" 
                    name="search" 
                    checked={this.state.selectedType === 'variety'}
                    onChange={() => this.searchOptionSelected('variety')} />Variety
            </div>
        </div>
    );
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants : (search,option) => dispatch(fetchRestaurants(search,option))
    }
}

export default connect(null, mapDispatchToProps)(Search);