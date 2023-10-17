// Initierar variabler 
let gameState = 0; // 0 = spelet har ej startat första gången, 1 = spelet körs, 2 = vinst, 3 = förlust 
let gameDifficulty = "standard";
let wrongGuessCounter = -1;
let key = '' // Lagrar ordet man letar efter
let answer =''; // Lagrar spelarens gissningar
let wrongCharacters = []; // Lagrar spelarens felgissningar
// Listor för orden som väljs baserat på svårighetsgrad
const randomWords = ['ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'act', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'age', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera', 'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care', 'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 'certainly', 'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil', 'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color', 'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'Congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost', 'could', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural', 'culture', 'cup', 'current', 'customer', 'cut', 'dark', 'data', 'daughter', 'day', 'dead', 'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree', 'Democrat', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'do', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early', 'east', 'easy', 'eat', 'economic', 'economy', 'edge', 'education', 'effect', 'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental', 'especially', 'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 'experience', 'expert', 'explain', 'eye', 'face', 'fact', 'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'few', 'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign', 'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 'future', 'game', 'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 'glass', 'go', 'goal', 'good', 'government', 'great', 'green', 'ground', 'group', 'grow', 'growth', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 'happy', 'hard', 'have', 'he', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'herself', 'high', 'him', 'himself', 'his', 'history', 'hit', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'how', 'however', 'huge', 'human', 'hundred', 'husband', 'I', 'idea', 'identify', 'if', 'image', 'imagine', 'impact', 'important', 'improve', 'in', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 'into', 'investment', 'involve', 'issue', 'it', 'item', 'its', 'itself', 'job', 'join', 'just', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'know', 'knowledge', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer', 'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal', 'less', 'let', 'letter', 'level', 'lie', 'life', 'light', 'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot', 'love', 'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'man', 'manage', 'management', 'manager', 'many', 'market', 'marriage', 'material', 'matter', 'may', 'maybe', 'me', 'mean', 'measure', 'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute', 'miss', 'mission', 'model', 'modern', 'moment', 'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 'movie', 'Mr', 'Mrs', 'much', 'music', 'must', 'my', 'myself', 'name', 'nation', 'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network', 'never', 'new', 'news', 'newspaper', 'next', 'nice', 'night', 'no', 'none', 'nor', 'north', 'not', 'note', 'nothing', 'notice', 'now', 'n\'t', 'number', 'occur', 'of', 'off', 'offer', 'office', 'officer', 'official', 'often', 'oh', 'oil', 'ok', 'old', 'on', 'once', 'one', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'or', 'order', 'organization', 'other', 'others', 'our', 'out', 'outside', 'over', 'own', 'owner', 'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly', 'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'pay', 'peace', 'people', 'per', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 'plant', 'play', 'player', 'PM', 'point', 'police', 'policy', 'political', 'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'put', 'quality', 'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'Republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'run', 'safe', 'same', 'save', 'say', 'scene', 'school', 'science', 'scientist', 'score', 'sea', 'season', 'seat', 'second', 'section', 'security', 'see', 'seek', 'seem', 'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several', 'sex', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign', 'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'situation', 'six', 'size', 'skill', 'skin', 'small', 'smile', 'so', 'social', 'society', 'soldier', 'some', 'somebody', 'someone', 'something', 'sometimes', 'son', 'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station', 'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong', 'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'sure', 'surface', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 'teacher', 'team', 'technology', 'television', 'tell', 'ten', 'tend', 'term', 'test', 'than', 'thank', 'that', 'the', 'their', 'them', 'themselves', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 'throw', 'thus', 'time', 'to', 'today', 'together', 'tonight', 'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth', 'try', 'turn', 'TV', 'two', 'type', 'under', 'understand', 'unit', 'until', 'up', 'upon', 'us', 'use', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'way', 'we', 'weapon', 'wear', 'week', 'weight', 'well', 'west', 'western', 'what', 'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'who', 'whole', 'whom', 'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder', 'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young', 'your', 'yourself']
const easyWords = ["able","act","add","age","ago","air","all","also","and","any","area","arm","art","as","ask","at","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","bed","best","big","bill","bit","blue","body","book","born","both","box","boy","but","buy","by","call","can","car","card","care","case","cell","city","cold","come","cost","cup","cut","dark","data","day","dead","deal","deep","die","do","dog","door","down","draw","drop","drug","each","east","easy","eat","edge","else","end","even","ever","eye","face","fact","fail","fall","far","fast","fear","feel","few","fill","film","find","fine","fire","firm","fish","five","fly","food","foot","for","form","four","free","from","full","fund","game","gas","get","girl","give","go","goal","good","grow","gun","guy","hair","half","hand","hang","hard","have","he","head","hear","heat","help","her","here","high","him","his","hit","hold","home","hope","hot","hour","how","huge","I","idea","if","in","into","it","item","its","job","join","just","keep","key","kid","kill","kind","know","land","last","late","law","lay","lead","left","leg","less","let","lie","life","like","line","list","live","long","look","lose","loss","lot","love","low","main","make","man","many","may","me","mean","meet","mind","miss","more","most","move","Mr","Mrs","much","must","my","name","near","need","new","news","next","nice","no","none","nor","not","note","now","n't","of","off","oh","oil","ok","old","on","once","one","only","onto","open","or","our","out","over","own","page","pain","part","pass","past","pay","per","pick","plan","play","PM","poor","pull","push","put","race","rate","read","real","red","rest","rich","rise","risk","road","rock","role","room","rule","run","safe","same","save","say","sea","seat","see","seek","seem","sell","send","set","sex","she","shot","show","side","sign","sing","sit","site","six","size","skin","so","some","son","song","soon","sort","star","stay","step","stop","such","sure","take","talk","task","tax","team"]
const mediumWords = ["about","above","accept","across","action","admit","adult","affect","after","again","agency","agent","agree","ahead","allow","almost","alone","along","always","among","amount","animal","answer","anyone","appear","apply","argue","around","arrive","artist","assume","attack","author","avoid","become","before","begin","behind","better","beyond","black","blood","board","break","bring","budget","build","camera","cancer","career","carry","catch","cause","center","chair","chance","change","charge","check","child","choice","choose","church","civil","claim","class","clear","close","coach","color","common","could","couple","course","court","cover","create","crime","death","debate","decade","decide","degree","design","detail","dinner","doctor","dream","drive","during","early","effect","effort","eight","either","energy","enjoy","enough","enter","entire","event","every","exist","expect","expert","factor","family","father","field","fight","figure","final","finger","finish","first","floor","focus","follow","force","forget","former","friend","front","future","garden","glass","great","green","ground","group","growth","happen","happy","health","heart","heavy","hotel","house","human","image","impact","indeed","inside","issue","itself","large","later","laugh","lawyer","leader","learn","least","leave","legal","letter","level","light","likely","listen","little","local","major","manage","market","matter","maybe","media","member","memory","method","middle","might","minute","model","modern","moment","money","month","mother","mouth","movie","music","myself","nation","nature","nearly","never","night","north","notice","number","occur","offer","office","often","option","order","other","others","owner","paper","parent","party","peace","people","period","person","phone","piece","place","plant","player","point","police","policy","power","pretty","price","prove","public","quite","radio","raise","range","rather","reach","ready","really","reason","recent","record"]
const hardWords = ["ability","according","account","activity","actually","address","administration","against","agreement","already","although","American","analysis","another","anything","approach","article","attention","attorney","audience","authority","available","beautiful","because","behavior","believe","benefit","between","billion","brother","building","business","campaign","candidate","capital","central","century","certain","certainly","challenge","character","citizen","clearly","collection","college","commercial","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","country","cultural","culture","current","customer","daughter","decision","defense","Democrat","democratic","describe","despite","determine","develop","development","difference","different","difficult","direction","director","discover","discuss","discussion","disease","economic","economy","education","election","employee","environment","environmental","especially","establish","evening","everybody","everyone","everything","evidence","exactly","example","executive","experience","explain","federal","feeling","finally","financial","foreign","forward","general","generation","government","herself","himself","history","hospital","however","hundred","husband","identify","imagine","important","improve","include","including","increase","indicate","individual","industry","information","instead","institution","interest","interesting","international","interview","investment","involve","kitchen","knowledge","language","machine","magazine","maintain","majority","management","manager","marriage","material","measure","medical","meeting","mention","message","military","million","mission","morning","movement","national","natural","necessary","network","newspaper","nothing","officer","official","operation","opportunity","organization","outside","painting","participant","particular","particularly","partner","patient","pattern"]
//Väljer ut element
const failList = document.getElementById("failList");
const answerList = document.querySelector("section.answer-container");
const guessInput = document.getElementById("guessInput");
const guessCountList = document.querySelector(
  ".guesses > p:nth-child(2) > b:nth-child(1)"
);
const correctWord = document.getElementsByClassName("correctWord");
const hamburgerIcon = document.querySelector(
  "body > header > div.hamburger-icon > div"
);
const hamburgerMenu = document.getElementById("menu")
// Knappar
const guessButton = document.getElementById("guessButton");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementsByClassName("restartButton");
const continueButton = document.getElementById("continueButton");
const buttonContainer = document.getElementById("buttonContainer");
const standardButton = document.querySelectorAll(".standardButton");
const easyButton = document.querySelectorAll(".easyButton");
const mediumButton = document.querySelectorAll(".mediumButton");
const hardButton = document.querySelectorAll(".hardButton");
const difBtn = document.querySelectorAll(".difBtn");
// Modals
const myModal = document.getElementsByClassName("myModal");
const startModal = document.getElementById("startModal");
const mainContent = document.getElementById("mainContent");
const winModal = document.getElementById("winModal");
const loseModal = document.getElementById("loseModal");
const sameLetterModal = document.getElementById("sameLetterModal");
//Svg
const ground = document.getElementById("ground");
const head = document.getElementById("head");
const body = document.getElementById("body");
const arms = document.getElementById("arms");
const legs = document.getElementById("legs");
const scaffold = document.getElementById("scaffold");
const hangman = [ground, scaffold, head, body, arms, legs];

