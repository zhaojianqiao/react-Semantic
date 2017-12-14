import React from 'react'
import { Table } from 'semantic-ui-react'
import 'whatwg-fetch'
export default class Tables extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:[],
            header:[
                "name",
                "age",
                "address"
            ]
        }
    }
    componentDidMount(){
        const data = []
        for (let i = 0; i < 10; i++) {
            data.push({
                key: i,
                name: `table${i}`,
                age: 18,
                address: `杨高南路${i}号`,
                remark: 'http://www.baidu.com',
                operate: '暂无'
            })
        }
        this.setState({
            data: data
        })
    }
    render(){
        const renderBodyRow = (({name,age,address},i) => ({
            cells: [
                name,
                age,
                address
            ]
        }))
        return(
            <div>
                <Table celled inverted selectable
                       headerRow={this.state.header}
                       renderBodyRow={renderBodyRow}
                       tableData={this.state.data}
                >
                </Table>
            </div>

        )
    }
}