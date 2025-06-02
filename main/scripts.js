        // Sample games data
        const games = [
            {
                id: 'tetris',
                title: 'Tetris',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjeVktZO974LWS4OT8ol_qw354N4_v0r_iOg&s',
                url: 'https://cyberschool-lol.w3spaces.com/g/tetris.html'
            },
            {
                id: 'spacebarclicker',
                title: 'Spacebar Clicker',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmy-2kxVy2rlT5Ow3HgzA2TM1XG3LEjCW4jQ&s',
                url: 'https://cyberschool-lol.w3spaces.com/g/spacebarclicker.html'
            },
            {
                id: 'drivemad',
                title: 'Drive Mad',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-N_lSYFKt6LA_J09xZT_hPocyhv-HrfPRp1hS8yWGx9HrP-dR1PqmqqCBbtd0mO-LME&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/g/drivemad/drivemad.html'
            },
            {
                id: 'cookieclicker',
                title: 'Cookie Clicker',
                icon: 'https://super142.wordpress.com/wp-content/uploads/2022/07/cookie-clicker.jpg?w=512',
                url: 'https://cyberschool-lol.w3spaces.com/redirecttocookieclicker.html'
            },
            {
                id: 'slope',
                title: 'Slope',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxbHjtINYOc0qGglkKLSMVJPyUy9nocKkRNTX5ndRb__WiDx3gvFeMEGdYfQDedoxcuU&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/slope.html'
            },
            {
                id: '2048',
                title: '2048',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC8LNTs0AsLHpjdIA4lSOst9zVgCp_QpE1l4gUp7pwaiKz6VIGgDgDQnhPSVBsDqYVbf4&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/2048.html'
            },
            {
                id: 'stickmanhook',
                title: 'Stickman Hook',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ThPGvGkZXiB7ONiZYbExYyGGv7_NoU3MIA&s',
                url: 'https://cyberschool-lol.w3spaces.com/g/stickmanhook.html'
            },
            {
                id: 'supermario64',
                title: 'Super Mario 64',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1XTyGKCQEUorm0TzFvcAzJU-caZs6riE0XDt-PGVfTgMVQ8V0kqdF9fi6H-BpbWj3Ak&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/supermario64.html'
            },
            {
                id: 'holeio',
                title: 'Hole IO',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFo6srxXVS73n8qnDidjQ7vLpG7Hl-LzUry2GTkvks0OdQnHZ0J-cLc24sfFq23ldqHus&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/holeio.html'
            },
            {
                id: 'stack',
                title: 'Stack',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiY00Lf-4FByPEO9-1G8KB3jBcXiuf1iO34j7LaKthxEd2KmggxTRNfx-qSVTioADFHI&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/stack.html'
            },
            {
                id: 'bloxorz',
                title: 'Bloxorz',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLH0EmQGEXMsxUZtYqJN0WTaht7mOxTmtXdQ&s',
                url: 'https://cyberschool-lol.w3spaces.com/g/bloxorz.html'
            },
            {
                id: 'eaglymc',
                title: 'EaglyMC (Minecraft)',
                icon: 'https://styles.redditmedia.com/t5_cy6b2j/styles/communityIcon_mglx222rn42e1.png',
                url: 'https://play.eaglercraft.win/eagler-files/modded/1.8/eaglymc/'
            },
            {
                id: 'bloonstowerdefense1',
                title: 'Bloons Tower Defense 1',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPKkkTZGCCb9VJMjgtiqbtGQBXOo9BRQRN9ICeXedHrPMnbjMmGTEg9rmMJaNcV8mIwGE&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/bloonstowerdefense1.html'
            },
            {
                id: 'bloonstowerdefense2',
                title: 'Bloons Tower Defense 2',
                icon: 'https://cyberschool-lol.w3spaces.com/img/bloonstowerdefense2.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/bloonstowerdefense2.html'
            },
            {
                id: 'paperio2',
                title: 'Paper IO 2',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHQ37qnCunUoRwCmbMQ4lrA7J0GLgwcJF1bEKbIm5ht9ZUTZMtHunwx8Z7sPZ_rzyhMk&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/paperio2/index.html'
            },
            {
                id: 'bitlife',
                title: 'Bitlife',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4ODZjp9Qf2WrRr0ashD-38bqUOUDdKd3zfg&s',
                url: 'https://cyberschool-lol.w3spaces.com/g/g/bitlife/index.html'
            },
            {
                id: 'timeshooter3',
                title: 'Time Shooter 3',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdZ5vqhX5_rZjHys79P7IF5qcp8tzpvRCJ5EL-PrArP7TstwtAru0YDywfmAU0A3xE12A&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/timeshooter3.html'
            },
            {
                id: 'snowrider3d',
                title: 'Snow Rider 3D',
                icon: 'https://cyberschool-lol.w3spaces.com/img/snow-rider-3d.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/snowrider3d.html'
            },
            {
                id: 'geometrydash',
                title: 'Geometry Dash',
                icon: 'https://cyberschool-lol.w3spaces.com/img/geometrydash.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/geometrydash.html'
            },
            {
                id: 'ninjavsevilcorp',
                title: 'Ninja vs EVILCORP',
                icon: 'https://cyberschool-lol.w3spaces.com/img/ninjavsevilcorp.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/ninjavsevilcorp.html'
            },
            {
                id: 'evilglitch',
                title: 'Evil Glitch',
                icon: 'https://cyberschool-lol.w3spaces.com/img/evilglitch.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/evilglitch.html'
            },
            {
                id: 'celeste',
                title: 'Celeste',
                icon: 'https://cyberschool-lol.w3spaces.com/img/celeste.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/celeste.html'
            },
            {
                id: 'trexrunner',
                title: 'T-Rex Runner',
                icon: 'https://cyberschool-lol.w3spaces.com/img/trex.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/trex.html'
            },
            {
                id: 'fluidsimulator',
                title: 'Fluid Simulator',
                icon: 'https://cyberschool-lol.w3spaces.com/img/fluidsimulator.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/fluidsimulator.html'
            },
            {
                id: 'learntoflyidle',
                title: 'Learn To Fly Idle',
                icon: 'https://cyberschool-lol.w3spaces.com/img/learntoflyidle.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/learntoflyidle.html'
            },
            {
                id: 'learntofly1',
                title: 'Learn To Fly 1',
                icon: 'https://cyberschool-lol.w3spaces.com/img/learntofly1.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/learntofly1.html'
            },
            {
                id: 'learntofly2',
                title: 'Learn To Fly 2',
                icon: 'https://cyberschool-lol.w3spaces.com/img/learntofly2.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/learntofly2.html'
            },
            {
                id: 'radiusraid',
                title: 'Radius Raid',
                icon: 'https://cyberschool-lol.w3spaces.com/img/radiusraid.png',
                url: 'https://cyberschool-lol.w3spaces.com/redirecttoradiusraid.html'
            },
            {
                id: 'stealingthediamond',
                title: 'Stealing The Diamond',
                icon: 'https://cyberschool-lol.w3spaces.com/img/stealingthediamond.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/stealingthediamond.html'
            },
            {
                id: 'breakingthebank',
                title: 'Breaking The Bank',
                icon: 'https://cyberschool-lol.w3spaces.com/img/breakingthebank.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/breakingthebank.html'
            },
            {
                id: 'escapingtheprison',
                title: 'Escaping The Prison',
                icon: 'https://cyberschool-lol.w3spaces.com/img/escapingtheprison.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/escapingtheprison.html'
            },
            {
                id: 'ducklife1',
                title: 'Duck Life 1',
                icon: 'https://cyberschool-lol.w3spaces.com/img/ducklife1.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/ducklife1.html'
            },
            {
                id: 'ducklife2',
                title: 'Duck Life 2',
                icon: 'https://cyberschool-lol.w3spaces.com/img/ducklife2.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/ducklife2.html'
            },
            {
                id: 'tubejumpers',
                title: 'Tube Jumpers',
                icon: 'https://cyberschool-lol.w3spaces.com/img/tubejumpers.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/tubejumpers.html'
            },
            {
                id: 'rollingforests',
                title: 'Rolling Forests',
                icon: 'https://cyberschool-lol.w3spaces.com/img/rollingforests.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/rollingforests.html'
            },
            {
                id: 'mountainmaze',
                title: 'Mountain Maze',
                icon: 'https://cyberschool-lol.w3spaces.com/img/mountainmaze.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/mountainmaze.html'
            },
            {
                id: 'ruffleflashplayer',
                title: 'Ruffle Flash Player',
                icon: 'https://cyberschool-lol.w3spaces.com/img/ruffleflashplayer.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/g/Ruffle/Ruffle.html'
            },
            {
                id: 'agariolite',
                title: 'Agario Lite',
                icon: 'https://cyberschool-lol.w3spaces.com/img/agariolite.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/agariolite.html'
            },
            {
                id: 'itsrainingboxes',
                title: 'Its Raining Boxes',
                icon: 'https://cyberschool-lol.w3spaces.com/img/itsrainingboxes.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/itsrainingboxes.html'
            },
            {
                id: 'justoneboss',
                title: 'Just One Boss',
                icon: 'https://cyberschool-lol.w3spaces.com/img/justoneboss.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/justoneboss.html'
            },
            {
                id: 'edgenotfound',
                title: 'Edge Not Found',
                icon: 'https://cyberschool-lol.w3spaces.com/img/edgenotfound.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/edgenotfound.html'
            },
            {
                id: 'raftwars',
                title: 'Raft Wars',
                icon: 'https://cyberschool-lol.w3spaces.com/img/raftwars.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/raftwars.html'
            },
            {
                id: 'raftwars2',
                title: 'Raft Wars 2',
                icon: 'https://cyberschool-lol.w3spaces.com/img/raftwars2.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/raftwars2.html'
            },
            {
                id: 'sandgame',
                title: 'Sand Game',
                icon: 'https://cyberschool-lol.w3spaces.com/img/sandgame.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/sandgame.html'
            },
            {
                id: 'offlineparadise',
                title: 'Offline Paradise',
                icon: 'https://cyberschool-lol.w3spaces.com/img/offlineparadise.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/offlineparadise.html'
            },
            {
                id: 'pacman',
                title: 'Pac-Man',
                icon: 'https://s3.amazonaws.com/gameopedia_covers/covers/831319/b216e14294b2e65f738fe483c3efafc0.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/pacman.html'
            },
            {
                id: 'floodrunner4',
                title: 'Flood Runner 4',
                icon: 'https://cyberschool-lol.w3spaces.com/img/floodrunner4.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/floodrunner4.html'
            },
            {
                id: 'worldshardestgame',
                title: 'Worlds Hardest Game',
                icon: 'https://cyberschool-lol.w3spaces.com/img/worldshardestgame.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/worldshardestgame.html'
            },
            {
                id: 'snake',
                title: 'Snake',
                icon: 'https://cyberschool-lol.w3spaces.com/img/snake.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/snake.html'
            },
            {
                id: 'driftboss',
                title: 'Drift Boss',
                icon: 'https://cyberschool-lol.w3spaces.com/img/driftboss.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/driftboss.html'
            },
            {
                id: 'breakout',
                title: 'Breakout',
                icon: 'https://cyberschool-lol.w3spaces.com/img/breakout.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/breakout.html'
            },
            {
                id: 'pong',
                title: 'Pong',
                icon: 'https://cyberschool-lol.w3spaces.com/img/pong.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/pong.html'
            },
            {
                id: 'chess',
                title: 'Chess',
                icon: 'https://cyberschool-lol.w3spaces.com/g/chess/screenshot.jpg',
                url: 'https://cyberschool-lol.w3spaces.com/g/chess/index.html'
            },
            {
                id: 'territorialio',
                title: 'Territoral.io',
                icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hB-jIYyXNCkhMFcwJ8Hl8hhBOyU-90cTn7lgnsrUW-w_-j71zfy8W0KG1CA8GpBQyos&usqp=CAU',
                url: 'https://cyberschool-lol.w3spaces.com/g/territorial.io.html'
            },
            {
                id: 'flappybird',
                title: 'Flappy Bird',
                icon: 'https://cyberschool-lol.w3spaces.com/img/flappybird.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/flappybird.html'
            },
            {
                id: 'theimpossiblequiz',
                title: 'The Impossible Quiz',
                icon: 'https://cyberschool-lol.w3spaces.com/img/theimpossiblequiz.png',
                url: 'https://cyberschool-lol.w3spaces.com/g/theimpossiblequiz.html'
            },
        ];

        let currentGames = [...games];
        let searchTimeout;

        // Initialize the website
        function init() {
            renderGames(currentGames);
            setupEventListeners();
            setupScrollAnimations();
        }

        // Render games grid
        function renderGames(gamesToRender) {
            const gamesGrid = document.getElementById('gamesGrid');
            gamesGrid.innerHTML = '';

            gamesToRender.forEach((game, index) => {
                const gameCard = document.createElement('div');
                gameCard.className = 'game-card scroll-reveal';
                gameCard.style.animationDelay = `${index * 0.05}s`;
                gameCard.innerHTML = `
                    <img class="game-icon" src="${game.icon}" alt="${game.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMTUiIGZpbGw9InVybCgjZ3JhZGllbnQpIi8+CjxwYXRoIGQ9Ik0zMCAyMEM0NCAyMCA0NCAyMCA0NCAzNEM0NCA0OCAzMCA0OCAzMCA0OEMxNiA0OCAxNiA0OCAxNiAzNEMxNiAyMCAzMCAyMCAzMCAyMFoiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudCIgeDE9IjAiIHkxPSIwIiB4Mj0iNjAiIHkyPSI2MCI+CjxzdG9wIHN0b3AtY29sb3I9IiM2NjdlZWEiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY0YmEyIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHN2Zz4K'">
                    <h3 class="game-title">${game.title}</h3>
                `;
                
                gameCard.addEventListener('click', () => {
                    playGame(game);
                });
                
                gamesGrid.appendChild(gameCard);
            });

            // Trigger scroll animations
            setTimeout(() => {
                revealScrollElements();
            }, 100);
        }

        // Setup event listeners
        function setupEventListeners() {
            const searchInput = document.getElementById('searchInput');
            const searchDropdown = document.getElementById('searchDropdown');
            
            searchInput.addEventListener('input', handleSearch);
            searchInput.addEventListener('focus', handleSearchFocus);
            searchInput.addEventListener('blur', handleSearchBlur);
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.search-container')) {
                    hideSearchDropdown();
                }
            });
            
            // Add keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    goHome();
                    hideSearchDropdown();
                }
            });
        }

        // Handle search functionality
        function handleSearch(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (searchTerm === '') {
                    hideSearchDropdown();
                    return;
                }
                
                const filteredGames = games.filter(game => 
                    game.title.toLowerCase().includes(searchTerm)
                );
                
                showSearchResults(filteredGames);
            }, 200);
        }

        function handleSearchFocus() {
            const searchInput = document.getElementById('searchInput');
            if (searchInput.value.trim()) {
                handleSearch({ target: searchInput });
            }
        }

        function handleSearchBlur() {
            // Delay hiding to allow clicks on dropdown items
            setTimeout(() => {
                hideSearchDropdown();
            }, 200);
        }

        function showSearchResults(results) {
            const dropdown = document.getElementById('searchDropdown');
            
            if (results.length === 0) {
                dropdown.innerHTML = '<div class="search-result">No games found</div>';
            } else {
                dropdown.innerHTML = results.map(game => `
                    <div class="search-result" onclick="playGameFromSearch('${game.id}')">
                        <img class="search-result-icon" src="${game.icon}" alt="${game.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iOCIgZmlsbD0idXJsKCNncmFkaWVudCkiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPgo8cGF0aCBkPSJNMTIgNkMyMCA2IDIwIDYgMjAgMTJDMjAgMjAgMTIgMjAgMTIgMjBDNCAyMCA0IDIwIDQgMTJDNCA2IDEyIDYgMTIgNloiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuOCIvPgo8L3N2Zz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwIiB5MT0iMCIgeDI9IjQwIiB5Mj0iNDAiPgo8c3RvcCBzdG9wLWNvbG9yPSIjNjY3ZWVhIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc2NGJhMiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo='">
                        <div class="search-result-name">${game.title}</div>
                    </div>
                `).join('');
            }
            
            dropdown.classList.add('show');
        }

        function hideSearchDropdown() {
            const dropdown = document.getElementById('searchDropdown');
            dropdown.classList.remove('show');
        }

        function playGameFromSearch(gameId) {
            const game = games.find(g => g.id === gameId);
            if (game) {
                playGame(game);
                hideSearchDropdown();
                document.getElementById('searchInput').value = '';
            }
        }

        // Play a game
        function playGame(game) {
            const homepage = document.getElementById('homepage');
            const gamePage = document.getElementById('gamePage');
            const gameFrame = document.getElementById('gameFrame');
            const gameTitle = document.getElementById('currentGameTitle');
            
            // Update game details
            gameTitle.textContent = game.title;
            gameFrame.src = game.url;
            
            // Show game page with animation
            homepage.style.opacity = '0';
            homepage.style.transform = 'translateX(-100px)';
            
            setTimeout(() => {
                homepage.classList.add('hidden');
                gamePage.style.display = 'flex';
                gamePage.style.opacity = '0';
                gamePage.style.transform = 'translateX(100px)';
                
                setTimeout(() => {
                    gamePage.style.opacity = '1';
                    gamePage.style.transform = 'translateX(0)';
                    gamePage.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 50);
            }, 250);
        }

        // Go back to homepage
        function goHome() {
            const homepage = document.getElementById('homepage');
            const gamePage = document.getElementById('gamePage');
            const gameFrame = document.getElementById('gameFrame');
            
            // Clear the iframe
            gameFrame.src = '';
            
            // Show homepage with animation
            gamePage.style.opacity = '0';
            gamePage.style.transform = 'translateX(100px)';
            
            setTimeout(() => {
                gamePage.style.display = 'none';
                homepage.classList.remove('hidden');
                homepage.style.opacity = '0';
                homepage.style.transform = 'translateX(-100px)';
                
                setTimeout(() => {
                    homepage.style.opacity = '1';
                    homepage.style.transform = 'translateX(0)';
                    homepage.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                }, 50);
            }, 250);
        }

        // Scroll animations
        function setupScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, observerOptions);

            // Observe all scroll-reveal elements
            document.querySelectorAll('.scroll-reveal').forEach(el => {
                observer.observe(el);
            });
        }

        function revealScrollElements() {
            document.querySelectorAll('.scroll-reveal').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('revealed');
                }, index * 50);
            });
        }

        // Toggle fullscreen for iframe
        function toggleFullscreen() {
            const gameFrame = document.getElementById('gameFrame');
            
            if (!document.fullscreenElement) {
                if (gameFrame.requestFullscreen) {
                    gameFrame.requestFullscreen();
                } else if (gameFrame.webkitRequestFullscreen) {
                    gameFrame.webkitRequestFullscreen();
                } else if (gameFrame.msRequestFullscreen) {
                    gameFrame.msRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            }
        }

        // Initialize when DOM is loaded
        document.addEventListener('DOMContentLoaded', init);