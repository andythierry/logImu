async function loadFile(file) {
  let text = await file.text();
   arr= csvToArray(text,",");
  // document.getElementById('output').textContent = text; //debug
  afficharr();
}
