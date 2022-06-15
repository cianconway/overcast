import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

class UploadForm extends Component {

    render() {
        return (
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
                <button onClick={ this.props.createFile } className="form-button">Upload Asset</button>
            </div>
        );
    }
}

UploadForm.propTypes = {
    addToOrder: PropTypes.func,
};

export default UploadForm;