import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
   // 1 state를 선언한 아래 부분이 state다. 아래에서 부터 line 21는 외워라.
   state = {
      count: 0
   };

   add = () => {
      // this.setState(current => ({ count: this.state.count + 1 }));
      this.setState(current => ({ count: current.count + 1 }));

   };
   // this.state.count 에서 state는 위의 1 아래 선언된 부분의 count 이다.
   
   minus = () => {
      // this.setState(current => ({ count: this.state.count - 1 }));
      this.setState(current => ({ count: current.count - 1 }));
   };
   // current keyword?를 사용하여 this.state를 'current'로 대체시킬 수 있다.

   // add, minus에 값을 직접 지정하면 'Do not mutate state directly. Use setState()  react/no-direct-mutation-state'처럼 값을 직접 지정하지 말라는 경고가 뜬다.
   // state 속의 값이 바뀌면 state가 update되고, update 된 결과로 state를 refresh시켜 re-render가 발생한다.

   render() {
      return (
         <div>
            <h1>The number is : {this.state.count}. </h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
         </div>

      )
   }
}

export default App;
