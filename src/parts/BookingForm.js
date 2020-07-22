import React,{Component} from 'react';
import propType from "prop-types";
import Button from "elements/Button";
import {InputNumber, InputDate} from "elements/Form";

export default function BookingForm() extends Component {

    constructor(props){
        super(props);
        this.state ={
            data: {
                duration: 1,
                date: {
                    startDate: new Date(),
                    endDate: new Date(),
                    key: "selection"
                }
            }
        }
    }

    updateData = e =>{
        this.setState({
            ...this.state,
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value}
        })



    }
    return (
        <div>
            
        </div>
    )
}
BookingForm.protoType= {
    itemDetails: propType.object,
    startBooking: propType.func
};
