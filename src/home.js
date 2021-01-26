import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                Home
                <div>
                    <Link to="/createableMultiSelect" >
                        Creatable Multi Select
                    </Link>
                </div>
                <div>
                    <Link to="/createableSingleSelect" >
                        Creatable Single Select
                    </Link>
                </div>
                <div>
                    <Link to="/addMoreFields" >
                        Add More Fields
                    </Link>
                </div>

            </div>
        )
    }
}

export default Home