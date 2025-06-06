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
    title: "Ninja VS EvilCorp",
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
    id: "emojilegends",
    title: "Emoji Legends",
    icon: "https://cyberschool-lol.w3spaces.com/img/emojilegends.png",
    url: "https://cyberschool-lol.w3spaces.com/g/emojilegends.html",
    category: "action",
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
  // Add more games here as needed
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
  "endless entertainment at your fingertips.",
  "where school restrictions are nonexistent.",
  "play without limits, anytime, anywhere - no restrictions.",
  "the digital repository of gaming and entertainment.",
  "discover, play, and enjoy thousands of games.",
  "your gateway to unlimited gaming freedom.",
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
    title: "Inspect Element",
    description: "Enable inspect element on restricted sites.",
    code: `javascript:(function(){var script=document.createElement('script');script.src='https://cdn.jsdelivr.net/gh/ianramzy/decancer@main/index.js';document.head.appendChild(script);})();`,
  },
  {
    title: "Auto Clicker",
    description: "Automatic clicking tool for games and websites.",
    code: `javascript:(function(){var clicking=false;var interval;function toggleClicker(){if(clicking){clearInterval(interval);clicking=false;alert('Auto clicker stopped');}else{interval=setInterval(function(){document.elementFromPoint(event.clientX,event.clientY).click();},100);clicking=true;alert('Auto clicker started - move mouse to target');}}document.addEventListener('keydown',function(e){if(e.key==='c'&&e.ctrlKey&&e.shiftKey){e.preventDefault();toggleClicker();}});alert('Press Ctrl+Shift+C to toggle auto clicker');})();`,
  },
]

// Load games from the API
function loadGames() {
  fetch("https://list.classroomsarecool.mex.com")
    .then((response) => response.text())
    .then((data) => {
      const tempDiv = document.createElement("div")
      tempDiv.innerHTML = data

      const links = tempDiv.querySelectorAll("a")
      const gamesGrid = document.getElementById("games-grid")

      gamesGrid.innerHTML = ""
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
      setupGameFilters()
      console.log(`Loaded ${games.length} games from API and custom games`)
    })
    .catch((error) => {
      console.error("Error loading games:", error)
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
      setupGameFilters()
    })
}

