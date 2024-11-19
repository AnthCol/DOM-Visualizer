import {useState} from "react"

import Editor from "../Editor/Editor.jsx"
import Header from "../Header/Header.jsx"
import Console from "../Console/Console.jsx"
import FileList from "../FileList/FileList.jsx"
import NewButton from "../NewButton/NewButton.jsx"
import RunButton from "../RunButton/RunButton.jsx"
import DeleteButton from "../DeleteButton/DeleteButton.jsx"
import DownloadInputButton from "../DownloadButtons/DownloadInputButton.jsx"
import DownloadOutputButton from "../DownloadButtons/DownloadOutputButton.jsx"

import "./App.css"


function App() 
{ 
    const [selectedFileIndex, setSelectedFileIndex] = useState(0);
    const [consoleOutput, setConsoleOutput] = useState(""); 
    const [listOfFiles, setListOfFiles] = useState([]);

    return (
        <>
            <Header/>

            <NewButton
                listOfFiles={listOfFiles} 
                setListOfFiles={setListOfFiles}
                setSelectedFileIndex={setSelectedFileIndex}
            />

            <DeleteButton
                listOfFiles={listOfFiles}
                setListOfFiles={setListOfFiles}
                selectedFileIndex={selectedFileIndex}
                setSelectedFileIndex={setSelectedFileIndex}
            />


            <RunButton 
                listOfFiles={listOfFiles}
                selectedFileIndex={selectedFileIndex}
                setConsoleOutput={setConsoleOutput}
            />

            <br/>

            <DownloadInputButton
                listOfFiles={listOfFiles}
                selectedFileIndex={selectedFileIndex}
            />

         
            <DownloadOutputButton
                consoleOutput={consoleOutput}
            />

            <br/>
            <br/>

            <div className="fileListEditorConsoleContainer">

                <FileList 
                    listOfFiles={listOfFiles} 
                    setListOfFiles={setListOfFiles} 
                    selectedFileIndex={selectedFileIndex}
                    setSelectedFileIndex={setSelectedFileIndex}
                />

                <Editor 
                    listOfFiles={listOfFiles}
                    selectedFileIndex={selectedFileIndex}
                />

                <Console 
                    consoleOutput={consoleOutput}
                />

            </div>
        </>
    );
}

export default App;
