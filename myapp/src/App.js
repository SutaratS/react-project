import React,{Component }from 'react';
import Header from './Header'
import FbButton from './FbButton'

class App extends Component{
  state = {like:0, dislike:0}
  render(){
    //const titleName = "Yes"
    return (
      <div>
     
        <Header/>
        I am Header
        <h4>Like: {this.state.like}</h4>
        <h4>Dislike: {this.state.dislike}</h4>
        <FbButton handleClick ={this.onLike} caption="Like" />
        <FbButton handleClick ={this.onDislike} caption="Dislike" />
        Hello React
      </div>
    );

  }
  onLike = () => {
    this.setState((prevState,props) => {
      return {
        like: prevState.like + 1
      }
    })

    this.setState(prevState => {
      return {
        like: prevState.like + 1
      }
    })
  }

  // onLike = () => {
  //   this.setState({like: this.state.like+1})
  //   return{
  //     like: prevState.like + 1
  //   }
  // }

  // onDislike = () => {
  //   this.setState({dislike: this.state.dislike+1})
  // }

}

export default App;