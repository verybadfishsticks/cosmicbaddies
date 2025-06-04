// games data
const games = [
  {
    id: "tombofthemask",
    title: "Tomb of The Mask",
    icon: "https://i.ibb.co/Kjr0yQ38/IMG-2306.png",
    url: "https://cyberschool-lol.w3spaces.com/g/tombofthemask.html",
  },
  {
    id: "slope",
    title: "Slope",
    icon: "https://cyberschool-lol.w3spaces.com/img/slope.jpg",
    url: "https://cyberschool-lol.w3spaces.com/g/slope.html",
  },
  {
    id: "pixelgenerator",
    title: "Pixel Art Generator",
    icon: "https://i.ibb.co/wkpLqQk/IMG-2305.jpg",
    url: "https://cyberschool-lol.w3spaces.com/g/pixelgenerator.html",
  },
  {
    id: "spacehuggers",
    title: "Space Huggers",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHVTd5cI_otdu1YGQTNnmfJiQxsh5O3xj0g&s",
    url: "https://cyberschool-lol.w3spaces.com/g/spacehuggers.html",
  },
  {
    id: "doodlejump",
    title: "Doodle Jump",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Doodle_Jump.png",
    url: "https://cyberschool-lol.w3spaces.com/g/doodlejump.html",
  },
  {
    id: "jetpackjoyride",
    title: "Jetpack Joyride",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWkPRYvmwFGf2ffkPm4cnpDDY9Z1NZ8Pnqg&s",
    url: "https://cyberschool-lol.w3spaces.com/g/jetpackjoyride.html",
  },
  {
    id: "basketballstars",
    title: "Basketball Stars",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIjj80hnReiehuqbcG8_n-G1zjhkhOJvpakIkSbWzV6pjFebYbneJGWpwYQ_-qhbo08c&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/basketballstars.html",
  },
  {
    id: "bitlife",
    title: "Bitlife",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ODZjp9Qf2WrRr0ashD-38bqUOUDdKd3zfg&s",
    url: "https://cyberschool-lol.w3spaces.com/g/g/bitlife/index.html",
  },
  {
    id: "timeshooter3",
    title: "Time Shooter 3",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ5vqhX5_rZjHys79P7IF5qcp8tzpvRCJ5EL-PrArP7TstwtAru0YDywfmAU0A3xE12A&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/timeshooter3.html",
  },
  {
    id: "stickmanhook",
    title: "Stickman Hook",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ThPGvGkZXiB7ONiZYbExYyGGv7_NoU3MIA&s",
    url: "https://cyberschool-lol.w3spaces.com/g/stickmanhook.html",
  },
  {
    id: "snowrider3d",
    title: "Snow Rider 3D",
    icon: "https://cyberschool-lol.w3spaces.com/img/snow-rider-3d.png",
    url: "https://cyberschool-lol.w3spaces.com/g/snowrider3d.html",
  },
  {
    id: "minecraft",
    title: "Minecraft",
    icon: "https://upload.wikimedia.org/wikipedia/en/b/b6/Minecraft_2024_cover_art.png",
    url: "https://storage.googleapis.com/padlet-uploads/1465166829/7b89eec39e04ca34145de5dcc72c4b77/boomboom__1___1_.html",
  },
  {
    id: "spacebarclicker",
    title: "Spacebar Clicker",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy-2kxVy2rlT5Ow3HgzA2TM1XG3LEjCW4jQ&s",
    url: "https://cyberschool-lol.w3spaces.com/g/spacebarclicker.html",
  },
  {
    id: "supermario64",
    title: "Super Mario 64",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1XTyGKCQEUorm0TzFvcAzJU-caZs6riE0XDt-PGVfTgMVQ8V0kqdF9fi6H-BpbWj3Ak&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/supermario64.html",
  },
  {
    id: "fnaf",
    title: "Five Nights at Freddy's",
    icon: "https://cyberschool-lol.w3spaces.com/img/FNAF.png",
    url: "https://cyberschool-lol.w3spaces.com/g/fnaf/index.html",
  },
  {
    id: "drivemad",
    title: "Drive Mad",
    icon: "https://cyberschool-lol.w3spaces.com/img/drivemad.png",
    url: "https://cyberschool-lol.w3spaces.com/g/g/drivemad/drivemad.html",
  },
  {
    id: "cookieclicker",
    title: "Cookie Clicker",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1twNQ3C1nk8xJ8Wj04IZ3ZijwEzSl7CqD85q-3-Kp5EATOkwGod3q_4TAtIyJiV1R0Zo&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/g/cookieclicker/index.html",
  },
  {
    id: "territorialio",
    title: "Territoral.io",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hB-jIYyXNCkhMFcwJ8Hl8hhBOyU-90cTn7lgnsrUW-w_-j71zfy8W0KG1CA8GpBQyos&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/territorial.io.html",
  },
  {
    id: "paperio2",
    title: "Paper IO 2",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHQ37qnCunUoRwCmbMQ4lrA7J0GLgwcJF1bEKbIm5ht9ZUTZMtHunwx8Z7sPZ_rzyhMk&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/paperio2/index.html",
  },
  {
    id: "driftboss",
    title: "Drift Boss",
    icon: "https://cyberschool-lol.w3spaces.com/img/driftboss.png",
    url: "https://cyberschool-lol.w3spaces.com/g/driftboss.html",
  },
  {
    id: "tetris",
    title: "Tetris",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeVktZO974LWS4OT8ol_qw354N4_v0r_iOg&s",
    url: "https://cyberschool-lol.w3spaces.com/g/tetris.html",
  },
  {
    id: "clusterrush",
    title: "Cluster Rush",
    icon: "https://cyberschool-lol.w3spaces.com/img/clusterrush.png",
    url: "https://cyberschool-lol.w3spaces.com/g/clusterrush.html",
  },
  {
    id: "gladihoppers",
    title: "Gladihoppers",
    icon: "https://cyberschool-lol.w3spaces.com/img/gladihoppers.png",
    url: "https://cyberschool-lol.w3spaces.com/g/gladihoppers.html",
  },
  {
    id: "parkoor",
    title: "Parkoor",
    icon: "https://cyberschool-lol.w3spaces.com/img/parkoor.png",
    url: "https://cyberschool-lol.w3spaces.com/g/parkoor.html",
  },
  {
    id: "flappy2048",
    title: "Flappy 2048",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8LNTs0AsLHpjdIA4lSOst9zVgCp_QpE1l4gUp7pwaiKz6VIGgDgDQnhPSVBsDqYVbf4&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/flappy2048.html",
  },
  {
    id: "baldisbasics",
    title: "Baldi's Basics",
    icon: "https://cyberschool-lol.w3spaces.com/img/baldisbasics.jpg",
    url: "https://cyberschool-lol.w3spaces.com/g/baldisbasics.html",
  },
  {
    id: "escapingtheprison",
    title: "Escaping The Prison",
    icon: "https://cyberschool-lol.w3spaces.com/img/escapingtheprison.png",
    url: "https://cyberschool-lol.w3spaces.com/g/escapingtheprison.html",
  },
  {
    id: "radiusraid",
    title: "Radius Raid",
    icon: "https://cyberschool-lol.w3spaces.com/img/radiusraid.png",
    url: "https://cyberschool-lol.w3spaces.com/g/radiusraid.html",
  },
  {
    id: "stealingthediamond",
    title: "Stealing The Diamond",
    icon: "https://cyberschool-lol.w3spaces.com/img/stealingthediamond.png",
    url: "https://cyberschool-lol.w3spaces.com/g/stealingthediamond.html",
  },
  {
    id: "breakingthebank",
    title: "Breaking The Bank",
    icon: "https://cyberschool-lol.w3spaces.com/img/breakingthebank.png",
    url: "https://cyberschool-lol.w3spaces.com/g/breakingthebank.html",
  },
  {
    id: "geometrydash",
    title: "Geometry Dash",
    icon: "https://cyberschool-lol.w3spaces.com/img/geometrydash.png",
    url: "https://cyberschool-lol.w3spaces.com/g/geometrydash.html",
  },
  {
    id: "ninjavsevilcorp",
    title: "Ninja vs EVILCORP",
    icon: "https://cyberschool-lol.w3spaces.com/img/ninjavsevilcorp.png",
    url: "https://cyberschool-lol.w3spaces.com/g/ninjavsevilcorp.html",
  },
  {
    id: "evilglitch",
    title: "Evil Glitch",
    icon: "https://cyberschool-lol.w3spaces.com/img/evilglitch.png",
    url: "https://cyberschool-lol.w3spaces.com/g/evilglitch.html",
  },
  {
    id: "celeste",
    title: "Celeste",
    icon: "https://cyberschool-lol.w3spaces.com/img/celeste.png",
    url: "https://cyberschool-lol.w3spaces.com/g/celeste.html",
  },
  {
    id: "flappybird",
    title: "Flappy Bird",
    icon: "https://cyberschool-lol.w3spaces.com/img/flappybird.png",
    url: "https://cyberschool-lol.w3spaces.com/g/flappybird.html",
  },
  {
    id: "theimpossiblequiz",
    title: "The Impossible Quiz",
    icon: "https://cyberschool-lol.w3spaces.com/img/theimpossiblequiz.png",
    url: "https://cyberschool-lol.w3spaces.com/g/theimpossiblequiz.html",
  },
  {
    id: "2048",
    title: "2048",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8LNTs0AsLHpjdIA4lSOst9zVgCp_QpE1l4gUp7pwaiKz6VIGgDgDQnhPSVBsDqYVbf4&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/2048.html",
  },
  {
    id: "holeio",
    title: "Hole IO",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFo6srxXVS73n8qnDidjQ7vLpG7Hl-LzUry2GTkvks0OdQnHZ0J-cLc24sfFq23ldqHus&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/holeio.html",
  },
  {
    id: "stack",
    title: "Stack",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiY00Lf-4FByPEO9-1G8KB3jBcXiuf1iO34j7LaKthxEd2KmggxTRNfx-qSVTioADFHI&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/stack.html",
  },
  {
    id: "emojilegends",
    title: "Emoji Legends",
    icon: "https://cyberschool-lol.w3spaces.com/img/emojilegends.png",
    url: "https://cyberschool-lol.w3spaces.com/g/emojilegends.html",
  },
  {
    id: "bloxorz",
    title: "Bloxorz",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLH0EmQGEXMsxUZtYqJN0WTaht7mOxTmtXdQ&s",
    url: "https://cyberschool-lol.w3spaces.com/g/bloxorz.html",
  },
  {
    id: "bloonstowerdefense1",
    title: "Bloons Tower Defense 1",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKkkTZGCCb9VJMjgtiqbtGQBXOo9BRQRN9ICeXedHrPMnbjMmGTEg9rmMJaNcV8mIwGE&usqp=CAU",
    url: "https://cyberschool-lol.w3spaces.com/g/bloonstowerdefense1.html",
  },
  {
    id: "bloonstowerdefense2",
    title: "Bloons Tower Defense 2",
    icon: "https://cyberschool-lol.w3spaces.com/img/bloonstowerdefense2.png",
    url: "https://cyberschool-lol.w3spaces.com/g/bloonstowerdefense2.html",
  },
  {
    id: "trexrunner",
    title: "T-Rex Runner",
    icon: "https://cyberschool-lol.w3spaces.com/img/trex.png",
    url: "https://cyberschool-lol.w3spaces.com/g/trex.html",
  },
  {
    id: "fluidsimulator",
    title: "Fluid Simulator",
    icon: "https://cyberschool-lol.w3spaces.com/img/fluidsimulator.png",
    url: "https://cyberschool-lol.w3spaces.com/g/fluidsimulator.html",
  },
  {
    id: "learntoflyidle",
    title: "Learn To Fly Idle",
    icon: "https://cyberschool-lol.w3spaces.com/img/learntoflyidle.png",
    url: "https://cyberschool-lol.w3spaces.com/g/learntoflyidle.html",
  },
  {
    id: "learntofly1",
    title: "Learn To Fly 1",
    icon: "https://cyberschool-lol.w3spaces.com/img/learntofly1.png",
    url: "https://cyberschool-lol.w3spaces.com/g/learntofly1.html",
  },
  {
    id: "learntofly2",
    title: "Learn To Fly 2",
    icon: "https://cyberschool-lol.w3spaces.com/img/learntofly2.png",
    url: "https://cyberschool-lol.w3spaces.com/g/learntofly2.html",
  },
  {
    id: "tubejumpers",
    title: "Tube Jumpers",
    icon: "https://cyberschool-lol.w3spaces.com/img/tubejumpers.png",
    url: "https://cyberschool-lol.w3spaces.com/g/tubejumpers.html",
  },
  {
    id: "rollingforests",
    title: "Rolling Forests",
    icon: "https://cyberschool-lol.w3spaces.com/img/rollingforests.png",
    url: "https://cyberschool-lol.w3spaces.com/g/rollingforests.html",
  },
  {
    id: "mountainmaze",
    title: "Mountain Maze",
    icon: "https://cyberschool-lol.w3spaces.com/img/mountainmaze.png",
    url: "https://cyberschool-lol.w3spaces.com/g/mountainmaze.html",
  },
  {
    id: "infiniteworlde",
    title: "Infinite Wordle",
    icon: "https://www.nytimes.com/games-assets/v2/assets/wordle/wordle_og_1200x630.png",
    url: "https://cyberschool-lol.w3spaces.com/g/infinitewordle.html",
  },
  {
    id: "itsrainingboxes",
    title: "Its Raining Boxes",
    icon: "https://cyberschool-lol.w3spaces.com/img/itsrainingboxes.png",
    url: "https://cyberschool-lol.w3spaces.com/g/itsrainingboxes.html",
  },
  {
    id: "justoneboss",
    title: "Just One Boss",
    icon: "https://cyberschool-lol.w3spaces.com/img/justoneboss.png",
    url: "https://cyberschool-lol.w3spaces.com/g/justoneboss.html",
  },
  {
    id: "edgenotfound",
    title: "Edge Not Found",
    icon: "https://cyberschool-lol.w3spaces.com/img/edgenotfound.png",
    url: "https://cyberschool-lol.w3spaces.com/g/edgenotfound.html",
  },
  {
    id: "raftwars",
    title: "Raft Wars",
    icon: "https://cyberschool-lol.w3spaces.com/img/raftwars.png",
    url: "https://cyberschool-lol.w3spaces.com/g/raftwars.html",
  },
  {
    id: "raftwars2",
    title: "Raft Wars 2",
    icon: "https://cyberschool-lol.w3spaces.com/img/raftwars2.png",
    url: "https://cyberschool-lol.w3spaces.com/g/raftwars2.html",
  },
  {
    id: "sandgame",
    title: "Sand Game",
    icon: "https://cyberschool-lol.w3spaces.com/img/sandgame.png",
    url: "https://cyberschool-lol.w3spaces.com/g/sandgame.html",
  },
  {
    id: "offlineparadise",
    title: "Offline Paradise",
    icon: "https://cyberschool-lol.w3spaces.com/img/offlineparadise.png",
    url: "https://cyberschool-lol.w3spaces.com/g/offlineparadise.html",
  },
  {
    id: "pacman",
    title: "Pac-Man",
    icon: "https://s3.amazonaws.com/gameopedia_covers/covers/831319/b216e14294b2e65f738fe483c3efafc0.png",
    url: "https://cyberschool-lol.w3spaces.com/g/pacman.html",
  },
  {
    id: "floodrunner4",
    title: "Flood Runner 4",
    icon: "https://cyberschool-lol.w3spaces.com/img/floodrunner4.png",
    url: "https://cyberschool-lol.w3spaces.com/g/floodrunner4.html",
  },
  {
    id: "worldshardestgame",
    title: "Worlds Hardest Game",
    icon: "https://cyberschool-lol.w3spaces.com/img/worldshardestgame.png",
    url: "https://cyberschool-lol.w3spaces.com/g/worldshardestgame.html",
  },
  {
    id: "breakout",
    title: "Breakout",
    icon: "https://cyberschool-lol.w3spaces.com/img/breakout.png",
    url: "https://cyberschool-lol.w3spaces.com/g/breakout.html",
  },
  {
    id: "snake",
    title: "Snake",
    icon: "https://cyberschool-lol.w3spaces.com/img/snake.png",
    url: "https://cyberschool-lol.w3spaces.com/g/snake.html",
  },
  {
    id: "hslcolorgame",
    title: "HSL Color Game",
    icon: "https://cyberschool-lol.w3spaces.com/img/hslcolorgame.png",
    url: "https://cyberschool-lol.w3spaces.com/g/hslcolorgame.html",
  },
  {
    id: "chess",
    title: "Chess",
    icon: "https://cyberschool-lol.w3spaces.com/g/chess/screenshot.jpg",
    url: "https://cyberschool-lol.w3spaces.com/g/chess/index.html",
  },
]

