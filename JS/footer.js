const createFooter = () => {
    let footer = document.querySelector('.web-footer');

    footer.innerHTML = `
        <footer>
            <img id="footer-img" src="IMGS/TypeHavenSwirl.png" alt="Footer Image">
            <section class="foot-links">
                <table class="overlay-table">
                    <tr>
                        <td><a href="aboutus.html" class="foot-link">About Us</a></td>
                        <td><a href="fieldtrips.html" class="foot-link">Field Trips</a></td>
                    </tr>
                    <tr>
                        <td><a href="groups.html" class="foot-link">Teacher Login</a></td>
                        <td><a href="contact.html" class="foot-link">Student Login</a></td>
                    </tr>
                </table>
            </section>
            <section class="SM-Icons">
                <div class="Icon-Container">
                    <a href="#" target="_blank"><img src="#" class="SM-Icon" alt="Instagram"></a>
                    <img src="#" class="SM-Icon" alt="X">
                    <img src="#" class="SM-Icon" alt="Facebook">
                </div>
            </section>
            <p class="copyright">©2024 InkLemons</p>
        </footer>
    `;
}

createFooter();