// Global variables
let games = []
const customGames = [
  // Add your custom games here in this format:
  {
    id: "floodrunner4",
    title: "Flood Runner 4",
    icon: "https://cyberschool-lol.w3spaces.com/img/floodrunner4.png",
    url: "https://cyberschool-lol.w3spaces.com/g/floodrunner4.html",
    category: "sports",
    isCustom: true,
  },
  {
    id: "justoneboss",
    title: "Just One Boss",
    icon: "https://cyberschool-lol.w3spaces.com/img/justoneboss.png",
    url: "https://cyberschool-lol.w3spaces.com/g/justoneboss.html",
    category: "arcade",
    isCustom: true,
  },
  {
    id: "offlineparadise",
    title: "Offline Paradise",
    icon: "https://cyberschool-lol.w3spaces.com/img/offlineparadise.png",
    url: "https://cyberschool-lol.w3spaces.com/g/offlineparadise.html",
    category: "action",
    isCustom: true,
  },
  {
    id: "parkoor",
    title: "Parkoor",
    icon: "https://cyberschool-lol.w3spaces.com/img/parkoor.png",
    url: "https://cyberschool-lol.w3spaces.com/g/parkoor.html",
    category: "sports",
    isCustom: true,
  },
  {
    id: "radiusraid",
    title: "Radius Raid",
    icon: "https://cyberschool-lol.w3spaces.com/img/radiusraid-copy.png",
    url: "https://cyberschool-lol.w3spaces.com/g/radiusraid.html",
    category: "arcade",
    isCustom: true,
  },
  {
    id: "pixelgenerator",
    title: "Pixel Generator",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Pixel_Art_Cat_with_Zoom-in_Detail.svg/1200px-Pixel_Art_Cat_with_Zoom-in_Detail.svg.png",
    url: "https://cyberschool-lol.w3spaces.com/g/pixelgenerator.html",
    category: "arcade",
    isCustom: true,
  },
  {
    id: "hslcolorgame",
    title: "HSL Color Game",
    icon: "https://cyberschool-lol.w3spaces.com/img/hslcolorgame.png",
    url: "https://cyberschool-lol.w3spaces.com/g/hslcolorgame.html",
    category: "arcade",
    isCustom: true,
  },
  {
    id: "ninjavsevilcorp",
    title: "Ninja vs EVILCORP",
    icon: "https://cyberschool-lol.w3spaces.com/img/ninjavsevilcorp.png",
    url: "https://cyberschool-lol.w3spaces.com/g/ninjavsevilcorp.html",
    category: "action",
    isCustom: true,
  },
  {
    id: "mountainmaze",
    title: "Mountain Maze",
    icon: "https://cyberschool-lol.w3spaces.com/img/mountainmaze.png",
    url: "https://cyberschool-lol.w3spaces.com/g/mountainmaze.html",
    category: "puzzle",
    isCustom: true,
  },
  {
    id: "evilglitch",
    title: "Evil Glitch",
    icon: "https://cyberschool-lol.w3spaces.com/img/evilglitch.png",
    url: "https://cyberschool-lol.w3spaces.com/g/evilglitch.html",
    category: "arcade",
    isCustom: true,
  },
  {
    id: "ynclicker",
    title: "YN Clicker",
    icon: "https://img.freepik.com/free-photo/dark-style-ninja-naruto_23-2151140101.jpg?semt=ais_hybrid&w=740",
    url: "https://ynclicker.w3spaces.com",
    category: "strategy",
    isCustom: true,
  },
  {
    id: "rollingforests",
    title: "Rolling Forests",
    icon: "https://cyberschool-lol.w3spaces.com/img/rollingforests.png",
    url: "https://cyberschool-lol.w3spaces.com/g/rollingforests.html",
    category: "action",
    isCustom: true,
  },
  {
    id: "itsrainingboxes",
    title: "It's Raining Boxes",
    icon: "https://cyberschool-lol.w3spaces.com/img/itsrainingboxes.png",
    url: "https://cyberschool-lol.w3spaces.com/g/itsrainingboxes.html",
    category: "action",
    isCustom: true,
  },
  {
    id: "edgenotfound",
    title: "Edge Not Found",
    icon: "https://cyberschool-lol.w3spaces.com/img/edgenotfound.png",
    url: "https://cyberschool-lol.w3spaces.com/g/edgenotfound.html",
    category: "puzzle",
    isCustom: true,
  },
  {
    id: "flappy20482",
    title: "Flappy 2048 2",
    icon: "https://cyberschool-lol.w3spaces.com/img/2048.png",
    url: "https://cyberschool-lol.w3spaces.com/g/flappy2048.html",
    category: "strategy",
    isCustom: true,
  },
  {
    id: "raftwars",
    title: "Raft Wars",
    icon: "https://cyberschool-lol.w3spaces.com/img/raftwars.png",
    url: "https://cyberschool-lol.w3spaces.com/g/raftwars.html",
    category: "strategy",
    isCustom: true,
  },
  {
    id: "raftwars2",
    title: "Raft Wars 2",
    icon: "https://cyberschool-lol.w3spaces.com/img/raftwars2.png",
    url: "https://cyberschool-lol.w3spaces.com/g/raftwars2.html",
    category: "strategy",
    isCustom: true,
  },
  {
    id: "classicsnake",
    title: "Classic Snake",
    icon: "https://cyberschool-lol.w3spaces.com/img/snake.jpg",
    url: "https://cyberschool-lol.w3spaces.com/g/classicsnake.html",
    category: "arcade",
    isCustom: true,
  },
  {
    id: "fluidsimulator",
    title: "Fluid Simulator",
    icon: "https://cyberschool-lol.w3spaces.com/img/fluidsimulator.png",
    url: "https://cyberschool-lol.w3spaces.com/g/fluidsimulator.html",
    category: "arcade",
    isCustom: true,
  },
]

