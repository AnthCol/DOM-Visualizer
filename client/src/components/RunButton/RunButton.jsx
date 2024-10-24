function RunButton({listOfFiles, selectedFileIndex, setConsoleOutput}) { 

    function runVisualizer() {
        let selectedFile = listOfFiles[selectedFileIndex];
        let result = "Empty for now";
        setConsoleOutput(result);
    }

    return <button onClick={runVisualizer}>Run</button>
}

export default RunButton;
