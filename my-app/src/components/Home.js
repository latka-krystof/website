import './Home.css';

import React, { useState } from 'react';

import ProfilePicture from '../assets/TKFF_Fotografie.jpg';
import CV from '../assets/CV_UCLA_Revised.pdf';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			<div id="intro">
				<div id = "introText">
					<p>
						I am a first-year undergraduate student at <a href="https://www.ucla.edu"><b>University of California, Los Angeles</b>,</a> pursuing a Bachelor of Science in Computer Engineering. 
					</p>
					<p>	
						My research interests lie in machine learning and its applications to interdisciplinary problems. In the past, I have assisted with research at the Department of Mechanics, <a href="https://www.cvut.cz/en"><b>Czech Technical University</b></a>, and published a paper about the application of ML in microstructure reconstruction. 
					</p>
					<p>	
						I have also held the role of Chief App Developer in <a href="https://vervit.cz"><b>Vervit</b></a>, a student non-profit organization providing technological support to senior citizens in the Czech Republic.
					</p>
					<p>
						You can find me on <a href="https://github.com/latka-krystof"><b>GitHub</b></a>, <a href="https://gitlab.com/latka-krystof"><b>GitLab</b></a>, <a href="https://www.linkedin.com/in/krystof-latka"><b>LinkedIn</b></a>, and <a href="https://app.joinhandshake.com/stu/users/40730466"><b>Handshake</b></a>.
					</p>
					<p>Here is my <a href={CV}><b>resume</b></a>.</p>
				</div>
				<img src={ProfilePicture} alt="" />
			</div>
			<div>
				<div className="heading">
					<h2>Leadership</h2>
					<p><Link to='/leadership'>View all</Link></p>
				</div>
				<hr style={{color: 'black'}}></hr>
				<h3>Vervit</h3>
				<p>
					Vervit is a non-profit organization, focused on helping elderly citizens in Czech Republic in working with techonology. I lead a programming team which developed a mobile application, freely available on iOS and Android, that provided a user-friendly environment for senior citizens to learn new IT skills.<br />
					<a href="https://www.youtube.com/channel/UC2wYlSqcqfmzFz_5J1s0jHA">YouTube Channel</a><br />
					<a href="https://apps.apple.com/us/app/vervit/id1586873318">iOS App</a><br />
					<a href="https://play.google.com/store/apps/details?id=com.vervit.vervit_app">Android App</a>
				</p>
				<div className="heading">
					<h2>Experience</h2>
					<p><Link to='/experience'>View all</Link></p>
				</div>
				<hr style={{color: 'black'}}></hr>
				<h3>Open Mechanics Group, Czech Technical University</h3>
				<p>
					<a href="https://doi.org/10.14311/APP.2022.34.0032">Published paper</a><br />
					<a href="https://gitlab.com/MartinDoskar/ai-based-reconstruction">Source code on GitLab</a>
				</p>
				<h3>Computational Robotics Laboratory, Artificial Intelligence Center, Czech Technical University</h3>
				<div className="heading">
					<h2>Publications</h2>
					<p><Link to='/publications'>View all</Link></p>
				</div>
				<hr style={{color: 'black'}}></hr>
				<div className="heading">
					<h2>Service</h2>
					<p><Link to='/service'>View all</Link></p>
				</div>
				<hr style={{color: 'black'}}></hr>
			</div>
		</div>
	)
}

export default Home;