// Kopplar funktioner till knappar
startButton.addEventListener("click", () => {
  startGame();
  checkGameState(gameState);
});

for (i = 0; i < restartButton.length; i++) {
  restartButton[i].addEventListener("click", () => {
    resetGame(answerList, failList);
    startGame();
    checkGameState(gameState);
  });
}
guessButton.addEventListener("click", function () {
  storeGuess();
});

for (i = 0; i < standardButton.length; i++) {
  standardButton[i].addEventListener("click", () => {
    gameDifficulty = "standard";
  });
}

for (i = 0; i < easyButton.length; i++) {
  easyButton[i].addEventListener("click", () => {
    gameDifficulty = "easy";
  });
}

for (i = 0; i < mediumButton.length; i++) {
  mediumButton[i].addEventListener("click", () => {
    gameDifficulty = "medium";
  });
}

for (i = 0; i < hardButton.length; i++) {
  hardButton[i].addEventListener("click", () => {
    gameDifficulty = "hard";
  });
}

continueButton.addEventListener("click", function (event) {
  closeSameLetterModal();
});

// Styr vilken knapp som är aktiv
for (let i = 0; i < difBtn.length; i++) {
  difBtn[i].addEventListener("click", function () {
    let buttonType = this.className.split(" ")[0];
    let current = document.querySelectorAll(".active");

    for (j = 0; j < current.length; j++) {
      current[j].classList.remove("active");
    }

    let buttonsToActivate = document.querySelectorAll("." + buttonType);
    for (k = 0; k < buttonType.length; k++) {
      if (buttonsToActivate[k]) buttonsToActivate[k].classList.add("active");
    }
  });
}

