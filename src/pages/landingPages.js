import React, { Component } from 'react'
import Header from 'parts/Header'


export default class landingPage extends Component {

    render(){
        return <>
            <Header {...this.props}></Header>
        </>
    }
}
