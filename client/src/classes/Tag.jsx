
class Tag {
    constructor(tag, type, indentationLevel) {
        this.tag = tag;
        this.value = tag.replace(/[</>]/g, ""); 
        this.type = type;
        this.indentationLevel = indentationLevel;
    }

    toString() {
        // only print opening tags, otherwise we will 
        // have redundant values in the tree. 
        if (this.type === "closing") {
            return "";
        }
        const spacesPerIndent = 2;
        const spaces = " ".repeat(spacesPerIndent).repeat(this.indentationLevel);
        const nodeValue = spaces.concat(this.value).concat("\n");
        return nodeValue;
    }

}

export default Tag;
