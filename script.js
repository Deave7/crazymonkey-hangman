// Initierar variabler 

let gameState = 0; // 0 = spelet har ej startat första gången, 1 = spelet körs, 2 = vinst, 3 = förlust 
let wrongGuessCounter = 0;
let key = ''
let answer ='';
let wrongCharacters = [];
const randomWords = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'act', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'age', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera', 'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care', 'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 'certainly', 'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil', 'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color', 'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'Congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost', 'could', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural', 'culture', 'cup', 'current', 'customer', 'cut', 'dark', 'data', 'daughter', 'day', 'dead', 'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree', 'Democrat', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'do', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early', 'east', 'easy', 'eat', 'economic', 'economy', 'edge', 'education', 'effect', 'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental', 'especially', 'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 'experience', 'expert', 'explain', 'eye', 'face', 'fact', 'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'few', 'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign', 'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 'future', 'game', 'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 'glass', 'go', 'goal', 'good', 'government', 'great', 'green', 'ground', 'group', 'grow', 'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 'happy', 'hard', 'have', 'he', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'herself', 'high', 'him', 'himself', 'his', 'history', 'hit', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'how', 'however', 'huge', 'human', 'hundred', 'husband', 'I', 'idea', 'identify', 'if', 'image', 'imagine', 'impact', 'important', 'improve', 'in', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 'into', 'investment', 'involve', 'issue', 'it', 'item', 'its', 'itself', 'job', 'join', 'just', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'know', 'knowledge', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer', 'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal', 'less', 'let', 'letter', 'level', 'lie', 'life', 'light', 'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot', 'love', 'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'man', 'manage', 'management', 'manager', 'many', 'market', 'marriage', 'material', 'matter', 'may', 'maybe', 'me', 'mean', 'measure', 'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute', 'miss', 'mission', 'model', 'modern', 'moment', 'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 'movie', 'Mr', 'Mrs', 'much', 'music', 'must', 'my', 'myself', 'name', 'nation', 'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network', 'never', 'new', 'news', 'newspaper', 'next', 'nice', 'night', 'no', 'none', 'nor', 'north', 'not', 'note', 'nothing', 'notice', 'now', 'n\'t', 'number', 'occur', 'of', 'off', 'offer', 'office', 'officer', 'official', 'often', 'oh', 'oil', 'ok', 'old', 'on', 'once', 'one', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'or', 'order', 'organization', 'other', 'others', 'our', 'out', 'outside', 'over', 'own', 'owner', 'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly', 'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'pay', 'peace', 'people', 'per', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 'plant', 'play', 'player', 'PM', 'point', 'police', 'policy', 'political', 'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'put', 'quality', 'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'Republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'run', 'safe', 'same', 'save', 'say', 'scene', 'school', 'science', 'scientist', 'score', 'sea', 'season', 'seat', 'second', 'section', 'security', 'see', 'seek', 'seem', 'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several', 'sex', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign', 'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'situation', 'six', 'size', 'skill', 'skin', 'small', 'smile', 'so', 'social', 'society', 'soldier', 'some', 'somebody', 'someone', 'something', 'sometimes', 'son', 'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station', 'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong', 'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'sure', 'surface', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 'teacher', 'team', 'technology', 'television', 'tell', 'ten', 'tend', 'term', 'test', 'than', 'thank', 'that', 'the', 'their', 'them', 'themselves', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 'throw', 'thus', 'time', 'to', 'today', 'together', 'tonight', 'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth', 'try', 'turn', 'TV', 'two', 'type', 'under', 'understand', 'unit', 'until', 'up', 'upon', 'us', 'use', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'way', 'we', 'weapon', 'wear', 'week', 'weight', 'well', 'west', 'western', 'what', 'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'who', 'whole', 'whom', 'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder', 'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young', 'your', 'yourself']

//Väljer ut element
const guessButton = document.getElementById('guessButton')
const failList = document.querySelector("#mainContent > main > section.button-container > ul > li")
const answerList = document.querySelector("section.answer-container")
const guessCountList = document.querySelector("#mainContent > main > section.guesses > b")

//Sätter knappar

guessButton.addEventListener('click', function() {
    guess()
})

//hämtar varje path från svg och deklarerar
const head = document.getElementById("head");
const body = document.getElementById("body");
const arms = document.getElementById("arms");
const legs = document.getElementById("legs");
const scaffold = document.getElementById("scaffold");

//array för alla delar av svg
const hangman = [scaffold, head, body, arms, legs];


