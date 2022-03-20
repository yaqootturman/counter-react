import React from "react"

class Counter extends React.Component {
    
    state ={
        counterValue : 0
    }
    render(){
        return (
            <>
                <button type="button" onClick={()=>{return this.setState({counterValue : this.state.counterValue+1})}}>Add one</button>
                <button type ="button" onClick={()=>{return this.setState({counterValue : this.state.counterValue-1})}}>minus one</button>
                <p>{this.state.counterValue}</p>
            </>
        )
    }

}

export default Counter