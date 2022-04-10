import { faCss3, faGitAlt, faHtml5, faJsSquare, faLaravel, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        const styleLetter = () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
        }
        styleLetter()
    }, []);
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am a Full Stack Web Developer and have 7+ years of experience working with international software companies. I have a bachelor’s degree in Computer Science. Since 2014, I have served as a software engineer for many organizations, where I have been repeatedly recognized for developing innovative solutions and solving problems.
                    </p>
                    <p>
                        I was responsible for the full life cycle development of next-generation software, from initial requirement gathering to design, coding, testing, documentation, and implementation.                </p>
                    <p>
                        My technical expertise includes cross-platform proficiency (Windows, Linux, and Mac); fluency in following scripting/programming languages (including PHP, Codeigniter, Laravel LMS Moodle, JavaScript, React, Redux, Node JS, Typescript, Mongo, Next JS, and MYSQL); and advanced knowledge of developer applications, tools, methodologies also on Mobile development in Flutter for cross-platform development in Android IOS and web.                </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faReact} color="#5ed4f4" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#f06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28a4d9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faJsSquare} color="#efd81d" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faLaravel} color="#dd0031" />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default About;