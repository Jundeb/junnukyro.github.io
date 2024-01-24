import '../css/Portfolio.css';

const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolio'>
            <div className='portfolio-content'>
                <h1>PORTFOLIO</h1>
                <div className='portfolio-cards'>
                    <div className='portfolio-card'>
                        <div className='card-image-gamestore'></div>
                        <div className='card-text'>
                            <h1>GameStoreApp</h1>
                            <p>React Native | Firebase</p>
                            <p>(School group project)</p>
                            <p>Projects idea was to create a mobile game store app in which users can browse, filter, search and buy games using their mobile devices.</p>
                        </div>
                        <div className='card-links'>
                            <div className='card-link'>
                                <a href='https://www.youtube.com/watch?v=bO8OB8lTldI' target="_blank">VIDEO</a>
                            </div>
                            <div className='card-link'>
                                <a href='https://github.com/Jundeb/Spring-2023-group-project' target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-card'>
                        <div className='card-image-earntofly'></div>
                        <div className='card-text'>
                            <h1>EarnToFly</h1>
                            <p>Unity | C# | Blender</p>
                            <p>(School group project)</p>
                            <p>Our mobile game draws inspiration from popular titles like Learn to Fly, Hill Climb Racing, and Earn to Die. The main idea of our game is a race around the world. The player plays the role of the "good" character, pitted against the "bad" character controlled by the NPC. The bad character strategically deploys obstacles and enemies to impede your progress and thwart your goal. As you traverse a variety of environments, each representing different countries and climates, your mission is to conquer these challenges and emerge victorious in the race.</p>
                        </div>
                        <div className='card-links'>
                            <div className='card-link'>
                                <a href='https://www.youtube.com/watch?v=P-jggPhbhis' target="_blank">VIDEO</a>
                            </div>
                            <div className='card-link'>
                                <a href='https://github.com/Jundeb/EarnToFly' target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-card'>
                        <div className='card-image-webbank'></div>
                        <div className='card-text'>
                            <h1>Webbank</h1>
                            <p>React | Node.js | MongoDB</p>
                            <p>Projects idea was to create a webbank in which users can browse their accounts balances, transactions and transfer money to other accounts. Also users can update their personal information, change password and create a credit account. <br /><br /> Use this account for direct access to webbank:<br /> Username: Jannu<br /> Password: Jannu1!</p>
                        </div>
                        <div className='card-links'>
                            <div className='card-link'>
                                <a href='https://webbank-bfki.onrender.com/login' target="_blank">VISIT</a>
                            </div>
                            <div className='card-link'>
                                <a href='https://github.com/Jundeb/Summer-2022-project' target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-card'>
                        <div className='card-image-visualization'></div>
                        <div className='card-text'>
                            <h1>Web application</h1>
                            <p>React | Node.js | MongoDB</p>
                            <p>(School group project)</p>
                            <p>Projects idea was to create a visualization tool, which shows different types of graphs about climate change. It is also possible to create a user, which you can use to create your own custom visualization views and share them with unique URLs.</p>
                        </div>
                        <div className='card-links'>
                            <div className='card-link'>
                                <a href='https://group5-visualizationtool-gbn4.onrender.com/' target="_blank">VISIT</a>
                            </div>
                            <div className='card-link'>
                                <a href='https://github.com/Jundeb/Autumn-2022-group-project' target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-card'>
                        <div className='card-image-bankautomat'></div>
                        <div className='card-text'>
                            <h1>Bankautomat</h1>
                            <p>C++ | Node.js | MySQL</p>
                            <p>(School group project)</p>
                            <p>Projects idea was to create a mockup of Bankautomat (ATM). User could withdraw/deposit money and also browse their account transactions.</p>
                        </div>
                        <div className='card-links'>
                            <div className='card-link'>
                                <a href='https://www.youtube.com/watch?v=wrGnpeAZ7e4' target="_blank">VIDEO</a>
                            </div>
                            <div className='card-link'>
                                <a href='https://github.com/Jundeb/Spring-2022-group-project' target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>
                    <div className='portfolio-card'>
                        <div className='card-image-portfolio'></div>
                        <div className='card-text'>
                            <h1>This website</h1>
                            <p>React | CSS | Figma</p>
                            <p>I build this website for showing my portfolio and also I wanted to test my skills building a responsive static website without using any CSS frameworks.</p>
                        </div>
                        <div className='card-links'>
                            <div className='card-link'>
                                <a href='#'>VISIT</a>
                            </div>
                            <div className='card-link'>
                                <a href='https://github.com/Jundeb/mywebsite_code' target="_blank">CODE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;