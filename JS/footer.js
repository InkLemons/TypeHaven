const createFooter = () => {
    let footer = document.querySelector('.web-footer');

    footer.innerHTML = `
        <footer>
            <section class="foot-links">
                <table class="overlay-table">
                    <tr>
                        <td><strong><a href="aboutus.html" class="foot-link">About Us</a></strong></td>
                        <td><strong><a href="profile.html" class="foot-link">profile</a></strong></td>
                    </tr>
                    <tr>
                        <td><strong><a href="teach-login.html" class="foot-link">Teacher Login</a></strong></td>
                        <td><strong><a href="stu-login.html" class="foot-link">Student Login</a></strong></td>
                    </tr>
                </table>
            </section>
            <section class="SM-Icons">
                <div class="Icon-Container">
                    <a href="#" target="_blank"><img src="IMGS/INSTA_LOGO.svg" class="SM-Icon" alt="Instagram"></a>
                    <img src="IMGS/X_LOGO.svg" class="SM-Icon" alt="X">
                    <img src="IMGS/FB_ICON.svg" class="SM-Icon" alt="Facebook">
                </div>
            </section>
            <p class="copyright">&#169;2024 InkLemons</p>
        </footer>
    `;
}

createFooter();