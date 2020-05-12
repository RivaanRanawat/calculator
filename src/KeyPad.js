import React, {Component} from 'react';
import './App.css'

class KeyPad extends Component {

    render() {
        return (
            <div className="button">
            <div className='blue'>
                <button name="C" onClick={r => this.props.onClick(r.target.name)}>C</button>
                <button name="⇦ " onClick={r => this.props.onClick(r.target.name)}>⇦ </button>
                <button name="(" onClick={r => this.props.onClick(r.target.name)}>(</button>
                <button name=")" onClick={r => this.props.onClick(r.target.name)}>)</button><br/>
                </div>

                <div>
                <button name="7" onClick={r => this.props.onClick(r.target.name)}>7</button>
                <button name="8" onClick={r => this.props.onClick(r.target.name)}>8</button>
                <button name="9" onClick={r => this.props.onClick(r.target.name)}>9</button>
                <button name="*" onClick={r => this.props.onClick(r.target.name)}>x</button><br/>
                </div>

                <div>
                 <button name="4" onClick={r => this.props.onClick(r.target.name)}>4</button>
                <button name="5" onClick={r => this.props.onClick(r.target.name)}>5</button>
                <button name="6" onClick={r => this.props.onClick(r.target.name)}>6</button>
                <button name="-" onClick={r => this.props.onClick(r.target.name)}>-</button><br/>
                </div>

                <div>
                <button name="1" onClick={r => this.props.onClick(r.target.name)}>1</button>
                <button name="2" onClick={r => this.props.onClick(r.target.name)}>2</button>
                <button name="3" onClick={r => this.props.onClick(r.target.name)}>3</button>
                <button name="+" onClick={r => this.props.onClick(r.target.name)}>+</button><br/>
                </div>

                <div>
                <button name="." onClick={r=> this.props.onClick(r.target.name)}>.</button>
                <button name="0" onClick={r => this.props.onClick(r.target.name)}>0</button>
                <button name="=" onClick={r => this.props.onClick(r.target.name)}>=</button>
                <button name="/" onClick={r=> this.props.onClick(r.target.name)}>/</button><br/>
                </div>
            </div>
        );
    }
}


export default KeyPad;