import React from 'react';
function Potato({ fav }) {
   console.log(fav)
   return <h3>I {fav}love potato.</h3>
}

/* 
function args에 모든 props를 넣고 싶을 때는 fucntion(props)
               특정 props를   "     "     function({propsNames,}*) 
 */

/* 
react          html
component = element
props       = attributes
value       = value
*/


function App() {
   return (
      <div>
         <h1>hello</h1>
         {/* <Potato 
            fav="kimchi"
            something={true}
            arr={['hello', 1, 2, 3, 4, true]}
         /> */}
         <Potato fav="food" />
         <Potato fav="food2" />
         <Potato fav="food3" />
         <Potato fav="food4" />
      </div>
   )
}

export default App;
