const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//NAV BAR element
//retrieves all anchor tags
let anchors = document.getElementsByTagName("a");
let anchorsArray = Array.from(anchors);
//adds text content from site content object to each anchor element
anchorsArray.forEach((anchor, index) => {
  anchor.textContent = siteContent["nav"][`nav-item-${index+1}`];
});

//HEADER IMG
let codeCircle = document.getElementById("cta-img");
codeCircle.setAttribute('src', siteContent["cta"]["img-src"]);

//HEADER TEXT
let headerText = document.querySelector(".cta-text h1");
headerText.innerHTML = "Dom<br>is<br>Awesome";

//CTA BUTTON
let getStartedButton = document.querySelector(".cta button");
//Adding br tags to the header text
getStartedButton.textContent = siteContent["cta"]["button"];


//MAIN CONTENT

let mainOptions = ["features", "about", "services", "product", "vision"];
//H4
let sectionTitles = document.querySelectorAll(".main-content .text-content h4");
sectionTitlesArray = Array.from(sectionTitles);

sectionTitlesArray.forEach((sectionTitle, index) => {
  sectionTitle.textContent = siteContent["main-content"][`${mainOptions[index]}-h4`];
});

//MIDDLE IMG
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Content
let sectionContent = document.querySelectorAll(".main-content .text-content p");
sectionContentArray = Array.from(sectionContent);

sectionContentArray.forEach((sectionContent, index) => {
  sectionContent.textContent = siteContent["main-content"][`${mainOptions[index]}-content`];
});


//CONTACT SECTION
contactOptions = ["address", "phone", "email"]
let contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent["contact"]["contact-h4"];

let contactArray = document.querySelectorAll(".contact p");
contactArray.forEach((option, index) => {
  option.textContent = siteContent["contact"][`${contactOptions[index]}`];
});

let address = document.querySelector(".contact p");
address.innerHTML = "123 Way 456 Street<br>Somewhere, USA";

//FOOTER

let footerText = document.querySelector("footer p");
footerText.textContent = siteContent["footer"]["copyright"];