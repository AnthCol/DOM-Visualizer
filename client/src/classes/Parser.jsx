import Tag from "./Tag.jsx";

class Parser {
    #currentMatch;
    #fileContent;
    #charPointer;
    #tabLevel;
    #tags;
    #result;
    #matches;

    constructor(fileContent) {
        // strip leading whitespace from fileContent
        // so that the first thing is a <, or at least should 
        // be.
        this.#charPointer = 0;
        this.#currentMatch = "";
        this.#tabLevel = 0;
        this.#result = "";
        this.#tags= [];
        this.#fileContent = fileContent.trim();
    }

    tagOpener() {
        const char = this.currentChar();
        let result = false;

        if (char === '<') {
            this.processMatch(char);
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
                  || this.w();
        } 
        
        return result;
    }

    a() {
        const char = this.currentChar();        
        let result = false;

        if (char === 'a') {
            this.processMatch(char);

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
            this.processMatch(char);

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
            this.processMatch(char);

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
            this.processMatch(char);

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
            this.processMatch(char);
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
            this.processMatch(char);
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
            this.processMatch(char);
            
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
            this.processMatch(char);
            
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
            this.processMatch(char);
            
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
            this.processMatch(char);
           
            result = this.e();
        }

        return result;
    }


    k() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'k') {
            this.processMatch(char);
            
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
            this.processMatch(char);

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
            this.processMatch(char);
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
            this.processMatch(char);
        
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
            this.processMatch(char);
            
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
            this.processMatch(char);
            
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
            this.processMatch(char);
            
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
            this.processMatch(char);

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
            this.processMatch(char);
    
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
            this.processMatch(char);
            
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
            this.processMatch(char);
            
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
            this.processMatch(char);
        
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
            this.processMatch(char);
            
            result = this.b();
        }

        return result;
    }

    x() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'x') {
            this.processMatch(char);
            
            result = this.t();
        }

        return result;
    }


    y() {
        const char = this.currentChar(); 
        let result = false;        

        if (char === 'y') {
            this.processMatch(char);
            
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
            this.processMatch(char);

            result = this.findNextTagCloser();
        }

        return result;
    }

    tagCloser() {
        const char = this.currentChar();
        let result = false;

        if (char === '>') {
            this.processMatch(char);  
            this.processTagMatch();
            
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
        return this.findNextTagOpener();
    }

    //////////////////////////////////
    // Helper functions below
    //////////////////////////////////

    processTagMatch() {
        const tag = new Tag(this.#currentMatch);
        this.#tags.push(tag); 
        this.#currentMatch = "";
    }

    processMatch(character) {
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

    indent() {
        let spacesPerIndent = 4;
        this.#result += (" ".repeat(spacesPerIndent)).repeat(this.#tabLevel);
    }

    consumeCharacter() {
        this.#charPointer += 1;
    }

    makeTreeVisual() {
        this.#result += JSON.stringify(this.#tags);
    }

    getVisual() {
        this.makeTreeVisual();
        return this.#result;
    }
}


export default Parser;
