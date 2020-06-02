import React from 'react';
import './bootstrap.min.css';
import './App.css';
import Player from './Player'; 
import Addplayer from './Addplayer'; 


class App extends React.Component {
  constructor(){
    super();
    this.state={ isLoaded:false,players: [] 
    };
  }

  componentDidMount(){
    let proxy = "https://cors-anywhere.herokuapp.com/";
    fetch(`${proxy}https://www.codemaniac.net/resource/players.json`)
    .then(res => res.json())
    .then(players =>{
      console.log(players)
      this.setState(()=>({
        isLoaded:true,
       players:players 
      }))
    }).catch(err => console.log(err))
  };
  deleteplayer=e=>{
    const{players} = this.state;
    const{id}=e.target;
    let newlist=players.filter(player => player.id !== +id);
    this.setState(()=>({
      players: newlist
    }));
  

  }
  createplayer = obj =>{
    const {players} = this.state;
    obj.id=players.length;
    this.setState(()=>({
      players: [...players,obj]
    })
    )
  }
render(){
  const { isLoaded, players } = this.state;
  if( isLoaded ===true ) {
    return(
      <div className="container">
        <h2 className="text-center">ScoreBoard</h2>
        <Addplayer add={(obj)=> this.createplayer(obj)} />
        {players.map(player =>(
          <Player key={player.id} name={player.name} points={player.points} handleDelete={this.deleteplayer} id={player.id} />
        ))}
      </div>
    )
  }else{
    return(
      <div className="text-center">
        <h3>Loading...</h3>
      </div>
    )
  }
  
}

}


export default App;
