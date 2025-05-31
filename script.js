//  Kopie 9 //


// outfitjes img// 
const outfits = [
    document.getElementById("hertje"),
    document.getElementById("kikker"),
    document.getElementById("konijntje"),
    document.getElementById("tovenaar")
  ]

// accessoires img //
  const accessoires = [
    document.getElementById("strikje"),
    document.getElementById("bloempje"),
    document.getElementById("cape"),
    document.getElementById("toverstaf")
  ]

// buddy img // 
const buddies = [
    document.getElementById("monstertje"),
    document.getElementById("eendje"),
    document.getElementById("uiltje"),
    document.getElementById("kikkertje")
  ]

  // hoedjes img //
  const hoedjes = [
    document.getElementById("halo"),
    document.getElementById("plantje"),
  ]

  // effecten img// 
  const effecten = [
    document.getElementById("hartjes"),
    document.getElementById("sterretjes"),
  ]

  
const outfitjesKnoppen = document.querySelectorAll("button[data-outfit]")
console.log(outfitjesKnoppen)
    
const accessoiresKnoppen = document.querySelectorAll("button[data-sieraden]");
console.log(accessoiresKnoppen)

const buddyKnoppen = document.querySelectorAll("button[data-diertje]");
console.log(buddyKnoppen)

const hoedjesKnoppen = document.querySelectorAll("button[data-hoed]")
console.log(hoedjesKnoppen)

const effectenKnoppen = document.querySelectorAll("button[data-effect]")
console.log (effectenKnoppen)

const doneKnop = document.querySelector(".finished button")
console.log(doneKnop)

const alleKnoppen = document.querySelectorAll("button")
 console.log(alleKnoppen)

// random nummer // 
const nummerKnop = document.getElementById("nummerKnop")
const label = document.getElementById("mijnLabel")

const min = 5
const max = 20

let randomNumber = 0

// if/ else // 

let huidigeOutfit = null
let huidigeAccessoire = null
let huidigeBuddy = null
let huidigeHoedjes = null
let huidigeEffecten = null


// confetti //

// voorgeprogameerde confetti link in html en onderstaande regel code komen van 
// https://www.npmjs.com/package/js-confetti //
const jsConfetti = new JSConfetti()

// random nummer // 
nummerKnop.onclick = function(){
randomNumber = Math.floor(Math.random() * (max - min)) + min
  console.log(randomNumber)
label.textContent = randomNumber
}

alleKnoppen.forEach(knop => knop.disabled = false)

function aantalClicks(){
  if (randomNumber > 0 ) {
    randomNumber = randomNumber -1 
    label.textContent = randomNumber
  } if (randomNumber === 0){
    alleKnoppen.forEach(knop => knop.disabled = true)
    jsConfetti.addConfetti({confettiColors:['#8ab24d','#bbe9ec','#bd7665','#efb7ce','#ff7a48']})
    }
  }

  // hodjes uitschakelen bij tovenaar //

function hoedjesUitBijTovenaar(outfitNaam) {
  if (outfitNaam === "tovenaar") {
    hoedjesKnoppen.forEach(knop => knop.disabled = true)
  } else {
    hoedjesKnoppen.forEach(knop => knop.disabled = false)
  }
}

 function verberg(element) {
   element.classList.add("verborgen") 
}

function toonOutfit(naam) {
     if(huidigeOutfit === naam){
        document.getElementById(naam).classList.add("verborgen")
        huidigeOutfit = null
        hoedjesUitBijTovenaar(null)
     } else { 
    outfits.forEach ((element) => verberg (element))
    const outfit = document.getElementById(naam)
     outfit.classList.remove("verborgen")  
     huidigeOutfit = naam
     hoedjesUitBijTovenaar(naam)
     }
}

function toonAccessoires(naam) {
       if(huidigeAccessoire === naam){
        document.getElementById(naam).classList.add("verborgen")
        huidigeAccessoire = null
     } else{ 
    accessoires.forEach ((element) => verberg (element))
    const sieraden = document.getElementById(naam)
    sieraden.classList.remove("verborgen")  
     huidigeAccessoire = naam
     }
    
}

function toonBuddy(naam) {
      if(huidigeBuddy === naam){
        document.getElementById(naam).classList.add("verborgen")
        huidigeBuddy = null
     } else{ 
    buddies.forEach ((element) => verberg (element))
    const buddy = document.getElementById(naam)
    buddy.classList.remove("verborgen")  
     huidigeBuddy = naam
     }
}

function toonHoed(naam) {
       if(huidigeHoedjes === naam){
        document.getElementById(naam).classList.add("verborgen")
        huidigeHoedjes = null
     } else{ 
    hoedjes.forEach ((element) => verberg (element))
    const outfit = document.getElementById(naam)
     outfit.classList.remove("verborgen")  
     huidigeHoedjes = naam
     }
}

function toonEffect(naam) {
      if(huidigeEffecten === naam){
        document.getElementById(naam).classList.add("verborgen")
        huidigeEffecten = null
      }else{
    effecten.forEach ((element) => verberg (element))
    const effects = document.getElementById(naam)
     effects.classList.remove("verborgen")  
     huidigeEffecten = naam
     }
}

outfitjesKnoppen.forEach(knop => {
  knop.addEventListener("click", () => {toonOutfit(knop.dataset.outfit)
 aantalClicks()})
});

accessoiresKnoppen.forEach(knop => {
  knop.addEventListener("click", () => {toonAccessoires(knop.dataset.sieraden)
 aantalClicks()})
})

buddyKnoppen.forEach(knop => {
  knop.addEventListener("click", () => {toonBuddy(knop.dataset.diertje)
 aantalClicks()})
})

hoedjesKnoppen.forEach(knop => {
  knop.addEventListener("click", () => {toonHoed(knop.dataset.hoed)
  aantalClicks()}) 
})

effectenKnoppen.forEach(knop => {
  knop.addEventListener("click", () =>{toonEffect(knop.dataset.effect) 
    aantalClicks()})
})

doneKnop.addEventListener("click", () =>{
  alleKnoppen.forEach(knop => knop.disabled = true)
   jsConfetti.addConfetti({confettiColors:['#8ab24d','#bbe9ec','#bd7665','#efb7ce','#ff7a48']})
})

