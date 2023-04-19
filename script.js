const API = "https://api.github.com/users/";
const form = document.getElementById("form");
const main = document.getElementById("main");
const input = document.getElementById("input");

getuser("dsa");

async function getuser(user) {
    console.log("Creating user..");
    const response = await fetch(API + user);
    const data = await response.json();
    createcard(data);
}

function createcard(data) {
    console.log("Creating card..");
    let img = data.avatar_url;
        const txt = `
        <div id="card">
            <div id="avbox"><img id="avatar" src="${img}"> </div>
            <div id="txt"><p>Username: ${data.login}</p>
            <p>Full Name: ${data.name}</p>
            <p>Id: ${data.id}</p>
            <p>Bio: "${data.bio}"</p>
            <p>Followers: ${data.followers} Following: ${data.following}</p></div>
        </div>`;
    main.innerHTML = txt;

}
form.addEventListener("submit", e => {
    console.log(input.value);
    e.preventDefault();
    console.log("Form submitted");
    const user = input.value;
    if(user) {getuser(user); input.value="";}
});