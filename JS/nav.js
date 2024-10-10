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
            <li class="link-item"><a href="" class="link">Login</a></li>
            <li class="link-item"><a href="" class="link">Classes</a></li>
            <li class="link-item"><a href="" class="link">Profile</a></li>
            <li class="link-item"><a href="" class="link">Help</a></li>
        <ul>  
    `;
}

createNav(); 