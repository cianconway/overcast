import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import "../styles/form.css";
class UploadForm extends Component {

    render() {
        return (
            <React.Fragment>
            <div className='form'>
                <input type="text" className="form-item" placeholder='Folder UUID' 
                    onChange={(event) => {
                        this.props.setNewFolder(event.target.value);
                }}/>
                <input type="text" className="form-item" placeholder='Project UUID'
                    onChange={(event) => {
                        this.props.setNewProject(event.target.value);
                    }}
                />
                <input type="text" className="form-item" placeholder='Created By'
                    onChange={(event) => {
                        this.props.setNewCreatedBy(event.target.value);
                    }}
                />
                <input type="text" className="form-item" placeholder='Created At'
                    onChange={(event) => {
                        this.props.setNewCreatedAt(event.target.value);
                    }}
                />
            </div>
            <button onClick={ this.props.createFile } className="form-button">Upload Asset</button>
            </React.Fragment>
        );
    }
}

UploadForm.propTypes = {
    addToOrder: PropTypes.func,
};

export default UploadForm;