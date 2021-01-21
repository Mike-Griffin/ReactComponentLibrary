import React, { Component } from 'react'
import CreatableSelect from 'react-select/creatable'
import { quantityMeasures } from '../docs/data';


class CreateableSingleSelect extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            tags: [{label: 'Vegan', id: '1'}, {label: 'Paleo', id: '2'}, {label: 'Test', id: '3'}]
        }
    }

    handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        if(actionMeta.action == 'create-option') {
            console.log("Hopefully I can do a post request here")
        }
      };

    render() {
        return (
            <CreatableSelect
                onChange={this.handleChange}
                options={quantityMeasures}
             />
        )
    }

}

export default CreateableSingleSelect
