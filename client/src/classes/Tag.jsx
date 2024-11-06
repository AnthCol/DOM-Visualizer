const tagType = {
    closing : 0,
    opening : 1,
    unknown : 2
}

class Tag {
    constructor(tag) {
        this.tag = tag;
        this.type = this.determineType();
    }

    determineType() {
        const t = this.tag; 
        let type = tagType.unknown;

        if (t.startsWith("</")) {
            type = tagType.closing;
        } else if (t.startsWith("<")) {
            type = tagType.opening;
        } 
            
        return type;
    }

}

export default Tag;
