import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Select } from '@material-ui/core'

class AddMoreFields extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipeLines : [
                {'quantity': '10'},
                {'quantity': '1903'}
            ]
        }
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
                                />
                                <Select
                                />
                            </div>
                        ))}

                    </form>
                </div>

            </div>
        )
    }
}

export default AddMoreFields