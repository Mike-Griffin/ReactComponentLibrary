import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class AddMoreFields extends Component {
    render()  {
        return (
            <div>
                Add More Fields
                <div>
                    <form>
                        <TextField
                            name="quantity"
                            label="Quantity"
                        />
                    </form>
                </div>

            </div>
        )
    }
}

export default AddMoreFields