import Parser from "../../classes/Parser.jsx";

function RunButton({listOfFiles, selectedFileIndex, setConsoleOutput}) { 

    function runVisualizer() {
        let selectedFile = listOfFiles[selectedFileIndex];
        let parser = new Parser(selectedFile.getContent());
        if (parser.parse()) {
            let treeVisualization = parser.getVisual();
            setConsoleOutput(treeVisualization);
        } else {
            setConsoleOutput("Parsing of HTML failed. Ensure the HTML is valid\n");
        }
    }

    return <button onClick={runVisualizer}>Run</button>
}

export default RunButton;
