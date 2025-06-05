// Global variables
let games = []
let filteredGames = []
let currentPhraseIndex = 0
let currentCharIndex = 0
let isDeleting = false
let typingSpeed = 65
let currentGame = null
let panicKey = localStorage.getItem("cosmic_panic_key") || "none"
const favorites = JSON.parse(localStorage.getItem("cosmic_favorites")) || [] // Declare favorites variable

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
          })
        }
      })

      // Render games
      filteredGames = [...games]
      renderGames()
      setupGameFilters()
      console.log(`Loaded ${games.length} games from https://list.classroomsarecool.mex.com`)
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
        },
        {
          id: "2048",
          title: "2048",
          icon: "https://play-lh.googleusercontent.com/JMNWaZel_qg6qj2Kbbh1YZ1RxZ3iFmBxTRCThF9Qn-uX0t-j12B3dHIWgY8Vr9Rr_Q",
          url: "https://play2048.co/",
          category: "puzzle",
        },
        {
          id: "tetris",
          title: "Tetris",
          icon: "https://play-lh.googleusercontent.com/za2Nu_qjMw5GzWfbzet4zeiZT1vPhjzVZ5sQpfT1HG8BUMrYXZgDdmNJUYHDXQpYEFs",
          url: "https://tetris.com/play-tetris",
          category: "puzzle",
        },
        {
          id: "minecraft",
          title: "Minecraft Classic",
          icon: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
          url: "https://classic.minecraft.net/",
          category: "action",
        },
        {
          id: "snake",
          title: "Snake",
          icon: "https://img.poki.com/cdn-cgi/image/quality=78,width=600,height=600,fit=cover,f=auto/12a0ed7c6bc09b73d6558c6f69ed7f5f.png",
          url: "https://www.google.com/fbx?fbx=snake_arcade",
          category: "arcade",
        },
      ]

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

    // Add click event to open the game
    gameButton.addEventListener("click", () => {
      window.open(game.url, "_blank")
    })

    const gameImg = document.createElement("img")
    gameImg.src = game.icon
    gameImg.alt = game.title
    gameImg.loading = "lazy"

    const overlayText = document.createElement("div")
    overlayText.className = "overlay-text"
    overlayText.textContent = game.title

    gameButton.appendChild(gameImg)
    gameButton.appendChild(overlayText)

    gameButton.style.animationDelay = `${index * 0.05}s`

    gamesGrid.appendChild(gameButton)
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

// Open game in modal - updated to use data-url
function openGame(id, title, url) {
  // Set current game
  currentGame = {
    id: id,
    title: title,
    url: url, // This will be the data-url from the response
  }

  // Update game title
  document.getElementById("currentGameTitle").textContent = title

  // Create iframe with the data-url
  const gameContainer = document.getElementById("gameContainer")

  // If no URL is provided, show error message
  if (!url || url === "") {
    gameContainer.innerHTML = `
      <div class="no-game-selected">
        <i class="ri-alert-line"></i>
        <h3>Game URL not available</h3>
        <p>This game doesn't have a valid URL to load.</p>
      </div>
    `
  } else {
    gameContainer.innerHTML = `<iframe src="${url}" class="game-iframe" allowfullscreen sandbox="allow-scripts allow-same-origin allow-forms allow-popups"></iframe>`
  }

  // Show modal
  const gameModal = document.getElementById("gameModal")
  gameModal.classList.add("show")

  // Disable scrolling on body
  document.body.style.overflow = "hidden"

  console.log(`Loading game: ${title} with URL: ${url}`)
}

// Close game modal
function closeGameModal() {
  const gameModal = document.getElementById("gameModal")
  gameModal.classList.remove("show")

  // Clear iframe to stop game
  const gameContainer = document.getElementById("gameContainer")
  gameContainer.innerHTML = ""

  // Enable scrolling on body
  document.body.style.overflow = ""
}

// Custom proxy server implementation
class SimpleProxy {
  constructor() {
    this.proxyFrame = null
    this.proxyContainer = null
    this.currentUrl = null
    this.isLoading = false
  }

  // Initialize the proxy
  init() {
    this.proxyFrame = document.getElementById("proxyFrame")
    this.proxyContainer = document.getElementById("proxyFrameContainer")

    if (!this.proxyFrame || !this.proxyContainer) {
      console.error("Proxy elements not found")
      return
    }

    // Create proxy server endpoint
    this.createProxyEndpoint()
  }

  // Create a service worker for the proxy if supported
  createProxyEndpoint() {
    if ("serviceWorker" in navigator) {
      // Register a service worker for proxy functionality
      navigator.serviceWorker
        .register("/proxy-worker.js")
        .then((registration) => {
          console.log("Proxy service worker registered:", registration)
        })
        .catch((error) => {
          console.error("Service worker registration failed:", error)
        })
    }
  }

  // Load URL in proxy
  loadUrl(url) {
    if (!url) {
      alert("Please enter a URL to browse")
      return false
    }

    // Ensure URL has protocol
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url
    }

    this.currentUrl = url
    this.isLoading = true

