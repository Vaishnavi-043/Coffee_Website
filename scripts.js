function scrollToMenu() {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

function submitForm(event) {
    event.preventDefault(); // Prevent page reload
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').textContent = 'Thank you for your message, ' + name + '! We will get back to you soon.';
        document.getElementById('contactForm').reset(); // Clear the form
        document.getElementById('responseMessage').style.color = 'black';
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill in all fields.';
        document.getElementById('responseMessage').style.color = 'red';
    }
}

document.getElementById('menu-item').addEventListener('click',function onclick(){
    console.log("clicked...");
    const clickedimg =confirm(" have you  confirmed a coffee...");
    console.log(clickedimg);
});


document.querySelector('input[type="search"]').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const itemName = item.querySelector('h3').textContent.toLowerCase();
        item.style.display = itemName.includes(query) ? 'block' : 'none';
    });
});


document.getElementById("menuToggle").addEventListener("click", function () {
    const navLinks = document.getElementById("navLinks");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});



document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
    });
    const result = await response.json();
    document.getElementById('responseMessage').textContent = result.message;
});

//menu items 

function toggleDetails(id) {
    const details = document.getElementById(id);
    const button=details.previousElementSibling;

    if (details.style.display === "block") {
        details.style.display = "none";
        button.setAttribute("aria-expanded","false");
    } else {
        details.style.display = "block";
        button.setAttribute("aria-expanded","true");
    }
}



const menuItems = [
    {
        id: "espresso",
        name: "Espresso",
        price: "Rs.160",
        description: "A rich, dark coffee brewed by forcing a small amount of nearly boiling water through finely ground coffee beans.",
        image: "img/coffee1.jpg"
    },
    {
        id: "cappuccino",
        name: "Cappuccino",
        price: "Rs.190",
        description: "A classic espresso with steamed milk and a thick layer of foam, often topped with a sprinkle of cocoa powder.",
        image: "img/coffee2.jpg"
    },
    {
        id: "latte",
        name: "Latte",
        price: "Rs.200",
        description: "A coffee drink made with espresso and steamed milk, topped with a light layer of foam.",
        image: "img/coffee3.jpg"
    },
    {
        id: "Americano",
        name:"Americano",
        price :"Rs.180",
        description:"An espresso diluted with hot water to create a milder flavor, perfect for those who enjoy a less intense coffee taste.",
        image:"img/coffee4.jpge"
    },
    {
        id: "Mocha",
        name:"Mocha",
        price :"Rs.200",
        description:"A delightful blend of espresso, steamed milk, and chocolate syrup, topped with whipped cream.",
        image:"img/coffee5.jpg"
    },
    {
        id: "Ice Coffee",
        name:"Ice Coffee",
        price :"Rs.120",
        description:"Chilled brewed coffee served over ice, perfect for hot summer days or for a refreshing pick-me-up.",
        image:"img/coffee6.avif"
    }
];

function renderMenu() {
    const menuContainer = document.getElementById("menu-container");
    menuItems.forEach(item => {
        const menuItem = `
            <div class="item">
                <img src="${item.image}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.price}</p>
                <button onclick="toggleDetails('${item.id}-details')">Details</button>
                <div id="${item.id}-details" class="details">
                    <p>${item.description}</p>
                </div>
            </div>
        `;
        menuContainer.innerHTML += menuItem;
    });
}

// Call the function to render menu items
renderMenu();

//scroll to top Function 
window.onscroll = function() {
    const scrollButton = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
};

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