// Media content array
const mediaContent = [
  {
    id: "cosmic_trailer",
    title: "Cosmic Gaming Trailer",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    description: "official cosmic gaming platform trailer",
  },
  {
    id: "gaming_setup",
    title: "Ultimate Gaming Setup",
    type: "image",
    url: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&h=300&fit=crop",
    description: "epic gaming setup inspiration",
  },
  {
    id: "retro_games",
    title: "Retro Gaming History",
    type: "video",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    description: "journey through retro gaming history",
  },
  {
    id: "cosmic_wallpaper",
    title: "Cosmic Space Wallpaper",
    type: "image",
    url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
    description: "beautiful cosmic space wallpaper",
  },
]

let filteredGames = []
const favorites = JSON.parse(localStorage.getItem("cosmic_favorites")) || []
let gameHistory = JSON.parse(localStorage.getItem("cosmic_game_history")) || []
let currentPhraseIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingSpeed = 65
let currentGame = null
let panicKey = localStorage.getItem("cosmic_panic_key") || "none"
let dictionaryMode = "dictionary"

// Timer variables
let timerInterval = null
let timerRunning = false
let timerTime = 0

// Calculator variables
const calculatorExpression = ""

// Groq AI configuration
const GROQ_API_KEY = "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"
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

// typing animation phrases
const typingPhrases = [
  "your ultimate destination for unblocked gaming.",
  "endless entertainment at your very own fingertips.",
  "where school restrictions are nonexistent.",
  "play without limits, anytime, anywhere - no restrictions.",
  "the digital repository of gaming and entertainment.",
  "discover, play, and enjoy hundreds of unblocked games.",
  "your gateway to unlimited gaming freedom.",
]

// bookmarklets data
const bookmarklets = [
  {
    title: "unblocker",
    description: "bypass website restrictions and access blocked content.",
    code: `javascript:(function(){var url=prompt('enter url to unblock:');if(url){window.open('https://www.croxyproxy.com/'+encodeURIComponent(url),'_blank');}})();`,
  },
  {
    title: "tab cloak",
    description: "disguise your current tab as google.",
    code: `javascript:(function(){document.title='google';var link=document.querySelector("link[rel*='icon']")||document.createElement('link');link.type='image/x-icon';link.rel='shortcut icon';link.href='https://www.google.com/favicon.ico';document.getElementsByTagName('head')[0].appendChild(link);})();`,
  },
  {
    title: "history flooder",
    description: "flood browser history to hide your tracks.",
    code: `javascript:(function(){var sites=['https://www.google.com','https://www.youtube.com','https://www.wikipedia.org','https://www.github.com','https://www.stackoverflow.com'];for(var i=0;i<50;i++){history.pushState({},'',sites[Math.floor(Math.random()*sites.length)]);}alert('history flooded!');})();`,
  },
  {
    title: "panic button",
    description: "quickly redirect to google when you need to hide.",
    code: `javascript:(function(){window.location.href='https://www.google.com';})();`,
  },
  {
    title: "inspect element",
    description: "enable inspect element on restricted sites.",
    code: `javascript:(function(){var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/ianramzy/decancer@main/index.js';document.head.appendChild(script);})();`,
  },
  {
    title: "auto clicker",
    description: "automatic clicking tool for games and websites.",
    code: `javascript:(function(){var clicking=false;var interval;function toggleClicker(){if(clicking){clearInterval(interval);clicking=false;alert('auto clicker stopped');}else{interval=setInterval(function(){document.elementFromPoint(event.clientX,event.clientY).click();},100);clicking=true;alert('auto clicker started - move mouse to target');}}document.addEventListener('keydown',function(e){if(e.key==='c'&&e.ctrlKey&&e.shiftKey){e.preventDefault();toggleClicker();}});alert('press ctrl+shift+c to toggle auto clicker');})();`,
  },
]

// Wallpaper URLs
const wallpapers = {
  mountains: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop",
  space: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&h=1080&fit=crop",
  forest: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop",
  ocean: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&h=1080&fit=crop",
  desert: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&h=1080&fit=crop",
  city: "https://external-preview.redd.it/XCTVIhr4EElXe3kgRt3cKiNlfHpS5xEUqEChHRoSjTI.jpg?auto=webp&s=fef5917af72b33d71eab15521dec8b6a89f53f07",
  aurora: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&h=1080&fit=crop",
  sunset: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
  galaxy: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop",
  volcano: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1920&h=1080&fit=crop",
  arctic: "https://i.pinimg.com/736x/38/b3/f7/38b3f7fcaf1595b17aba600124d6336a.jpg",
  tropical: "https://wallpapers.com/images/hd/cute-tropical-3ber1fipqhlyc3uf.jpg",
  cyberpunk: "https://wallpapers.com/images/hd/cyberpunk-1920x1080-zyjxjel430ylg3kp.jpg",
  retro: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&h=1080&fit=crop",
  anime: "https://www.pixelstalk.net/wp-content/uploads/images6/3840x2160-Anime-Scenery-Wallpaper-HD.jpg",
  fantasy: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcGPMSAqZki-Wl4uaVFCwCLCi3bJEP4m86Yg&s",
  underwater: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=1080&fit=crop",
  clouds: "https://w.wallhaven.cc/full/jx/wallhaven-jxl3qp.jpg",
  stars: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=1920&h=1080&fit=crop",
}

