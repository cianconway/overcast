import React, { Component }  from 'react';
import { useState, useEffect } from 'react';
// import './App.css';
import File from './components/File';
import { db } from './firebase-config';
import { collection, addDoc, getDocs, setDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import UploadForm from './components/UploadForm';

import "./styles/app.css";



function App() {
  
  const fileReference = collection(db, "assets");

// useState Methods
  const[assets, setFiles] = useState([]);
  const [newFolder, setNewFolder] = useState(0);
  const [newProject, setNewProject] = useState(0);
  const [newCreatedBy, setNewCreatedBy] = useState("");
  const [newCreatedAt, setNewCreatedAt] = useState("");
  const storageUuid =  Date.now().toString()

  useEffect(() => {
    const getFiles = async () => {
      const data = await getDocs(fileReference);
      setFiles(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getFiles();
  }, [])

  const createFile = async () => {

    await setDoc(fileReference, { 
      folder_uuid: newFolder, 
      project_uuid: newProject, 
      created_by: newCreatedBy,
      created_at: newCreatedAt,
      storage_uuid: storageUuid
    })

  }

  // const updateFile = async(folder_uuid, project_uuid, created_at, created_by) => {
  //   const newFields = {}
  //   const fieldDoc = doc(db, "assets", folder_uuid);
  //   await updateDoc(fieldDoc, newFields);
  // };

  const deleteFile = async(id) => {
    const fieldDoc = doc(db, "assets", id);
    await deleteDoc(doc(db, "assets", id));
    console.log('update values', id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          { assets.map((file) => {
            return (
              <div className='file' key={file.id}>
                <File file={file}
                deleteFile={deleteFile}
                id={storageUuid}/>
            </div>
            )
          })}
        </div>
        <UploadForm 
            setNewFolder={setNewFolder}
            setNewProject={setNewProject}
            setNewCreatedBy={setNewCreatedBy}
            setNewCreatedAt={setNewCreatedAt}
            createFile={createFile}
            // updateFile={updateFile}
          />
      </header>
    </div>
  );
}

export default App;