// bookmarklets data
const bookmarklets = [
  {
    title: "Unblocker",
    description: "Bypass website restrictions and access blocked content.",
    code: `javascript:(function(){var url=prompt('Enter URL to unblock:');if(url){window.open('https://www.croxyproxy.com/'+encodeURIComponent(url),'_blank');}})();`,
  },
  {
    title: "Tab Cloak",
    description: "Disguise your current tab as Google.",
    code: `javascript:(function(){document.title='Google';var link=document.querySelector("link[rel*='icon']")||document.createElement('link');link.type='image/x-icon';link.rel='shortcut icon';link.href='https://www.google.com/favicon.ico';document.getElementsByTagName('head')[0].appendChild(link);})();`,
  },
  {
    title: "History Flooder",
    description: "Flood browser history to hide your tracks.",
    code: `javascript:(function(){var sites=['https://www.google.com','https://www.youtube.com','https://www.wikipedia.org','https://www.github.com','https://www.stackoverflow.com'];for(var i=0;i<50;i++){history.pushState({},'',sites[Math.floor(Math.random()*sites.length)]);}alert('History flooded!');})();`,
  },
  {
    title: "Panic Button",
    description: "Quickly redirect to Google when you need to hide.",
    code: `javascript:(function(){window.location.href='https://www.google.com';})();`,
  },
  {
    title: "About Blank",
    description: "Open current page in about:blank.",
    code: `javascript:(function(){var win=window.open('about:blank','_blank');win.document.write('<iframe src="'+window.location.href+'" style="width:100%;height:100%;border:none;"></iframe>');})();`,
  },
  {
    title: "Inspect Element",
    description: "Enable inspect element on restricted sites.",
    code: `javascript:(function(){var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/ianramzy/decancer@main/index.js';document.head.appendChild(script);})();`,
  },
]

