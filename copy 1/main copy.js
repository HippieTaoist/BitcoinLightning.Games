let bitcoinGameList = [];

async function getData() {
    const rawData = await fetch('BitcoinLightningGames.json');
    const data = await rawData.json();
    data.forEach(item => {
        if (item.name !== '') {
            bitcoinGameList.push(item)
        }
    })
    console.log('bitcoinGameList', bitcoinGameList)

}

let gamesMenu = document.getElementById('games-menu')
let bSportsMenu = document.getElementById('bsports-menu')

let gamesMenuNav = document.getElementById('games-menu-choices');
let bSportMenuNav = document.getElementById('bsports-menu-choices');

let menuChoices = document.getElementById('menu-choices');
let menuItem = document.getElementById('menu-item');

let itemDisplayContainer = document.getElementById('item-display-container');



function navMenuMaker() {
    gamesMenu.addEventListener('click', function (e) {
        toggleItems('active', gamesMenuNav, bSportMenuNav)
        toggleItems('clicked', gamesMenu, bSportsMenu)

    })
    bSportsMenu.addEventListener('click', function (e) {
        toggleItems('active', bSportMenuNav, gamesMenuNav)
        toggleItems('clicked', bSportsMenu, gamesMenu)
    })
    bitcoinGameList.forEach(item => {
        let div = document.createElement('div');
        div.className = 'menu-item';
        div.innerText = item.name

        if (item.type === 'game') {

            gamesMenuNav.append(div);
        }
        if (item.type === 'b-sport') {

            bSportMenuNav.append(div);
        }

        div.addEventListener("mouseenter", function (e) {
            console.log('mouseenter');
            div.style.backgroundColor = '#f7931a';
            itemDisplayContainer.style.backgroundImage = `url('${item.image}')`;
            if (item.image == undefined && item.name === "Turbo '85") {
                console.log('turbo');
                itemDisplayContainer.style.backgroundImage = `url('${".img/Games/THNDR%20Games/Turbo%20'84/Turbo%20'84%20-%20Logo%20-%20Google%20Play.png"})`
            }
            if (item.image == undefined) {
                itemDisplayContainer.style.backgroundImage = `url(${'./BLG-Discord.jpg'})`
            }
        })
        div.addEventListener("mouseout", function (e) {
            console.log('mouseout');
            div.style.backgroundColor = 'black';
            itemDisplayContainer.style.backgroundImage = `url(${'./BLG-Discord.jpg'})`
        })


        div.addEventListener('click', function (e) {
            buildGameDisplay(item);

            console.log(item.name, ' has been clicked!')
        });

    })
}

// menuItem.addEventListener('hover', function (e) {
//     console.log('line 64 - e', e);
// })

function toggleItems(toggledClass, active, inactive) {
    active.classList.add(toggledClass)
    inactive.classList.remove(toggledClass)

}

window.addEventListener('load', function () {
    getData()
        .then(bitcoinLightningGames => navMenuMaker())



})

let gameDisplay = document.getElementById('game-display')

function buildGameDisplay(game) {
    let gameName = game.name;
    let gameDescription = game.description;
    let appleURL = game.appleStoreURL;
    let googleURL = game.googleStoreURL;
    let linuxURL = game.linuxURL;
    let windowsURL = game.windowsURL;
    let macURL = game.macOSURL;
    let browserURL = game.browserPlay;
    let discord = game.discordLink;
    let sphinx = game.sphinxChat;
    let telegram = game.telegramLink;
    let developer = game.developer;
    let feedback = game.feedbackLink;
    let style = game.style;
    let type = game.type;

    let gameImage = game.image;

    let gameNameDiv = document.createElement('div');
    gameNameDiv.className = 'game-div'
    gameNameDiv.id = 'game-name-div'

    let gameDescriptionDiv = document.createElement('div');
    gameDescriptionDiv.className = 'game-div';
    gameDescriptionDiv.id = 'game-description-div'

    let appleURLDiv = document.createElement('div');
    appleURLDiv.className = 'game-div'
    appleURLDiv.id = 'apple-url-dv'

    let googleURLDiv = document.createElement('div');
    googleURLDiv.className = 'game-div';
    googleURLDiv.id = 'google-url-div';

    let linuxURLDiv = document.createElement('div');
    linuxURLDiv.className = 'game-div';
    linuxURLDiv.id = 'linux-url-div';

    let macURLDiv = document.createElement('div');
    macURLDiv.className = 'game-div';
    macURLDiv.id = 'mac-url-div';

    let browserURLDiv = document.createElement('div');
    browserURLDiv.className = 'game-div';
    browserURLDiv.id = 'browser-url-div';

    let discordDiv = document.createElement('div')
    discordDiv.className = 'game-div'
    discordDiv.id = 'discord-div';

    let sphinxDiv = document.createElement('div')
    sphinxDiv.className = 'game-div'
    sphinxDiv.id = 'sphinx-div';

    let telegramDiv = document.createElement('div');
    telegramDiv.className = 'game-div';
    telegramDiv.id = 'telegram-div';

    let developerDiv = document.createElement('div');
    developerDiv.className = 'game-div'
    developerDiv.id = 'developer=div'

    let feedbackLink = document.createElement('div');
    feedbackLink.className = 'game-div';
    feedbackLink.id = 'feedback-div';

    console.log('gamename', gameName);


}