import Parser from "../src/classes/Parser.jsx";

test("Parse <!doctype> tag", () => {
    const mockContent = "<!doctype>";
    const p = new Parser(mockContent);

    p.parse();

    const obtained  = p.getVisual();
    const expected = "!doctype";
    
    expect(obtained).toMatch(expected);
});


