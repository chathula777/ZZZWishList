function loadDestinationCards(){
    const URL = `${API_BASE_URL}/destinations`;

fetch(URL)
    .then((response) => response.json ())
    .then((destinations) => {
        document.getElementById("list_title").innerText = "List";
        for (const _id in destinations){
            let {name, location, photo, description } = destinations[_id];

            if (photo === "") {
                photo = FALL_BACK_DESTINATION_PHOTO_URL;
            }

            const card = document.createElement("div");
            card.classList.add("card");
            card.style.width = "18rem";
            card.innerHTML = `
            <img src=${photo} class= "card-img-top" alt="Photo of ${name}" >
            <div class="card-body">
            <h5 class= "card-title">${name}</h5>
            <p class="card-text">${description}</p
            </div>

            `;
            document.getElementById("destinations_container").appendChild(card);
        }
    });




}