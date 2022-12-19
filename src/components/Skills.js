import '../css/Skills.css';

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <h1>Skills</h1>
            <div className='skills-content'>
                <div className='experience'>
                    <h2>Most Experience</h2>
                    <div className='line'></div>
                    <p>
                        React.js, JavaScript, Node.js, Bootstrap, CSS, HTML, Express.js, MongoDB, Figma, git
                    </p>
                </div>
                <div className='experience'>
                    <h2>Some Experience</h2>
                    <div className='line'></div>
                    <p>
                        Java, C++, C,  SQL, Cypress,  Jest, Unity, Blender, AWS, Firebase, ReqEx
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Skills;