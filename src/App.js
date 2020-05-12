import React, { Component } from 'react';
import './App.css';
import Result from './Result';
import KeyPad from "./KeyPad";

class App extends Component {
    constructor(){
        super();
        this.state = {
            result: ""
        }
    }

    onClick = (button) => {
      let checkResult = ''

      // if user clicks = button..
        if(button == "="){
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        } 
        // if + and - signs are used together it, subtracts second term from first term
        else if(this.state.result.includes('+-')){
            checkResult = this.state.result.replace('+-','-')
        } 
        else if(this.state.result.includes('-+')){
            checkResult = this.state.result.replace('-+','-')
        } 
        else {
            checkResult = this.state.result
        }

        // catches any error(like syntax) eg: 67*(()*9
        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
            
        } catch (e) {
            this.setState({
                result: "Error: " + e
            })

        }
        }

        // resetting the entire output
        else if(button == "C"){
            this.setState({
            result: ""
        })
        }

        // backspacing
        else if(button == "⇦ "){
            this.setState({
            result: this.state.result.substr(0, this.state.result.length-1)
        })
        }

        // Evaluates any operation done.
        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    render() {
        return (
            <div>
                <div className="calculatorBody">
                    <Result result={this.state.result}/>
                    <KeyPad onClick={this.onClick}/>
                </div>
            </div>
        );
    }
}

export default App;