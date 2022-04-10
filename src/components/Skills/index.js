import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Skills = ({ data }) => {
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
            <div className="container main-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'k', 'i', 'l', 'l', 's']}
                            idx={15}
                        />
                    </h1>
                    {data && data.skills.map((skill) => (
                        <div className='skills' key={skill.name}>
                            <h3>
                                <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={skill.name.split('')}
                                    idx={15}
                                />{' '}
                                <FontAwesomeIcon icon={skill.icon} color="#5ed4f4" />
                            </h3>
                            <h4 className="info">Skill Level: {skill.level}</h4>
                        </div>
                    ))}
                </div>
            </div>

            <Loader type="pacman" />
        </>
    );
}

export default Skills;