document.addEventListener("DOMContentLoaded", function () {

    //SEARCH BAR------------------------------------------------------------------------------
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
    });//-------------------------------------------------------------------------------------



    //CATEGORY STRIP -------------------------------------------------------------------------
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
    });//------------------------------------------------------------------------------------



    //FOOTER CATEGORIES-----------------------------------------------------------------------
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
    });//-------------------------------------------------------------------------------------




    // CHANGING PRODUCTS BASED ON ADDRESS + SEARCH BAR INPUT ---------------------------------
    const searchBar = document.querySelector(".searchBar input[type='text']"); // The search bar
    const rachuImages = document.querySelectorAll("[id^='rachuImg']"); // Select all elements with IDs starting with "rachuImg"
    const searchTerm = document.querySelector(".searchTermBox2 h1"); // The <h1> inside .searchTermBox2
    // Function to determine the image URL based on input value
    const getData = (value) => {
        switch (value.toLowerCase()) {
            case "rachu":
                return { imageURL: "resources/kira1.png", text: "RACHU" };
            case "wonju":
                return { imageURL: "resources/kira2.png", text: "WONJU" };
            case "tego":
                return { imageURL: "resources/kira3.png", text: "TEGO" };
            case "kira":
                return { imageURL: "resources/kira4.png", text: "KIRA" };
            case "accessories":
                return { imageURL: "resources/kira5.png", text: "ACCESSORIES" };
            default:
                return { imageURL: "", text: "UNKNOWN" };
        }
    };
    // Function to update images and text dynamically
    const updatePageContent = (value) => {
        const { imageURL, text } = getData(value); // Get the data for the value
        // Update images
        if (imageURL) {
            rachuImages.forEach((rachuImage) => {
                rachuImage.style.backgroundImage = `url('${imageURL}')`;
            });
        }
        // Update the h1 text
        if (searchTerm && text) {
            searchTerm.textContent = text;
        }
    };
    // Check the URL's query parameter for the `q` value
    const params = new URLSearchParams(window.location.search);
    const queryValue = params.get("q");
    if (queryValue) {
        updatePageContent(queryValue); // Update page content based on the query parameter
    }
    // Add an event listener for search bar input
    if (searchBar) {
        searchBar.addEventListener("input", (event) => {
            const searchValue = event.target.value.trim(); // Get the trimmed search value
            updatePageContent(searchValue); // Update page content dynamically
        });
    }//-------------------------------------------------------------------------------------














});


