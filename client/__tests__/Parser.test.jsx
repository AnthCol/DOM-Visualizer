import Parser from "../src/classes/Parser.jsx";

test("Parse <!doctype>", () => {
    const mockContent = "<!doctype>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained  = p.getVisual();
    const expected = "!doctype"; 
    expect(obtained).toMatch(expected);
});


test("Parse <a> and </a>", () => {
    const mockContent = "<a></a>"; 
    const p = new Parser(mockContent); 
    p.parse();
    const obtained = p.getVisual(); 
    const expected = "a";
    expect(obtained).toMatch(expected);
});


test("Parse <abbr> and </abbr>", () => {
    const mockContent = "<abbr></abbr>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "abbr";
    expect(obtained).toMatch(expected);
});


test("Parse <address> and </address>", () => {
    const mockContent = "<address></address>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "address";
    expect(obtained).toMatch(expected);
});


test("Parse <area> and </area>", () => {
    const mockContent = "<area></area>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "area";
    expect(obtained).toMatch(expected);
});


test("Parse <aside> and </aside>", () => {
    const mockContent = "<audio></audio>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "audio";
    expect(obtained).toMatch(expected);
});


test("Parse <b> and </b>", () => {
    const mockContent = "<b></b>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "b";
    expect(obtained).toMatch(expected);
});


test("Parse <base> and </base>", () => {
    const mockContent = "<base></base>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "base";
    expect(obtained).toMatch(expected);
});


test("Parse <bdi> and </bdi>", () => {
    const mockContent = "<bdi></bdi>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "bdi";
    expect(obtained).toMatch(expected);
});


test("Parse <bdo> and </bdo>", () => {
    const mockContent = "<bdo></bdo>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "bdo";
    expect(obtained).toMatch(expected);
});


test("Parse <blockquote> and </blockquote>", () => {
    const mockContent = "<blockquote></blockquote>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "blockquote";
    expect(obtained).toMatch(expected);
});


test("Parse <body> and </body>", () => {
    const mockContent = "<body></body>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "body";
    expect(obtained).toMatch(expected);
});


test("Parse <br> and </br>", () => {
    const mockContent = "<br></br>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "br";
    expect(obtained).toMatch(expected);
});


test("Parse <button> and </button>", () => {
    const mockContent = "<button></button>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "button";
    expect(obtained).toMatch(expected);
});


test("Parse <canvas> and </canvas>", () => {
    const mockContent = "<canvas></canvas>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "canvas";
    expect(obtained).toMatch(expected);
});


test("Parse <caption> and </caption>", () => {
    const mockContent = "<caption></caption>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "caption";
    expect(obtained).toMatch(expected);
});


test("Parse <cite> and </cite>", () => {
    const mockContent = "<cite></cite>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "cite";
    expect(obtained).toMatch(expected);
});


test("Parse <code> and </code>", () => {
    const mockContent = "<code></code>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "code";
    expect(obtained).toMatch(expected);
});


test("Parse <col> and </col>", () => {
    const mockContent = "<col></col>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "col";
    expect(obtained).toMatch(expected);
});


test("Parse <colgroup> and </colgroup>", () => {
    const mockContent = "<colgroup></colgroup>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "colgroup";
    expect(obtained).toMatch(expected);
});

test("Parse <data> and </data>", () => {
    const mockContent = "<data></data>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "data";
    expect(obtained).toMatch(expected);
});


test("Parse <datagrid> and </datagrid>", () => {
    const mockContent = "<datagrid></datagrid>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "datagrid";
    expect(obtained).toMatch(expected);
});


test("Parse <datalist> and </datalist>", () => {
    const mockContent = "<datalist></datalist>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "datalist";
    expect(obtained).toMatch(expected);
});


test("Parse <dd> and </dd>", () => {
    const mockContent = "<dd></dd>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "dd";
    expect(obtained).toMatch(expected);
});


test("Parse <del> and </del>", () => {
    const mockContent = "<del></del>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "del";
    expect(obtained).toMatch(expected);
});


test("Parse <details> and </details>", () => {
    const mockContent = "<details></details>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "details";
    expect(obtained).toMatch(expected);
});


test("Parse <dfn> and </dfn>", () => {
    const mockContent = "<dfn></dfn>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "dfn";
    expect(obtained).toMatch(expected);
});


test("Parse <dialog> and </dialog>", () => {
    const mockContent = "<dialog></dialog>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "dialog";
    expect(obtained).toMatch(expected);
});


test("Parse <div> and </div>", () => {
    const mockContent = "<div></div>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "div";
    expect(obtained).toMatch(expected);
});


test("Parse <dl> and </dl>", () => {
    const mockContent = "<dl></dl>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "dl";
    expect(obtained).toMatch(expected);
});


test("Parse <dt> and </dt>", () => {
    const mockContent = "<dt></dt>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "dt";
    expect(obtained).toMatch(expected);
});


test("Parse <em> and </em>", () => {
    const mockContent = "<em></em>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "em";
    expect(obtained).toMatch(expected);
});


test("Parse <embed> and </embed>", () => {
    const mockContent = "<embed></embed>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "embed";
    expect(obtained).toMatch(expected);
});


