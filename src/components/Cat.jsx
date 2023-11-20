import '../styles.css'

const Cat = (props) => {
    const { cat } = props;

    return (
        <div className="catInfo">
            <div>
                <h2>{cat.name}</h2>
                <p><b>Breed: {cat.breeds[0].name}</b></p>
                <p>Origin: {cat.breeds[0].origin}</p>
                <p>Life span: {cat.breeds[0].life_span}</p>
                <p>Temperament: {cat.breeds[0].temperament}</p>
                <p>Description: {cat.breeds[0].description}</p>
                
            </div>
            <div className="overflow-hidden" style={{ maxWidth: '40rem', maxHeight: '30rem' }}>
                <img
                    src={cat.url}
                    alt="cat"
                    className="img-fluid"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </div>
        </div>
      )
}

export default Cat;