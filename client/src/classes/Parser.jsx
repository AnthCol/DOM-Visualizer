import Tag from "./Tag.jsx";

class Parser {
    #currentMatch;
    #fileContent;
    #charPointer;
    #tags;
    #level;

    constructor(fileContent) {
        this.#charPointer = 0;
        this.#currentMatch = "";
        this.#tags = [];
        this.#fileContent = fileContent;
        this.#level = 0;
    }

    tagOpener() {
        const char = this.currentChar();
        let result = false;

        if (char === '<') {
            this.processCharacterMatch(char);
            result = this.forwardSlash()
                  || this.a()
                  || this.b()
                  || this.c()
                  || this.d()
                  || this.e()
                  || this.f()
                  || this.h()
                  || this.i()
                  || this.k()
                  || this.l()
                  || this.m()
                  || this.n()
                  || this.o()
                  || this.p()
                  || this.q()
                  || this.r()
                  || this.s()
                  || this.t()
                  || this.u()
                  || this.v()
                  || this.w();
        } 
        
        return result;
    }

    forwardSlash() {
        const char = this.currentChar();
        let result = false;

        if (char === '/') {
            this.processCharacterMatch(char);
            result = this.a()
                  || this.b()
                  || this.c()
                  || this.d()
                  || this.e()
                  || this.f()
                  || this.h()
                  || this.i()
                  || this.k()
                  || this.l()
                  || this.m()
                  || this.n()
                  || this.o()
                  || this.p()
                  || this.q()
                  || this.r()
                  || this.s()
                  || this.t()
                  || this.u()
                  || this.v()
                  || this.w()
        }

        return result;
    }

    a() {
        const char = this.currentChar();        
        let result = false;

        if (char === 'a') {
            this.processCharacterMatch(char);

            result = this.b()
                  || this.c()
                  || this.d()
                  || this.i()
                  || this.l()
                  || this.m()
                  || this.n()
                  || this.p()
                  || this.r()
                  || this.s()
                  || this.t()
                  || this.u()
                  || this.v()
                  || this.tagCloser()
                  || this.findNextTagCloser()
            
        }

        return result;
    }    

    b() {
        const char = this.currentChar();        
        let result = false;

        if (char === 'b') {
            this.processCharacterMatch(char);

            result = this.a()
                  || this.b()
                  || this.d()
                  || this.e()
                  || this.j()
                  || this.l()
                  || this.o()
                  || this.r()
                  || this.u()
                  || this.y()
                  || this.tagCloser()
                  || this.findNextTagCloser()    
        }

        return result;
    }

    c() {
        const char = this.currentChar();
        let result = false;

        if (char === 'c') {
            this.processCharacterMatch(char);

            result = this.a()
                  || this.e()
                  || this.i()
                  || this.k()
                  || this.l()
                  || this.o()
                  || this.r()
                  || this.t();
        }

        return result;
    }


    d() {
        const char = this.currentChar();
        let result = false;        

        if (char === 'd') {
            this.processCharacterMatch(char);

            result = this.a()
                  || this.d()
                  || this.e()
                  || this.f()
                  || this.i()
                  || this.l()
                  || this.o()
                  || this.r()
                  || this.s()
                  || this.t()
                  || this.y()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }

    e() {
        const char = this.currentChar(); 
        let result = false; 

        if (char === 'e') {
            this.processCharacterMatch(char);
            result = this.a()
                  || this.c()
                  || this.d()
                  || this.g()
                  || this.l()
                  || this.m()
                  || this.n()
                  || this.o()
                  || this.r()
                  || this.s()
                  || this.t()
                  || this.x() 
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }
    

    f() {
        const char = this.currentChar(); 
        let result = false;

        if (char === 'f') {
            this.processCharacterMatch(char);
            result = this.i()
                  || this.n()
                  || this.o()
                  || this.r();
        }

        return result;
    }

    g() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'g') {
            this.processCharacterMatch(char);
            
            result = this.c()
                  || this.e()
                  || this.r()
                  || this.u()
                  || this.tagCloser()
                  || this.findNextTagCloser()
        }

        return result;
    }

    
    h() {
        const char = this.currentChar(); 
        let result = false;

        if (char === 'h') {
            this.processCharacterMatch(char);
            
            result = this.numbers()
                  || this.e()
                  || this.g()
                  || this.r()
                  || this.t()
                  || this.tagCloser()
                  || this.findNextTagCloser()
        }

        return result;
    }


    i() {
        const char = this.currentChar(); 
        let result = false; 

        if (char === 'i') {
            this.processCharacterMatch(char);
            
            result = this.a()
                  || this.c()
                  || this.d()
                  || this.e()
                  || this.f()
                  || this.g()
                  || this.l()
                  || this.m()
                  || this.n()
                  || this.o()
                  || this.p()
                  || this.s()
                  || this.t()
                  || this.v()  
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }

    j() {
        const char = this.currentChar(); 
        let result = false; 

        if (char === 'j') {
            this.processCharacterMatch(char);
           
            result = this.e();
        }

        return result;
    }


    k() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'k') {
            this.processCharacterMatch(char);
            
            result = this.b()
                  || this.q()
                  || this.tagCloser()
                  || this.findNextTagCloser()
        }

        return result;
    }


    l() {
        const char = this.currentChar(); 
        let result = false;

        if (char === 'l') {
            this.processCharacterMatch(char);

            result = this.a()
                  || this.d()
                  || this.e()
                  || this.g()
                  || this.i()
                  || this.l()
                  || this.o()
                  || this.s() 
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    m() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'm') {
            this.processCharacterMatch(char);
            result = this.a()
                  || this.b()
                  || this.e()
                  || this.g()
                  || this.l()
                  || this.m()
                  || this.p()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    n() {
        const char = this.currentChar(); 
        let result = false;

        if (char === 'n') {
            this.processCharacterMatch(char);
        
            result = this.a()
                  || this.d()
                  || this.g()
                  || this.k()
                  || this.o()
                  || this.p()
                  || this.s()
                  || this.v()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }


        return result;
    }


    o() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'o') {
            this.processCharacterMatch(char);
            
            result = this.b()
                  || this.c()
                  || this.d()
                  || this.g()
                  || this.l()
                  || this.n()
                  || this.o()
                  || this.p()
                  || this.r()
                  || this.s()
                  || this.t()
                  || this.u()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    p() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'p') {
            this.processCharacterMatch(char);
            
            result = this.a()
                  || this.i()
                  || this.l()
                  || this.r()
                  || this.t()
                  || this.u()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    q() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'q') {
            this.processCharacterMatch(char);
            
            result = this.u()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    r() {
        const char = this.currentChar(); 
        let result = false;

        if (char === 'r') {
            this.processCharacterMatch(char);

            result = this.a()
                  || this.c()
                  || this.e()
                  || this.i()
                  || this.k()
                  || this.m()
                  || this.o()
                  || this.p()
                  || this.t()
                  || this.u()
                  || this.y()
                  || this.tagCloser()
                  || this.findNextTagCloser()
        }

        return result;
    }


    s() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 's') {
            this.processCharacterMatch(char);
    
            result = this.a() 
                  || this.c()
                  || this.e()
                  || this.i()
                  || this.l()
                  || this.m()
                  || this.o()
                  || this.p()
                  || this.s()
                  || this.t()
                  || this.u()
                  || this.v()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    t() {
        const char = this.currentChar(); 
        let result = false; 

        if (char === 't') {
            this.processCharacterMatch(char);
            
            result = this.a()
                  || this.b()
                  || this.d()
                  || this.e()
                  || this.f()
                  || this.g()
                  || this.h()
                  || this.i()
                  || this.l()
                  || this.m()
                  || this.o()
                  || this.p()
                  || this.r()
                  || this.t()
                  || this.u()
                  || this.y()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;  
    }


    u() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'u') {
            this.processCharacterMatch(char);
            
            result = this.b()
                  || this.d()
                  || this.l()
                  || this.m()
                  || this.o()
                  || this.p()
                  || this.r()
                  || this.t()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    v() {
        const char = this.currentChar(); 
        let result = false;

        if (char === 'v') {
            this.processCharacterMatch(char);
        
            result = this.a()
                  || this.g()
                  || this.i()
                  || this.tagCloser()
                  || this.findNextTagCloser()
        }

        return result;
    }


    w() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'w') {
            this.processCharacterMatch(char);
            
            result = this.b();
        }

        return result;
    }

    x() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'x') {
            this.processCharacterMatch(char);
            
            result = this.t();
        }

        return result;
    }


    y() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'y') {
            this.processCharacterMatch(char);
            
            result = this.l()
                  || this.tagCloser()
                  || this.findNextTagCloser();
        }

        return result;
    }


    numbers() {
        const char = this.currentChar();
        const numbers = ['1', '2', '3', '4', '5', '6'];
        let result = false;

        if (numbers.includes(char)) {
            this.processCharacterMatch(char);

            result = this.findNextTagCloser();
        }

        return result;
    }

    tagCloser() {
        const char = this.currentChar();
        let result = false;

        if (char === '>') {
            this.processCharacterMatch(char);  
            this.processTagMatch();
            this.resetCurrentMatch(); 

            result = this.doneMatching() 
                  || this.tagOpener()
                  || this.findNextTagOpener(); 
        }

        return result;
    }

    /////////////////////////////////
    // Grammar functions above
    /////////////////////////////////


    // Entrypoint function from outside. 
    // Will return true if it makes it to the 
    // end of the file without failing. 
    parse() {
        console.log("Printing in parse:");
        return this.findNextTagOpener();
    }

    //////////////////////////////////
    // Helper functions below
    //////////////////////////////////

    
    // TODO: Change to enum?
    determineTagType(tag) {
        let type = "unknown";
        if (tag.startsWith("</")) {
            type = "closing";
        } else if (tag.startsWith("<")) {
            type = "opening";
        }
        return type
    }

    processTagMatch() {
        const tag = this.#currentMatch;
        const type = this.determineTagType(tag);
        const level = this.#level; 

        this.updateIndentationLevel(type);

        this.#tags.push(new Tag(tag, type, level)); 
    }

    processCharacterMatch(character) {
        this.appendCurrentMatch(character);
        this.consumeCharacter();
    }

    // checks if we have extended past the end of the thing
    doneMatching() {
        // check if there are only spaces left
        let result = (this.#charPointer === this.#fileContent.length);

        if (!result) {
            let tempPtr = this.#charPointer;

            while (tempPtr != this.#fileContent.length) {
                const char = this.#fileContent[tempPtr];
                
                if (!/\s/.test(char)) {
                    result = false;
                    break;
                }
                tempPtr += 1;
            }
        }

        return result;
    }

    findNextTagCloser() {
        let found = true;

        while (this.currentChar() !== '>') {
            this.consumeCharacter();
            // if we have run to the end of the file
            if (!this.onValidIndex()) {
                found = false
                break;
            }
        }

        return (found) ? this.tagCloser() : false;
    }

    findNextTagOpener() {
        let found = true;
        
        while (this.currentChar() !== '<') {
            this.consumeCharacter(); 
            
            // if we have run to the end of the file 
            if (!this.onValidIndex()) {
                found = false;
                break;
            }
        }

        return (found) ? this.tagOpener() : false;
    }

    onValidIndex() {
        return (this.#charPointer < this.#fileContent.length);
    }

    reset(pointerReset) {
        this.#charPointer = pointerReset;
    }

    resetCurrentMatch() {
        this.#currentMatch = "";
    }

    appendCurrentMatch(currentCharacter) {
        this.#currentMatch += currentCharacter;
    }

    currentChar() {
        const len = this.#fileContent.length;
        const current = this.#charPointer;

        if (current < len) {
            const c = this.#fileContent.charAt(current);
            return c;
        }
        // if we are past the end of the string don't match
        // any typeable character.
        return '\0';
    }

    consumeCharacter() {
        this.#charPointer += 1;
    }

    validateTags() {
        let errString = "";
        
        const validTags = [
            "a",
            "abbr",
            "address",
            "area",
            "article",
            "aside",
            "audio",
            "b",
            "base",
            "bdi",
            "bdo",
            "blockquote",
            "body",
            "br",
            "button",
            "canvas",
            "caption",
            "cite",
            "code",
            "col",
            "colgroup",
            "data",
            "datagrid",
            "datalist",
            "dd",
            "del",
            "details",
            "dfn",
            "dialog",
            "div",
            "dl",
            "dt",
            "em",
            "embed",
            "fieldset",
            "figcaption",
            "figure",
            "footer",
            "form",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "head",
            "header",
            "hr",
            "html",
            "i",
            "iframe",
            "img",
            "input",
            "ins",
            "kbd",
            "label",
            "legend",
            "li",
            "link",
            "main",
            "map",
            "mark",
            "meta",
            "meter",
            "nav",
            "noscript",
            "object",
            "ol",
            "optgroup",
            "option",
            "output",
            "p",
            "param",
            "pre",
            "progress",
            "q",
            "rb",
            "rp",
            "rt",
            "ruby",
            "s",
            "samp",
            "script",
            "section",
            "select",
            "small",
            "span",
            "strong",
            "style",
            "sub",
            "summary",
            "sup",
            "table",
            "tbody",
            "td",
            "template",
            "textarea",
            "tfoot",
            "th",
            "thead",
            "time",
            "title",
            "tr",
            "track",
            "u",
            "ul",
            "var",
            "video",
            "wbr"
        ];

        for (const tag of this.#tags) {
            if (!tag.value in validTags) {
                errString.concat("ERROR: Invalid tag: " + tag.value + "\n\n");
            } 
        }

        return errString;
    }


    makeTreeVisual() {
        let tree = this.validateTags();
        for (const tag of this.#tags) {
            tree += tag.toString()
        }
        return tree;
    }

    updateIndentationLevel(type) {
        if (type === "opening") {
            this.#level += 1;
        } else if (type === "closing") {
            this.#level -= 1;
        }
    }

    getTags() {
        return this.#tags;
    }

    getVisual() {
        return this.makeTreeVisual();
    }
}


export default Parser;
