import React from 'react';



class Player extends React.Component {
    constructor(){
        super();
        this.state={ name: "",
          points: "",
          show: false
        };
      }
      increasePoints = ()=>{
        let {points} = this.state;
        points++;
        this.setState(()=>({points:points}))
      }
      decreasePoints = ()=>{
        let {points} = this.state;
        points--;
        this.setState(()=>({points:points}))
      }
    handleShow = () =>{
      this.setState(()=>({
        show: !this.state.show
      
      }))
    }
    formMethod = (e) =>{
      const {name, value} = e.target;
      this.setState(()=>({
        [name] : [value]
    
      }))
    };
    componentDidMount(){
      const {name, points} = this.props;
      this.setState(()=>({
        name,
        points
      })
      );
    };
 

    render(){
      let{points,show} = this.state;
      let ourstyle={display: show ? 'block' : 'none'}
      return(
    
          <div className="card p-5 mb-3">
            <h3>
              {this.props.name}
               <button onClick={this.handleShow}>
                {show ? '-' : '+'}
              </button>
              <button className="btn btn-sm btn-danger text-light" id={this.props.id}
              onClick={this.props.handleDelete}>x</button>
            </h3>
      <p>points: {points}</p>
            <div style={ourstyle}>
              <button className="btn btn-sm btn-light" onClick={this.increasePoints}>+1</button>
              <button className="btn btn-sm btn-dark" onClick={this.decreasePoints}>-1</button>
              <br/><br/>
              <div className="form-group">
                <input type="number" name="points"  value={points} onChange={this.formMethod} className="form-control" />
              </div>
            </div>
          </div>
    
      )
    }
    
    }
    

export default Player;
// {this.props.location.pathname}