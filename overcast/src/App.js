import { useState, useEffect } from 'react';
// import './App.css';
import File from './components/File';
import { db } from './firebase-config';
import { collection, addDoc, getDocs } from "firebase/firestore";
import UploadForm from './components/UploadForm';



function App() {
  
  const fileReference = collection(db, "assets");

// useState Methods
  const[assets, setFiles] = useState([]);
  const [newFolder, setNewFolder] = useState(0);
  const [newProject, setNewProject] = useState(0);
  const [newStorageID, setNewStorageID] = useState(0);
  const [newCreatedBy, setNewCreatedBy] = useState("");
  const [newCreatedAt, setNewCreatedAt] = useState("");



  useEffect(() => {
    const getFiles = async () => {
      const data = await getDocs(fileReference);
      setFiles(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getFiles();
  }, [])

  const createFile = async () => {

    await addDoc(fileReference, { 
      folder_uuid: newFolder, 
      project_uuid: newProject, 
      created_by: newCreatedBy,
      created_at: newCreatedAt
    })
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main">
          { assets.map((file) => {
            return (
              <div className='file' key={file.id}>
                <File file={file}/>
            </div>
            )
          })}
          <UploadForm 
            setNewFolder={setNewFolder}
            setNewProject={setNewProject}
            setNewStorageID={setNewStorageID}
            setNewCreatedBy={setNewCreatedBy}
            setNewCreatedAt={setNewCreatedAt}
            createFile={createFile}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
