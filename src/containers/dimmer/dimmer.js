import React from 'react'
import { Button, Dimmer,Loader, Segment } from 'semantic-ui-react'

export default class Dimmers extends React.Component{
    state = {}

    handleShow = () => this.setState({ active: true })
    handleHide = () => this.setState({ active: false })
    handleShow2 = () => this.setState({ active2: true })
    handleHide2 = () => this.setState({ active2: false })
    render(){
        const { active } = this.state
        const { active2 } = this.state
        return(
            <div>
                <div>
                    <div>
                        <Dimmer.Dimmable as={Segment} dimmed={active}>
                            <Dimmer active={active} inverted>
                                <Loader>Loading</Loader>
                            </Dimmer>
                            <p>11111111</p>
                        </Dimmer.Dimmable>

                        <Button.Group>
                            <Button icon='plus' onClick={this.handleShow} />
                            <Button icon='minus' onClick={this.handleHide} />
                        </Button.Group>
                    </div>
                </div>
                <div>
                    <Dimmer.Dimmable as={Segment} blurring dimmed={active2}>
                        <Dimmer active={active2} onClickOutside={this.handleHide2} />
                        <p>222222</p>
                    </Dimmer.Dimmable>

                    <Button.Group>
                        <Button icon='plus' onClick={this.handleShow2} />
                        <Button icon='minus' onClick={this.handleHide2} />
                    </Button.Group>
                </div>

            </div>

        )
    }
}