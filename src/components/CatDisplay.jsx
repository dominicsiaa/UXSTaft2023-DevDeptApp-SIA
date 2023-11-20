import Cat from './Cat'

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../styles.css'

const CatDisplay = (props) => {
    const { cats, currentCat, onNextCat, onPreviousCat } = props;

    return (
        <>
            <div className="catNavigation">
                <Button onClick={onPreviousCat} disabled={currentCat === 0}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </Button>

                <span className="catCounter">Cat #{currentCat+1}</span>

                <Button onClick={onNextCat}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Button>
            </div>
            <hr />

            {console.log("Current cat: ", cats[currentCat])}
            <Cat cat={cats[currentCat]} />
        </>
        
    )
}
  

export default CatDisplay