import './App.css';
import ProfilePicture from './media/TKFF_Fotografie.jpg'
import CV from './media/CV_UCLA_Revised.pdf'

function App() {
  return (
    <div id = "content">
      <div id = "intro">
        <h1>Krystof Latka</h1>
        <p>
          <a href={CV}>CV</a><br/>
          Hi! Welcome to my website. I am a first-year computer engineering student at <a href="https://www.ucla.edu">University of California, Los Angeles.</a><br/>
          You can find me on <a href="https://github.com/latka-krystof">GitHub</a>, <a href="https://gitlab.com/latka-krystof">GitLab</a>, <a href="https://www.linkedin.com/in/kryštof-latka-1720641bb">LinkedIn</a>, and <a href="https://app.joinhandshake.com/stu/users/40730466">Handshake</a>.
        </p>
      </div>
      <div id="flexbox">
        <div className="cameraEntry">
          <img src={ProfilePicture} alt="" height="400" width="460"/>
        </div>
        <div className="cameraEntry">
          <img src={ProfilePicture} alt="" height="400" width="460"/>
        </div>
      </div>
      <div>
        <h2>My projects and experiences</h2>
        <h3>Vervit</h3>
        <p>
          Vervit is a non-profit organization, focused on helping elderly citizens in Czech Republic in working with techonology. I lead a programming team which developed a mobile application, freely available on iOS and Android, that provided a user-friendly environment for senior citizens to learn new IT skills.<br/>
          <a href="https://www.youtube.com/channel/UC2wYlSqcqfmzFz_5J1s0jHA">YouTube Channel</a><br/>
          <a href="https://apps.apple.com/us/app/vervit/id1586873318">iOS App</a><br/>
          <a href="https://play.google.com/store/apps/details?id=com.vervit.vervit_app">Android App</a>
        </p>
        <h3>Internship at Czech Technical University</h3>
        <p>
          <a href="https://doi.org/10.14311/APP.2022.34.0032">Published paper</a><br/>
          <a href="https://gitlab.com/MartinDoskar/ai-based-reconstruction">Source code on GitLab</a>
        </p>
      </div>
    </div>
  );
}

export default App;