    try {
      // Show loading state
      this.proxyContainer.classList.add("loading")
      this.proxyContainer.classList.add("show")

      // Use data URL approach for simple sites
      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${url}</title>
          <style>
            body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
            .proxy-frame { width: 100%; height: 100%; border: none; }
            .proxy-message { 
              font-family: Arial, sans-serif; 
              padding: 20px; 
              text-align: center;
              color: #333;
            }
            .proxy-header {
              background: #f1f1f1;
              padding: 10px;
              border-bottom: 1px solid #ddd;
              display: flex;
              align-items: center;
            }
            .proxy-url {
              flex: 1;
              padding: 5px;
              margin: 0 10px;
              font-size: 14px;
            }
            .proxy-btn {
              background: #4285f4;
              color: white;
              border: none;
              padding: 5px 10px;
              border-radius: 3px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <div class="proxy-header">
            <span>Browsing: ${url}</span>
          </div>
          <iframe src="${url}" class="proxy-frame" sandbox="allow-forms allow-scripts allow-same-origin"></iframe>
          <script>
            // Handle iframe load errors
            document.querySelector('.proxy-frame').onerror = function() {
              this.style.display = 'none';
              document.body.innerHTML += '<div class="proxy-message">Unable to load the requested website. The site may be blocking iframe access or require authentication.</div>';
            };
          </script>
        </body>
        </html>
      `

      // Use a data URL to load the content
      this.proxyFrame.src = `data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`

      // Handle load events
      this.proxyFrame.onload = () => {
        this.isLoading = false
        this.proxyContainer.classList.remove("loading")
      }

      this.proxyFrame.onerror = () => {
        this.isLoading = false
        this.proxyContainer.classList.remove("loading")
        alert("Failed to load the website. The site may be blocking iframe access.")
      }

      return true
    } catch (error) {
      console.error("Error loading proxy:", error)
      this.proxyContainer.classList.remove("loading")
      this.proxyContainer.classList.remove("show")
      alert("Failed to load the proxy. Please try again.")
      return false
    }
  }

  // Open URL in new tab
  openInNewTab(url) {
    if (!url) url = this.currentUrl
    if (!url) {
      url = document.getElementById("proxyUrl").value.trim()
    }

    if (!url) {
      alert("Please enter a URL to browse")
      return
    }

    // Ensure URL has protocol
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = "https://" + url
    }

    // Open in new tab
    window.open(url, "_blank")
  }

  // Close the proxy
  close() {
    this.proxyContainer.classList.remove("show")
    this.proxyFrame.src = "about:blank"
    this.currentUrl = null
  }
}

// Create proxy instance
const simpleProxy = new SimpleProxy()

// Function to open proxy with entered URL
function openProxy() {
  const proxyUrl = document.getElementById("proxyUrl").value.trim()
  simpleProxy.loadUrl(proxyUrl)
}

// Function to open proxy in new tab
function openProxyNewTab() {
  const proxyUrl = document.getElementById("proxyUrl").value.trim()
  simpleProxy.openInNewTab(proxyUrl)
}

// Function to close proxy
function closeProxy() {
  simpleProxy.close()
}

// Update the proxy container in the tools section
function updateProxyContainer() {
  const proxyContainer = document.querySelector(".proxy-container")
  if (proxyContainer) {
    proxyContainer.innerHTML = `
      <div class="proxy-input-group">
        <input 
          type="url" 
          class="proxy-input" 
          placeholder="Enter website URL (e.g., youtube.com)" 
          id="proxyUrl"
        >
        <button class="proxy-btn" onclick="openProxy()" title="Load in frame">
          <i class="ri-arrow-right-line"></i>
        </button>
        <button class="proxy-btn" onclick="openProxyNewTab()" title="Open in new tab">
          <i class="ri-external-link-line"></i>
        </button>
      </div>
      <div class="proxy-frame-container" id="proxyFrameContainer">
        <div class="proxy-controls">
          <button class="proxy-control-btn" onclick="closeProxy()">
            <i class="ri-close-line"></i>
            Close
          </button>
          <button class="proxy-control-btn" onclick="openProxyNewTab()">
            <i class="ri-external-link-line"></i>
            Open in New Tab
          </button>
        </div>
        <iframe id="proxyFrame" class="proxy-frame" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
      </div>
    `
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
              "You are a helpful AI assistant for an unblocked gaming website called 'cosmic.'. cosmic. Was made with the purpose of bypassing school and work restrictions and promoting student freedom. You help users with games, website features, and general questions. Keep responses concise and friendly.",
          },
          {
            role: "user",
            content: message,
          },
        ],
        max_tokens: 999,
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

// Game control functions
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
  const iframe = gameContainer.querySelector("iframe")

  if (!document.fullscreenElement) {
    if (iframe) {
      iframe.requestFullscreen()
    } else {
      gameContainer.requestFullscreen()
    }
  } else {
    document.exitFullscreen()
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
})

// Add keyboard event listener for ESC key to close modal
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGameModal()
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

  if (games.length === 0) {
    gamesList.innerHTML = '<div class="loading-games">Loading games...</div>'
    return
  }

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
          window.open(game.url, "_blank")
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
    case "mountains":
      mountainBackground.classList.add("show")
      break
    case "stars":
      starsContainer.style.display = "block"
      break
    case "particles":
      starsContainer.style.display = "block"
      break
    case "aurora":
      starsContainer.style.display = "block"
      break
    case "none":
      break
  }
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
    background: localStorage.getItem("cosmic_background") || "mountainBackground",
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
    document.getElementById("backgroundSelect").value = "stars"
    document.getElementById("animationSpeed").value = "normal"
    document.getElementById("panicKeySelect").value = "none"
    document.getElementById("fontSelect").value = "default"

    changeDisguise("default")
    changeTheme("cosmic")
    changeBackground("stars")
    changeAnimationSpeed("normal")
    changeFont("default")
    setupPanicKey()

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
