const button = document.getElementById("search");
const button2 = document.getElementById("change");
let endpoint = "name";

button.addEventListener("click",SearchLibrary);

button2.addEventListener("click",function ChangeEndpoint() {
    if ((endpoint === "name") && (typeof endpoint === "string")) {
        endpoint = "city.name"
        return button2.textContent = "Haku: Paikkaunta"
    } else {
        endpoint = "name"
        return button2.textContent = "Haku: Kirjaston nimi"
    }
})

async function SearchLibrary(){
    const value = document.getElementById("librarysearch").value.toLowerCase();
    await fetch(`https://api.kirjastot.fi/v4/library?${endpoint}=${value}&with=links`) //fetches api, endpoint is either city.name or name and value is the input text
        .then((res) => {

        if (!res.ok) {
            throw new Error(`HTTP had an error! It's status is: ${res.status}`);
        }

        return res.json();
        })

        .then((data) => {

            const lib = document.getElementById("library") //removes all children from previous search
            while (lib.firstChild) {
                lib.removeChild(lib.firstChild)
            }

            for (const k of Object.entries(data.items)) {
            const v = k[1];
            const template = document.createElement("div");
            const span = document.createElement("span");
            const info = document.createElement("p");
            const img = document.createElement("img");
            const mapslocation = document.createElement("iframe");

            template.className = "template"


            const links = Array.isArray(v.links) ? v.links : [];

            const linksHtml = links.length > 0 ? `<div><strong>Yhteystiedot:</strong><ul>${links.map(link => { //finds url and name of the link from with=links
               const url = link?.url || "";
               const name = link?.name || url || "Linkki";
               return url ? `<li><a href="${link?.url || ""}" target="_blank" rel="noreferrer">${name}</a></li>` : `<li>${name}</li>`;
                })
            .join("")}</ul></div>`:"<div>Verkkosivu ei saatavilla.</div>";

            if (v.coordinates != null) {
                mapslocation.src = `https://www.google.com/maps?q=${v.coordinates.lat},${v.coordinates.lon}&z=15&output=embed`
                mapslocation.loading = "lazy"
            } else{continue} //i feel like it just creates the elements for nothing (and dont get deleted lol)
    
            info.innerHTML = `<p><strong>Nimi:</strong> ${v?.name || "Ei tietoa."}</p> 
                <p><strong>Postinumero:</strong> ${v?.address.zipcode || "Ei tietoa."}</p>
                <p><strong>Tietoa:</strong> ${v?.description || "Ei tietoa."}</p>
                <p><strong>Sijainti:</strong> ${v?.address.street || "Ei tietoa."}, ${v?.address.city || "Ei tietoa."}</p>
                ${linksHtml}
            `
            
            if (v.coverPhoto != null) {
                img.src = v.coverPhoto.medium.url;
            }else {continue}

            template.appendChild(span) //Why not.
            span.appendChild(img);
            span.appendChild(info);
            span.appendChild(mapslocation);
            lib.appendChild(template);
        };
        document.getElementById("welcome").textContent = `${lib.childElementCount} kirjastoa löytyi hakemuksen perusteella.`

        })

        .catch((err) => {
        throw new Error(err);
    })
}