// Load games from the API
function loadGames() {
  fetch("https://list.classroomsarecool.mex.com")
    .then((response) => response.text())
    .then((data) => {
      const tempDiv = document.createElement("div")
      tempDiv.innerHTML = data

      const links = tempDiv.querySelectorAll("a")
      games = []

      links.forEach((link, index) => {
        const img = link.querySelector("img")
        const id = link.getAttribute("id") || ""
        const dataUrl = link.getAttribute("data-url") || ""

        // Determine category
        const categories = ["action", "puzzle", "strategy", "arcade", "sports"]
        const category = categories[Math.floor(Math.random() * categories.length)]

        if (img) {
          // Store game data
          games.push({
            id: id,
            title: img.title || "Game",
            icon: img.src,
            url: dataUrl,
            category: category,
            isCustom: false,
          })
        }
      })

      // Combine with custom games
      const allGames = [...games, ...customGames]
      games = allGames

      // Render games
      filteredGames = [...games]
      renderGames()
      renderFavorites()
      updateGamesCount()
      setupGameFilters()
      console.log(`loaded ${games.length} games from api and custom games`)
    })
    .catch((error) => {
      console.error("error loading games:", error)
      // Fallback games
      games = [
        {
          id: "slope",
          title: "Slope",
          icon: "https://images.crazygames.com/slope/20200917083022/slope-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
          url: "https://slope-game.github.io/",
          category: "action",
          isCustom: false,
        },
        {
          id: "2048",
          title: "2048",
          icon: "https://play-lh.googleusercontent.com/JMNWaZel_qg6qj2Kbbh1YZ1RxZ3iFmBxTRCThF9Qn-uX0t-j12B3dHIWgY8Vr9Rr_Q",
          url: "https://play2048.co/",
          category: "puzzle",
          isCustom: false,
        },
        {
          id: "tetris",
          title: "Tetris",
          icon: "https://play-lh.googleusercontent.com/za2Nu_qjMw5GzWfbzet4zeiZT1vPhjzVZ5sQpfT1HG8BUMrYXZgDdmNJUYHDXQpYEFs",
          url: "https://tetris.com/play-tetris",
          category: "puzzle",
          isCustom: false,
        },
        {
          id: "minecraft",
          title: "Minecraft Classic",
          icon: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
          url: "https://classic.minecraft.net/",
          category: "action",
          isCustom: false,
        },
        {
          id: "snake",
          title: "Snake",
          icon: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png",
          url: "https://www.google.com/fbx?fbx=snake_arcade",
          category: "arcade",
          isCustom: false,
        },
      ]

      // Combine with custom games
      const allGames = [...games, ...customGames]
      games = allGames

      filteredGames = [...games]
      renderGames()
      renderFavorites()
      updateGamesCount()
      setupGameFilters()
    })
}

// Update games count
function updateGamesCount() {
  const gamesCount = document.getElementById("gamesCount")
  if (gamesCount) {
    gamesCount.textContent = ``
  }
}

// Render games in square layout
function renderGames() {
  const gamesGrid = document.getElementById("games-grid")
  gamesGrid.innerHTML = ""

  if (filteredGames.length === 0) {
    gamesGrid.innerHTML = `
      <div class="no-games-found">
        <i class="ri-search-line"></i>
        <h3>no games found</h3>
        <p>try adjusting your search or filter criteria.</p>
      </div>
    `
    return
  }

  filteredGames.forEach((game, index) => {
    const gameButton = document.createElement("div")
    gameButton.className = "game-button"
    gameButton.setAttribute("data-category", game.category)

    // Add click event to open the game in about:blank
    gameButton.addEventListener("click", () => {
      openGameInAboutBlank(game)
    })

    const gameImg = document.createElement("img")
    gameImg.src = game.icon || "/placeholder.svg?height=180&width=180"
    gameImg.alt = game.title
    gameImg.loading = "lazy"

    const overlayText = document.createElement("div")
    overlayText.className = "overlay-text"
    overlayText.textContent = game.title

    // Add favorite button
    const favoriteBtn = document.createElement("button")
    favoriteBtn.className = `favorite-btn ${favorites.includes(game.id) ? "favorited" : ""}`
    favoriteBtn.innerHTML = `<i class="ri-star-${favorites.includes(game.id) ? "fill" : "line"}"></i>`
    favoriteBtn.onclick = (e) => {
      e.stopPropagation()
      toggleFavorite(game.id)
    }

    gameButton.appendChild(gameImg)
    gameButton.appendChild(overlayText)
    gameButton.appendChild(favoriteBtn)

    gameButton.style.animationDelay = `${index * 0.05}s`

    gamesGrid.appendChild(gameButton)
  })

  updateGamesCount()
}

// Render favorites horizontally at top of games section
function renderFavorites() {
  const favoritesSection = document.getElementById("favoritesSection")
  const favoritesHorizontal = document.getElementById("favoritesHorizontal")

  if (favorites.length === 0) {
    favoritesSection.style.display = "none"
    return
  }

  favoritesSection.style.display = "block"
  favoritesHorizontal.innerHTML = ""

  const favoriteGames = games.filter((game) => favorites.includes(game.id))

  favoriteGames.forEach((game, index) => {
    const gameButton = document.createElement("div")
    gameButton.className = "favorite-game-button"

    gameButton.addEventListener("click", () => {
      openGameInAboutBlank(game)
    })

    const gameImg = document.createElement("img")
    gameImg.src = game.icon || "/placeholder.svg?height=120&width=120"
    gameImg.alt = game.title
    gameImg.loading = "lazy"

    const gameTitle = document.createElement("div")
    gameTitle.className = "favorite-game-title"
    gameTitle.textContent = game.title

    const favoriteBtn = document.createElement("button")
    favoriteBtn.className = "favorite-btn favorited"
    favoriteBtn.innerHTML = `<i class="ri-star-fill"></i>`
    favoriteBtn.onclick = (e) => {
      e.stopPropagation()
      toggleFavorite(game.id)
    }

    gameButton.appendChild(gameImg)
    gameButton.appendChild(gameTitle)
    gameButton.appendChild(favoriteBtn)

    gameButton.style.animationDelay = `${index * 0.05}s`

    favoritesHorizontal.appendChild(gameButton)
  })
}

