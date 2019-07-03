import React from 'react';
import './App.css';
import ReactButton from './Components/ReactButton'

function App() {
  return (
    <div className="App">
      <div class='container-1'>
        <img class='hamburger' src="https://img.icons8.com/color/48/000000/hamburger.png" alt='hamburger'></img>
      </div>
      <div class='container-2'>
        <div class='icons'>
          <ul class='ul'>
            <li>Follow Me</li>
            <li class='icon'>
              <img src="https://www.stickpng.com/assets/images/58e919b0eb97430e819064ff.png" alt='facebook' height='40vh' width='40vw'></img>
            </li>
            <li class='icon'>
              <img src='http://iconsetc.com/icons-watermarks/flat-square-white-on-black/foundation/foundation_social-github/foundation_social-github_flat-square-white-on-black_512x512.png' alt='GitHub' height='40vh' width='40vw'></img>
            </li>
            <li class='icon'>
              <img src='https://i2.wp.com/www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square.png' alt='Linkedin' height='40vh' width='40vw'></img>
            </li>
            <li class='icon'>
              <img src='http://www.sclance.com/backgrounds/instagram-background/instagram-background_1326098.jpg' alt='Instagram' height='40vh' width='40vw'></img>
            </li>
          </ul>
        </div>
        <div class='text-box'>
          <p class='paragraph'>
            <h1>Hi, my name is Joseph Hamblin</h1>
            <h4>I am a Full Stack Web Developer and Javascript Engineer</h4>
            <h4>Check out my project examples of React and Vue Libraries as well as other technologies.</h4>
            <h4>Inquires at 
              <a class='email-link' href='mailto: joseph.jay.hamblin@gmail.com'> joseph.jay.hamblin@gmail.com</a>
            </h4>
          </p>
        </div>
        <div>
          <div>
              &gt;
          </div>
        </div>
      </div>
      <div class='container-3'>
        <ReactButton/>
      </div>
    </div>
  );
}

export default App;
