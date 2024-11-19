function DownloadOutputButton({consoleOutput}) {
    
    function downloadFile() {
        const data = consoleOutput;
        const fileName = "output.txt";
        
        const blob = new Blob([data], { type: "text/plain"});

        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);
        anchor.download = fileName;

        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    }

    return <button onClick={downloadFile}>Download Output</button>;
}

export default DownloadOutputButton;
