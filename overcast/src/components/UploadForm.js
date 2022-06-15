import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UploadForm extends Component {
    

    render() {
        return (
            <div className='form'>
                <input type="text" className="form-item" />
                <input type="text" className="form-item" />
                <input type="text" className="form-item" />
                <input type="text" className="form-item" />
                <button className="form-button">Upload Asset</button>
            </div>
        );
    }
}

UploadForm.propTypes = {

};

export default UploadForm;