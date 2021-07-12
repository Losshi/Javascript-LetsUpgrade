let cards = [
    {
        image:"https://i.pinimg.com/originals/2b/3f/dd/2b3fddc22215461c554db765c21ead5b.png",
        value:1,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/2b/3f/dd/2b3fddc22215461c554db765c21ead5b.png",
        value:1,
        status:"opened"
    },
    {
        image:"https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg",
        value:2,
        status:"opened"
    },
    {
        image:"https://www.loudegg.com/wp-content/uploads/2020/10/Mickey-Mouse.jpg",
        value:2,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/ee/a7/09/eea7098677da711dbecfcb25109072cd.jpg",
        value:3,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/ee/a7/09/eea7098677da711dbecfcb25109072cd.jpg",
        value:3,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/67/14/f0/6714f08005a1cb0ef2f6bb2eb177e1df.jpg",
        value:4,
        status:"opened"
    },
    {
        image:"https://i.pinimg.com/originals/67/14/f0/6714f08005a1cb0ef2f6bb2eb177e1df.jpg",
        value:4,
        status:"opened"
    },
    {
        image:"https://images.all-free-download.com/images/graphiclarge/tomjerry_6821722.jpg",
        value:5,
        status:"opened"
    },
    {
        image:"https://images.all-free-download.com/images/graphiclarge/tomjerry_6821722.jpg",
        value:5,
        status:"opened"
    },
    {
        image:"https://static.wikia.nocookie.net/ninjahattori/images/a/ac/Imagess.jpg/revision/latest?cb=20190717174758",
        value:6,
        status:"opened"
    },
    {
        image:"https://static.wikia.nocookie.net/ninjahattori/images/a/ac/Imagess.jpg/revision/latest?cb=20190717174758",
        value:6,
        status:"opened"
    },
    {
        image:"https://boxofficeindia.co.in/sites/default/files/uploads/2013/05/image008.jpg",
        value:7,
        status:"opened"
    },
    {
        image:"https://boxofficeindia.co.in/sites/default/files/uploads/2013/05/image008.jpg",
        value:7,
        status:"opened"
    },
    {
        image:"https://rukminim1.flixcart.com/image/416/416/juk4gi80/poster/v/e/b/medium-p40496-motu-patlu-cartoon-series-laminated-poster-high-original-imaffmtyafmgtmpk.jpeg?q=70",
        value:8,
        status:"opened"
    },
    {
        image:"https://rukminim1.flixcart.com/image/416/416/juk4gi80/poster/v/e/b/medium-p40496-motu-patlu-cartoon-series-laminated-poster-high-original-imaffmtyafmgtmpk.jpeg?q=70",
        value:8,
        status:"opened"
    },
    {
        image:"https://static.wikia.nocookie.net/jackiechanadventures/images/8/8a/Jade-02.gif/revision/latest?cb=20140420232312",
        value:9,
        status:"opened"
    },
    {
        image:"https://static.wikia.nocookie.net/jackiechanadventures/images/8/8a/Jade-02.gif/revision/latest?cb=20140420232312",
        value:9,
        status:"opened"
    }
]

let temp;
for(let i=cards.length-1;i>=0;i--) {
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

function displayCards(data) {
    let cardsString=""
    data.forEach(function(card,index) {
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')"> 
                <div class="cover ${card.status}" onclick="openCard(${index})"></div>
            </div>
        `;
    });
    document.getElementById('cards').innerHTML=cardsString;
}
alert(`WELCOME TO GUESS THE CARD GAME!
Look all the cards carefully. After 8 seconds, your game starts. Guess and try to match two correct cards. Don't worry, you have 3 lifelines too!`)
displayCards(cards);

let memoryTime = setTimeout(closeAll,8000);
function closeAll() {
    cards.forEach(function(card) {
        card.status="closed";
    });
    displayCards(cards);
}

let cardCount=1;
let i1=null,i2=null;
let val1=null,val2=null;
let score=0;
let lifeline=3;
function openCard(index) {
    cards[index].status="opened";
    if(cardCount===1) {
        i1=index;
        val1=cards[index].value;
        cardCount++;
    } else if(cardCount===2) {
        i2=index;
        val2=cards[index].value;
        if(val1===val2) {
            score++;
            document.getElementById("score").innerText=score;
            document.getElementById("guess").innerText="WOHOO! YOU ARE RIGHT!";
            val1=null;
            val2=null;
            cardCount=1;
        } else {
            lifeline--;
            document.getElementById("lifeline").innerText=lifeline;
            document.getElementById("guess").innerText="OH NO! YOU ARE WRONG!";
            cards[i1].status="closed";
            cards[i2].status="closed";
            val1=null;
            val2=null;
            cardCount=1;
            i1=null;
            i2=null;
        }
    }
    
    displayCards(cards);
    if(lifeline===0) {
        alert("GAME OVER!");
        location.reload();
    } 
    if(score===9) {
        alert("Hurray! You WON the game!");
        location.reload();
    }
}