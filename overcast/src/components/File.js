import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../styles/file.css";

class File extends React.Component {
    static propTypes = {
        details: PropTypes.shape({
            folder_uuid: PropTypes.number,
            project_uuid: PropTypes.number,
            created_by: PropTypes.string,
            storage_uuid: PropTypes.number,
            created_at: PropTypes.string
        })
    };

    state = { isActive: false };
    handleToggle = () => {
        this.setState({ isActive: !this.state.isActive });
    };


    render() {
        const { folder_uuid, project_uuid, created_by, storage_uuid, created_at} = this.props.file;
        const isActive = this.state.isActive;

        return ( 
            <React.Fragment>
                <div className="container">
                    <div className={isActive ? "card active" : "card"} onClick={this.handleToggle}>
                        <div className="content-box">
                            <div className="content">
                                <h2 className="file-item">
                                    Folder Name: { folder_uuid }
                                </h2>
                                <h2 className="file-item">
                                    Project Name: { project_uuid }
                                </h2>
                                <h2 className="file-item">
                                    Created By: { created_by }
                                </h2>
                                <h2 className="file-item">
                                    Storage: { storage_uuid }
                                </h2>
                                <h2 className="file-item">
                                    Created At: { created_at }
                                </h2>
                                <button onClick={() => { this.props.deleteFile(storage_uuid) }}>Delete</button>
                            </div>
                        </div>
                        <div className="toggle">
                            <span></span>
                        </div>
                    </div>
                </div>

{/* 
                <ul className='file'>
                    <li className="file-item">Folder Name: { folder_uuid }</li>
                    <li className="file-item">Project Name: { project_uuid }</li>
                    <li className="file-item">Created By: { created_by }</li>
                    <li className="file-item">Storage: { storage_uuid }</li>
                    <li className="file-item">Created At: { created_at } </li>
                </ul> */}
                
                
                {/* <button onClick={() => {
                        updateFile(folder_uuid, project_uuid, created_at, created_by)
                    }}>
                        Update Values
                    </button> */}
            </React.Fragment>
        )
    };
}

export default File;