// typing animation phrases
const typingPhrases = [
  "your ultimate destination for unblocked gaming.",
  "endless entertainment at your fingertips.",
  "where school restrictions are nonexistent.",
  "play without limits, anytime, anywhere - no restrictions.",
  "the digital repository of gaming and entertainment.",
]

let currentPhraseIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingSpeed = 65

// favorites system
let favorites = JSON.parse(localStorage.getItem("cosmic_favorites")) || []

// current game state
let currentGame = null

// panic key functionality
let panicKey = localStorage.getItem("cosmic_panic_key") || "none"

// AI chatbot responses
const aiResponses = [
  "I'm here to help! What would you like to know?",
  "That's an interesting question! Let me think about that...",
  "I can help you with games, settings, or general questions about the site.",
  "Have you tried checking out our games section? There are tons of great options!",
  "If you're having trouble with anything, feel free to ask me for help.",
  "The tools section has some useful features like the web proxy.",
  "You can customize your experience in the settings section.",
  "Is there a specific game you're looking for? I can help you find it!",
  "The bookmarklets section has some handy browser tools.",
  "Feel free to explore all the different sections of the site!",
]

// initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createStars()
  renderGamesList()
  renderBookmarklets()
  setupSearch()
  setupNavbar()
  setupMobileMenu()
  setupSettings()
  loadSettings()
  startTypingAnimation()
  setupPanicKey()
  setupBackgroundEffects()
})

