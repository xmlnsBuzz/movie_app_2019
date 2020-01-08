import React from 'react';
function Food({ name, picture }) {
   return (
      <React.Fragment>
         <h3>I like {name}.</h3>
         <img src={picture} />
      </React.Fragment>
   )
}

const foodILike = [
   {
      name: 'food1',
      image: 'https://picsum.photos/id/1/200/300'
   },
   {
      name: 'food2',
      image: 'https://picsum.photos/id/2/200/300'
   },
   {
      name: 'food3',
      image: 'https://picsum.photos/id/3/200/300'
   },
   {
      name: 'food4',
      image: 'https://picsum.photos/id/4/200/300'
   },
   {
      name: 'food5',
      image: 'https://picsum.photos/id/5/200/300'
   },

]

function App() {
   return (
      <div>
         <h1>hello</h1>
         {foodILike.map(dish => (
            <Food name={dish.name} picture={dish.image} />
         ))}
      </div>
   )
}

export default App;
