function DownloadInputButton({listOfFiles, selectedFileIndex}) {
    
    function downloadFile() {
        const currentFile = listOfFiles[selectedFileIndex];
        const fileContent =  currentFile.getContent();
        const fileName = currentFile.getName();

        const blob = new Blob([fileContent], { type: "text/plain"});

        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);
        anchor.download = fileName;

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    return <button onClick={downloadFile}>Download Input</button>;
}

export default DownloadInputButton;
