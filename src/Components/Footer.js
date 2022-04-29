
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


function Footer(){

    return (

        <div className="footer ">
            <div className="footer-title">Made by @fwd</div>
            <div className="logos-footer mb-4">
                <a href="https://github.com/fernando-rp" target="_blank" rel="noreferrer" className="github">
                    <AiFillGithub></AiFillGithub>
                </a>
                <a href="https://www.linkedin.com/in/fernando-rios-piutrin/" target="_blank" rel="noreferrer" className="github">
                    <AiFillLinkedin></AiFillLinkedin>
                </a>
            </div>
        </div>
    )

}

export default Footer;