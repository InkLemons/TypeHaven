const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="index.html" id="TH-LOGO-HOLDER"><img src="IMGS/TypeHavenLogo.svg" class="TH-LOGO" alt="TypeHaven"></a>
            <div class="nav-items">
                <a href="profile.html"><img src="IMGS/PROFILE_IMG.svg" class="profile-btn" alt="#"></a>
            </div>   
        </div>
        <ul class="link-container">
            <li class="link-item"><a href="profile.html" class="link">Profile</a></li>
            <li class="link-item"><a href="class-list.html" class="link">Classes</a></li>
            <li class="link-item"><a href="help.html" class="link">Help</a></li>
            <li class="link-item"><a href="stu-login.html" class="link">Student Login</a></li>
            <li class="link-item"><a href="teach-login.html" class="link">Teacher Login</a></li>

        <ul>  
    `;
}

createNav(); 