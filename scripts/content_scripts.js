// find words in common verb and replace with a random verb
function randomVerb (){
    const index = Math.floor(Math.random() * commonVerbs.length);
    return commonVerbs[index];
}

function replaceVerb(node){
    // if is a text node, map through each word
    if(node.nodeType === Node.TEXT_NODE){
        const words = node.textContent.split(/\s+/);

        const newWords = words.map(word=>{
            commonVerbs.includes(word) ? randomVerb() : word;
            return;
        })

        node.textContent = newWords.join(' ');
    }else{
        // if not a text, traverse all its childs
        node.childNodes.forEach(replaceVerb);
    }
}

// find words in common noun and replace with a random verb
function randomNoun (){
    const index = Math.floor(Math.random() * commonNouns.length);
    return commonNouns[index];
}

function replaceNoun(node){
    // if is a text node, map through each word
    if(node.nodeType === Node.TEXT_NODE){
        const words = node.textContent.split(/\s+/);

        const newWords = words.map(word=>{
            commonNouns.includes(word) ? randomNoun() : word;
            return;
        })

        node.textContent = newWords.join(' ');
    }else{
        // if not a text, traverse all its childs
        node.childNodes.forEach(replaceNoun);
    }
}

// find words in adjective and replace with a random adjective
function randomAdj (){
    const index = Math.floor(Math.random() * adjectives.length);
    return adjectives[index];
}

function replaceAdj(node){
    // if is a text node, map through each word
    if(node.nodeType === Node.TEXT_NODE){
        const words = node.textContent.split(/\s+/);

        const newWords = words.map(word=>{
            adjectives.includes(word) ? randomAdj() : word;
            return;
        })

        node.textContent = newWords.join(' ');
    }else{
        // if not a text, traverse all its childs
        node.childNodes.forEach(replaceAdj);
    }
}

replaceVerb(document.body);
replaceNoun(document.body);
replaceAdj(document.body);