// discord function
function openDiscord() {
  window.open("https://discord.gg/wT7u27Wbm6", "_blank")
}

// typing animation
function startTypingAnimation() {
  const typingElement = document.getElementById("typingText")

  function type() {
    const currentPhrase = typingPhrases[currentPhraseIndex]

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1)
      currentCharIndex--
      typingSpeed = 50
    } else {
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1)
      currentCharIndex++
      typingSpeed = 65
    }

    typingElement.className = "hero-subtitle typing-cursor"

    if (!isDeleting && currentCharIndex === currentPhrase.length) {
      typingSpeed = 2000
      isDeleting = true
    } else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false
      currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length
      typingSpeed = 500
    }

    setTimeout(type, typingSpeed)
  }

  type()
}

// create floating stars
function createStars() {
  const starsContainer = document.getElementById("starsContainer")
  for (let i = 0; i < 150; i++) {
    const star = document.createElement("div")
    star.className = "star"
    star.style.width = `${Math.random() * 3 + 1}px`
    star.style.height = star.style.width
    star.style.left = `${Math.random() * 100}%`
    star.style.top = `${Math.random() * 100}%`
    star.style.animationDelay = `${Math.random() * 3}s`
    star.style.animationDuration = `${Math.random() * 3 + 2}s`
    starsContainer.appendChild(star)
  }
}