// Render media content
function renderMedia() {
  const mediaGrid = document.getElementById("media-grid")
  mediaGrid.innerHTML = ""

  mediaContent.forEach((media, index) => {
    const mediaCard = document.createElement("div")
    mediaCard.className = "media-card"

    if (media.type === "video") {
      mediaCard.innerHTML = `
        <div class="media-thumbnail" onclick="openMediaModal('${media.id}')">
          <img src="${media.thumbnail}" alt="${media.title}" loading="lazy">
          <div class="media-play-button">
            <i class="ri-play-circle-fill"></i>
          </div>
        </div>
        <div class="media-info">
          <h3 class="media-title">${media.title}</h3>
          <p class="media-description">${media.description}</p>
          <span class="media-type">video</span>
        </div>
      `
    } else {
      mediaCard.innerHTML = `
        <div class="media-thumbnail" onclick="openMediaModal('${media.id}')">
          <img src="${media.thumbnail}" alt="${media.title}" loading="lazy">
        </div>
        <div class="media-info">
          <h3 class="media-title">${media.title}</h3>
          <p class="media-description">${media.description}</p>
          <span class="media-type">image</span>
        </div>
      `
    }

    mediaCard.style.animationDelay = `${index * 0.1}s`
    mediaGrid.appendChild(mediaCard)
  })
}

// Open media modal
function openMediaModal(mediaId) {
  const media = mediaContent.find((m) => m.id === mediaId)
  if (!media) return

  const modal = document.createElement("div")
  modal.className = "modal show"
  modal.innerHTML = `
    <div class="modal-content large">
      <div class="modal-header">
        <h3>${media.title}</h3>
        <button class="modal-close" onclick="this.closest('.modal').remove()">
          <i class="ri-close-line"></i>
        </button>
      </div>
      <div class="modal-body">
        ${
          media.type === "video"
            ? `<iframe src="${media.url}" width="100%" height="400" frameborder="0" allowfullscreen></iframe>`
            : `<img src="${media.url}" alt="${media.title}" style="width: 100%; height: auto; border-radius: 0.5rem;">`
        }
        <p style="margin-top: 1rem; color: var(--text-muted);">${media.description}</p>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove()
    }
  })
}

// Open game in about:blank tab
function openGameInAboutBlank(game) {
  // Add to game history
  addToGameHistory(game)

  const newWindow = window.open("about:blank", "_blank")
  newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${game.title}</title>
      <style>
        body { 
          margin: 0; 
          padding: 0; 
          overflow: hidden; 
          background: #000; 
          font-family: 'Inter', Arial, sans-serif;
        }
        iframe {
          background: #000;
          font-family: 'Inter', Arial, sans-serif;
        }
        iframe { 
          width: 100vw; 
          height: 100vh; 
          border: none; 
        }
        .game-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 10px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }
        .game-title {
          font-size: 18px;
          font-weight: bold;
        }
        .game-controls {
          display: flex;
          gap: 10px;
        }
        .control-btn {
          background: #6366f1;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        .control-btn:hover {
          background: #5855eb;
        }
        .game-container {
          margin-top: 50px;
          height: calc(100vh - 50px);
        }
      </style>
    </head>
    <body>
      <div class="game-header">
        <div class="game-title">${game.title}</div>
        <div class="game-controls">
          <button class="control-btn" onclick="toggleFullscreen()">fullscreen</button>
          <button class="control-btn" onclick="window.close()">close</button>
        </div>
      </div>
      <div class="game-container">
        <iframe src="${game.url}" allowfullscreen sandbox="allow-scripts allow-pointer-lock allow-same-origin allow-forms allow-popups allow-modals"></iframe>
      </div>
      <script>
        function toggleFullscreen() {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        }
      </script>
    </body>
    </html>
  `)
}

// Add game to history
function addToGameHistory(game) {
  const existingIndex = gameHistory.findIndex((g) => g.id === game.id)
  if (existingIndex > -1) {
    gameHistory.splice(existingIndex, 1)
  }
  gameHistory.unshift({ ...game, playedAt: new Date().toISOString() })
  gameHistory = gameHistory.slice(0, 50) // Keep only last 50 games
  localStorage.setItem("cosmic_game_history", JSON.stringify(gameHistory))
}

// Toggle favorite
function toggleFavorite(gameId) {
  const index = favorites.indexOf(gameId)
  if (index > -1) {
    favorites.splice(index, 1)
  } else {
    favorites.push(gameId)
  }
  localStorage.setItem("cosmic_favorites", JSON.stringify(favorites))
  renderGames()
  renderFavorites()
}

// Setup game category filters
function setupGameFilters() {
  const filterButtons = document.querySelectorAll(".filter-btn")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      button.classList.add("active")

      // Get selected category
      const category = button.getAttribute("data-category")

      // Filter games
      filterGames(category)
    })
  })
}

// Filter games by category
function filterGames(category) {
  if (category === "all") {
    filteredGames = [...games]
  } else {
    filteredGames = games.filter((game) => game.category === category)
  }
  renderGames()
}

// Search games functionality
function setupGamesSearch() {
  const gamesSearchInput = document.getElementById("gamesSearchInput")

  gamesSearchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim()

    if (query === "") {
      filteredGames = [...games]
    } else {
      filteredGames = games.filter((game) => game.title.toLowerCase().includes(query))
    }

    renderGames()
  })
}

// Update stats
function updateStats() {
  document.getElementById("totalGames").textContent = games.length
  document.getElementById("totalFavorites").textContent = favorites.length
  document.getElementById("gamesPlayed").textContent = gameHistory.length
}

// Add custom game modal functions
function showAddGameModal() {
  document.getElementById("addGameModal").classList.add("show")
}