// Styr vad enterknappen gör
addEventListener("keydown", (event) => {
  if (event.keyCode === 13 && gameState === 0) {
    startGame();
    checkGameState(gameState);
  } else if (event.keyCode === 13 && gameState === 1) {
    guessButton.click();
    continueButton.click();
  } else if (event.keyCode === 13 && gameState === 2) {
    resetGame(answerList, failList);
    startGame();
    checkGameState(gameState);
  } else if (event.keyCode === 13 && gameState === 3) {
    resetGame(answerList, failList);
    startGame();
    checkGameState(gameState);
  }
});

// Stänga modal med musklick
window.onclick = function (event) {
  if (event.target == sameLetterModal) {
    closeSameLetterModal();
  }
};

checkGameState(gameState);

function startGame() {
  gameState = 1;
  key = getRandomWord(gameDifficulty);
  setAnswer(key, answerList);
  hideHangman();
}

function hideHangman() {
  hangman.forEach(function (item) {
    item.style.display = "none";
  });
}

function revealHangmanPart(wrongGuessCounter) {
  let hangmanPart = hangman[wrongGuessCounter];
  hangmanPart.style.display = "block";
}

function resetGame(answerList, failList) {
  while (failList.firstChild) {
    failList.removeChild(failList.firstChild);
  }

  while (answerList.firstChild) {
    answerList.removeChild(answerList.firstChild);
  }

  wrongGuessCounter = -1;
  wrongCharacters = [];
  answer = "";

  updateGuesses(wrongGuessCounter, guessCountList);
}

function printFailList(wrongCharacters, failList) {
  wrongCharacters.push(keyInput);
  let li = document.createElement("li");
  li.innerHTML = keyInput;
  failList.appendChild(li);
}

