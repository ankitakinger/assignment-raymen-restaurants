import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {Link} from 'react-router-dom';

const restaurant = (props) => (
    <Link to={`/${props.restaurant.Brand}/${props.restaurant.Variety}`}>
        <div className='each-rest' onClick={props.getRestaurantDetails}>
            <div className='rest-brand'>{props.restaurant.Brand}</div>
            <div className='rest-details'>
                <div>Variety - {props.restaurant.Variety}</div>
                <div>Style - {props.restaurant.Style}</div>
                <div>Country - {props.restaurant.Country}</div>
                <div>Top Ten - {props.restaurant['Top Ten']}</div>
                {
                    Number(props.restaurant.Stars) ?
                    <div>
                        Stars - 
                        <StarRatingComponent 
                            starCount={5} 
                            value={Number(props.restaurant.Stars)} 
                            name="rating"
                            emptyStarColor="grey"/>
                    </div>
                    :
                    <div></div>
                }
            </div>
        </div>
    </Link>
);

export default restaurant;