// show/hide sections
function showSection(sectionName) {
  const sections = document.querySelectorAll(".page-section")
  sections.forEach((section) => {
    section.classList.add("hidden")
  })

  const targetSection = document.getElementById(sectionName)
  if (targetSection) {
    targetSection.classList.remove("hidden")
    targetSection.classList.add("fade-in")

    // hide mobile menu
    document.getElementById("mobileMenu").classList.remove("show")
  }
}

// favorites functionality
function toggleFavorite(gameId, event) {
  event.stopPropagation()

  const index = favorites.indexOf(gameId)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(gameId)
  }

  localStorage.setItem("cosmic_favorites", JSON.stringify(favorites))
  renderGamesList()
}

// create game item element
function createGameItem(game) {
  const gameItem = document.createElement("div")
  gameItem.className = "game-item"
  gameItem.onclick = () => loadGame(game)

  const isFavorited = favorites.includes(game.id)

  gameItem.innerHTML = `
    <img src="${game.icon}" alt="${game.title}" class="game-icon" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiM5Q0EzQUYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIwLjNlbSI+R2FtZTwvdGV4dD4KPC9zdmc+'">
    <span class="game-title">${game.title}</span>
    <button class="favorite-btn ${isFavorited ? "favorited" : ""}" onclick="toggleFavorite('${game.id}', event)">
      <i class="ri-star-${isFavorited ? "fill" : "line"}"></i>
    </button>
  `

  return gameItem
}

// render games list
function renderGamesList() {
  const gamesList = document.getElementById("gamesList")
  gamesList.innerHTML = ""

  games.forEach((game) => {
    const gameItem = createGameItem(game)
    gamesList.appendChild(gameItem)
  })
}

// load game in iframe
function loadGame(game) {
  currentGame = game

  // update active state
  document.querySelectorAll(".game-item").forEach((item) => item.classList.remove("active"))
  event.currentTarget.classList.add("active")

  // update game title
  document.getElementById("currentGameTitle").textContent = game.title

  // create iframe
  const gameContainer = document.getElementById("gameContainer")
  gameContainer.innerHTML = `<iframe src="${game.url}" class="game-iframe" allowfullscreen></iframe>`

  // enable control buttons
  document.getElementById("newTabBtn").disabled = false
  document.getElementById("aboutBlankBtn").disabled = false
  document.getElementById("fullscreenBtn").disabled = false
}

// game control functions
function openGameNewTab() {
  if (currentGame) {
    window.open(currentGame.url, "_blank")
  }
}

