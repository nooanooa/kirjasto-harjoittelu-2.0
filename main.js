const request = new Request("https://api.kirjastot.fi/v4/library");

const button = document.getElementById("search");

button.addEventListener("click",SearchLibrary);

function SearchLibrary(){
    window.fetch(request)
        .then((res) => {

        if (!res.ok) {
            throw new Error(`HTTP had an error! It's status is: ${res.status}`);
        }

        return res.json();
        })
        .then((data) => {
        // const value = document.getElementById("librarysearch").value.toLowerCase();

        for (const k of Object.entries(data.items)) {
            const template = document.createElement("div");
            const name = document.createElement("p");
            const img = document.createElement("img");
            const location = document.createElement("p");

            name.innerHTML = k[1].name;
            img.src = k[1].coverPhoto.small.url;
            location.innerHTML = ` ${k[1].address.street}, ${k[1].address.city}`;
            template.appendChild(name);
            template.appendChild(img);
            template.appendChild(location);
            document.getElementById("library").appendChild(template);
        };

        })
        .catch((err) => {
        throw new Error(err);
    })
}