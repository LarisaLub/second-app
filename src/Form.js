 import React, { Component } from "react";

class Form extends Component {
    constructor (props){
        super (props);
        this.state ={
            fistName: props.fistName,
            lastName: props.lastName
        };
    }
    satField ( e,name ){
        this.setState({
            [name]:e.target.value
        });
        }
    }
    
    render() { 
        return (  
            <div>
                <label htmlFor='firstName'> Имя></label>
                <input
                name='firstName'
                id='firstName'
                onChange={(e)}=> this.set.Field(e,'firstName')}
                value={this.state.fistName}
                />
  <label htmlFor='lastName'> Фамилия></label>
                <input
                name='lastName'
                id='lastName'
                onChange={(e)}=> this.set.Field(e,'lastName')}
                value={this.state.lastName}
                />

        );
    }
}
export default Form;