function openGameAboutBlank() {
  if (currentGame) {
    const newWindow = window.open("about:blank", "_blank")
    newWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>about:blank</title>
        <style>
          body { margin: 0; padding: 0; overflow: hidden; background: #000; }
          iframe { width: 100vw; height: 100vh; border: none; }
        </style>
      </head>
      <body>
        <iframe src="${currentGame.url}" allowfullscreen></iframe>
      </body>
      </html>
    `)
  }
}

function toggleFullscreen() {
  const gameContainer = document.getElementById("gameContainer")

  if (!document.fullscreenElement) {
    gameContainer.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

// web proxy functionality
function openProxy() {
  const proxyUrl = document.getElementById("proxyUrl").value
  const proxyFrame = document.getElementById("proxyFrame")
  const proxyFrameContainer = document.getElementById("proxyFrameContainer")

  if (proxyUrl) {
    // Use a simple proxy service (note: this is basic and may not work for all sites)
    const proxiedUrl = `https://cors-anywhere.herokuapp.com/${proxyUrl}`
    proxyFrame.src = proxiedUrl
    proxyFrameContainer.classList.add("show")
  }
}

// AI chatbot functionality
function sendMessage() {
  const chatInput = document.getElementById("chatInput")
  const chatMessages = document.getElementById("chatMessages")
  const message = chatInput.value.trim()

  if (message) {
    // Add user message
    const userMessage = document.createElement("div")
    userMessage.className = "chat-message user-message"
    userMessage.innerHTML = `
      <div class="message-avatar">
        <i class="ri-user-line"></i>
      </div>
      <div class="message-content">${message}</div>
    `
    chatMessages.appendChild(userMessage)

    // Clear input
    chatInput.value = ""

    // Add bot response after a delay
    setTimeout(() => {
      const botMessage = document.createElement("div")
      botMessage.className = "chat-message bot-message"
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)]
      botMessage.innerHTML = `
        <div class="message-avatar">
          <i class="ri-robot-line"></i>
        </div>
        <div class="message-content">${randomResponse}</div>
      `
      chatMessages.appendChild(botMessage)
      chatMessages.scrollTop = chatMessages.scrollHeight
    }, 1000)

    chatMessages.scrollTop = chatMessages.scrollHeight
  }
}

function handleChatKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage()
  }
}

// render bookmarklets
function renderBookmarklets() {
  const bookmarkletsGrid = document.getElementById("bookmarkletsGrid")
  bookmarkletsGrid.innerHTML = ""

  bookmarklets.forEach((bookmarklet) => {
    const bookmarkletCard = document.createElement("div")
    bookmarkletCard.className = "bookmarklet-card"
    bookmarkletCard.innerHTML = `
      <h3 class="bookmarklet-title">${bookmarklet.title}</h3>
      <p class="bookmarklet-description">${bookmarklet.description}</p>
      <a href="${bookmarklet.code}" class="bookmarklet-link" onclick="return false;" draggable="true">
        drag to bookmarks
      </a>
    `
    bookmarkletsGrid.appendChild(bookmarkletCard)
  })
}

// setup search functionality
function setupSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchDropdown = document.getElementById("searchDropdown")
  const mobileSearchInput = document.getElementById("mobileSearchInput")
  const mobileSearchDropdown = document.getElementById("mobileSearchDropdown")

  function handleSearch(input, dropdown) {
    const query = input.value.toLowerCase().trim()

    if (query === "") {
      dropdown.classList.remove("show")
      return
    }

    const filteredGames = games.filter((game) => game.title.toLowerCase().includes(query))

    if (filteredGames.length > 0) {
      dropdown.innerHTML = ""
      filteredGames.slice(0, 8).forEach((game) => {
        const item = document.createElement("div")
        item.className = "search-item"
        item.innerHTML = `
          <img src="${game.icon}" alt="${game.title}" class="search-item-icon" onerror="this.style.display='none'">
          <span class="search-item-title">${game.title}</span>
        `
        item.addEventListener("click", () => {
          showSection("games")
          setTimeout(() => {
            loadGame(game)
            // Find and activate the game item
            const gameItems = document.querySelectorAll(".game-item")
            gameItems.forEach((item) => {
              if (item.querySelector(".game-title").textContent === game.title) {
                item.classList.add("active")
              } else {
                item.classList.remove("active")
              }
            })
          }, 100)
          input.value = ""
          dropdown.classList.remove("show")
        })
        dropdown.appendChild(item)
      })
      dropdown.classList.add("show")
    } else {
      dropdown.classList.remove("show")
    }
  }

  searchInput.addEventListener("input", () => handleSearch(searchInput, searchDropdown))
  mobileSearchInput.addEventListener("input", () => handleSearch(mobileSearchInput, mobileSearchDropdown))

  // hide dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
      searchDropdown.classList.remove("show")
    }
    if (!mobileSearchInput.contains(e.target) && !mobileSearchDropdown.contains(e.target)) {
      mobileSearchDropdown.classList.remove("show")
    }
  })
}

// setup navbar scroll effect
function setupNavbar() {
  const navbar = document.getElementById("navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })
}

// setup mobile menu
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show")
  })

  // close mobile menu when clicking nav links
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show")
    })
  })
}

// setup settings
function setupSettings() {
  const disguiseSelect = document.getElementById("disguiseSelect")
  const themeSelect = document.getElementById("themeSelect")
  const backgroundSelect = document.getElementById("backgroundSelect")
  const animationSpeed = document.getElementById("animationSpeed")
  const panicKeySelect = document.getElementById("panicKeySelect")

  disguiseSelect.addEventListener("change", function () {
    changeDisguise(this.value)
    localStorage.setItem("cosmic_disguise", this.value)
  })

  themeSelect.addEventListener("change", function () {
    changeTheme(this.value)
    localStorage.setItem("cosmic_theme", this.value)
  })

  backgroundSelect.addEventListener("change", function () {
    changeBackground(this.value)
    localStorage.setItem("cosmic_background", this.value)
  })

  animationSpeed.addEventListener("change", function () {
    changeAnimationSpeed(this.value)
    localStorage.setItem("cosmic_animation_speed", this.value)
  })

  panicKeySelect.addEventListener("change", function () {
    panicKey = this.value
    localStorage.setItem("cosmic_panic_key", this.value)
    setupPanicKey()
  })
}

