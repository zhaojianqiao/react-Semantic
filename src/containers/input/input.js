import React from 'react'
import { Icon, Input } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import { Progress } from 'semantic-ui-react'
import { Rating } from 'semantic-ui-react'
import { Form, TextArea } from 'semantic-ui-react'
export default class Inputs extends React.Component{
    constructor(){
        super()
        this.state={
            list:[]
        }
    }
    componentWillMount(){
        this.setState({
            list:[{key:"1",value:"1",text: 'Alabama'}
                ,{key:"2",value:"1",text: 'Alabama'}
                ,{key:"3",value:"1",text: 'Alabama'}
                ,{key:"4",value:"1",text: 'Alabama'}
                ,{key:"5",value:"1",text: 'Alabama'}
                ,{key:"6",value:"1",text: 'Alabama'}]
        })
    }
    render(){
        return(
            <div>
                <Input icon placeholder='Search...'>
                    <input />
                    <Icon name='search' />
                </Input>
                <br />
                <br />
                <Input iconPosition='left' placeholder='Email'>
                    <Icon name='at' />
                    <input />
                </Input>
                <Input
                    action={{ color: 'teal', labelPosition: 'left', icon: 'cart', content: 'Checkout' }}
                    actionPosition='left'
                    placeholder='Search...'
                    defaultValue='52.03'
                />
                <Input
                    action={{ color: 'teal', labelPosition: 'right', icon: 'copy', content: 'Copy' }}
                    defaultValue='http://ww.short.url/c0opq'
                />
                <Dropdown placeholder='State' fluid multiple search selection options={this.state.list} />
                <Progress percent={60} active >
                    Active
                </Progress>
                <Rating icon='star' defaultRating={3} maxRating={20} />

                <Form>
                    <TextArea placeholder='Tell us more' />
                </Form>
            </div>
        )
    }
}