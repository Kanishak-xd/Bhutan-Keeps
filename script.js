document.addEventListener("DOMContentLoaded", function () {

    // Text sequences for #box4 and #box5
    const box5Sequence = ["#ACCESSORIES", "#TEGO", "#KIRA", "#WONJU"];
    const box4Sequence = ["#KIRA", "#ACCESSORIES", "#TEGO", "#RACHU"];
    // Initial indices for tracking the current text
    let box4Index = 0;
    let box5Index = 0;
    // Get the h1 elements and the boxes
    const box4 = document.getElementById("box4");
    const box5 = document.getElementById("box5");
    const box4H1 = box4.querySelector("h1");
    const box5H1 = box5.querySelector("h1");
    // Function to update the text in #box4
    function updateBox4Text() {
        if (box4H1) {
            box4H1.textContent = box4Sequence[box4Index];
            box4Index = (box4Index + 1) % box4Sequence.length; // Loop back to the start
        }
    }
    // Function to update the text in #box5
    function updateBox5Text() {
        if (box5H1) {
            box5H1.textContent = box5Sequence[box5Index];
            box5Index = (box5Index + 1) % box5Sequence.length; // Loop back to the start
        }
    }
    // Function to handle box click and redirect based on the h1 text
    function handleBoxClick(box, h1Element) {
        const textToSearchTerm = {
            "#RACHU": "Rachu",
            "#TEGO": "Tego",
            "#WONJU": "Wonju",
            "#KIRA": "Kira",
            "#ACCESSORIES": "Accessories",
        };
        if (h1Element && textToSearchTerm[h1Element.textContent.trim()]) {
            const searchTerm = textToSearchTerm[h1Element.textContent.trim()];
            // Redirect to searches.html with the search term
            window.location.href = `searches.html?q=${encodeURIComponent(searchTerm)}`;
        }
    }
    // Attach click event listeners to #box4 and #box5
    if (box4) {
        box4.addEventListener("click", function () {
            handleBoxClick(box4, box4H1);
        });
    }
    if (box5) {
        box5.addEventListener("click", function () {
            handleBoxClick(box5, box5H1);
        });
    }
    // Start the intervals to update the text every 1 second
    setInterval(updateBox4Text, 2000); // Update #box4 every 1 second
    setInterval(updateBox5Text, 2000); // Update #box5 every 1 second



    const allContainers = document.querySelectorAll(".rachuBox"); // Get all rachuBox containers
    allContainers.forEach((rachuBox) => {
      const navLeft = rachuBox.parentElement.querySelector(".rachuNavLeft");
      const navRight = rachuBox.parentElement.querySelector(".rachuNavRight");
        if (navLeft && navRight) {
            // Scroll to left button
            navLeft.addEventListener("click", function () {
                rachuBox.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
            });
            // Scroll to right button
            navRight.addEventListener("click", function () {
                rachuBox.scrollTo({
                    left: rachuBox.scrollWidth,
                    behavior: "smooth",
                });
            });
        } else {
            console.warn("Navigation buttons not found for a .rachuBox container.");
        }
    });





    const searchInput = document.querySelector(".searchBar input");
    // Listen for the 'keydown' event
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") { 
            // Get input + remove extra spaces
            const query = searchInput.value.trim();
            if (query) {
                // Open the searches page and pass the query as a parameter
                window.location.href = `searches.html?q=${encodeURIComponent(query)}`;
            }
        }
    });




    // Redirect for h2 in .rachuHeader, click only on text
    const rachuHeaders = document.querySelectorAll(".rachuHeader h2");
    rachuHeaders.forEach((header) => {
        header.addEventListener("click", function (event) {
            // Create a Range object to measure the text bounds
            const range = document.createRange();
            range.selectNodeContents(header);

            // Get the bounding rectangle of the text
            const textRect = range.getBoundingClientRect();

            // Get the bounding rectangle of the click
            const clickX = event.clientX;
            const clickY = event.clientY;

            // Check if the click is within the text bounds
            if (
                clickX >= textRect.left &&
                clickX <= textRect.right &&
                clickY >= textRect.top &&
                clickY <= textRect.bottom
            ) {
                let sectionTitle = header.textContent.trim();

                // Remove 'See all' and any unwanted characters after it (like arrows or extra symbols)
                sectionTitle = sectionTitle.replace('See all ', '').replace(/[^\w\s]/g, '').trim();

                // Redirect to searches.html with the cleaned search term
                window.location.href = `searches.html?q=${encodeURIComponent(sectionTitle)}`;
            }
        });
    });




    // Mapping categBox IDs to their respective search terms
    const categBoxMappings = {
        categBox4: "Rachu",
        categBox5: "Tego",
        categBox12: "Wonju",
        categBox13: "Kira",
        categBox11: "Accessories",
    };
    // Add event listeners to each categBox
    Object.keys(categBoxMappings).forEach((categBoxId) => {
        const categBox = document.getElementById(categBoxId);
        if (categBox) {
            categBox.addEventListener("click", function () {
                const searchTerm = categBoxMappings[categBoxId]; // Get the search term
                // Redirect to searches.html and pass the search term as a query parameter
                window.location.href = `searches.html?q=${encodeURIComponent(searchTerm)}`;
            });
        }
    });

    // GO TO SEARCHES PAGE + SET SEARCHBAR = Rachu
    function redirectToSearchWithRachu() {
        window.location.href = "searches.html?q=" + encodeURIComponent("Rachu");
    } 
    // GO TO SEARCHES PAGE + SET SEARCHBAR = Wonju
    function redirectToSearchWithWonju() {
        window.location.href = "searches.html?q=" + encodeURIComponent("Wonju");
    } 
    // GO TO SEARCHES PAGE + SET SEARCHBAR = Tego
    function redirectToSearchWithTego() {
        window.location.href = "searches.html?q=" + encodeURIComponent("Tego");
    } 
    // GO TO SEARCHES PAGE + SET SEARCHBAR = Kira
    function redirectToSearchWithKira() {
        window.location.href = "searches.html?q=" + encodeURIComponent("Kira");
    } 
    // GO TO SEARCHES PAGE + SET SEARCHBAR = Accessories
    function redirectToSearchWithAccessories() {
        window.location.href = "searches.html?q=" + encodeURIComponent("Accessories");
    } 
    // Correct selector for footer links
    const footerLinks = document.querySelectorAll(".footer-section ul li a");

    footerLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const linkText = link.textContent.trim(); // Get the text content of the link

            // Trigger the appropriate function based on link text
            switch (linkText) {
                case "Shop for Rachu":
                    redirectToSearchWithRachu();
                    break;
                case "Shop for Wonju":
                    redirectToSearchWithWonju();
                    break;
                case "Shop for Tego":
                    redirectToSearchWithTego();
                    break;
                case "Shop for Kira":
                    redirectToSearchWithKira();
                    break;
                case "Shop for Accessories":
                    redirectToSearchWithAccessories();
                    break;
                default:
                    console.warn("No matching function for:", linkText);
            }
        });
    });





    // Correct selector for categories links
    const categoryLinks = document.querySelectorAll(".categories ul li a");

    categoryLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const linkText = link.textContent.trim(); // Get the text content of the link

            // Trigger the appropriate function based on link text
            switch (linkText) {
                case "Rachu":
                    window.location.href = "searches.html?q=" + encodeURIComponent("Rachu");
                    break;
                case "Tego":
                    window.location.href = "searches.html?q=" + encodeURIComponent("Tego");
                    break;
                case "Wonju":
                    window.location.href = "searches.html?q=" + encodeURIComponent("Wonju");
                    break;
                case "Kira":
                    window.location.href = "searches.html?q=" + encodeURIComponent("Kira");
                    break;
                case "Accessories":
                    window.location.href = "searches.html?q=" + encodeURIComponent("Accessories");
                    break;
                default:
                    console.warn("No matching function for:", linkText);
            }
        });
    });










});

