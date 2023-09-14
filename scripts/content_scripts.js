const replace = (str, newStr) => {
    document.body.innerHTML = document.body.innerHTML.replace(str, newStr)
}

// find words in common verb and replace with a random verb
function randomVerb (){
    const index = Math.floor(Math.random() * commonVerbs.length);
    return commonVerbs[index];
}
function replaceVerb(node){
    if(node.nodeType === Node.TEXT_NODE){
        const words = node.textContent.split(/\s+/);

        const newWords = words.map(word=>{
            commonVerbs.includes(word) ? randomVerb() : word;
            return;
        })
    }
}