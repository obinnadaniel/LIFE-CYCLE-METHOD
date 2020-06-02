import React from 'react';

class Addplayer extends React.Component{
    constructor(){
        super();
        this.state = {name:'',points:''}
    }

handleName = e =>{ const newname= e.target.value; this.setState(()=>({name:newname}))};
handlePoints = e =>{ const newpoint= e.target.value; this.setState(()=>({points:newpoint}))};
submit=e=>{
    e.preventDefault();
    const {name,points} =this.state;
    let newplayer={name,points};
    this.props.add(newplayer);
    this.setState(()=>({name:"",points:""}));
}
render(){
    const{name,points} = this.state;
    return(
        <div className="card p-3 m-3">
        <form onSubmit={this.submit}>
        <div className="form-group">
        <input type="text" name="name" value={name} onChange={this.handleName} className="form-control" placeholder="name" />
        </div>
        <div className="form-group">
        <input type="number" className="form-control" name="points" value={points} onChange={this.handlePoints} placeholder="points"/>
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-block btn-sm btn-info">submit</button>
        </div>
        </form> 
        </div>

    )
}
}

export default Addplayer;