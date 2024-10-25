package visualizer.Server.datatypes;

public class File {
    private String name;
    private String content;

    public File() {
        name = "Unnamed File";
        content = "";
    }

    public File(String name, String content) {
        this.name = name;
        this.content = content;
    }

    public String getName() {
        return this.name;
    }

    public String getContent() {
        return this.content;
    }

    public void setName(String name) {
        this.name = name;
    }
    
    public void setContent(String content) {
        this.content = content;
    }
}


