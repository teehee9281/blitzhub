let panicKey;
let panicKeyShort;
let panicLink;

// Function to save panic key and link to local storage
function saveKeyLink() {
    panicKey = document.getElementById("keyInput").value;
    panicLink = document.getElementById("linkChoice").value;
    panicKeyShort = panicKey.charAt(0);

    // Ensure the link starts with 'https://'
    if (!panicLink.startsWith("https://")) {
        panicLink = "https://" + panicLink; 
    }

    var panicSave = {
        panicKey: panicKey,
        panicLink: panicLink,
        panicKeyShort: panicKeyShort
    };

    // Save to local storage
    localStorage.setItem("panicSave", JSON.stringify(panicSave));

    // Log for debugging
    console.log("Saved panic key:", panicKey);
    console.log("Saved panic link:", panicLink);
    location.reload();
}

// Function to load panic key and link from local storage
function loadPanic() {
    // Log current local storage contents for debugging
    console.log("Current local storage:", localStorage);
    
    var savedPanic = JSON.parse(localStorage.getItem("panicSave"));
    if (savedPanic) {
        panicKey = savedPanic.panicKey || ''; // Default to an empty string if undefined
        panicLink = savedPanic.panicLink || ''; // Default to an empty string if undefined
        panicKeyShort = savedPanic.panicKeyShort || ''; // Default to an empty string if undefined

        // Log loaded values
        console.log("Loaded panic key:", panicKey);
        console.log("Loaded panic link:", panicLink);
        console.log("Loaded panic key short:", panicKeyShort);

        // If on settings page, set input fields
        if (document.getElementById("keyInput")) {
            document.getElementById("keyInput").value = panicKey; // Set input field
        }
        if (document.getElementById("linkChoice")) {
            document.getElementById("linkChoice").value = panicLink; // Set input field
        }
    } else {
        console.warn("No saved panic data found.");
    }
}

// Function to handle key presses
function handleKeydown(event) {
    console.log("Key pressed:", event.key);
    if (event.key === panicKeyShort) {
        if (panicLink) {
            console.log("Redirecting to:", panicLink); 
            window.location.href = panicLink; // Redirect to the panic link
        } else {
            console.error("Panic link is not defined."); 
        }
    }
}

// Cloak functions remain the same...

function changeCloak(selectedValue) {
    var favicon = document.getElementById("favicon") || createFaviconElement();
    var title = document.getElementsByTagName("title")[0];

    switch (selectedValue) {
        case "Google-Docs":
            favicon.href = "CloakIMGs/docs.ico";
            title.innerText = "Google Docs";
            break;
        case "Google-Classroom":
            favicon.href = "CloakIMGs/Classroom.png";
            title.innerText = "Home";
            break;
        case "Clever":
            favicon.href = "CloakIMGs/clever.ico";
            title.innerText = "Clever | Portal";
            break;
        case "Powerschool":
            favicon.href = "CloakIMGs/Powerschool.ico";
            title.innerText = "Weekly Schedule";
            break;
        case "Powerschool-2":
            favicon.href = "CloakIMGs/Powerschool.ico";
            title.innerText = "Grades and Attendance";
            break;
        case "Powerschool-3":
            favicon.href = "CloakIMGs/Powerschool.ico";
            title.innerText = "Meeting Attendance";
            break;
    }
}

function createFaviconElement() {
    var link = document.createElement('link');
    link.id = "favicon";
    link.rel = 'icon';
    document.head.appendChild(link);
    return link;
}

function saveCloak() {
    var dropdown = document.getElementById("dropdown");
    var selectedValue = dropdown.options[dropdown.selectedIndex].value;

    var CloakSave = {
        selectedValue: selectedValue,
    };

    localStorage.setItem("cloakSave", JSON.stringify(CloakSave));
    location.reload();
}

function loadCloak() {
    var savedCloak = JSON.parse(localStorage.getItem("cloakSave"));

    if (savedCloak && savedCloak.selectedValue) {
        changeCloak(savedCloak.selectedValue);
        
        let dropdown = document.getElementById("dropdown");
        if (dropdown) {
            for (var i = 0; i < dropdown.options.length; i++) {
                if (dropdown.options[i].value === savedCloak.selectedValue) {
                    dropdown.selectedIndex = i;
                    break;
                }
            }
        }
    }
}

// Load data on window load
window.onload = function() {
    loadPanic();
    loadCloak();
    
    // Always add the keydown event listener for panic functionality
    document.addEventListener('keydown', handleKeydown);
};




function openWindow(url, title, favicon) {
  var win = window.open();

  // Check if the URL is about:blank
  if (url.toLowerCase() === 'about:blank') {
    win.document.title = title;
    var link = win.document.createElement('link');
    link.rel = 'icon';
    link.href = favicon;
    win.document.head.appendChild(link);
    return;
  }

  var iframe = win.document.createElement('iframe');
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  win.document.body.style.margin = '0';
  iframe.src = url;
  win.document.body.appendChild(iframe);
  win.document.title = title;

  // Set favicon for the opened window
  var link = win.document.createElement('link');
  link.rel = 'icon';
  link.href = favicon;
  win.document.head.appendChild(link);
}


