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

    render() {
        const { folder_uuid, project_uuid, created_by, storage_uuid, created_at } = this.props.file;

        return (
                <ul className='file'>
                    <li className="file-item">Folder Name: { folder_uuid }</li>
                    <li className="file-item">Project Name: { project_uuid }</li>
                    <li className="file-item">Created By: { created_by }</li>
                    <li className="file-item">Storage: { storage_uuid }</li>
                    <li className="file-item">Created At: { created_at } </li>
                </ul>
                    
        )
    };
}

export default File;