import '../css/Portfolio.css';

const Portfolio = () => {
    return (
        <div id='portfolio' className='portfolio'>
            <div className='portfolio-content'>
                <h1>PORTFOLIO</h1>
                <div className='portfolio-cards'>
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