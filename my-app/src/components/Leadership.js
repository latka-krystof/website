import React from 'react';

import Button from '@mui/material/Button';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GetAppIcon from '@mui/icons-material/GetApp';
import AndroidIcon from '@mui/icons-material/Android';

function Leadership() {
    return (
        <div>
					<div className="masthead">
						<h1>Leadership</h1>
					</div>
					<h2>Vervit</h2>
					<hr style={{color: 'black'}}></hr>
					<h3>Chief App Developer</h3>
					<p>
						I held a key role in Vervit, a student non-profit organization providing technological support to senior citizens in the Czech Republic, primarily through YouTube videos. As the Chief App Developer, I primarily managed a team of six programmers and developed a mobile application, freely available on iOS and Android, which provided a user-friendly learning environment for senior citizens. I also contributed to creating about fifty tutorial videos by writing scripts and editing videos.
					</p>
					<div style={{margin: '10px'}}>
						<Button variant="outlined" href="https://www.youtube.com/channel/UC2wYlSqcqfmzFz_5J1s0jHA" startIcon={<YouTubeIcon />}>
							Visit our YouTube channel
						</Button>
					</div>
					<div style={{margin: '10px'}}>
						<Button variant="outlined" href="https://apps.apple.com/us/app/vervit/id1586873318" startIcon={<GetAppIcon />}>
							Download our app on iOS
						</Button>
					</div>
					<div style={{margin: '10px'}}>
						<Button variant="outlined" href="https://play.google.com/store/apps/details?id=com.vervit.vervit_app" startIcon={<AndroidIcon />}>
							Download our app on Android
						</Button>
					</div>
					<h2>ECONET</h2>
					<hr style={{color: 'black'}}></hr>
					<h3>Vice-President and Co-Founder of Novy PORG Investment Society</h3>
					<p>The Novy PORG Investment Society analyzes companies on the stock market. Apart from that, we also strived to raise financial awareness among other students in my high school. As a Vice President of the Society, I mentored a team of new recruits and held lectures on introductory topics in investing. In 2020, our team qualified for the regional finale of the Wharton Investment Competition.</p>
        </div>
    )
}

export default Leadership;