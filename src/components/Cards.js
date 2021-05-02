import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import photo from '../assets/images/img-9.jpg';
import photo1 from '../assets/images/img-2.jpg';
import photo2 from '../assets/images/img-3.jpg';
import photo3 from '../assets/images/img-4.jpg';
import photo4 from '../assets/images/img-8.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src={photo}
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src={photo1}
                            text="Travel through the Island of Bali in a Private Cruise"
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src={photo2}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={photo3}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                            src={photo4}
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
