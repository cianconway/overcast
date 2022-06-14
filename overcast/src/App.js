import { useState, useEffect } from 'react';
import './App.css';
import File from './components/File';
import { db } from './firebase-config';
import { collection, doc, getDocs } from "firebase/firestore";



function App() {
  const[assets, setFiles] = useState([]);
  const fileReference = collection(db, "assets");

  useEffect(() => {
    const getFiles = async () => {
      const data = await getDocs(fileReference);
      setFiles(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
    };

    getFiles();
  }, [])

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
        </div>
      </header>
    </div>
  );
}

export default App;
