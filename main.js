const button = document.getElementById("search");
const button2 = document.getElementById("change");
let endpoint = "name";

button.addEventListener("click",SearchLibrary);

button2.addEventListener("click",function ChangeEndpoint() {
    if (endpoint === "name") {
        endpoint = "city.name"
        return button2.textContent = "Haku: Paikkaunta"
    } else {
        endpoint = "name"
        return button2.textContent = "Haku: Kirjaston nimi"
    }
})


async function SearchLibrary(){
    const value = document.getElementById("librarysearch").value.toLowerCase();
    await fetch(`https://api.kirjastot.fi/v4/library?${endpoint}=${value}`)
        .then((res) => {

        if (!res.ok) {
            throw new Error(`HTTP had an error! It's status is: ${res.status}`);
        }

        return res.json();
        })

        .then((data) => {

            const lib = document.getElementById("library")
            while (lib.firstChild) {
                lib.removeChild(lib.firstChild)
            }

            document.getElementById("welcome").textContent = `Kirjastoja löytyi: ${data.items.length}`
            for (const k of Object.entries(data.items)) {
            const v = k[1];
            const template = document.createElement("div");
            const info = document.createElement("p");
            const img = document.createElement("img");
            const mapslocation = document.createElement("iframe");

            template.className = "template"

            mapslocation.src = `https://www.google.com/maps?q=${v.coordinates.lat},${v.coordinates.lon}&z=15&output=embed`
            mapslocation.loading = "lazy"

            info.innerHTML = `<p><strong>Nimi:</strong> ${v.name || "Ei tietoa."}</p>
            <p><strong>Postinumero:</strong> ${v.address.zipcode || "Ei tietoa."}</p>
            <p><strong>Tietoa:</strong> ${v.description || "Ei tietoa."}</p>
            <p><strong>Sijainti:</strong> ${v.address.street || "Ei tietoa."}, ${v.address.city || "Ei tietoa."}</p>
            `
            if (v.coverPhoto != null) {
                img.src = v.coverPhoto.medium.url;
            }else {continue}

            template.appendChild(img);
            template.appendChild(info);
            template.appendChild(mapslocation);
            lib.appendChild(template);
        };
        })

        .catch((err) => {
        throw new Error(err);
    })
}