function DownloadButton({listOfFiles, selectedFileIndex}) {
    
    const deleteCreatedFile = async(fileName) => {
        console.log("request to delete created file \n");

        try {
            const response = null;
        } catch (error) {
            console.error(error.message);
        }
    }


    const downloadFile = async (file) => {
        console.log("button clicked");

        // try {
        //     const response = null;         
        // } catch (error) {
        //     console.error(error.messsage);
        // } 
    }



    return <button onClick={downloadFile}>Download</button>;
}

export default DownloadButton;
