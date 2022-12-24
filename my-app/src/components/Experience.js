import React from 'react';

import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import LinkIcon from '@mui/icons-material/Link';

import Presentation from '../assets/Presentation.pdf';
import LinkedIn from '../assets/LinkedIn.png';
import Twitter from '../assets/Twitter.png';

function Experience() {
    return (
        <div>
          <div className="masthead">
						<h1>Experience</h1>
					</div>
          <h2>Open Mechanics Group, Czech Technical University</h2>
					<hr style={{color: 'black'}}></hr>
					<p>I conducted research on microstructure reconstruction via artificial neural networks in TensorFlow at the Department of Mechanics under the co-supervision of Professor Jan Zeman and Dr. Martin Doškář. I evaluated the impacts of different configurations of the neural network on the model’s predictive abilities and presented the results at the ”Nano and Micro Mechanics 2021” conference at Czech Technical University.</p>
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
						<img src={LinkedIn} alt="" style={{width: '40%', height: 'auto'}} />
						<img src={Twitter} alt="" style={{width: '40%', height: 'auto'}} />
					</div>
					<h2>Computational Robotics Laboratory, Artificial Intelligence Center, Czech Technical University</h2>
					<hr style={{color: 'black'}}></hr>
        </div>
    )
}

export default Experience;