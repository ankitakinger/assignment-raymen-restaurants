import React,{Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';

class RestaurantDetail extends Component{

    render(){
        return (
            !this.props.restaurant
            ?
                <h2 style={{color:"green", fontSize: '40px'}}>Loading...</h2>
            :
                <div className='details-container'>
                    <div className='header'>
                        <h1>{(this.props.restaurant.Brand).toUpperCase()}</h1>
                        <StarRatingComponent 
                        starCount={10} 
                        value={this.props.restaurant.Stars} 
                        name="rating"
                        emptyStarColor="grey"/>
                    </div>
                    <img src='/top-ramen-restaurants-featured-image-866x487.jpg' alt='food-img' />
                    <div className='details'>
                        <div>
                            <span>VARIETY - {this.props.restaurant.Variety}</span> 
                            <span>STYLE - {this.props.restaurant.Style}</span>
                        </div>
                        <div style={{margin: '0'}}>Country: {this.props.restaurant.Country}</div>
                        <p>{'OVERVIEW -----> Delicious food is served here. Ambience is very beautiful!'}</p>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        restaurant: state.restaurant,
        err: state.err
    }
}

export default connect(mapStateToProps)(RestaurantDetail);