function closeAddGameModal() {
  document.getElementById("addGameModal").classList.remove("show")
  // Clear form
  document.getElementById("gameTitle").value = ""
  document.getElementById("gameUrl").value = ""
  document.getElementById("gameIcon").value = ""
  document.getElementById("gameCategory").value = "custom"
}

function addCustomGame() {
  const title = document.getElementById("gameTitle").value.trim()
  const url = document.getElementById("gameUrl").value.trim()
  const icon = document.getElementById("gameIcon").value.trim()
  const category = document.getElementById("gameCategory").value

  if (!title || !url) {
    alert("Please enter both a title and URL for the game.")
    return
  }

  const customGame = {
    id: `custom_${Date.now()}`,
    title: title,
    url: url,
    icon: icon || "/placeholder.svg?height=180&width=180",
    category: category,
    isCustom: true,
  }

  customGames.push(customGame)
  games.push(customGame)
  localStorage.setItem("cosmic_custom_games", JSON.stringify(customGames))

  filteredGames = [...games]
  renderGames()
  updateStats()
  closeAddGameModal()

  alert("Custom game added successfully!")
}

// Calculator functions
function appendToCalculator(value) {
  const display = document.getElementById("calculatorDisplay")
  if (display.value === "Error") {
    display.value = ""
  }
  display.value += value
}

function clearCalculator() {
  document.getElementById("calculatorDisplay").value = ""
}

function deleteLast() {
  const display = document.getElementById("calculatorDisplay")
  display.value = display.value.slice(0, -1)
}

function calculateResult() {
  const display = document.getElementById("calculatorDisplay")
  try {
    // Replace display symbols with actual operators
    const expression = display.value.replace(/×/g, "*").replace(/÷/g, "/")
    const result = eval(expression)
    display.value = result
  } catch (error) {
    display.value = "Error"
  }
}

// Timer functions
function startTimer() {
  if (timerRunning) return

  const hours = Number.parseInt(document.getElementById("timerHours").value) || 0
  const minutes = Number.parseInt(document.getElementById("timerMinutes").value) || 0
  const seconds = Number.parseInt(document.getElementById("timerSeconds").value) || 0

  timerTime = hours * 3600 + minutes * 60 + seconds

  if (timerTime <= 0) {
    alert("please set a valid time!")
    return
  }

  timerRunning = true
  timerInterval = setInterval(() => {
    if (timerTime <= 0) {
      clearInterval(timerInterval)
      timerRunning = false
      alert("timer finished!")
      playTimerSound()
      return
    }

    timerTime--
    updateTimerDisplay()
  }, 1000)
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
    timerRunning = false
  }
}

function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
  timerRunning = false
  timerTime = 0
  updateTimerDisplay()
}