function Suggestion() {
  window.open("https://forms.gle/ds4gGs5zM2ZTB3Wq8", "_blank");
}

function openFnaf1() {
  openWindow("https://ubg98.github.io/FNAF/", document.title, favicon.href);
}

function openFnaf2() {
  openWindow("https://ubg98.github.io/FNAF2/", document.title, favicon.href);
}

function openFnaf3() {
  openWindow("https://ubg98.github.io/FNAF3/", document.title, favicon.href);
}

function openFnaf4() {
  openWindow("https://ubg98.github.io/FNAF4/", document.title, favicon.href);
}

function openSister() {
  openWindow("https://run3.io/popgame/fnaf/fnafsl.html", document.title, favicon.href);
}

function openMonkeyMart() {
  openWindow("https://monkey-mart.io/iframe/index.html", document.title, favicon.href);
}

function openCookie() {
  openWindow("https://orteil.dashnet.org/cookieclicker/", document.title, favicon.href);
}

function openRetroBowl() {
  openWindow("https://jakwhegf.github.io/uab123/", document.title, favicon.href);
}

function openSuperHot() {
  alert("When clicked, click the two arrows going away from eachother to play fullscreen.")
  openWindow("https://f3.silvergames.com/html5/super-hot/", document.title, favicon.href); 
 
}

  function openSubwaySurfers() {
  openWindow("https://subwaysurfers.app/iframe/", document.title, favicon.href);    }

function openSlope() {
  openWindow("https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@843c1a10f4bf78019b513ea7a8a8c3146f3dfa59/2slope.xml&container=ig", document.title, favicon.href); }



function openBacon() {
  openWindow("https://easytutoring.app/gamefiles/baconmaydie/", document.title, favicon.href);
}


function openMotoX3M() {
  openWindow("https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://486017395-735910036185936427.preview.editmysite.com/uploads/b/139890129-378637188943279878/files/mx3m3.xml&container=ig", document.title, favicon.href);
}

function openCluster() {
  openWindow("https://clusterrush.io/game/cluster-rush/", document.title, favicon.href);
}
function openFnW() {
  openWindow("https://easytutoring.app/gamefiles/fireboywatergirl/", document.title, favicon.href);
}

function LOL() {
  openWindow("https://purepro4561.github.io/1v1-Lol/#", document.title, favicon.href);
}

function FNF7() {
  openWindow("https://vackyton.github.io/snipersite/week7/index.html", document.title, favicon.href);
}

function HW() {
  openWindow("https://hwunblocked.com/", document.title, favicon.href);
}

function openVenge() {
  openWindow("https://venge.io/", document.title, favicon.href);
}

function openIdle() {
  openWindow("https://idle-breakout.github.io/games/idle-breakout/index.html", document.title, favicon.href);
}

function openStickRope() {
  openWindow("https://stickman.pro/iframe/index.html", document.title, favicon.href);
}

function openEagler() {
    openWindow('https://eaglercraft.q13x.com/', document.title, favicon.href);
}

function openAxis() {
    openWindow('https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/1ee20621-61bc-4ec8-a8ec-5e839c2e6edc%2Faxis-football-league.xml&container=ig', document.title, favicon.href);
}

function  openBBL2020() {
    openWindow('https://google-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/bobydob/JSEngine@5ebf5ebca88beaad3f3e9dcf461e25778c2a1a56/build/bl20/bl2020.xml&container=ig',  document.title, favicon.href);
}

function openTag() {
    openWindow('https://tag-2.github.io/a77/tag-2/', document.title, favicon.href);
}

function openDrift() {
  openWindow('https://webglmath.github.io/drift-hunters/', document.title, favicon.href);
}
function openRoof() {
  openWindow('https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/version@f8de953e5d955baef80e3994a1105d74ad76315b/Rooftop-Snipers.xml&container=ig', document.title, favicon.href);
}
function openBasket() {
  openWindow('https://basketrandom.io/game/basket-random/', document.title, favicon.href);
}

function openNeighbor() {
  alert("When you click 'PLAY', you will be redirected to another website. Exit out of that one and go back to the game tab.")
  openWindow('https://thatsnotmyneighbor.org/scary-neighbor-online.embed', document.title, favicon.href);
}

function openHangman() {
  openWindow('https://html5.gamedistribution.com/rvvASMiM/c38c6e448b33474cae14cccc3ec00702/index.html?utm_source=minicrossword.io&utm_medium=hangman&utm_campaign=block-and-redirect&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL2h0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tL2MzOGM2ZTQ0OGIzMzQ3NGNhZTE0Y2NjYzNlYzAwNzAyLz91dG1fc291cmNlPW1pbmljcm9zc3dvcmQuaW8mdXRtX21lZGl1bT1oYW5nbWFuJnV0bV9jYW1wYWlnbj1ibG9jay1hbmQtcmVkaXJlY3QiLCJwYXJlbnREb21haW4iOiJodG1sNS5nYW1lZGlzdHJpYnV0aW9uLmNvbSIsInRvcERvbWFpbiI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwiaGFzSW1wcmVzc2lvbiI6dHJ1ZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9', document.title, favicon.href);
}

