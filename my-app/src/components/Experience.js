import React from 'react';

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import LinkIcon from '@mui/icons-material/Link';

import Presentation from '../assets/Presentation.pdf';
import LinkedIn from '../assets/LinkedIn.png';
import Twitter from '../assets/Twitter.png';

function Experience() {

	var w = window.screen.width;
	var MIN_ELEMENT_WIDTH = 0.35;

	if (w < 640) {
		MIN_ELEMENT_WIDTH = 0.70;
	}

    return (
        <div>
          <div className="masthead">
						<h1>Experience</h1>
					</div>
					<div className='item'>
						<div className='flexRow'>
							<h2>Open Mechanics Group, Czech Technical University</h2>
							<h3>July 2021</h3>
						</div>
						<hr style={{color: 'black'}}></hr>
						<p>I conducted research on microstructure reconstruction via artificial neural networks in TensorFlow at the Department of Mechanics under the co-supervision of Professor Jan Zeman and Dr. Martin Doškář. I evaluated the impacts of different configurations of the neural network on the model's predictive abilities and presented the results at the ”Nano and Micro Mechanics 2021” conference at Czech Technical University.</p>
						<div style={{margin: '10px'}}>
							<Button variant="outlined" href={Presentation} startIcon={<DownloadIcon />}>
								Conference Presentation
							</Button>
						</div>
						<div style={{margin: '10px'}}>
							<Button variant="outlined" href="https://gitlab.com/MartinDoskar/ai-based-reconstruction" startIcon={<LinkIcon />}>
								Source code on GitLab
							</Button>
						</div>
						<h3>In media</h3>
						<div className="flexRow" style={{justifyContent: 'space-evenly'}}>
							<img src={LinkedIn} alt="" style={{width: '40%', minWidth: MIN_ELEMENT_WIDTH * w, objectFit: 'contain'}} />
							<img src={Twitter} alt="" style={{width: '40%', minWidth: MIN_ELEMENT_WIDTH * w, objectFit: 'contain'}} />
						</div>
					</div>
					<div className='item'>
						<div className="flexRow">
							<h2>Computational Robotics Laboratory, AI Center, Czech Technical University</h2>
							<h3>June - July 2021</h3>
						</div>
						<hr style={{color: 'black'}}></hr>
						<p>
							I interned at the Computational Robotics Laboratory, a robotic laboratory within the Artificial Intelligence Center. I primarily worked on post-processing data recorded at a field trip with various autonomous robots. I utilized the Rospy library to write Python scripts and used them to extract desired data from Robot Operating System (ROS) files.
						</p>
					</div>
        </div>
    )
}

export default Experience;