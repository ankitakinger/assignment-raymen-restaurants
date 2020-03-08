import React,{Component} from 'react';
import {connect} from 'react-redux';
import Restaurant from './Restaurant';
import {fetchRestaurants, fetchedRestaurantDetails} from '../store/actions/actions';

class RestaurantsGrid extends Component{

    state = {
        isLoading: true
    }

    componentDidMount(){
        this.props.fetchRestaurants();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.restaurants === this.props.restaurants){
            this.setState({
                isLoading: true
            })
        }
        else{
            this.setState({
                isLoading: false
            })
        }
    }

    getRestaurantDetails = (restaurant) => {
        console.log('hello', restaurant);
        this.props.fetchedRestaurantDetails(restaurant);
    }

    render(){
        return (
            <div className='all-rest'>
                {this.state.isLoading ? <h2 style={{color:"green", fontSize: '40px'}}>Loading...</h2> :
                this.props.err ? <h2 className="Danger">{this.props.err.message}</h2> : 
                (this.props.restaurants) instanceof Array ?
                this.props.restaurants.map((restaurant, index) => <Restaurant restaurant={restaurant} key={index} getRestaurantDetails={() => this.getRestaurantDetails(restaurant)}/>) :
                <h2 className="Danger">{this.props.restaurants}</h2>
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        err: state.err
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchRestaurants: () => dispatch(fetchRestaurants()),
        fetchedRestaurantDetails: (res) => dispatch(fetchedRestaurantDetails(res))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantsGrid);