class Parser {
    #currentMatch = "";
    #fileContent;
    #charPointer = 0;
    #tabLevel = 0;
    #result = "";
    #tagList = [];

    constructor(fileContent) {
        // strip leading whitespace from fileContent
        // so that the first thing is a <, or at least should 
        // be.
        this.#fileContent = fileContent.trimStart();

        console.log("printing fielContent : " + this.#fileContent);
    }

    tagOpener() {
        const pointerReset = this.#charPointer;

        console.log("in tag closer\n");

        if (this.currentChar() === '<') {
            this.appendCurrentMatch(this.currentChar());
            this.consumeCharacter();
            let result = this.a();
            return result;
        } 
        
        this.reset(pointerReset);
        return false;
    }

    a() {
        const pointerReset = this.#charPointer;
        console.log("in A");
        if (this.currentChar() === 'a') {
            this.appendCurrentMatch(this.currentChar());
            this.consumeCharacter();
            const result = this.b();
            return result;
        }

        this.reset(pointerReset);
        return false;
    }    

    b() {
        const pointerReset = this.#charPointer;
        console.log("in B");
        if (this.currentChar() === 'b') {
            this.appendCurrentMatch(this.currentChar());
            this.consumeCharacter();
            const result = this.b() || this.r();
            return result;
        }

        this.reset(pointerReset);
        return false;
    }

    r() {
        const pointerReset = this.#charPointer;
        console.log("in R");

        if (this.currentChar() === 'r') {
            this.appendCurrentMatch(this.currentChar());
            this.consumeCharacter();

            // at this point, 
            const result = this.findNextTagCloser();            
        }

        this.reset(pointerReset);
        return false;
    }



    tagCloser() {
        const pointerReset = this.#charPointer;

        console.log("in tag closer");

        if (this.currentChar() === '>') {
            this.appendCurrentMatch(this.currentChar());
            console.log("FOUND A MATCH: " + this.#currentMatch);
            this.resetCurrentMatch();
            return this.findNextTagOpener();
        }

        this.reset(pointerReset);
        return false;
    }

    /////////////////////////////////
    // Grammar functions above
    /////////////////////////////////


    // Entrypoint function from outside. 
    // Will return true if it makes it to the 
    // end of the file without failing. 
    parse() {
        return this.tagOpener();
    }


    //////////////////////////////////
    // Helper functions below
    //////////////////////////////////

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
        return this.tagOpener();
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
        let len = this.#fileContent.length;
        let current = this.#charPointer;

        if (current < len) {
            let c = this.#fileContent.charAt(current);
            return c;
        }
        // if we are past the end of the string don't match
        // any typeable character.
        return '\0';
    }

    indent() {
        let spacesPerIndent = 4;
        this.#result += (" ".repeat(spacesPerIndent)).repeat(this.#tabLevel);
    }

    consumeCharacter() {
        this.#charPointer += 1;
    }

    makeTreeVisual() {
        this.#result += "Temp Tree\n";
    }

    getVisual() {
        this.makeTreeVisual();
        return this.#result;
    }
}


export default Parser;
