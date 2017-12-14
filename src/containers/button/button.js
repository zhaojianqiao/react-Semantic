import React from 'react'
import { Button, Icon, Label } from 'semantic-ui-react'
export default class Btn extends React.Component{
    render(){
        return(
            <div>
                <Button color='red'>Red</Button>
                <Button color='orange'>Orange</Button>
                <Button color='yellow'>Yellow</Button>
                <Button color='olive'>Olive</Button>
                <Button color='green'>Green</Button>
                <Button color='teal'>Teal</Button>
                <Button color='blue'>Blue</Button>
                <Button color='violet'>Violet</Button>
                <Button color='purple'>Purple</Button>
                <Button color='pink'>Pink</Button>
                <Button color='brown'>Brown</Button>
                <Button color='grey'>Grey</Button>
                <Button color='black'>Black</Button>
                <div>
                    <Button as='div' labelPosition='right'>
                        <Button icon>
                            <Icon name='heart' />
                            Like
                        </Button>
                        <Label as='a' basic pointing='left'>2,048</Label>
                    </Button>
                    <Button as='div' labelPosition='left'>
                        <Label as='a' basic pointing='right'>2,048</Label>
                        <Button icon>
                            <Icon name='heart' />
                            Like
                        </Button>
                    </Button>
                    <Button as='div' labelPosition='left'>
                        <Label as='a' basic>2,048</Label>
                        <Button icon>
                            <Icon name='fork' />
                        </Button>
                    </Button>
                </div>
            </div>

        )
    }
}