test("Parse <fieldset> and </fieldset>", () => {
    const mockContent = "<fieldset></fieldset>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "fieldset";
    expect(obtained).toMatch(expected);
});


test("Parse <figcaption> and </figcaption>", () => {
    const mockContent = "<figcaption></figcaption>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "figcaption";
    expect(obtained).toMatch(expected);
});


test("Parse <figure> and </figure>", () => {
    const mockContent = "<figure></figure>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "figure";
    expect(obtained).toMatch(expected);
});


test("Parse <footer> and </footer>", () => {
    const mockContent = "<footer></footer>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "footer";
    expect(obtained).toMatch(expected);
});


test("Parse <form> and </form>", () => {
    const mockContent = "<form></form>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "form";
    expect(obtained).toMatch(expected);
});


test("Parse <h1> and </h1>", () => {
    const mockContent = "<h1></h1>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "h1";
    expect(obtained).toMatch(expected);
});


test("Parse <h2> and </h2>", () => {
    const mockContent = "<h2></h2>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "h2";
    expect(obtained).toMatch(expected);
});


test("Parse <h3> and </h3>", () => {
    const mockContent = "<h3></h3>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "h3";
    expect(obtained).toMatch(expected);
});


test("Parse <h4> and </h4>", () => {
    const mockContent = "<h4></h4>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "h4";
    expect(obtained).toMatch(expected);
});


test("Parse <h5> and </h5>", () => {
    const mockContent = "<h5></h5>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "h5";
    expect(obtained).toMatch(expected);
});


test("Parse <h6> and </h6>", () => {
    const mockContent = "<h6></h6>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "h6";
    expect(obtained).toMatch(expected);
});


test("Parse <head> and </head>", () => {
    const mockContent = "<head></head>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "head";
    expect(obtained).toMatch(expected);
});


test("Parse <header> and </header>", () => {
    const mockContent = "<header></header>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "header";
    expect(obtained).toMatch(expected);
});


test("Parse <hr> and </hr>", () => {
    const mockContent = "<html></html>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "html";
    expect(obtained).toMatch(expected);
});


test("Parse <html> and </html>", () => {
    const mockContent = "<html></html>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "html";
    expect(obtained).toMatch(expected);
});


test("Parse <i> and </i>", () => {
    const mockContent = "<i></i>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "i";
    expect(obtained).toMatch(expected);
});



test("Parse <iframe> and </iframe>", () => {
    const mockContent = "<iframe></iframe>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "iframe";
    expect(obtained).toMatch(expected);
});


test("Parse <img> and </img>", () => {
    const mockContent = "<img></img>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "img";
    expect(obtained).toMatch(expected);
});


test("Parse <input> and </input>", () => {
    const mockContent = "<input></input>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "input";
    expect(obtained).toMatch(expected);
});


test("Parse <ins> and </ins>", () => {
    const mockContent = "<kbd></kbd>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "kbd";
    expect(obtained).toMatch(expected);
});


test("Parse <label> and </label>", () => {
    const mockContent = "<label></label>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "label";
    expect(obtained).toMatch(expected);
});


test("Parse <legend> and </legend>", () => {
    const mockContent = "<legend></legend>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "legend";
    expect(obtained).toMatch(expected);
});


test("Parse <li> and </li>", () => {
    const mockContent = "<link></link>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "link";
    expect(obtained).toMatch(expected);
});


test("Parse <main> and </main>", () => {
    const mockContent = "<main></main>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "main";
    expect(obtained).toMatch(expected);
});


test("Parse <map> and </map>", () => {
    const mockContent = "<map></map>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "map";
    expect(obtained).toMatch(expected);
});


test("Parse <mark> and </mark>", () => {
    const mockContent = "<mark></mark>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "mark";
    expect(obtained).toMatch(expected);
});


test("Parse <meta> and </meta>", () => {
    const mockContent = "<meta></meta>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "meta";
    expect(obtained).toMatch(expected);
});


test("Parse <meter> and </meter>", () => {
    const mockContent = "<meter></meter>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "meter";
    expect(obtained).toMatch(expected);
});


test("Parse <nav> and </nav>", () => {
    const mockContent = "<noscript></noscript>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "noscript";
    expect(obtained).toMatch(expected);
});


test("Parse <object> and </object>", () => {
    const mockContent = "<object></object>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "object";
    expect(obtained).toMatch(expected);
});


test("Parse <ol> and </ol>", () => {
    const mockContent = "<ol></ol>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "ol";
    expect(obtained).toMatch(expected);
});


test("Parse <optgroup> and </optgroup>", () => {
    const mockContent = "<optgroup></optgroup>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "optgroup";
    expect(obtained).toMatch(expected);
});


test("Parse <option> and </option>", () => {
    const mockContent = "<option></option>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "option";
    expect(obtained).toMatch(expected);
});


test("Parse <output> and </output>", () => {
    const mockContent = "<outp></output>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "p";
    expect(obtained).toMatch(expected);
});


test("Parse <param> and </param>", () => {
    const mockContent = "<param></param>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "param";
    expect(obtained).toMatch(expected);
});


