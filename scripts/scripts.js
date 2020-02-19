function loadPhoto(e) {
    e.preventDefault();
    // get form values
    let pic1 = Math.floor(Math.random() * 100) + 200;
    let pic2 = Math.floor(Math.random() * 100) + 200;
    let pic3 = Math.floor(Math.random() * 100) + 200;
    let pic4 = Math.floor(Math.random() * 100) + 200;
    
    document.getElementById('pic1g').style.backgroundImage = "url(http://placegoat.com/" + pic1 + ")";
    document.getElementById('pic2g').style.backgroundImage = "url(http://placegoat.com/" + pic2 + ")";
    document.getElementById('pic3g').style.backgroundImage = "url(http://placegoat.com/" + pic3 + ")";
    document.getElementById('pic4g').style.backgroundImage = "url(http://placegoat.com/" + pic4 + ")";
}

document.getElementById('get').addEventListener('click', loadPhoto);
  