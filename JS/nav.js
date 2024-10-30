const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html" id="TH-LOGO-HOLDER"><img src="IMGS/TypeHavenLogo.svg" class="TH-LOGO" alt="TypeHaven"></a>
            <div class="nav-items">
                <a href="index.html"><img src="#" class="home-btn" alt="#"></a>
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