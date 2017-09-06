import React from 'react';
import githubIcon from '../../src/assets/images/social-media-icons/Github.svg';
import linkedinIcon from '../../src/assets/images/social-media-icons/Linkedin.svg';
import twitterIcon from '../../src/assets/images/social-media-icons/Twitter.svg';
import facebookIcon from '../../src/assets/images/social-media-icons/Facebook.svg';
import instagramIcon from '../../src/assets/images/social-media-icons/Instagram.svg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

class MyNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    var toggleButton = document.getElementById('navtoggle');
    var brand = document.getElementById('navbrand')
    this.setState({
      isOpen: !this.state.isOpen
    });
    if (!this.state.isOpen) {
      toggleButton.classList.remove("collapsed");
      brand.classList.add("self-center");
    } else {
      toggleButton.classList.add("collapsed");
      brand.classList.remove("self-center");
    }
  }

	render() {
		return (
			<Navbar className="fixed-top" color="inverse" inverse toggleable>
          <button id="navtoggle" className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={this.toggle}>
              <span></span>
              <span></span>
              <span></span>
          </button>
          <NavbarBrand id="navbrand" href="https://osa10928.github">Stephen Agwu</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="text-center">
              <NavItem>
                <NavLink href="https://osa10928.github.io/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://osa10928.github.io/portfolio">Portfolio</NavLink>
              </NavItem>
              <NavItem>
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
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
		)
	}
}

export default MyNav;