function openOnlyUp() {
  openWindow('https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/wergboy/Meteor@7e77300e074d9eb77fa119d640baa1fe1a318bfb/examples/react-in-blaze/lib/oup.xml&container=ig', document.title, favicon.href);
}

function openMeltDown() {
  alert("Close the right tab popup, it's a scam site that was made in the game so I can't remove it, just click the arrow.")
  openWindow('https://geometrydashmeltdown.com/geometry-dash-meltdown', document.title, favicon.href);
}

function openBlockSnake() {
  openWindow('https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/sk1bx/element@d16a581fca7911cde19e71e5cc182ddd255e6295/bs.xml&container=ig', document.title, favicon.href);
}

function openFNI() {
  openWindow('https://html-classic.itch.zone/html/1175401/index.html?v=1574336293', document.title, favicon.href);
}

function openPoly() {
  alert('When opened, scroll down until you see, "Start PolyBlicy"');
  openWindow('https://www.gaming-style.com/POLYBLICY/index.php?page=game', document.title, favicon.href);
}

function openSkib() {
  openWindow('https://slope-game.github.io/agent-walker-vs-skibidi-toilets/', document.title, favicon.href);
}

function openGranny() {
  alert('When loaded, click the british flag to turn game to english');
  openWindow('https://gnhustgames.org/granny-source/', document.title, favicon.href);
}

function openVolley() {
  openWindow('https://bitlifeonline.github.io/volleyball-challenge/', document.title, favicon.href);
}

function openPool() {
  openWindow('https://bloobio-eightballpool.coolmathgames.com/8ballpool', document.title, favicon.href);
}

function openHole() {
  openWindow('https://images-opensocial.googleusercontent.com/gadgets/ifr?url=https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@93a27eabbbe5eb626af5b9b7dd0926ac16810a41/Code/Java/hole.xml&container=ig', document.title, favicon.href);
}

function openForces() {
  alert("It takes a bit to load, and it's a bit laggy at the start, but this is a very  good game so I'd say it's worth the wait.");
  openWindow('https://html5.gamedistribution.com/rvvASMiM/1a89ecde7c9743899852c1f532cb7972/index.html?timestamp=-62135596800&countryCode=en&siteid=79&channelid=2&siteLocale=en&locale=en&gd_sdk_referrer_url=https%3A%2F%2Fwww.agame.com%2Fgame%2Farmedforcesio&gd_zone_config=eyJwYXJlbnRVUkwiOiJodHRwczovL3d3dy5hZ2FtZS5jb20vZ2FtZS9hcm1lZGZvcmNlc2lvIiwicGFyZW50RG9tYWluIjoiYWdhbWUuY29tIiwidG9wRG9tYWluIjoiYWdhbWUuY29tIiwiaGFzSW1wcmVzc2lvbiI6dHJ1ZSwibG9hZGVyRW5hYmxlZCI6dHJ1ZSwiaG9zdCI6Imh0bWw1LmdhbWVkaXN0cmlidXRpb24uY29tIiwidmVyc2lvbiI6IjEuNS4xNyJ9', document.title, favicon.href);
}

function openFishing() {
  alert("The progress doesn't save when closed, so don't close this tab");
  openWindow('https://webglmath.github.io/tiny-fishing/', document.title, favicon.href);
}

function openFour() {
 openWindow('https://bloobio-fourinarow.coolmathgames.com/fourinarow/2290', document.title, favicon.href);
}
function openBattle() {
 openWindow('https://bloob.io/battleship/', document.title, favicon.href);
}
function openFPSStrike() {
  openWindow('https://unblocked-games.s3.amazonaws.com/games/2024/unity2/fps-strike/index.html', document.title, favicon.href);
}

function openBasketballStars() {
  openWindow('https://games.builds.gamepix.com/35LBE/6684084835524280320/index.html?sid=e4515&lang=en&namespace=basketball-stars', document.title, favicon.href);
}

function openBitLife() {
  openWindow('https://ubg365.github.io/bitlife-life-simulator/play.html', document.title, favicon.href);
}

function openBottle() {
  openWindow('https://geometryspot.help/bottleflip3d.html', document.title, favicon.href);
}

function openTunnelRush() {
  openWindow('https://tunnelrushgame.io/game/tunnel-rush/', document.title, favicon.href);
}

function openSnowRider() {
  openWindow('https://itsvijaysingh.github.io/Snow-Rider3D/', document.title, favicon.href);
}

// Apps

function cymath() {
  openWindow('https://cymath.com', document.title, favicon.href); 
}
function Gemini() {
  openWindow('https://codeezyx.github.io/blitz.ai/', document.title, favicon.href);
}

function Mathway() {
  alert("On the screen keypad, click a number and click backspace on the keypad (the arrow facing left on the bottom right) to enable typing in your equation (May take multiple attempts)");
  openWindow('https://www.mathway.com/', document.title, favicon.href);
}


