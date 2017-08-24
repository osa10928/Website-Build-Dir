import React from 'react';
import githubIcon from '../../src/assets/images/social-media-icons/Github.svg';
import linkedinIcon from '../../src/assets/images/social-media-icons/Linkedin.svg';
import twitterIcon from '../../src/assets/images/social-media-icons/Twitter.svg';
import facebookIcon from '../../src/assets/images/social-media-icons/Facebook.svg';
import instagramIcon from '../../src/assets/images/social-media-icons/Instagram.svg';


class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-faded fixed-top {{ page.title }}-back }}">
  <a id="name" className="navbar-brand" href="{{ site.url }}"><p>Stephen Agwu</p></a>
  <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span></span>
    <span></span>
    <span></span>
  </button>
  <div className="collapse navbar-collapse text-center" id="navbarNav">
    <div className="nav navbar-nav">
      <a className="nav-item nav-link active" href="{{ site.url }}/about.html">About</a>
      <a className="nav-item nav-link active" href="#portfolio-nav">Portfolio</a>
    </div>
    <div id="social-media" className="conatainer-fluid">
    <div className="d-flex flex-nowrap justify-content-center">
      <div className="icon-container col">
        <a href="https://github.com/osa10928" target="_blank">
          <img src={githubIcon} alt="Github icon" title="Gitgub" className="img-fluid" />
        </a>
      </div>
      <div className="icon-container col">
        <a href="https://www.linkedin.com/in/stephen-agwu/" target="_blank">
          <img src={linkedinIcon} alt="Linkedin icon" title="Linkedin" className="img-fluid" />
        </a>
      </div>
      <div className="icon-container col">
        <a href="https://twitter.com/King_DREAMER" target="_blank">
          <img src={twitterIcon} alt="Twitter icon" title="Twitter" className="img-fluid" />
        </a>
      </div>
      <div className="icon-container col">
        <a href="https://www.facebook.com/stephen.agwu" target="_blank">
          <img src={facebookIcon} alt="Facebook icon" title="Facebook" className="img-fluid" />
        </a>
      </div>
      <div className="icon-container col">
        <a href="https://www.instagram.com/osa10928/" target="_blank">
          <img src={instagramIcon} alt="Instagram icon" title="Instagram" className="img-fluid" />
        </a>
      </div>
    </div>
  </div>
  </div>
</nav>
		)
	}
}

export default Navbar;