import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import Logo from './Logo';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const fnameArray = ['A','h','m','a','d'];
    const nameArray = ['a','a','d']
    const jobArray = ['F','u','l','l','-','s','t','a','c','k',' ','D','e','v','e','l','o','p','e','r']
    useEffect(() => {
        const styleLetter = () => {
            return setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4000);
        }
        styleLetter()
    }, []);
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span> 
                    <span className={`${letterClass} _12`}>{`i,  `}</span> 
                    <span className={`${letterClass} _13`}>i</span> 
                    <span className={`${letterClass} _14`}>'m</span> 
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={fnameArray} idx={15} />
                    <img src={logoTitle} alt="full-stack developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Full-Stack Developer / JavaScript / React / Laravel</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
            {/* <Logo /> */}
        </div>
    );
}

export default Home;