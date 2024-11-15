import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import PathInformation from "../../classes/PathInformation.jsx";
import ServerInformation from "../../classes/ServerInformation.jsx";

import "./Editor.css";
import "ace-builds/src-noconflict/mode-html";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");


const Editor = ({listOfFiles, selectedFileIndex}) => {  

    // "Autosave"
    const patchCode = async (fileName, code) => {
        try { 
            const apiPath = ServerInformation.location + PathInformation.patchFilePath + "/" + fileName;

            const response = await fetch(apiPath, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "text/plain"
                },
                body: code
            });

            if (!response.ok) {
                throw new Error("Network response for " + apiPath + " was not ok.");
            }

        } catch (error) {
            console.log(error.message);
        }
    }

    const codeChange = (newCode) => { 
        let file = listOfFiles[selectedFileIndex]
        const fileName = file.getName();
        file.setContent(newCode);
        patchCode(fileName, newCode);     
    } 
    
    const defaultProgram = "";

    function getSelectedFileContent() {
        if (listOfFiles.length == 0) {
            return "";
        }
        return listOfFiles[selectedFileIndex].getContent()
    }

    return (
        <div className="editor">
            <AceEditor
                mode={"html"}
                onChange={codeChange}
                value={getSelectedFileContent()}
                defaultValue={defaultProgram}
                fontSize={14}
                lineHeight={19}
                showGutter={true}
                highlightActiveLine={true}
                shotPrintMargin={true} 
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}

export default Editor;
