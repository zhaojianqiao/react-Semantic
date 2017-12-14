import React from 'react'
import _ from 'lodash'
import { Button, List, Transition } from 'semantic-ui-react'
const users = ['ade', 'chris', 'christian', 'daniel', 'elliot', 'helen']
export default class AddData extends React.Component{
    state = { items: users.slice(0, 3) }

    handleAdd = () => this.setState({ items: users.slice(0, this.state.items.length + 1) })

    handleRemove = () => this.setState({ items: this.state.items.slice(0, -1) })
    render(){
        const { items } = this.state
        return(
            <div>
                <Button.Group>
                    <Button disabled={items.length === 0} icon='minus' onClick={this.handleRemove} />
                    <Button disabled={items.length === users.length} icon='plus' onClick={this.handleAdd} />
                </Button.Group>

                <Transition.Group
                    as={List}
                    duration={1000}
                    divided
                    size='huge'
                    verticalAlign='middle'
                >
                    {items.map(item => (
                        <List.Item key={item}>
                            <List.Content header={_.startCase(item)} />
                        </List.Item>
                    ))}
                </Transition.Group>
            </div>
        )
    }
}