import React , {Component} from 'react';
 import TodoItems from './components/TodoItems/TodoItems'
 import AddItem from './components/AddItem/AddItem'
class App extends Component {
  state= {
    items : [
      {id :1 , firstname : "Hamza" , lastname : "ouni"}
    ]
  }

  deleteItem = (id)=>{
    // let items = this.state.items;
    // let index = items.findIndex(item => items.id === id)
    // items.splice(index , 1)
    // this.setState({items})

    let items = this.state.items.filter(item =>{
      return item.id !==id
    });
    this.setState({items})
  }


  addItem =(item) =>{
    item.id = Math.random()
    let items = this.state.items;
    items.push(item);
    this.setState({items : items})

  }
  render (){
    return(
      <div className="App container">
       <h1 className='text-center'> Todolist App</h1>
       <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
       <AddItem addItem={this.addItem}/>
      </div>
    );
  } 
  
}

export default App;
