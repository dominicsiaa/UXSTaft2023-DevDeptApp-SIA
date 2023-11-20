import { useState, useEffect } from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import CatDisplay from './components/CatDisplay'

import catService from './services/cats.jsx'

const catNames = [
	"Abby",
	"Angel",
	"Annie",
	"Baby",
	"Bailey",
	"Bandit",
	"Bear",
	"Bella",
	"Bob",
	"Boo",
	"Boots",
	"Bubba",
	"Buddy",
	"Buster",
	"Cali",
	"Callie",
	"Casper",
	"Charlie",
	"Chester",
	"Chloe",
	"Cleo",
	"Coco",
	"Cookie",
	"Cuddles",
	"Daisy",
	"Dusty",
	"Felix",
	"Fluffy",
	"Garfield",
	"George",
	"Ginger",
	"Gizmo",
	"Gracie",
	"Harley",
	"Jack",
	"Jasmine",
	"Jasper",
	"Kiki",
	"Kitty",
	"Leo",
	"Lilly",
	"Lily",
	"Loki",
	"Lola",
	"Lucky",
	"Lucy",
	"Luna",
	"Maggie",
	"Max",
	"Mia",
	"Midnight",
	"Milo",
	"Mimi",
	"Miss kitty",
	"Missy",
	"Misty",
	"Mittens",
	"Molly",
	"Muffin",
	"Nala",
	"Oliver",
	"Oreo",
	"Oscar",
	"Patches",
	"Peanut",
	"Pepper",
	"Precious",
	"Princess",
	"Pumpkin",
	"Rascal",
	"Rocky",
	"Sadie",
	"Salem",
	"Sam",
	"Samantha",
	"Sammy",
	"Sasha",
	"Sassy",
	"Scooter",
	"Shadow",
	"Sheba",
	"Simba",
	"Simon",
	"Smokey",
	"Snickers",
	"Snowball",
	"Snuggles",
	"Socks",
	"Sophie",
	"Spooky",
	"Sugar",
	"Tiger",
	"Tigger",
	"Tinkerbell",
	"Toby",
	"Trouble",
	"Whiskers",
	"Willow",
	"Zoe",
	"Zoey"
]

function App() {

	const [cats, setCats] = useState([])
	const [currentCat, setCurrentCat] = useState(0)

	useEffect(() => {
		catService
		.getRandomCat()
		.then(initialCat => {
			initialCat[0].name = catNames[Math.floor(Math.random() * catNames.length)]
			setCats(initialCat)
		})
	}, [])

	const handleNextCat = () => {
		if (currentCat + 1 === cats.length) {
			catService
			.getRandomCat()
			.then(newCat => {
				newCat.name = catNames[Math.floor(Math.random() * catNames.length)]
				const newCats = [...cats, ...newCat]
				setCats(newCats)
				
				console.log("New cats: ", newCats)
			})
		}
		setCurrentCat(currentCat + 1)
	}

	const handlePreviousCat = () => {
		if (currentCat > 0) {
			setCurrentCat(currentCat - 1);
		}
	}

	return (
		<Container>
			<Row className="justify-content-md-center section">
				<Col md={8}>
					<h1 className="text-center">~RANDOM CAT GENERATOR~</h1>
				</Col>
			</Row>
			<Row className="justify-content-md-center section">
				<Col md={8} className="text-center">
					{cats[currentCat] ? (
						<CatDisplay
						cats={cats}
						currentCat={currentCat}
						onNextCat={handleNextCat}
						onPreviousCat={handlePreviousCat}
						/>
					) : (
						<p>Loading...</p>
					)}
				</Col>
			</Row>
		</Container>
	)
}

export default App
