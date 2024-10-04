const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="IMGS/TypeHavenLogo.svg" class="TH-LOGO" alt="TypeHaven">
            <div class="nav-items">
                <a href="index.html"><img src="img/homeicon.svg" class="home-btn" alt="Home Icon"></a>
            </div>   
        </div>
        <ul class="link-container">
            <li class="link-item"><a href="" class="link">home</a></li>
            <li class="link-item"><a href="" class="link">about us</a></li>
            <li class="link-item"><a href="" class="link">field trips</a></li>
            <li class="link-item"><a href="" class="link">groups</a></li>
            <li class="link-item"><a href="" class="link">contact</a></li>
        <ul>  
    `;
}

createNav(); 