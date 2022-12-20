import React from 'react';
import Causal from '../assets/Causal_model.png';
import NonCausal from '../assets/Non-causal_model.png';
import Paper from '../assets/Paper.pdf';

import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Publications() {
    return (
        <div>
          <div className="masthead">
						<h1>Publications</h1>
		    	</div>
					<h2 style={{marginBottom: '30px'}}>Microstructure reconstruction via artificial neural networks: A combination of causal and non-causal approach</h2>
					<div>
						<h3>Authored by</h3>
						<p>
							Krystof Latka<br/>
							Martin Doskar<br/>
							Jan Zeman
						</p>
					</div>
					<div style={{margin: '10px'}}>
						<Button variant="outlined" href={Paper} startIcon={<PictureAsPdfIcon />}>
							Download PDF
						</Button>
					</div>
					<h3>Abstract</h3>
					<p>We investigate the applicability of artificial neural networks (ANNs) in reconstructing a sample image of a sponge-like microstructure. We propose to reconstruct the image by predicting the phase of the current pixel based on its causal neighbourhood, and subsequently, use a non-causal ANN model to smooth out the reconstructed image as a form of post-processing. We also consider the impacts of different configurations of the ANN model (e.g., the number of densely connected layers, the number of neurons in each layer, the size of both the causal and non-causal neighbourhood) on the models' predictive abilities quantified by the discrepancy between the spatial statistics of the reference and the reconstructed sample.</p>
					<h3>Selected visual excerpts</h3>
					<img src={Causal} alt="" width='70%' height='auto' padding='20px' />
					<img src={NonCausal} alt="" width='70%' height='auto' padding='20px' />
        </div>
    )
}

export default Publications;