function startGame() {
    gameState = 1;
    guessCounter = 0;
    wrongCharacters = [];
    key = getRandomWord()
    setAnswer(key, answerList)
    hangman.forEach(function(item){
      item.style.display = "none";
  })
  console.log(key);
}

function hangmansvg(counter) {
  
  /* counter = counter -1; */
  console.log(counter);
  console.log(hangman);


}

function resetGame(answerList, failList) {
    while(failList.firstChild) {
        failList.removeChild(failList.firstChild)
    }

    while(answerList.firstChild) {
        answerList.removeChild(answerList.firstChild)
    }
}

function printFailList(wrongCharacters, failList) {
    wrongCharacters.push(keyInput)
    let li = document.createElement('li')
    li.innerHTML = keyInput
    failList.appendChild(li)
}

function getRandomWord() {
    let key = randomWords[Math.floor(Math.random() * randomWords.length)]
    return key
}


function guess() {
    keyInput = document.getElementById('guessInput').value
    document.getElementById('guessInput').value = ''

    checkGuess(keyInput)
}


//skriv ut resultat per gissning (använda bokstäver etc)

function setAnswer(key, answerList) {
    for (i = 0; i < key.length; i++) {
       answer += '_'
       answerList.innerHTML = answer;
   }
}

function updateAnswer(answerList) {
    answerList.innerHTML = answer;
}

function updateGuesses(wrongGuessCounter, guessCountList) {
    guessCount = guessCountList.innerHTML
    guessCount = guessCount.split('')
    guessCount[0] = wrongGuessCounter
    guessCount = guessCount.join('')
    guessCountList.innerHTML = guessCount
}

//Ska det kontrolleras om det gissas på en bokstav som redan var rätt? 


function checkGuess(keyInput) {
    if (wrongCharacters.includes(keyInput)) {
        prompt(`You have already guessed: ${keyInput}, please choose a different letter `)
    }
    else if (key.includes(keyInput)) {
            for(i = 0; i < key.length; i++) {
                if (key.charAt(i) == keyInput) {
                    keyIndex = i
                    answer = answer.split('');
                    answer[keyIndex] = keyInput;
                    answer = answer.join('');
                }
            }
            updateAnswer(answerList)

            if (key === answer) {
                gameState = 2
            }
        }
        else {
            wrongGuessCounter++
            hangmansvg(wrongGuessCounter)
            if (wrongGuessCounter < 6) {
              
              printFailList(wrongCharacters, failList)
              updateGuesses(wrongGuessCounter, guessCountList)
            }
            else {
            updateGuesses(wrongGuessCounter, guessCountList)
            printFailList(wrongCharacters, failList)
            gameState = 3
            checkGameState(gameState)
            }
    }
}


const myModal = document.getElementsByClassName("myModal")
const startModal = document.getElementById("startModal")
const mainContent = document.getElementById("mainContent")
const winModal = document.getElementById("winModal")
const loseModal = document.getElementById("loseModal")
const startButton = document.getElementById("startButton")
const restartButton = document.getElementsByClassName("restartButton")



startButton.addEventListener("click", () => {
  startModal.style.display = "none";
  mainContent.style.display = "block";
startGame();
})

// om gameState - 2 = visas winModal och resten display: none;
// annars om gameState - 3 = visas loseModal och resten display: none;

// kanske ska visa det rätta ordet också?

//nedanstående behöver vara en funktion som kallas varje gång vi ändrar på gameState


function checkGameState (gameState) {
if (gameState === 0) {
  startModal.style.display = "block"
  mainContent.style.display = "none"
  winModal.style.display = "none"
  loseModal.style.display = "none"
} 
else if (gameState === 1) {
  startModal.style.display = "none"
  mainContent.style.display = "block"
  winModal.style.display = "none"
  loseModal.style.display = "none"
}
else if (gameState === 2) {
  startModal.style.display = "none"
  mainContent.style.display = "none"
  winModal.style.display = "block"
  loseModal.style.display = "none"
  
} 
else if (gameState === 3) {
  startModal.style.display = "none"
  mainContent.style.display = "none"
  winModal.style.display = "none"
  loseModal.style.display = "block"
}
}



//* Meny - tillåta lokal multiplayer 

//* hint? slumpa fram en bokstav ur rätt ord

//* svårghetsgrader? 

//* poängsystem?

//* highscores?
