import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import  Dialog from "@material-ui/core/Dialog";
import  DialogActions from "@material-ui/core/DialogActions";
import  DialogContent from "@material-ui/core/DialogContent";
import  DialogTitle from "@material-ui/core/DialogTitle";
import  TextField from "@material-ui/core/TextField";

const styles = theme => ({
            fab: {
                position: 'fixed',
                bottom: '20px',
                right: '20px'
            }
})

const databaseURL = "https://fir-test-eb20a-default-rtdb.firebaseio.com/";



class Words extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            names: {},
            dialog: false,
            name: '',
            text: ''
        };
    }
    _get(){
        fetch(`${databaseURL}/names.json`).then(res =>{
            if(res.status != 200){
                throw new Error(res.statusText);
            }
            
            return res.json();
        }).then(names =>{
            this.setState({names: names});
            console.log("names : ",names);
        });
    }
    _post(name) {
        return fetch(`${databaseURL}/names.json`,{
            method: 'POST',
            body: JSON.stringify(name)
        }).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {
            let nextState = this.state.names;
            nextState[data.name] = name;
            this.setState({names: nextState});
        });
    }
    _delete(id) {
        return fetch(`${databaseURL}/names/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextState = this.state.names;
            delete nextState[id];
            this.setState({names: nextState});
        })
    }
   
    componentDidMount() {
        this._get();
    }
    handleDialogToggle = () => this.setState({
        dialog: !this.state.dialog
    })
    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }
    handleDelete = (id) => {
        this._delete(id);
    }
    handleSubmit = () =>{
        const name = {
            name: this.state.name,
            text: this.state.text
        }
        this.handleDialogToggle();
        if(!name.name) {
            return;
        }
        this._post(name);
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     return nextState.names != this.state.names;
    // }
    render() {
        const { classes} =this.props;
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
                                    <Grid container>
                                        <Grid item xs={6}>
                                             <Typography variant="h5" component="h2">
                                                 {name.text}
                                             </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                             <Button variant="contained" color="primary" onClick={() => this.handleDelete(id)}>
                                                 삭제
                                             </Button>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <Fab color="primary" className={classes.fab} onClick={this.handleDialogToggle}>
                                <AddIcon/>
                            </Fab>
                            <Dialog open={this.state.dialog} onClose={this.handleDialogToggle}>
                                <DialogTitle>
                                    이름 추가
                                </DialogTitle>
                                <DialogContent>
                                    <TextField label="작성자" type="text" name="name" value={this.state.name} onChange={this.handleValueChange}/>
                                    <br/>
                                    <TextField label="내용" type="text" name="text" value={this.state.text} onChange={this.handleValueChange}/>
                                    <br/>
                                </DialogContent>
                                <DialogActions>
                                    <Button variant="contained" color="primary" onClick={this.handleSubmit}>추가</Button>
                                    <Button variant="outlined" color="primary" onClick={this.handleDialogToggle}>닫기</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    );
                })}
            </div>
                
        )
    }
}

export default withStyles(styles)(Words);