// load saved settings
function loadSettings() {
  const savedDisguise = localStorage.getItem("cosmic_disguise")
  const savedTheme = localStorage.getItem("cosmic_theme")
  const savedBackground = localStorage.getItem("cosmic_background")
  const savedAnimationSpeed = localStorage.getItem("cosmic_animation_speed")
  const savedPanicKey = localStorage.getItem("cosmic_panic_key")

  if (savedDisguise) {
    document.getElementById("disguiseSelect").value = savedDisguise
    changeDisguise(savedDisguise)
  }

  if (savedTheme) {
    document.getElementById("themeSelect").value = savedTheme
    changeTheme(savedTheme)
  }

  if (savedBackground) {
    document.getElementById("backgroundSelect").value = savedBackground
    changeBackground(savedBackground)
  }

  if (savedAnimationSpeed) {
    document.getElementById("animationSpeed").value = savedAnimationSpeed
    changeAnimationSpeed(savedAnimationSpeed)
  }

  if (savedPanicKey) {
    document.getElementById("panicKeySelect").value = savedPanicKey
    panicKey = savedPanicKey
  }
}

// change tab disguise
function changeDisguise(type) {
  const disguises = {
    default: {
      title: "cosmic.",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcgNkMzLjY5IDYgMSA4LjY5IDEgMTJTMy42OSAxOCA3IDE4SDE3QzIwLjMxIDE4IDIzIDE1LjMxIDIzIDEyUzIwLjMxIDYgMTcgNkg3Wk03IDhIMTdDMTkuMjEgOCAyMSA5Ljc5IDIxIDEyUzE5LjIxIDE2IDE3IDE2SDdDNC43OSAxNiAzIDE0LjIxIDMgMTJTNC43OSA4IDcgOFpNOSAxMEM4LjQ1IDEwIDggMTAuNDUgOCAxMVM4LjQ1IDEyIDkgMTJTMTAgMTEuNTUgMTAgMTFTOS41NSAxMCA5IDEwWk0xNSAxMEMxNC40NSAxMCAxNCAxMC40NSAxNCAxMVMxNC40NSAxMiAxNSAxMlMxNiAxMS41NSAxNiAxMVMxNS41NSAxMCAxNSAxMFpNNyAxNEM2LjQ1IDE0IDYgMTQuNDUgNiAxNVM2LjQ1IDE2IDcgMTZTOCAxNS41NSA4IDE1UzcuNTUgMTQgNyAxNFpNMTcgMTRDMTYuNDUgMTQgMTYgMTQuNDUgMTYgMTVTMTYuNDUgMTYgMTcgMTZTMTggMTUuNTUgMTggMTVTMTcuNTUgMTQgMTcgMTRaIiBmaWxsPSIjZWM0ODk5Ii8+Cjwvc3ZnPgo=",
    },
    google: { title: "Google", icon: "https://www.google.com/favicon.ico" },
    drive: {
      title: "My Drive - Google Drive",
      icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
    },
    gmail: { title: "Gmail", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
    classroom: { title: "Classes", icon: "https://ssl.gstatic.com/classroom/favicon.png" },
    docs: { title: "Google Docs", icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" },
    canvas: { title: "Dashboard", icon: "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" },
  }

  const disguise = disguises[type]
  if (disguise) {
    document.title = disguise.title
    const favicon = document.getElementById("favicon")
    favicon.href = disguise.icon
  }
}

// change theme
function changeTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme)
}

// change background effects
function changeBackground(type) {
  const starsContainer = document.getElementById("starsContainer")
  const mountainBackground = document.getElementById("mountainBackground")

  // Reset all backgrounds
  starsContainer.style.display = "none"
  mountainBackground.classList.remove("show")

  switch (type) {
    case "stars":
      starsContainer.style.display = "block"
      break
    case "mountains":
      mountainBackground.classList.add("show")
      break
    case "particles":
      starsContainer.style.display = "block"
      // Add particle effects (simplified)
      break
    case "none":
      // All backgrounds hidden
      break
  }
}

// change animation speed
function changeAnimationSpeed(speed) {
  document.body.className = document.body.className.replace(/\b(slow|fast)-animation\b/g, "")

  if (speed === "slow") {
    document.body.classList.add("slow-animation")
  } else if (speed === "fast") {
    document.body.classList.add("fast-animation")
  }
}

// setup panic key
function setupPanicKey() {
  // Remove existing event listeners
  document.removeEventListener("keydown", handlePanicKey)

  if (panicKey !== "none") {
    document.addEventListener("keydown", handlePanicKey)
  }
}

function handlePanicKey(event) {
  let shouldPanic = false

  switch (panicKey) {
    case "escape":
      shouldPanic = event.key === "Escape"
      break
    case "space":
      shouldPanic = event.key === " "
      break
    case "ctrl+shift+x":
      shouldPanic = event.ctrlKey && event.shiftKey && event.key === "X"
      break
  }

  if (shouldPanic) {
    window.location.href = "https://www.google.com"
  }
}

