let btn = document.getElementById('btn');
let lyd = document.getElementById('lyd');
let output = document.getElementById('output');
let quotes = [
  "Ved å legge lokk på grytene under matlagingen bruker du bare en fjerdedel så mye strøm til å holde 1,5 liter vann kokende som du gjør med lokket av.",

  "Et kjøleskap skal ligge mellom 4-5 grader. Senker du temperaturen i kjøleskapet med bare én grad så økes strømforbruket med 5%. I året krever kuldeproduksjon for en familie energi tilsvarende 80 liter bensin. Skal du bruke frossenvarer anbefaler Schmidt å tine dem i kjøleskapet. Det kan senke strømforbruket med inntil én time strømforbruk per kilo produkt som tines, fordi kjøleskapet kjøles ned av frossenvaren. Unngå frossenvarer!",
  
  "Ved å sortere avfall sikrer du at det blir riktig håndtert, samtidig som mindre havner i restavfallet.", 

  "Husholdningsapparater har energimerking fra A til G, og et apparat med energimerke A krever betydelig mindre strøm enn et tilsvarende apparat med energimerke G. Så prøv å velge så nærme A som mulig!",
  
  "Bruk sparepærer eller LED-pærer. Slike lyspærer har over åtte ganger lenger levetid enn glødepærer, og med sparepærer kan du kutte strømforbruket med opp mot 75%.",
  
  "Drikk vann fra springen. Bare ca 17% av plasten fra blant annet vannflasker blir gjenbrukt, og ved å drikke springvann vil du unngå unødvendig plastavfall.",
  
  "Gjenbruk eller kjøp brukt. Mange gjenstander kan repareres fremfor å byttes ut, og du vil dessuten spare både miljøet og lommeboka ved å kjøpe brukt.",
  "Velg leverandør med omhu. Still krav til leverandøren med tanke på miljøvennlig produksjon og støtt produsenter som tar miljøhensyn.",
  
  "Kjøp dyrt. Pris og kvalitet henger ofte sammen, og varer av god kvalitet holder lenger.",
  
  "Spar varmtvann. Når du dusjer bruker du omtrent ti liter vann i minuttet. Det er derfor gunstig å prøve å dusje kortere.",
  
  "Tilbered mat uten stekeovn. Ved å bruke gryter, panner eller mikrobølgeovn fremfor stekeovnen for å tilberede eller varme opp mat vil du spare unødvendig strøm.",
  "Skru ned temperaturen. Å ta klesvasken med litt lavere temperatur er både mer skånsomt for klærne og bedre for miljøet. Det er også mer miljøvennlig å lufttørke klesvasken.",
  
  "Skru av elektriske apparater. Ved å skru av elektriske apparater når de ikke er i bruk, som for eksempel lamper, vil du unngå å bruke strøm unødvendig.",
  
  "Bytt ut kluten. Velg kluter som ikke inneholder plastikk. Schmidt påpeker at slike handlinger krever lite av den enkelte forbruker, men kan være et bidrag i det store bildet.",
 ]

 // simpel funksjon når du tykker Quote knappen der den tar en random quote ved hjelp fra math.random
btn.addEventListener('click', function(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length )]
  output.innerHTML = randomQuote;
})


lyd.addEventListener('click', ()=>{
  // SpeechSynthesisUtterance er en Web Api taler som representerer snakke requester. 
  let utterance = new SpeechSynthesisUtterance(`${output.innerHTML}`);
    utterance.lang = "nb-NO";
  speechSynthesis.speak(utterance); // tekst/snakke kilden til speechSynthesis er utterance, som der igjen henter quotsa fra listen. 
})