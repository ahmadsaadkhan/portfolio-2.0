import './index.scss';
const AnimatedLetters = ({strArray, letterClass, idx}) => {
    return ( 
        <span>
            {
                strArray.map((item, i) => (
                    <span key={item + i} className={`${letterClass} _${i + idx}`} >
                        {item}
                    </span>
                ))
            }
        </span>
     );
}
export default AnimatedLetters;