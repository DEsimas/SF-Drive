import React from "react";

import "./../../styles/_Common/footer.scss";

function Footer() {

    return (
        <>
            <footer className="footer">
                <span>© SkillDrive Inc. 2020</span>
                <div className="socials">
                    <a href="" target="_blank">
                        <img src="./assets/VK.svg" alt="VK"></img>
                    </a>
                    <a href="" target="_blank">
                        <img src="./assets/insta.svg" alt="insta"></img>
                    </a>
                    <a href="" target="_blank">
                        <img src="./assets/facebook.svg" alt="facebook"></img>
                    </a>
                </div>
            </footer>
        </>
    );
}

export default Footer;