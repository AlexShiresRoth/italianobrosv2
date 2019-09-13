import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import '../../style/main.css';

export default class About extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isMobile: false,
			aboutImgs: ['https://res.cloudinary.com/snackmanproductions/image/upload/v1568246114/italianobros/about/about-header_ngompt.jpg'],
		};
	}

	handleWindowResize = () => {
		this.setState({ isMobile: window.innerWidth < 600 });
	};

	componentDidMount() {
		this.handleWindowResize();
		window.addEventListener('resize', this.handleWindowResize);
		window.addEventListener('resize', this.handleGallerySize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowResize);
		window.removeEventListener('resize', this.handleGallerySize);
	}

	//mobile layout view
	render() {
		const renderMobileAbout = () => {
			return (
				<section className="about__section">
					<div className="about__section--image-header">
						<img src={this.state.aboutImgs[0]} alt="Marc Italiano" />
					</div>
					<div className="about__section--container">
						<div className="about__section--heading">
							<h3>Italiano bros.</h3>
							<h3>Enterprise</h3>
							<hr />
						</div>
						<div className="paragraph__section">
							<p>
								Founded by Guy and Marc Italiano in 1979, while continuing today to be a leader in the
								industry and growing to achieve the creative demands of the future. As artisans, we are
								passionate about excellence with each new project.
							</p>
						</div>

						<div className="btn__container--center">
							<Link to={'/ourstory'} style={{ textDecoration: 'none', alignSelf: 'center' }}>
								<button className="btn__transparent--small">Discover our history</button>
							</Link>
						</div>
					</div>
				</section>
			);
		};
		const renderDesktopAbout = () => {
			return (
				<section className="about__section--desktop">
					<figure>
						<img src={this.state.aboutImgs[0]} alt="about img" />
					</figure>
					<div className="desktop-container">
						<div className="about__section--desktop--inner center-med-wide">
							<h1>Family Owned &amp; Operated</h1>
							<hr />
							<div className="paragraph__section--desktop">
								<p>
									Founded by Guy and Marc Italiano in 1979, while continuing today to be a leader in
									the industry and growing to achieve the creative demands of the future. As artisans,
									we are passionate about excellence with each new project.
								</p>
							</div>

							<Link to={'/ourstory'} style={{ textDecoration: 'none', alignSelf: 'flex-end' }}>
								<button className="btn__transparent--desktop">Discover our history</button>
							</Link>
						</div>
					</div>
				</section>
			);
		};
		if (this.state.isMobile) {
			return <Fragment>{renderMobileAbout()}</Fragment>;
		}

		//desktop layout view
		else {
			return <Fragment>{renderDesktopAbout()}</Fragment>;
		}
	}
}