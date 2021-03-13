(async () => {
    let parser = new DOMParser()
    let rTxt = await fetch("index.html").then(r => r.text())
    let footer = parser.parseFromString(rTxt, 'text/html').querySelector(".badan")
    $("body").append(footer)
})();