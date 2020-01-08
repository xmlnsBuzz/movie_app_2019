import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
   {
      id: 1,
      name: 'food1',
      image: 'https://picsum.photos/id/1/100/100',
      rating: 5
   },
   {
      id: 2,
      name: 'food2',
      image: 'https://picsum.photos/id/2/100/100',
      rating: 4.9
   },
   {
      id: 3,
      name: 'food3',
      image: 'https://picsum.photos/id/3/100/100',
      rating: 4.8
   },
   {
      id: 4,
      name: 'food4',
      image: 'https://picsum.photos/id/4/100/100',
      rating: 5.5
   },
   {
      id: 5,
      name: 'food5',
      image: 'https://picsum.photos/id/5/100/100',
      rating: 4.7
   }
];
// id: 는 기본적으로 react 내부에서 사용하기 위하여 만든다.

function Food({ name, picture, rating }) {
   return (
      <React.Fragment>
         <h3>I like {name}. </h3>
         <h4>{rating}/5.0</h4>
         <img src={picture} alt={name} />
      </React.Fragment>
   )
}

Food.propTypes = {
   name: PropTypes.string.isRequired,
   picture: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired,
}

function App() {
   return (
      <div>
         <h1 style={{ textAlign: 'center' }}>Favorite Food</h1>
         {foodILike.map(dish => (
            <Food
               key={dish.id}
               name={dish.name}
               picture={dish.image}
               rating={dish.rating}
            />
         ))}
      </div>
   )
}

export default App;
