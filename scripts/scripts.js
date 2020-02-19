

APIKEY = 'b808b10200a5810961b51f206717131de4283dc9'


function onClick(e) {
    e.preventDefault();

    let word = document.getElementById('word').value;

    // setup URL
    let url = "https://cors-anywhere.herokuapp.com/https://owlbot.info/api/v4/dictionary/" + word + "?format=json"
    // call API
    fetch(url, {
        headers: {'Authorization': 'Token ' + APIKEY}
    })
    .then(function(response) {
        debugger
        // make sure the request was successful
        if (response.status == 200) {
            return response.json();
        } else {
            return {
                text: "Error! Try a different word."
            }
        }
    }).then(function(json) {
        if (json.text){
            document.getElementById('result').style.backgroundImage = "";
            document.getElementById('result').textContent = json.text;
        }

        let def = json.definitions[0].definition;
        let pic = json.definitions[0].image_url;
        
        if (pic != null){
            document.getElementById('result').style.backgroundImage = "url(" + pic+ ")";
            document.getElementById('result').textContent = "";
        } else{
            document.getElementById('result').style.backgroundImage = "";
            document.getElementById('result').textContent = def;
        }
});
}

document.getElementById('search').addEventListener('click', onClick);

