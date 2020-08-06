import React, {Component} from 'react';
import InputNumber from 'elements/Form/InputNumber';
import { set } from 'date-fns';

export default class Example extends Component {
    state={
        value: ""
    };
    handleChange= e =>{
        this.setState({[e.target.name]: e.target.value})
    };
    render(){
        return(
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-auto">
                        <InputNumber
                        max={30}
                        onChange={this.handleChange}
                        name="value"
                        value={set.state.value}
                        />

                    </div>
                </div>

            </div>
        )
    }
};

