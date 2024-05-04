

const userInput = document.getElementById('fortnite')
const peelyFlavorText = document.getElementById('peelyflavortext')
const peelyPic = document.getElementById('peelypic')
const buttonClick = document.getElementById('peelybutton')

const inspiring_phrases = [
    "stop trying", "i didn't lie", "you're wasting your time"
]


const peelyPics = [
    "https://static.wikia.nocookie.net/fortnite/images/5/54/Potassius_Peels_%28Featured%29_-_Outfit_-_Fortnite.png/revision/latest?cb=20210317132756",
    "https://static.wikia.nocookie.net/fortnite/images/a/a4/Peelosopher_Bananocrates_%28Featured%29_-_Outfit_-_Fortnite.png/revision/latest?cb=20240425035051",
    "https://static.wikia.nocookie.net/fortnite/images/e/e2/Polar_Peely_%28Featured%29_-_Outfit_-_Fortnite.png/revision/latest?cb=20211216225023"

]

userInput.addEventListener('keydown', function(event){
    if(event.key === "Enter"){
        userInput.value = ""
        userInput.placeholder = inspiring_phrases[Math.floor(Math.random() * 3)]
    }
})

buttonClick.addEventListener('click', function(){
    changePeely()
})

function changePeely(){
    let rand = Math.floor(Math.random() * 3)
    let beforePeely = peelyPic.src
    peelyPic.src = peelyPics[rand]
    if(beforePeely == peelyPics[rand]){
        changePeely()
    }
}
