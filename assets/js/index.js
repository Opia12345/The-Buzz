

//Sign In And Signup Redirection

function sendSignUp(){
    window.location.href = "signup.html";
}

function sendSignIn(){
    window.location.href = "signin.html";
}

//Sign In And Signup Redirection Ends


//Navbar dropdowns

var dropDown = document.getElementById("menu");

function openDropdown(){
    dropDown.classList.toggle("show");
}

function closeDropdown(){
    dropDown.classList.remove("show");
};

var dropDown1 = document.getElementById("menu1");

function openDropdown1(){
    dropDown1.classList.toggle("show1");
}

function closeDropdown1(){
    dropDown1.classList.remove("show1");
};

//End Navbar dropdown



//All Overlay For Index

var openOverlay = document.getElementById('overlay');

function openMe(){
    openOverlay.classList.add('openOverlay');

}

function closeMe(){
        openOverlay.classList.remove('openOverlay');
}


//End Index Dropdowns


// Signin/up Effect
var run = document.getElementById('pop-main');



function visible(){
    run.classList.add('pop-show');
}

function visible_1(){
    run.classList.remove('pop-show');
}
// Signin/up Effect ends

//home redirection

function home(){
    window.location.href = 'index.htm';
}

/*Dark mode toggle script

const toggleChange = document.getElementById('toggleLight');
const body = document.querySelector('body');

toggleChange.addEventListener('click', function(){

    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon-fill')){
         body.style.background = 'black';
         body.style.color = "white";
         body.style.transition = '2s';
    }else{
        body.style.background = 'white';
         body.style.color = "black";
         body.style.transition = '2s';
    }
})*/

/*function lightmode(){
    var element = document.body;
    element.classList.toggle('body-light-mode');
}*/

//Form Validation 

var nameError = document.getElementById('name-error');
var passwordError = document.getElementById('password-error');
var emailError = document.getElementById('email-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class= "bi-check-circle-fill"></i>';
    return true;
}

function validatePassword(){
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'password is required';
        return false;
    }
    if(password.length < 8){
        passwordError.innerHTML = 'At least 8 digits';
        return false;
    }
        passwordError.innerHTML = '<i class= "bi-check-circle-fill"></i>';
        return true;
}


function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email  is required';
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class= "bi-check-circle-fill"></i>';
        return true;
}

function validateForm(){
    if(!validateName() || !validatePassword() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill out all fields';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }
}

function validateFormSignin(){
    if(!validatePassword() || !validateEmail()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fill out all fields ';
        setTimeout(function(){submitError.style.display = 'none'}, 3000);
        return false;
    }
}

//Form Validation Ends

// Public API Build

const generalBtn = document.getElementById('general');
const techBtn = document.getElementById('tech');
const healthBtn = document.getElementById('health');
const businessBtn = document.getElementById('business');
const entertainmentBtn = document.getElementById('entertainment');
const scienceBtn = document.getElementById('science');
const sportsBtn = document.getElementById('sports');
const searchBtn = document.getElementById('searchBtn');

const newsQuery = document.getElementById('newsQuery');
const newsType = document.getElementById('newsType');
const newsDetails = document.getElementById('newsDetails');

//Array
var newsDataArr = [];


//APIs

var API_KEY = '6e95606cc92539c6a2aff4a3377265af';
var GENERAL_NEWS = 'https://gnews.io/api/v4/top-headlines?category=genera&country=us&language=en&apikey=';
var SPORT_NEWS = 'https://gnews.io/api/v4/top-headlines?category=sports&country=us&language=en&apikey=';
var BUSINESS_NEWS ='https://gnews.io/api/v4/top-headlines?category=business&country=us&language=en&apikey=';
var TECH_NEWS ='https://gnews.io/api/v4/top-headlines?category=technology&country=us&language=en&apikey=';
var HEALTH_NEWS ='https://gnews.io/api/v4/top-headlines?category=health&country=us&language=en&apikey=';
var ENTERTAINMENT_NEWS ='https://gnews.io/api/v4/top-headlines?category=entertainment&country=us&language=en&apikey=';
var SCIENCE_NEWS ='https://gnews.io/api/v4/top-headlines?category=science&country=us&language=en&apikey=';
var SEARCH_NEWS ='https://gnews.io/api/v4/search?q&apikey=';


// const myArray = [
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_23789d40612bb2134504db9647d263fa88499&q=Science`), // ordersAf
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_23789d40612bb2134504db9647d263fa88499&q=Entertainment`),
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_23789d40612bb2134504db9647d263fa88499&q=Business`),
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_23789d40612bb2134504db9647d263fa88499&q=Tech`),
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_23789d40612bb2134504db9647d263fa88499&q=Sports`),
//     fetch(`https://newsdata.io/api/1/news?apikey=pub_23789d40612bb2134504db9647d263fa88499&q=Health`)
    
//   ]
//   async function fetchData(Array){

//   // fails the rest of the fetch if one fails
//   // then throws an error
//     try{
//       const res = await Promise.all(Array) 
//       const data = await Promise.all(res.map((item) => { 
//         return data.json();
//       }))

//     }
//     catch(e){
//       console.log("multiple fetch failed");
//     }
//     //   multpleData.current[0].data
//     //   multpleData.current[2].data
//     //   multpleData.current[3].data
//     //   multpleData.current[4].data
//     //   multpleData.current[5].data
//     //   multpleData.current[1].data

//   }
//   fetchData(myArray);


    window.onload = (function(){
        newsType.innerHTML = "<h4>Trending</h4>"
        fetchGeneralNews();
    })

sportsBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Sports</h4>';
    fetchSportNews();
});

businessBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Business</h4>';
    fetchBusinessNews();
});

healthBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Health</h4>';
    fetchHealthNews();
});

entertainmentBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Entertainment</h4>';
    fetchEntertainmentNews();
});

techBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Technology</h4>';
    fetchTechNews();
});

scienceBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Science</h4>';
    fetchScienceNews();
});

searchBtn.addEventListener('click', function(){
    newsType.innerHTML = '<h4>Search: '+newsQuery.value+ '</h4>';
    fetchQueryNews();
});


const fetchGeneralNews = async() =>{
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchSportNews = async() =>{
    const response = await fetch(SPORT_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchBusinessNews = async() =>{
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchHealthNews = async() =>{
    const response = await fetch(HEALTH_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchEntertainmentNews = async() =>{
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchTechNews = async() =>{
    const response = await fetch(TECH_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchScienceNews = async() =>{
    const response = await fetch(SCIENCE_NEWS + API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchQueryNews = async() =>{
    if(newsQuery.value == null){
        return;
    }
    const response = await fetch(SEARCH_NEWS+newsQuery.value+'&apiKey='+ API_KEY);
    newsDataArr = [];
    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
    } else {
        console.log(response.status, response.statusText);
    }
    displayNews();
}


function displayNews(){
    
  const html = newsDataArr.map((news) => {
return `
<div class="col-sm-12 col-lg-4 mb-4">
<a href="${news.url}">
<div class="stack-body">
<img class="post-image" src="${news.image}"  
style="background: rgba(0, 0, 0, 0.459);
background-size: cover;
width: 100%;
border-radius: 5px;
height: 12em;
background-blend-mode: darken;" 
alt="news img">
</div>
<div class="txt-1" 
style="position: relative; margin-top: 1em;">  
<h4 style= "font-size: 17px; font-weight: bolder;">${news.title}</h4>
<h6>${news.source.name}</h6>
<small class="text-muted">${news.publishedAt}</small>
</div>
</a>
</div>
</div>`;
}).join('');
newsContainer.innerHTML = html;
};



