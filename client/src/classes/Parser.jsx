class Parser {
    #currentMatch = "";
    #fileContent = "";
    #charPointer = 0;
    #tabLevel = 0;
    #result = "";
    #tagList = [];
    #matches = "";

    constructor(fileContent) {
        // strip leading whitespace from fileContent
        // so that the first thing is a <, or at least should 
        // be.
        this.#fileContent = fileContent.trim();
        console.log("printing fielContent : " + this.#fileContent);
    }

    tagOpener() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar();

        if (char === '<') {
            this.processMatch(char);

            let result = this.a();
            return result;
        } 
        
        this.reset(pointerReset);
        return false;
    }

    a() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar();        

        if (char === 'a') {
            this.processMatch(char);

            const result = this.b() 
                        || this.d()
                        || this.r()
                        || this.s()
                        || this.u()
                        || this.tagCloser()
                        || this.findNextTagCloser();
            return result;
        }

        this.reset(pointerReset);
        return false;
    }    

    b() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar();        

        if (char === 'b') {
            this.processMatch(char);

            const result = this.b() 
                        || this.r();
            return result;
        }

        this.reset(pointerReset);
        return false;
    }

    c() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar();

        if (char === 'c') {
            this.processMatch(char);

            const result = this.l();
            return result; 
        }


        this.reset(pointerReset);
        return false;
    }


    d() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar();
        
        if (char === 'd') {
            this.processMatch(char);

            const result = this.d()
                        || this.r()
                        || this.s()
                        || this.e()
                        || this.i();
            return result;
        }

        this.reset(pointerReset);
        return false;
    }

    e() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'e') {
            this.processMatch(char);
            
            const result = this.s() 
                        || this.a()
                        || this.findNextTagCloser();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }

    f() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'f') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }

    g() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'g') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }

    
    h() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'h') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    i() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'i') {
            this.processMatch(char);
            
            const result = this.d()
                        || this.o()
                        || this.c();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }

    j() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'j') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    k() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'k') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    l() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'l') {
            this.processMatch(char);
            
            const result = this.e();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    m() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'm') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    n() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'n') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    o() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'o') {
            this.processMatch(char);
            
            const result = this.findNextTagCloser();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    p() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'p') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    q() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'q') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    r() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 

        if (char === 'r') {
            this.processMatch(char);
            const result = this.e()
                        || this.t()
                        || this.findNextTagCloser();            
            return result;
        }

        this.reset(pointerReset);
        return false;
    }


    s() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 's') {
            this.processMatch(char);
            
            const result = this.s()
                        || this.i()
                        || this.tagCloser()
                        || this.findNextTagCloser();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    t() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 't') {
            this.processMatch(char);
            
            const result = this.i();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    u() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'u') {
            this.processMatch(char);
            
            const result = this.d();
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    v() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'v') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    w() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'w') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }

    x() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'x') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    y() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar(); 
        
        if (char === 'y') {
            this.processMatch(char);
            
            const result = false;
            return result;
        }

        this.reset(pointerReset);
        return false; 
    }


    tagCloser() {
        const pointerReset = this.#charPointer;
        const char = this.currentChar();

        if (char === '>') {
            this.processMatch(char);

            // FIXME: Make this actually work.
            this.#matches += this.#currentMatch + "\n";

            if (this.doneMatching()) {
                return true;
            } else {
                this.resetCurrentMatch();
                return this.findNextTagOpener();
            }
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

    processMatch(character) {
        this.appendCurrentMatch(character);
        this.consumeCharacter();
    }

    // checks if we have extended past the end of the thing
    doneMatching() {
        return (this.#charPointer === this.#fileContent.length);
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
        console.log("IN THIS\n");
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
        this.#result += this.#matches;
        console.log("PRINTING FINAL RESULT: \n" + this.#matches);
    }

    getVisual() {
        this.makeTreeVisual();
        return this.#result;
    }
}


export default Parser;
