import React from 'react'
import { Popup, Button, Header, Image, Modal,Icon } from 'semantic-ui-react'    
export default class Dialog extends React.Component{
    state = { open: false ,modalOpen: false }
    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    show = dimmer => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    render(){
        const { open, dimmer } = this.state
        return(
            <div>
              <div className="modal1">
                  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
                      <Header icon='archive' content='Archive Old Messages' />
                      <Modal.Content>
                          <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
                      </Modal.Content>
                      <Modal.Actions>
                          <Button basic color='red' inverted>
                              <Icon name='remove' /> No
                          </Button>
                          <Button color='green' inverted>
                              <Icon name='checkmark' /> Yes
                          </Button>
                      </Modal.Actions>
                  </Modal>
              </div>
               <div className="modal2">
                    <Button onClick={this.show(true)}>Default</Button>
                    <Button onClick={this.show('inverted')}>Inverted</Button>
                    <Button onClick={this.show('blurring')}>Blurring</Button>
                    <Popup trigger={<Button onClick={this.show(false)}>None</Button>}>
                        <Popup.Header>Heads up!</Popup.Header>
                        <Popup.Content>
                            By default, a Modal closes when escape is pressed or when the dimmer is
                            clicked. Setting the dimmer to "None" (dimmer={'{'}false{'}'}) means that there is no
                            dimmer to click so clicking outside won't close the Modal. To close on
                            outside click when there's no dimmer, you can pass the "closeOnDocumentClick" prop.
                        </Popup.Content>
                    </Popup>

                    <Modal dimmer={dimmer} open={open} onClose={this.close}>
                        <Modal.Header>Select a Photo</Modal.Header>
                        <Modal.Content image>
                            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
                            <Modal.Description>
                                <Header>Default Profile Image</Header>
                                <p>We've found the following gravatar image associated with your e-mail address.</p>
                                <p>Is it okay to use this photo?</p>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.close}>
                                Nope
                            </Button>
                            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
                        </Modal.Actions>
                    </Modal>
                </div>
                <div className="modal3">
                    <Modal
                        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
                        open={this.state.modalOpen}
                        onClose={this.handleClose}
                        basic
                        size='small'
                    >
                        <Header icon='browser' content='Cookies policy' />
                        <Modal.Content>
                            <h3>This website uses cookies to ensure the best user experience.</h3>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='checkmark' /> Got it
                            </Button>
                        </Modal.Actions>
                    </Modal>
                </div>
            </div>
        )
    }
}