function updateTimerDisplay() {
  const hours = Math.floor(timerTime / 3600)
  const minutes = Math.floor((timerTime % 3600) / 60)
  const seconds = timerTime % 60

  const display = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`
  document.getElementById("timerDisplay").textContent = display
}

function playTimerSound() {
  // Create a simple beep sound
  const audioContext = new (window.AudioContext || window.webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.frequency.value = 800
  oscillator.type = "sine"

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1)

  oscillator.start(audioContext.currentTime)
  oscillator.stop(audioContext.currentTime + 1)
}

// Dictionary/Encyclopedia functions
function setupDictionaryMode() {
  const modeButtons = document.querySelectorAll(".mode-btn")

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modeButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
      dictionaryMode = button.getAttribute("data-mode")

      const input = document.getElementById("dictionaryInput")
      if (dictionaryMode === "dictionary") {
        input.placeholder = "enter a word to look up..."
      } else {
        input.placeholder = "enter a topic to search..."
      }
    })
  })
}

function lookupWord() {
  const word = document.getElementById("dictionaryInput").value.trim()
  if (!word) {
    alert("please enter a word or topic to look up!")
    return
  }

  const resultsContainer = document.getElementById("dictionaryResults")
  resultsContainer.innerHTML = `
    <div class="dictionary-loading">
      <i class="ri-loader-4-line loading-spinner"></i>
      <p>looking up "${word}"...</p>
    </div>
  `

  if (dictionaryMode === "dictionary") {
    // Use dictionary API
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.title === "No Definitions Found") {
          resultsContainer.innerHTML = `
            <div class="dictionary-error">
              <i class="ri-alert-line"></i>
              <h4>no definition found</h4>
              <p>sorry, we couldn't find a definition for "${word}".</p>
            </div>
          `
          return
        }

        const entry = data[0]
        let definitionsHtml = ""

        entry.meanings.forEach((meaning) => {
          definitionsHtml += `
            <div class="definition-section">
              <h4 class="part-of-speech">${meaning.partOfSpeech}</h4>
              <ol class="definitions-list">
                ${meaning.definitions
                  .slice(0, 3)
                  .map(
                    (def) => `
                  <li class="definition-item">
                    <p class="definition-text">${def.definition}</p>
                    ${def.example ? `<p class="definition-example">"${def.example}"</p>` : ""}
                  </li>
                `,
                  )
                  .join("")}
              </ol>
            </div>
          `
        })

        resultsContainer.innerHTML = `
          <div class="dictionary-result">
            <div class="word-header">
              <h3 class="word-title">${entry.word}</h3>
              ${entry.phonetic ? `<span class="word-phonetic">${entry.phonetic}</span>` : ""}
            </div>
            ${definitionsHtml}
          </div>
        `
      })
      .catch((error) => {
        console.error("dictionary error:", error)
        resultsContainer.innerHTML = `
          <div class="dictionary-error">
            <i class="ri-alert-line"></i>
            <h4>error</h4>
            <p>failed to look up the word. please try again.</p>
          </div>
        `
      })
  } else {
    // Use Wikipedia API for encyclopedia
    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(word)}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.type === "disambiguation" || data.type === "no-extract") {
          resultsContainer.innerHTML = `
            <div class="dictionary-error">
              <i class="ri-alert-line"></i>
              <h4>no article found</h4>
              <p>sorry, we couldn't find an encyclopedia entry for "${word}".</p>
            </div>
          `
          return
        }

        resultsContainer.innerHTML = `
          <div class="dictionary-result">
            <div class="word-header">
              <h3 class="word-title">${data.title}</h3>
            </div>
            <div class="encyclopedia-content">
              ${data.thumbnail ? `<img src="${data.thumbnail.source}" alt="${data.title}" style="float: right; margin: 0 0 1rem 1rem; max-width: 200px; border-radius: 0.5rem;">` : ""}
              <p class="encyclopedia-extract">${data.extract}</p>
              <a href="${data.content_urls.desktop.page}" target="_blank" class="encyclopedia-link">
                <i class="ri-external-link-line"></i>
                read more on wikipedia
              </a>
            </div>
          </div>
        `
      })
      .catch((error) => {
        console.error("encyclopedia error:", error)
        resultsContainer.innerHTML = `
          <div class="dictionary-error">
            <i class="ri-alert-line"></i>
            <h4>error</h4>
            <p>failed to look up the topic. please try again.</p>
          </div>
        `
      })
  }
}

function handleDictionaryKeyPress(event) {
  if (event.key === "Enter") {
    lookupWord()
  }
}

// AI chatbot functionality with Groq API
async function sendMessageToGroq(message) {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [
          {
            role: "system",
            content:
              "you are a helpful ai assistant for an unblocked/unrestricted school and work gaming website called 'cosmic.', which has over 400 unblocked games. you help users with games, website features, and general questions. keep responses concise and friendly. always respond in lowercase unless it's a proper noun or game title.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error("error calling groq api:", error)
    // Fallback responses
    const fallbackResponses = [
      "i'm here to help! what would you like to know about cosmic?",
      "sorry, i'm having trouble connecting right now. try asking about our games or features!",
      "i can help you with games, settings, or general questions about the site.",
      "have you tried checking out our games section? there are tons of great options!",
      "the tools section has some useful features you might find interesting.",
    ]
    return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
  }
}

// Enhanced AI chatbot functionality
async function sendMessage() {
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

    // Add typing indicator
    const typingMessage = document.createElement("div")
    typingMessage.className = "chat-message bot-message typing-indicator"
    typingMessage.innerHTML = `
      <div class="message-avatar">
        <i class="ri-robot-line"></i>
      </div>
      <div class="message-content">
        <div class="typing-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `
    chatMessages.appendChild(typingMessage)
    chatMessages.scrollTop = chatMessages.scrollHeight

    // Get AI response
    try {
      const aiResponse = await sendMessageToGroq(message)

      // Remove typing indicator
      typingMessage.remove()

      // Add bot response
      const botMessage = document.createElement("div")
      botMessage.className = "chat-message bot-message"
      botMessage.innerHTML = `
        <div class="message-avatar">
          <i class="ri-robot-line"></i>
        </div>
        <div class="message-content">${aiResponse}</div>
      `
      chatMessages.appendChild(botMessage)
      chatMessages.scrollTop = chatMessages.scrollHeight
    } catch (error) {
      // Remove typing indicator and show error
      typingMessage.remove()
      const errorMessage = document.createElement("div")
      errorMessage.className = "chat-message bot-message"
      errorMessage.innerHTML = `
        <div class="message-avatar">
          <i class="ri-robot-line"></i>
        </div>
        <div class="message-content">sorry, i'm having trouble responding right now. please try again!</div>
      `
      chatMessages.appendChild(errorMessage)
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
  }
}

function handleChatKeyPress(event) {
  if (event.key === "Enter") {
    sendMessage()
  }
}

// Wallpaper functions
function changeWallpaper(type) {
  const backgroundContainer = document.getElementById("backgroundContainer")

  // Clear existing backgrounds
  backgroundContainer.innerHTML = ""

  // Remove any existing dynamic backgrounds
  const existingBg = document.querySelector(".dynamic-background")
  if (existingBg) {
    existingBg.remove()
  }

  if (type === "none") {
    return
  }

  if (type === "rain") {
    createDigitalRain()
  } else if (type === "stars") {
    createStarfield()
  } else if (type === "custom") {
    const customUrl = localStorage.getItem("cosmic_custom_wallpaper")
    if (customUrl) {
      setImageWallpaper(customUrl)
    }
  } else if (wallpapers[type]) {
    setImageWallpaper(wallpapers[type])
  }
}

