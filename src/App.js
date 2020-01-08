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
      image: 'https://picsum.photos/id/1/100/100'
   },
   {
      name: 'food2',
      image: 'https://picsum.photos/id/2/100/100'
   },
   {
      name: 'food3',
      image: 'https://picsum.photos/id/3/100/100'
   },
   {
      name: 'food4',
      image: 'https://picsum.photos/id/4/100/100'
   },
   {
      name: 'food5',
      image: 'https://picsum.photos/id/5/100/100'
   }
]

function renderFood(dish) {
   return (
      <Food name={dish.name} picture={dish.image} />
   )
}
// 위와 같이 Food component 자체를 function에 담아 아래 App component를 단순화 시킬 수 있다.

function App() {
   return (
      <div>
         {foodILike.map(dish => (
            <Food name={dish.name} picture={dish.image} />
         ))}
      </div>
   )
}

export default App;
