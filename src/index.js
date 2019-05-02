import React from 'react';
import ReactDOM from 'react-dom';

function Test() {
  this.setFoo('hello');
}

Test.prototype.setFoo = (msg) => {
  this.foo = 'hello'
};

Test.prototype.notCovered = (msg) => {
  this.bar = 'not tested';
};

Test.prototype.testBranches = () => {
  if(this.foo === 'hello') {
    this.bar = 'world';
  } else {
    this.bar = 'Branch not tested';
  }
};

window.Test = Test;

class TestButton extends React.Component {
  handleClick = () => {
    const test = new Test();
    test.testBranches();
  };

  render() {
    return (
        <button onClick={this.handleClick}>
        Test me.
    </button>
  )
  }
}

ReactDOM.render(
<TestButton />,
    document.getElementById('root')
);