function getRandomWord(gameDifficulty) {
  let key;

  if (gameDifficulty === "standard") {
    key = randomWords[Math.floor(Math.random() * randomWords.length)];
  } else if (gameDifficulty === "easy") {
    key = easyWords[Math.floor(Math.random() * easyWords.length)];
  } else if (gameDifficulty === "medium") {
    key = mediumWords[Math.floor(Math.random() * mediumWords.length)];
  } else if (gameDifficulty === "hard") {
    key = hardWords[Math.floor(Math.random() * hardWords.length)];
  }
  return key;
}

function storeGuess() {
  keyInput = document.getElementById("guessInput").value.toLowerCase();
  document.getElementById("guessInput").value = "";
  continueButton.disabled = "true";
  checkGuess(keyInput);
}

function setAnswer(key, answerList) {
  for (i = 0; i < key.length; i++) {
    answer += "_";
  }
  answerList.innerHTML = answer;
}

function updateAnswer(answerList) {
  answerList.innerHTML = answer;
}

function updateGuesses(wrongGuessCounter, guessCountList) {
  guessCount = guessCountList.innerHTML;
  guessCount = guessCount.split("");
  guessCount[0] = wrongGuessCounter + 1;
  guessCount = guessCount.join("");
  guessCountList.innerHTML = guessCount;
}

function checkGuess(keyInput) {
  // Kontrollerar om man redan gissat på bokstav
  if (wrongCharacters.includes(keyInput) || answer.includes(keyInput)) {
    openSameLetterModal();
  }
  // Om det är första gången man gissat på bokstaven
  else if (key.includes(keyInput)) {
    for (i = 0; i < key.length; i++) {
      if (key.charAt(i) == keyInput) {
        keyIndex = i;
        answer = answer.split("");
        answer[keyIndex] = keyInput;
        answer = answer.join("");
      }
    }
    updateAnswer(answerList);
    // Kontrollerar om spelaren vunnit
    if (key === answer) {
      gameState = 2;
      checkGameState(gameState);
    }
  }
  // Om det är en felgissning
  else {
    wrongGuessCounter++;
    revealHangmanPart(wrongGuessCounter);
    // Kontrollerar om spelaren förlorat
    if (wrongGuessCounter < 5) {
      printFailList(wrongCharacters, failList);
      updateGuesses(wrongGuessCounter, guessCountList);
    } else {
      updateGuesses(wrongGuessCounter, guessCountList);
      printFailList(wrongCharacters, failList);
      gameState = 3;
      checkGameState(gameState);
    }
  }
}

function openSameLetterModal() {
  sameLetterModal.style.display = "grid";
  sameLetterModal.style.opacity = "1";
  sameLetterModal.style.zIndex = "1";
  mainContent.style.filter = "blur(2px)";
  guessInput.disabled = "true";
  guessButton.disabled = "true";

  setTimeout(function () {
    continueButton.removeAttribute("disabled");
  }, 100);
}

function closeSameLetterModal() {
  sameLetterModal.style.display = "none";
  mainContent.style.filter = "none";
  guessButton.removeAttribute("disabled");
  guessInput.removeAttribute("disabled");
  guessInput.focus();
}

// Funktionen plockar fram och döljer content beroende på vilket stadie spelet är i
function checkGameState(gameState) {
  if (gameState === 0) {
    startModal.style.display = "grid";
    mainContent.style.display = "none";
    winModal.style.display = "none";
    loseModal.style.display = "none";
    sameLetterModal.style.display = "none";
    hamburgerIcon.style.display = "none";
  } else if (gameState === 1) {
    startModal.style.display = "none";
    mainContent.style.display = "grid";
    winModal.style.display = "none";
    loseModal.style.display = "none";
    sameLetterModal.style.display = "none";
    hamburgerIcon.style.display = "grid";
    guessInput.focus();
  } else if (gameState === 2) {
    startModal.style.display = "none";
    mainContent.style.display = "none";
    winModal.style.display = "grid";
    loseModal.style.display = "none";
    sameLetterModal.style.display = "none";
    hamburgerIcon.style.display = "none";
    hamburgerMenu.style.display = "none";
    for (let i = 0; i < correctWord.length; i++) {
      correctWord[i].innerHTML = "The correct word was: " + key;
    }
  } else if (gameState === 3) {
    startModal.style.display = "none";
    mainContent.style.display = "none";
    winModal.style.display = "none";
    loseModal.style.display = "grid";
    sameLetterModal.style.display = "none";
    hamburgerIcon.style.display = "none";
    hamburgerMenu.style.display = "none";
    for (let i = 0; i < correctWord.length; i++) {
      correctWord[i].innerHTML = "The correct word was: " + key;
    }
  }
}

function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}