// setup background effects
function setupBackgroundEffects() {
  const savedBackground = localStorage.getItem("cosmic_background") || "stars"
  changeBackground(savedBackground)
}

// export settings
function exportSettings() {
  const settings = {
    theme: localStorage.getItem("cosmic_theme") || "cosmic",
    disguise: localStorage.getItem("cosmic_disguise") || "default",
    background: localStorage.getItem("cosmic_background") || "stars",
    animationSpeed: localStorage.getItem("cosmic_animation_speed") || "normal",
    panicKey: localStorage.getItem("cosmic_panic_key") || "none",
    favorites: JSON.parse(localStorage.getItem("cosmic_favorites")) || [],
  }

  const dataStr = JSON.stringify(settings, null, 2)
  const dataBlob = new Blob([dataStr], { type: "application/json" })
  const url = URL.createObjectURL(dataBlob)

  const link = document.createElement("a")
  link.href = url
  link.download = "cosmic-settings.json"
  link.click()

  URL.revokeObjectURL(url)
}

// import settings
function importSettings() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = ".json"

  input.onchange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const settings = JSON.parse(e.target.result)

          // Apply imported settings
          if (settings.theme) {
            localStorage.setItem("cosmic_theme", settings.theme)
            document.getElementById("themeSelect").value = settings.theme
            changeTheme(settings.theme)
          }

          if (settings.disguise) {
            localStorage.setItem("cosmic_disguise", settings.disguise)
            document.getElementById("disguiseSelect").value = settings.disguise
            changeDisguise(settings.disguise)
          }

          if (settings.background) {
            localStorage.setItem("cosmic_background", settings.background)
            document.getElementById("backgroundSelect").value = settings.background
            changeBackground(settings.background)
          }

          if (settings.animationSpeed) {
            localStorage.setItem("cosmic_animation_speed", settings.animationSpeed)
            document.getElementById("animationSpeed").value = settings.animationSpeed
            changeAnimationSpeed(settings.animationSpeed)
          }

          if (settings.panicKey) {
            localStorage.setItem("cosmic_panic_key", settings.panicKey)
            document.getElementById("panicKeySelect").value = settings.panicKey
            panicKey = settings.panicKey
            setupPanicKey()
          }

          if (settings.favorites) {
            localStorage.setItem("cosmic_favorites", JSON.stringify(settings.favorites))
            favorites = settings.favorites
            renderGamesList()
          }

          alert("Settings imported successfully!")
        } catch (error) {
          alert("Error importing settings. Please check the file format.")
        }
      }
      reader.readAsText(file)
    }
  }

  input.click()
}

// open in about:blank
function openInAboutBlank() {
  const newWindow = window.open("about:blank", "_blank")
  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>about:blank</title>
      <style>
        body { margin: 0; padding: 0; overflow: hidden; background: #000; }
        iframe { width: 100vw; height: 100vh; border: none; }
      </style>
    </head>
    <body>
      <iframe src="${window.location.href}" allowfullscreen></iframe>
    </body>
    </html>
  `)
}

// reset settings
function resetSettings() {
  if (confirm("Are you sure you want to reset all settings? This cannot be undone.")) {
    localStorage.removeItem("cosmic_disguise")
    localStorage.removeItem("cosmic_theme")
    localStorage.removeItem("cosmic_background")
    localStorage.removeItem("cosmic_animation_speed")
    localStorage.removeItem("cosmic_panic_key")
    localStorage.removeItem("cosmic_favorites")

    favorites = []
    currentGame = null
    panicKey = "none"

    document.getElementById("disguiseSelect").value = "default"
    document.getElementById("themeSelect").value = "cosmic"
    document.getElementById("backgroundSelect").value = "stars"
    document.getElementById("animationSpeed").value = "normal"
    document.getElementById("panicKeySelect").value = "none"

    changeDisguise("default")
    changeTheme("cosmic")
    changeBackground("stars")
    changeAnimationSpeed("normal")
    setupPanicKey()
    renderGamesList()

    // reset game player
    document.getElementById("currentGameTitle").textContent = "Select a game to play"
    document.getElementById("gameContainer").innerHTML = `
      <div class="no-game-selected">
        <i class="ri-gamepad-line"></i>
        <h3>Choose a game from the list</h3>
        <p>Click on any game from the sidebar to start playing</p>
      </div>
    `
    document.getElementById("newTabBtn").disabled = true
    document.getElementById("aboutBlankBtn").disabled = true
    document.getElementById("fullscreenBtn").disabled = true

    alert("Settings reset successfully!")
  }
}

// footer functions
function showPrivacyPolicy() {
  alert(
    "Privacy Policy: We respect your privacy. This site does not collect personal data. All settings are stored locally in your browser.",
  )
}

function showTerms() {
  alert(
    "Terms of Service: By using this site, you agree to use it responsibly and in accordance with your local laws and regulations.",
  )
}