function setImageWallpaper(url) {
  const backgroundContainer = document.getElementById("backgroundContainer")
  backgroundContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${url}') center/cover no-repeat;
    z-index: -1;
  `
}

function setCustomWallpaper() {
  const url = document.getElementById("customWallpaperUrl").value.trim()
  if (!url) {
    alert("please enter a valid image url!")
    return
  }

  localStorage.setItem("cosmic_custom_wallpaper", url)
  changeWallpaper("custom")
  alert("custom wallpaper set successfully!")
}

function createDigitalRain() {
  const rainContainer = document.createElement("div")
  rainContainer.className = "dynamic-background digital-rain"
  rainContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    overflow: hidden;
    background: #000;
  `

  for (let i = 0; i < 50; i++) {
    const drop = document.createElement("div")
    drop.textContent = String.fromCharCode(0x30a0 + Math.random() * 96)
    drop.style.cssText = `
      position: absolute;
      color: #0f0;
      font-family: monospace;
      font-size: ${Math.random() * 10 + 10}px;
      left: ${Math.random() * 100}%;
      animation: rain ${Math.random() * 3 + 2}s linear infinite;
      animation-delay: ${Math.random() * 2}s;
    `
    rainContainer.appendChild(drop)
  }

  // Add rain animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes rain {
      0% { transform: translateY(-100vh); opacity: 1; }
      100% { transform: translateY(100vh); opacity: 0; }
    }
  `
  document.head.appendChild(style)

  document.body.appendChild(rainContainer)
}

function createStarfield() {
  const starsContainer = document.getElementById("starsContainer")
  starsContainer.innerHTML = ""
  starsContainer.style.display = "block"

  for (let i = 0; i < 200; i++) {
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

// initialize the page
document.addEventListener("DOMContentLoaded", () => {
  loadGames()
  renderMedia()
  renderBookmarklets()
  setupSearch()
  setupGamesSearch()
  setupNavbar()
  setupMobileMenu()
  setupSettings()
  setupDictionaryMode()
  loadSettings()
  startTypingAnimation()
  setupPanicKey()
  setupBackgroundEffects()
  renderFavorites()
})

// Add keyboard event listener for ESC key to close modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const modals = document.querySelectorAll(".modal.show")
    modals.forEach((modal) => modal.remove())
  }
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

    // Special handling for media section
    if (sectionName === "media") {
      renderMedia()
    }
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
          openGameInAboutBlank(game)
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
  const wallpaperSelect = document.getElementById("wallpaperSelect")
  const animationSpeed = document.getElementById("animationSpeed")
  const panicKeySelect = document.getElementById("panicKeySelect")
  const fontSelect = document.getElementById("fontSelect")
  const customWallpaperSection = document.getElementById("customWallpaperSection")

  disguiseSelect.addEventListener("change", function () {
    changeDisguise(this.value)
    localStorage.setItem("cosmic_disguise", this.value)
  })

  themeSelect.addEventListener("change", function () {
    changeTheme(this.value)
    localStorage.setItem("cosmic_theme", this.value)
  })

  wallpaperSelect.addEventListener("change", function () {
    changeWallpaper(this.value)
    localStorage.setItem("cosmic_wallpaper", this.value)

    // Show/hide custom wallpaper section
    if (this.value === "custom") {
      customWallpaperSection.style.display = "block"
    } else {
      customWallpaperSection.style.display = "none"
    }
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

  fontSelect.addEventListener("change", function () {
    changeFont(this.value)
    localStorage.setItem("cosmic_font", this.value)
  })
}

// load saved settings
function loadSettings() {
  const savedDisguise = localStorage.getItem("cosmic_disguise")
  const savedTheme = localStorage.getItem("cosmic_theme")
  const savedWallpaper = localStorage.getItem("cosmic_wallpaper")
  const savedAnimationSpeed = localStorage.getItem("cosmic_animation_speed")
  const savedPanicKey = localStorage.getItem("cosmic_panic_key")
  const savedFont = localStorage.getItem("cosmic_font")

  if (savedDisguise) {
    document.getElementById("disguiseSelect").value = savedDisguise
    changeDisguise(savedDisguise)
  }

  if (savedTheme) {
    document.getElementById("themeSelect").value = savedTheme
    changeTheme(savedTheme)
  }

  if (savedWallpaper) {
    document.getElementById("wallpaperSelect").value = savedWallpaper
    changeWallpaper(savedWallpaper)

    if (savedWallpaper === "custom") {
      document.getElementById("customWallpaperSection").style.display = "block"
    }
  } else {
    changeWallpaper("anime") // Default wallpaper
  }

  if (savedAnimationSpeed) {
    document.getElementById("animationSpeed").value = savedAnimationSpeed
    changeAnimationSpeed(savedAnimationSpeed)
  }

  if (savedPanicKey) {
    document.getElementById("panicKeySelect").value = savedPanicKey
    panicKey = savedPanicKey
  }

  if (savedFont) {
    document.getElementById("fontSelect").value = savedFont
    changeFont(savedFont)
  }
}

// change tab disguise
function changeDisguise(type) {
  const disguises = {
    default: {
      title: "cosmic.",
      icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzAwMDAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNyA2QzMuNjkgNiAxIDEuNjkgMSAxMlMxIDE5LjMxIDMuNjkgMjEgNyAyMVMxMC4zMSAyMSAxMjIgMTkuMVMxMjIgMTJTMTEuMzEgMyA3IDNTNyA2eiIvPjwvc3ZnPg==",
    },
    google: { title: "google", icon: "https://www.google.com/favicon.ico" },
    drive: {
      title: "my drive - google drive",
      icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
    },
    gmail: { title: "gmail", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
    classroom: { title: "classes", icon: "https://ssl.gstatic.com/classroom/favicon.png" },
    docs: { title: "google docs", icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" },
    canvas: { title: "dashboard", icon: "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" },
    zoom: { title: "zoom", icon: "https://st1.zoom.us/zoom.ico" },
    teams: {
      title: "microsoft teams",
      icon: "https://res.cdn.office.net/teams/1.3.00.4461/images/favicons/favicon-96x96.png",
    },
    youtube: { title: "youtube", icon: "https://www.youtube.com/favicon.ico" },
    netflix: { title: "netflix", icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" },
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

// change animation speed
function changeAnimationSpeed(speed) {
  document.body.className = document.body.className.replace(/\b(slow|fast|ultra)-animation\b/g, "")

  if (speed === "slow") {
    document.body.classList.add("slow-animation")
  } else if (speed === "fast") {
    document.body.classList.add("fast-animation")
  } else if (speed === "ultra") {
    document.body.classList.add("ultra-animation")
  }
}

// change font
function changeFont(font) {
  document.body.className = document.body.className.replace(/\b(orbitron|comfortaa|mono|inter)-font\b/g, "")

  if (font === "orbitron") {
    document.body.classList.add("orbitron-font")
  } else if (font === "comfortaa") {
    document.body.classList.add("comfortaa-font")
  } else if (font === "mono") {
    document.body.classList.add("mono-font")
  } else if (font === "inter") {
    document.body.classList.add("inter-font")
  }
}

// setup panic key
function setupPanicKey() {
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
    case "alt+tab":
      shouldPanic = event.altKey && event.key === "Tab"
      break
    case "ctrl+q":
      shouldPanic = event.ctrlKey && event.key === "q"
      break
  }

  if (shouldPanic) {
    window.location.href = "https://www.google.com"
  }
}

// setup background effects
function setupBackgroundEffects() {
  const savedWallpaper = localStorage.getItem("cosmic_wallpaper") || "anime"
  changeWallpaper(savedWallpaper)
}

// Modal functions
function showPrivacyPolicy() {
  document.getElementById("privacyModal").classList.add("show")
}

function closePrivacyModal() {
  document.getElementById("privacyModal").classList.remove("show")
}

function showTerms() {
  document.getElementById("termsModal").classList.add("show")
}

function closeTermsModal() {
  document.getElementById("termsModal").classList.remove("show")
}

// Data management functions
function exportFavorites() {
  const data = {
    favorites: favorites,
    exportDate: new Date().toISOString(),
  }

  const dataStr = JSON.stringify(data, null, 2)
  const dataBlob = new Blob([dataStr], { type: "application/json" })
  const url = URL.createObjectURL(dataBlob)

  const link = document.createElement("a")
  link.href = url
  link.download = "cosmic-favorites.json"
  link.click()

  URL.revokeObjectURL(url)
}

function importFavorites() {
  const input = document.createElement("input")
  input.type = "file"
  input.accept = ".json"

  input.onchange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result)

          if (data.favorites) {
            favorites.length = 0
            favorites.push(...data.favorites)
            localStorage.setItem("cosmic_favorites", JSON.stringify(favorites))
          }

          renderFavorites()
          renderGames()
          alert("favorites imported successfully!")
        } catch (error) {
          alert("error importing favorites. please check the file format.")
        }
      }
      reader.readAsText(file)
    }
  }

  input.click()
}

// export settings
function exportSettings() {
  const settings = {
    theme: localStorage.getItem("cosmic_theme") || "cosmic",
    disguise: localStorage.getItem("cosmic_disguise") || "default",
    wallpaper: localStorage.getItem("cosmic_wallpaper") || "anime",
    animationSpeed: localStorage.getItem("cosmic_animation_speed") || "normal",
    panicKey: localStorage.getItem("cosmic_panic_key") || "none",
    font: localStorage.getItem("cosmic_font") || "default",
    customWallpaper: localStorage.getItem("cosmic_custom_wallpaper") || "",
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

          if (settings.wallpaper) {
            localStorage.setItem("cosmic_wallpaper", settings.wallpaper)
            document.getElementById("wallpaperSelect").value = settings.wallpaper
            changeWallpaper(settings.wallpaper)
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

          if (settings.font) {
            localStorage.setItem("cosmic_font", settings.font)
            document.getElementById("fontSelect").value = settings.font
            changeFont(settings.font)
          }

          if (settings.customWallpaper) {
            localStorage.setItem("cosmic_custom_wallpaper", settings.customWallpaper)
          }

          alert("settings imported successfully!")
        } catch (error) {
          alert("error importing settings. please check the file format.")
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

// clear game history
function clearGameHistory() {
  if (confirm("are you sure you want to clear your game history?")) {
    gameHistory.length = 0
    localStorage.removeItem("cosmic_game_history")
    alert("game history cleared!")
  }
}

// clear cache
function clearCache() {
  if (confirm("are you sure you want to clear the cache? this will remove all stored data.")) {
    localStorage.clear()
    sessionStorage.clear()
    alert("cache cleared successfully!")
    location.reload()
  }
}

// reset settings
function resetSettings() {
  if (confirm("are you sure you want to reset all settings? this cannot be undone.")) {
    localStorage.removeItem("cosmic_disguise")
    localStorage.removeItem("cosmic_theme")
    localStorage.removeItem("cosmic_wallpaper")
    localStorage.removeItem("cosmic_animation_speed")
    localStorage.removeItem("cosmic_panic_key")
    localStorage.removeItem("cosmic_font")
    localStorage.removeItem("cosmic_custom_wallpaper")

    currentGame = null
    panicKey = "none"

    document.getElementById("disguiseSelect").value = "default"
    document.getElementById("themeSelect").value = "cosmic"
    document.getElementById("wallpaperSelect").value = "anime"
    document.getElementById("animationSpeed").value = "normal"
    document.getElementById("panicKeySelect").value = "none"
    document.getElementById("fontSelect").value = "default"

    changeDisguise("default")
    changeTheme("cosmic")
    changeWallpaper("anime")
    changeAnimationSpeed("normal")
    changeFont("default")
    setupPanicKey()

    alert("settings reset successfully!")
  }
}

// download backup
function downloadBackup() {
  const backup = {
    favorites: favorites,
    gameHistory: gameHistory,
    settings: {
      theme: localStorage.getItem("cosmic_theme") || "cosmic",
      disguise: localStorage.getItem("cosmic_disguise") || "default",
      wallpaper: localStorage.getItem("cosmic_wallpaper") || "anime",
      animationSpeed: localStorage.getItem("cosmic_animation_speed") || "normal",
      panicKey: localStorage.getItem("cosmic_panic_key") || "none",
      font: localStorage.getItem("cosmic_font") || "default",
      customWallpaper: localStorage.getItem("cosmic_custom_wallpaper") || "",
    },
    backupDate: new Date().toISOString(),
  }

  const dataStr = JSON.stringify(backup, null, 2)
  const dataBlob = new Blob([dataStr], { type: "application/json" })
  const url = URL.createObjectURL(dataBlob)

  const link = document.createElement("a")
  link.href = url
  link.download = `cosmic-backup-${new Date().toISOString().split("T")[0]}.json`
  link.click()

  URL.revokeObjectURL(url)
}
