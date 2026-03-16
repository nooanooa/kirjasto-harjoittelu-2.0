const button = document.getElementById("search");

button.addEventListener("click",SearchLibrary);

async function SearchLibrary(){
    const value = document.getElementById("librarysearch").value.toLowerCase();
    await fetch(`https://api.kirjastot.fi/v4/library?name=${value}`)
        .then((res) => {

        if (!res.ok) {
            throw new Error(`HTTP had an error! It's status is: ${res.status}`);
        }

        return res.json();
        })
        .then((data) => {

        for (const k of Object.entries(data.items)) {
            const v = k[1];
            const template = document.createElement("div");
            const name = document.createElement("p");
            const img = document.createElement("img");
            const location = document.createElement("p");
            const slog = document.createElement("p");
            const mapslocation = document.createElement("iframe");


            img.style.width = "100%"

            mapslocation.src = `https://www.google.com/maps?q=${v.coordinates.lat},${v.coordinates.lon}&z=15&output=embed`
            mapslocation.width = "100%"
            mapslocation.height = "300px"
            mapslocation.style.border = "0"
            mapslocation.loading = "lazy"

            name.textContent = v.name;
            slog.textContent = v.slogan;
            location.innerHTML = ` ${v.address.street}, ${v.address.city}`;
            if (v.coverPhoto != null) {
                img.src = v.coverPhoto.medium.url;
            }else {continue}


            template.appendChild(name);
            template.appendChild(img);
            template.appendChild(slog);
            template.appendChild(location);
            template.appendChild(mapslocation);
            document.getElementById("library").appendChild(template);
        };

        })
        .catch((err) => {
        throw new Error(err);
    })
}