// Render games in square layout
function renderGames() {
  const gamesGrid = document.getElementById("games-grid")
  gamesGrid.innerHTML = ""

  if (filteredGames.length === 0) {
    gamesGrid.innerHTML = `
      <div class="no-games-found">
        <i class="ri-search-line"></i>
        <h3>No games found</h3>
        <p>Try adjusting your search or filter criteria.</p>
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
          font-family: Arial, sans-serif;
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
          <button class="control-btn" onclick="toggleFullscreen()">Fullscreen</button>
          <button class="control-btn" onclick="window.close()">Close</button>
        </div>
      </div>
      <div class="game-container">
        <iframe src="${game.url}" allowfullscreen sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"></iframe>
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

// Render favorites
function renderFavorites() {
  const favoritesGrid = document.getElementById("favorites-grid")
  const noFavorites = document.getElementById("noFavorites")

  if (favorites.length === 0) {
    noFavorites.style.display = "flex"
    return
  }

  noFavorites.style.display = "none"
  favoritesGrid.innerHTML = ""

  const favoriteGames = games.filter((game) => favorites.includes(game.id))

  favoriteGames.forEach((game, index) => {
    const gameButton = document.createElement("div")
    gameButton.className = "game-button"

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

    const favoriteBtn = document.createElement("button")
    favoriteBtn.className = "favorite-btn favorited"
    favoriteBtn.innerHTML = `<i class="ri-star-fill"></i>`
    favoriteBtn.onclick = (e) => {
      e.stopPropagation()
      toggleFavorite(game.id)
    }

    gameButton.appendChild(gameImg)
    gameButton.appendChild(overlayText)
    gameButton.appendChild(favoriteBtn)

    gameButton.style.animationDelay = `${index * 0.05}s`

    favoritesGrid.appendChild(gameButton)
  })
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
    alert("Please set a valid time!")
    return
  }

  timerRunning = true
  timerInterval = setInterval(() => {
    if (timerTime <= 0) {
      clearInterval(timerInterval)
      timerRunning = false
      alert("Timer finished!")
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

// Ruffle emulator functions
function loadFlashGame() {
  const url = document.getElementById("ruffleUrl").value.trim()
  if (!url) {
    alert("Please enter a Flash game URL!")
    return
  }

  const container = document.getElementById("ruffleFrameContainer")
  container.innerHTML = `
    <script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
    <ruffle-embed src="${url}" width="100%" height="400px"></ruffle-embed>
  `
}

// Dictionary functions
function lookupWord() {
  const word = document.getElementById("dictionaryInput").value.trim()
  if (!word) {
    alert("Please enter a word to look up!")
    return
  }

  const resultsContainer = document.getElementById("dictionaryResults")
  resultsContainer.innerHTML = `
    <div class="dictionary-loading">
      <i class="ri-loader-4-line loading-spinner"></i>
      <p>Looking up "${word}"...</p>
    </div>
  `

  // Use a free dictionary API
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.title === "No Definitions Found") {
        resultsContainer.innerHTML = `
          <div class="dictionary-error">
            <i class="ri-alert-line"></i>
            <h4>No definition found</h4>
            <p>Sorry, we couldn't find a definition for "${word}".</p>
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
      console.error("Dictionary error:", error)
      resultsContainer.innerHTML = `
        <div class="dictionary-error">
          <i class="ri-alert-line"></i>
          <h4>Error</h4>
          <p>Failed to look up the word. Please try again.</p>
        </div>
      `
    })
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
              "You are a helpful AI assistant for a gaming website called 'cosmic.' You help users with games, website features, and general questions. Keep responses concise and friendly.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 150,
        temperature: 0.7,
      }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error("Error calling Groq API:", error)
    // Fallback responses
    const fallbackResponses = [
      "I'm here to help! What would you like to know about cosmic?",
      "Sorry, I'm having trouble connecting right now. Try asking about our games or features!",
      "I can help you with games, settings, or general questions about the site.",
      "Have you tried checking out our games section? There are tons of great options!",
      "The tools section has some useful features you might find interesting.",
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
        <div class="message-content">Sorry, I'm having trouble responding right now. Please try again!</div>
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

// initialize the page
document.addEventListener("DOMContentLoaded", () => {
  createStars()
  loadGames()
  renderBookmarklets()
  setupSearch()
  setupGamesSearch()
  setupNavbar()
  setupMobileMenu()
  setupSettings()
  loadSettings()
  startTypingAnimation()
  setupPanicKey()
  setupBackgroundEffects()
  renderFavorites()
  updateStats()
})

// Add keyboard event listener for ESC key to close modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeAddGameModal()
    closePrivacyModal()
    closeTermsModal()
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

    // Special handling for favorites section
    if (sectionName === "favorites") {
      renderFavorites()
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
  const backgroundSelect = document.getElementById("backgroundSelect")
  const animationSpeed = document.getElementById("animationSpeed")
  const panicKeySelect = document.getElementById("panicKeySelect")
  const fontSelect = document.getElementById("fontSelect")

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

  fontSelect.addEventListener("change", function () {
    changeFont(this.value)
    localStorage.setItem("cosmic_font", this.value)
  })
}

// load saved settings
function loadSettings() {
  const savedDisguise = localStorage.getItem("cosmic_disguise")
  const savedTheme = localStorage.getItem("cosmic_theme")
  const savedBackground = localStorage.getItem("cosmic_background")
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
    google: { title: "Google", icon: "https://www.google.com/favicon.ico" },
    drive: {
      title: "My Drive - Google Drive",
      icon: "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png",
    },
    gmail: { title: "Gmail", icon: "https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico" },
    classroom: { title: "Classes", icon: "https://ssl.gstatic.com/classroom/favicon.png" },
    docs: { title: "Google Docs", icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" },
    canvas: { title: "Dashboard", icon: "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" },
    zoom: { title: "Zoom", icon: "https://st1.zoom.us/zoom.ico" },
    teams: {
      title: "Microsoft Teams",
      icon: "https://res.cdn.office.net/teams/1.3.00.4461/images/favicons/favicon-96x96.png",
    },
    youtube: { title: "YouTube", icon: "https://www.youtube.com/favicon.ico" },
    netflix: { title: "Netflix", icon: "https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico" },
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

  // Remove any existing dynamic backgrounds
  const existingBg = document.querySelector(".dynamic-background")
  if (existingBg) {
    existingBg.remove()
  }

  switch (type) {
    case "stars":
      starsContainer.style.display = "block"
      break
    case "mountains":
      mountainBackground.classList.add("show")
      break
    case "particles":
      starsContainer.style.display = "block"
      break
    case "aurora":
      starsContainer.style.display = "block"
      break
    case "rain":
      createDigitalRain()
      break
    case "ocean":
      createOceanBackground()
      break
    case "islands":
      createIslandsBackground()
      break
    case "clouds":
      createCloudsBackground()
      break
    case "none":
      break
  }
}

// Create ocean background
function createOceanBackground() {
  const oceanBg = document.createElement("div")
  oceanBg.className = "dynamic-background ocean-background"
  oceanBg.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #001122 0%, #003366 50%, #004488 100%);
    z-index: 0;
  `

  // Add animated waves
  for (let i = 0; i < 3; i++) {
    const wave = document.createElement("div")
    wave.style.cssText = `
      position: absolute;
      bottom: ${i * 20}px;
      left: 0;
      width: 200%;
      height: 100px;
      background: linear-gradient(90deg, transparent, rgba(0, 150, 255, 0.3), transparent);
      border-radius: 50px;
      animation: wave ${3 + i}s ease-in-out infinite;
      animation-delay: ${i * 0.5}s;
    `
    oceanBg.appendChild(wave)
  }

  // Add wave animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes wave {
      0%, 100% { transform: translateX(-50%) translateY(0px); }
      50% { transform: translateX(-50%) translateY(-20px); }
    }
  `
  document.head.appendChild(style)

  document.body.appendChild(oceanBg)
}

// Create floating islands background
function createIslandsBackground() {
  const islandsBg = document.createElement("div")
  islandsBg.className = "dynamic-background islands-background"
  islandsBg.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #87CEEB 0%, #98D8E8 50%, #B0E0E6 100%);
    z-index: 0;
  `

  // Add floating islands
  for (let i = 0; i < 5; i++) {
    const island = document.createElement("div")
    island.style.cssText = `
      position: absolute;
      width: ${Math.random() * 100 + 50}px;
      height: ${Math.random() * 50 + 30}px;
      background: #228B22;
      border-radius: 50% 50% 0 0;
      top: ${Math.random() * 70 + 10}%;
      left: ${Math.random() * 80 + 10}%;
      animation: float ${Math.random() * 3 + 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `
    islandsBg.appendChild(island)
  }

  // Add floating animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
  `
  document.head.appendChild(style)

  document.body.appendChild(islandsBg)
}

// Create moving clouds background
function createCloudsBackground() {
  const cloudsBg = document.createElement("div")
  cloudsBg.className = "dynamic-background clouds-background"
  cloudsBg.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #87CEEB 0%, #B0C4DE 50%, #D3D3D3 100%);
    z-index: 0;
    overflow: hidden;
  `

  // Add moving clouds
  for (let i = 0; i < 8; i++) {
    const cloud = document.createElement("div")
    cloud.style.cssText = `
      position: absolute;
      width: ${Math.random() * 150 + 100}px;
      height: ${Math.random() * 60 + 40}px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50px;
      top: ${Math.random() * 60 + 10}%;
      left: -200px;
      animation: moveCloud ${Math.random() * 20 + 15}s linear infinite;
      animation-delay: ${Math.random() * 10}s;
    `
    cloudsBg.appendChild(cloud)
  }

  // Add cloud movement animation
  const style = document.createElement("style")
  style.textContent = `
    @keyframes moveCloud {
      0% { transform: translateX(-200px); }
      100% { transform: translateX(calc(100vw + 200px)); }
    }
  `
  document.head.appendChild(style)

  document.body.appendChild(cloudsBg)
}

// Create digital rain effect
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
    z-index: 1;
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
  document.body.className = document.body.className.replace(/\b(orbitron|comfortaa|mono)-font\b/g, "")

  if (font === "orbitron") {
    document.body.classList.add("orbitron-font")
  } else if (font === "comfortaa") {
    document.body.classList.add("comfortaa-font")
  } else if (font === "mono") {
    document.body.classList.add("mono-font")
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
  const savedBackground = localStorage.getItem("cosmic_background") || "mountains"
  changeBackground(savedBackground)
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
          alert("Favorites imported successfully!")
        } catch (error) {
          alert("Error importing favorites. Please check the file format.")
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
    background: localStorage.getItem("cosmic_background") || "mountains",
    animationSpeed: localStorage.getItem("cosmic_animation_speed") || "normal",
    panicKey: localStorage.getItem("cosmic_panic_key") || "none",
    font: localStorage.getItem("cosmic_font") || "default",
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

          if (settings.font) {
            localStorage.setItem("cosmic_font", settings.font)
            document.getElementById("fontSelect").value = settings.font
            changeFont(settings.font)
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

// clear game history
function clearGameHistory() {
  if (confirm("Are you sure you want to clear your game history?")) {
    gameHistory.length = 0
    localStorage.removeItem("cosmic_game_history")
    alert("Game history cleared!")
  }
}

// clear cache
function clearCache() {
  if (confirm("Are you sure you want to clear the cache? This will remove all stored data.")) {
    localStorage.clear()
    sessionStorage.clear()
    alert("Cache cleared successfully!")
    location.reload()
  }
}

// reset settings
function resetSettings() {
  if (confirm("Are you sure you want to reset all settings? This cannot be undone.")) {
    localStorage.removeItem("cosmic_disguise")
    localStorage.removeItem("cosmic_theme")
    localStorage.removeItem("cosmic_background")
    localStorage.removeItem("cosmic_animation_speed")
    localStorage.removeItem("cosmic_panic_key")
    localStorage.removeItem("cosmic_font")

    currentGame = null
    panicKey = "none"

    document.getElementById("disguiseSelect").value = "default"
    document.getElementById("themeSelect").value = "cosmic"
    document.getElementById("backgroundSelect").value = "mountains"
    document.getElementById("animationSpeed").value = "normal"
    document.getElementById("panicKeySelect").value = "none"
    document.getElementById("fontSelect").value = "default"

    changeDisguise("default")
    changeTheme("cosmic")
    changeBackground("mountains")
    changeAnimationSpeed("normal")
    changeFont("default")
    setupPanicKey()

    alert("Settings reset successfully!")
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
      background: localStorage.getItem("cosmic_background") || "mountains",
      animationSpeed: localStorage.getItem("cosmic_animation_speed") || "normal",
      panicKey: localStorage.getItem("cosmic_panic_key") || "none",
      font: localStorage.getItem("cosmic_font") || "default",
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
