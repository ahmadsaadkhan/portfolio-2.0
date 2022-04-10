import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders'

const Experience = ({ data }) => {
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
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                            idx={15}
                        />
                    </h1>
                {data && data.work.map((work) => (
                    <div className='experience' key={work.company}>
                        <h3>{work.company}</h3>
                        <h4 className="info">{work.title}</h4>
                        <h6>{work.location}</h6>
                        <span>&bull;</span> <em className="date">{work.years}</em>
                        <p>{work.description}</p>
                    </div>
                ))}
            </div>
            </div>



            <Loader type="pacman" />
        </>
    );
}

export default Experience;