import './Home.css';

import React from 'react';

import ProfilePicture from '../assets/Profile_Pic.JPG';
import Resume from '../assets/Resume.pdf';
import ArticlePic from '../assets/Publications_1.png';
import VervitApp from '../assets/Vervit_App.png';
import ArticleThumbnail from '../assets/Article_Thumbnail.png';

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

import { Link } from 'react-router-dom';

function Home() {

	var w = window.screen.width;
	var MIN_ELEMENT_WIDTH = 0.35;

	if (w < 551) {
		MIN_ELEMENT_WIDTH = 0.70;
	}

	return (
		<div>
			<div id="intro">
				<div id = "introText" style={{minWidth: MIN_ELEMENT_WIDTH * w}}>
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
					<p>Please, feel free to read about my most important experiences and projects below. You can find all my other relevant activities in respective sections of the webpage. If you would like a concise summary of my activities and accomplishments, you can also download my resume.</p>
					<div style={{margin: '10px'}}>
						<Button variant="contained" href={Resume} startIcon={<DownloadIcon />}>
							Resume
						</Button>
					</div>
				</div>
				<img style={{width: '35%', minWidth: MIN_ELEMENT_WIDTH * w, objectFit: 'contain'}} src={ProfilePicture} alt="" />
			</div>
			<div>
				<div className="item">
					<div className="heading">
						<h2>Leadership</h2>
						<p><Link to='/leadership'>View all</Link></p>
					</div>
					<hr style={{color: 'black'}}></hr>
					<div className="thumbnail">
						<img style={{width: '40%', height: 'auto', minWidth: MIN_ELEMENT_WIDTH * w}} src={VervitApp} alt="" />
						<div className="thumbnailText" style={{minWidth: MIN_ELEMENT_WIDTH * w}}>
							<h3>Vervit</h3>
							<p>
								Vervit is a non-profit organization, focused on helping elderly citizens in Czech Republic in working with techonology. I lead a programming team which developed a mobile application, freely available on iOS and Android, that provided a user-friendly environment for senior citizens to learn new IT skills.
							</p>
							<p><Link to='/leadership'>Read more</Link></p>
						</div>
					</div>
				</div>
				<div className='item'>
					<div className="heading">
						<h2>Experience</h2>
						<p><Link to='/experience'>View all</Link></p>
					</div>
					<hr style={{color: 'black'}}></hr>
					<div className="thumbnail">
						<img style={{width: '30%', height: 'auto', minWidth: MIN_ELEMENT_WIDTH * w, objectFit: 'contain'}} src={ArticlePic} alt="" />
						<div className="thumbnailText" style={{minWidth: MIN_ELEMENT_WIDTH * w}}>
							<h3>Open Mechanics Group, Czech Technical University</h3>
							<p>
							I conducted research on microstructure reconstruction via artificial neural networks in TensorFlow at the Department of Mechanics under the co-supervision of Professor Jan Zeman and Dr. Martin Doškář. I evaluated the impacts of different configurations of the neural network on the model’s predictive abilities and presented the results at the ”Nano and Micro Mechanics 2021” conference at Czech Technical University.I conducted research on microstructure reconstruction via artificial neural networks in TensorFlow at the Department of Mechanics under the co-supervision of Professor Jan Zeman and Dr. Martin Doškář. I evaluated the impacts of different configurations of the neural network on the model’s predictive abilities and presented the results at the ”Nano and Micro Mechanics 2021” conference at Czech Technical University.</p>
							<p><Link to='/experience'>Read more</Link></p>
						</div>
					</div>
				</div>
				<div className='item'>
					<div className="heading">
						<h2>Publications</h2>
						<p><Link to='/publications'>View all</Link></p>
					</div>
					<hr style={{color: 'black'}}></hr>
					<div className="thumbnail">
						<img style={{width: '45%', height: 'auto', minWidth: MIN_ELEMENT_WIDTH * w, objectFit: 'contain'}} src = {ArticleThumbnail} alt="" />
						<div className="thumbnailText" style={{minWidth: MIN_ELEMENT_WIDTH * w}}>
							<h3>Microstructure reconstruction via artificial neural networks: A combination of causal and non-causal approach</h3>
							<p>
								My work investigates the applicability of artificial neural networks (ANNs) in reconstructing a sample image of a sponge-like microstructure. We propose to reconstruct the image by predicting the phase of the current pixel based on its causal neighbourhood, and subsequently, use a non-causal ANN model to smooth out the reconstructed image as a form of post-processing. We also consider the impacts of different configurations of the ANN model (e.g., the number of densely connected layers, the number of neurons in each layer, the size of both the causal and non-causal neighbourhood) on the models' predictive abilities quantified by the discrepancy between the spatial statistics of the reference and the reconstructed sample.
							</p>
							<p><Link to='/publications'>Read more</Link></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;