test("Parse <p> and </pre>", () => {
    const mockContent = "<pre></pre>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "pre";
    expect(obtained).toMatch(expected);
});


test("Parse <progress> and </progress>", () => {
    const mockContent = "<progress></progress>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "progress";
    expect(obtained).toMatch(expected);
});


test("Parse <q> and </q>", () => {
    const mockContent = "<q></q>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "q";
    expect(obtained).toMatch(expected);
});


test("Parse <rb> and </rb>", () => {
    const mockContent = "<rb></rb>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "rb";
    expect(obtained).toMatch(expected);
});


test("Parse <rp> and </rp>", () => {
    const mockContent = "<rp></rp>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "rp";
    expect(obtained).toMatch(expected);
});


test("Parse <rt> and </rt>", () => {
    const mockContent = "<rt></rt>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "rt";
    expect(obtained).toMatch(expected);
});


test("Parse <ruby> and </ruby>", () => {
    const mockContent = "<ruby></ruby>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "ruby";
    expect(obtained).toMatch(expected);
});


test("Parse <s> and </s>", () => {
    const mockContent = "<s></s>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "s";
    expect(obtained).toMatch(expected);
});


test("Parse <samp> and </samp>", () => {
    const mockContent = "<samp></samp>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "samp";
    expect(obtained).toMatch(expected);
});


test("Parse <script> and </script>", () => {
    const mockContent = "<script></script>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "script";
    expect(obtained).toMatch(expected);
});

test("Parse <section> and </section", () => {
    const mockContent = "<section></section>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "section";
    expect(obtained).toMatch(expected);
});

test("Parse <select> and </select>", () => {
    const mockContent = "<select></select>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "select";
    expect(obtained).toMatch(expected);
});

test("Parse <small> and </small>", () => {
    const mockContent = "<small></small>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "small";
    expect(obtained).toMatch(expected);
});

test("Parse <span> and </span>", () => {
    const mockContent = "<span></span>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "span";
    expect(obtained).toMatch(expected);
});

test("Parse <strong> and </strong>", () => {
    const mockContent = "<strong></strong>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "strong";
    expect(obtained).toMatch(expected);
});

test("Parse <style> and </style>", () => {
    const mockContent = "<style></style>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "style";
    expect(obtained).toMatch(expected);
});

test("Parse <sub> and </sub>", () => {
    const mockContent = "<sub></sub>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "sub";
    expect(obtained).toMatch(expected);
});

test("Parse <summary> and </summary>", () => {
    const mockContent = "<summary></summary>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "summary";
    expect(obtained).toMatch(expected);
});

test("Parse <sup> and </sup>", () => {
    const mockContent = "<sup></sup>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "sup";
    expect(obtained).toMatch(expected);
});

test("Parse <table> and </table>", () => {
    const mockContent = "<table></table>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "table";
    expect(obtained).toMatch(expected);
});

test("Parse <tbody> and </tbody>", () => {
    const mockContent = "<tbody></tbody>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "tbody";
    expect(obtained).toMatch(expected);
});

test("Parse <td> and </td>", () => {
    const mockContent = "<td></td>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "td";
    expect(obtained).toMatch(expected);
});

test("Parse <template> and </template>", () => {
    const mockContent = "<template></template>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "template";
    expect(obtained).toMatch(expected);
});

test("Parse <textarea> and </textarea>", () => {
    const mockContent = "<textarea></textarea>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "textarea";
    expect(obtained).toMatch(expected);
});

test("Parse <tfoot> and </tfoot>", () => {
    const mockContent = "<tfoot></tfoot>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "tfoot";
    expect(obtained).toMatch(expected);
});

test("Parse <th> and </th>", () => {
    const mockContent = "<th></th>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "th";
    expect(obtained).toMatch(expected);
});

test("Parse <thead> and </thead>", () => {
    const mockContent = "<thead></thead>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "thead";
    expect(obtained).toMatch(expected);
});

test("Parse <time> and </time>", () => {
    const mockContent = "<time></time>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "time";
    expect(obtained).toMatch(expected);
});

test("Parse <title> and </title>", () => {
    const mockContent = "<title></title>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "title";
    expect(obtained).toMatch(expected);
});

test("Parse <tr> and </tr>", () => {
    const mockContent = "<tr></tr>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "tr";
    expect(obtained).toMatch(expected);
});

test("Parse <track> and </track>", () => {
    const mockContent = "<track></track>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "track";
    expect(obtained).toMatch(expected);
});

test("Parse <u> and </u>", () => {
    const mockContent = "<ul></ul>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "ul";
    expect(obtained).toMatch(expected);
});

test("Parse <var> and </var>", () => {
    const mockContent = "<var></var>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "var";
    expect(obtained).toMatch(expected);
});

test("Parse <video> and </video>", () => {
    const mockContent = "<video></video>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "video";
    expect(obtained).toMatch(expected);
});

test("Parse <wbr> and </wbr>", () => {
    const mockContent = "<wbr></wbr>";
    const p = new Parser(mockContent);
    p.parse();
    const obtained = p.getVisual();
    const expected = "wbr";
    expect(obtained).toMatch(expected);
});
