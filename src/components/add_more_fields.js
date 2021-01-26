import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import  CreateableSingleSelect from './creatable_single_select'

class AddMoreFields extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipeLines : [
                {'id': 0, 'quantity': '10'},
                {'id': 1, 'quantity': '1903'}
            ]
        }
    }

    handleAddFields = id => {
        this.setState({
            recipeLines : [...this.state.recipeLines, {'id': id+1, 'quantity' : ''}]
        })
    }

    handleRemoveFields = id => {
        console.log(id)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Recipe Lines", this.state.recipeLines);
    };

    handleChangeInput = (id, event) => {
        const newRecipeLines = this.state.recipeLines.map(i => {
          if(id === i.id) {
            i[event.target.name] = event.target.value
          }
          return i;
        })
        
        this.setState({
            recipeLines: newRecipeLines
        })
      }
    

    render()  {
        return (
            <div>
                Add More Fields
                <div>
                    <form>
                        {this.state.recipeLines.map(recipeLine => (
                            <div>
                                <TextField
                                    name="quantity"
                                    label="Quantity"
                                    value={recipeLine.quantity}
                                    onChange={event => this.handleChangeInput(recipeLine.id, event)}
                                />
                                <CreateableSingleSelect />
                                <IconButton disabled={this.state.recipeLines.length === 1} onClick={() => this.handleRemoveFields(recipeLine.id)}>
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton
                                onClick={() => this.handleAddFields(recipeLine.id)}
                                >
                                    <AddIcon />
                                </IconButton>
                            </div>
                        ))}
                        <Button
                        variant="contained" 
                        color="primary" 
                        type="submit" 
                        endIcon={<Icon>send</Icon>}
                        onClick={this.handleSubmit}
                        >Send</Button>
                    </form>
                </div>

            </div>
        )
    }
}

export default AddMoreFields