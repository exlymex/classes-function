import './App.css';
import React from 'react'

function App() {
  return (
      <>
        <Car />
        <Car />
        <Car />
      </>
  );
}

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'blue',
      name: "Pasha",
      model : 'first'
    }
  }
  onClickChange(){
    const color = ['blue', 'yellow', 'red', 'green','grey']
    const name = ['Arthur', 'Pasha', 'Dasha', 'Masha','Andriy']
    const model = ['Hyper', 'Razer', 'Razen', 'Plya','Lexus']
    let randomColor = Math.floor(Math.random() * color.length)
    let randomName = Math.floor(Math.random() * name.length)
    let randomModel = Math.floor(Math.random() * model.length)
    this.setState({
      color:color[randomColor],
      name:name[randomName],
      model:model[randomModel]
    })
}
  render(){
    return(<h2 onClick = {this.onClickChange.bind(this)}>I love color - {this.state.color}, Name - {this.state.name}, Model - {this.state.model} </h2>)
  }
}
export default App;

