import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const databaseURL = "https://fir-test-eb20a-default-rtdb.firebaseio.com/";



class Words extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            names: {},
        };
    }
    _get(){
        fetch(`${databaseURL}/names.json`).then(res =>{
            if(res.status != 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(names => this.setState({names: names}));
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.names != this.state.names;
    }
    componentDidMount() {
        this._get();
    }
    render() {
        return (
            <div>
                {Object.keys(this.state.names).map( id => {
                    const name = this.state.names[id];
                    return (
                        <div key={id}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        이름 : {name.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
                
        )
    }
}

export default Words;