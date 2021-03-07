// eslint-disable-next-line
import logo from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      
        <div class="ms-preloader"></div>
        
            <div class="ms-main-container">

                

                
                <button class="nav__btn">
                    <span class="burger">
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                        <span class="burger__line"></span>
                    </span>
                    <span class="cross">
                        <span class="cross__line"></span>
                        <span class="cross__line"></span>
                    </span>
                </button>
                
                    <header class="ms-header">
                        <nav class="ms-nav">
                            <div class="ms-logo">
                                <a href="index.html" data-type="page-transition">
                                    <img src="assets/images/h-logo.svg" alt="logo"/>
                                </a>
                            </div>
                            
                            <ul class="ms-navbar">
                                <li class="ms-nav-item link active">
                                    <a href="index.html">About</a>
                                </li>
                                <li class="ms-nav-item link">
                                    <a href="portfolio.html" data-type="page-transition">Portfolio</a>
                                </li>
                                <li class="ms-nav-item link">
                                    <a href="contact.html" data-type="page-transition">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </header>
               

               
                    <main class="ms-container">

                       
                            <div class="ms-body">
                                <div class="ms-body__caption">
                                    <div class="ms-body__title">
                                        <h1>Paris Plain</h1>
                                        <p class="ms-body__subtitle">Full-Stack Web Developer</p>
                                        
                                        <a href="https://pplainx.github.io/Responsive-Portfolio/Paris_Plain_Resume.pdf" class="ms-btn__square" data-type="page-transition">View my Resume</a>
                                    </div>
                                </div>
                            </div>
                        

                       
                            <div class="ms-section">

                                <div class="ms-section__block about__content">
                                    <img src="assets/images/me/pl-wide.jpg" alt="img"/>

                                    <p>I have over 9 years of experience working in web development and graphic design. Currently, I am the Founder and Chief Executive Officer at Shared Space where I lead a cross-functional team of seven, building unique web applications that are helping people achieve more in their businesses! I'm deeply passionate about creating loved and trusted designs that help people navigate their careers and achieve their career goals.</p>

                                </div>
                                <div class="ms-section__block">
                                    <header>
                                        <h3>Skills</h3>
                                        <p>Ever Learning Always Growing</p>
                                    </header>
                                    <div class="services-list row">
                                        <ul class="col-md-3">
                                            <li><h6>Web design</h6></li>
                                            <li>User experience</li>
                                            <li>Page layout</li>
                                            <li>Typography</li>
                                            <li>Icons</li>
                                        </ul>
                                        <ul class="col-md-3">
                                            <li><h6>Web development</h6></li>
                                            <li>HTML5</li>
                                            <li>Javascript</li>
                                            <li>CSS</li>
                                            <li>PHP</li>
                                        </ul>
                                        <ul class="col-md-3">
                                            <li><h6>Digital marketing</h6></li>
                                            <li>Social media</li>
                                            <li>Search engine</li>
                                            <li>Google Analytics</li>
                                            <li>Ecommerce</li>
                                        </ul>
                                        <ul class="col-md-3">
                                            <li><h6>Visual communication</h6></li>
                                            <li>Art direction</li>
                                            <li>Graphic design</li>
                                            <li>llustration</li>
                                            <li>Branding</li>
                                        </ul>
                                    </div>
                                </div>


                                <div class="contrast-bg__black">
                                    <div class="ms-section__block go-to-contacts">
                                        <header>
                                            <h3>Let me create your next website!</h3>
                                            <p>Creativity meets "the know how" to build anything you want.</p>
                                            <br></br>
                                            <a href="contact.html" class="ms-btn__square" data-type="page-transition">Get in touch</a>
                                        </header>
                                    </div>
                                </div>
                            
                        

                       
                 
                    </div> </main> 
                    </div>
                    </div>
                    
                    
       
                   
                

            




  );
}

export default App;
