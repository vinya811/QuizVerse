// ==========================================
// QuizVerse - Leaderboard
// ==========================================


// GET LEADERBOARD DATA

async function loadLeaderboard() {

    const leaderboardList =
        document.getElementById("leaderboard-list");

    const topThree =
        document.getElementById("top-three");


    try {

        const response = await fetch(
            "https://quizverse-backend-si7g.onrender.com/api/user/leaderboard"
        );


        const data = await response.json();


        console.log(
            "Leaderboard data:",
            data
        );


        if (!response.ok) {

            throw new Error(
                "Failed to load leaderboard"
            );

        }


        // SORT BY POINTS

        data.sort(function(a, b) {

            return b.leaderboardPoints -
                   a.leaderboardPoints;

        });


        // CLEAR LOADING

        leaderboardList.innerHTML = "";

        topThree.innerHTML = "";


        // ==============================
        // TOP THREE
        // ==============================

        const medals = [
            "🥇",
            "🥈",
            "🥉"
        ];


        const classes = [
            "first",
            "second",
            "third"
        ];


        data.slice(0, 3).forEach(
            function(player, index) {

                const card =
                    document.createElement("div");


                card.classList.add(
                    "top-player",
                    classes[index]
                );


                card.innerHTML = `

                    <div class="rank-medal">
                        ${medals[index]}
                    </div>

                    <h3>
                        ${player.username}
                    </h3>

                    <p>
                        ${player.leaderboardPoints} Points
                    </p>

                `;


                topThree.appendChild(card);

            }
        );


        // ==============================
        // COMPLETE LEADERBOARD
        // ==============================

        data.forEach(
            function(player, index) {

                const row =
                    document.createElement("div");


                row.classList.add(
                    "player-row"
                );


                let rankDisplay =
                    index + 1;


                if (index === 0) {

                    rankDisplay = "🥇";

                }

                else if (index === 1) {

                    rankDisplay = "🥈";

                }

                else if (index === 2) {

                    rankDisplay = "🥉";

                }


                row.innerHTML = `

                    <span class="rank">
                        ${rankDisplay}
                    </span>

                    <span class="player-name">
                        ${player.username}
                    </span>

                    <span class="points">
                        ${player.leaderboardPoints}
                    </span>

                `;


                leaderboardList.appendChild(row);

            }
        );


    }

    catch (error) {

        console.error(
            "Leaderboard Error:",
            error
        );


        leaderboardList.innerHTML = `

            <p class="loading">
                ❌ Cannot load leaderboard.
            </p>

        `;

    }

}


// ==========================================
// BACK BUTTON
// ==========================================

document
    .getElementById("back-btn")
    .addEventListener(
        "click",
        function() {

            window.location.href =
                "index4.html";

        }
    );


// ==========================================
// LOAD LEADERBOARD
// ==========================================

loadLeaderboard();