const cardSize = 5;
const numCards = 50;
let drawnWords = [];

// Sample word list; can be extended or modified as needed
const baseWordList = [
	"Discuss",
	"Listen",
	"Draw",
	"Write",
	"Teach",
	"Read",
	"Learn",
	"Argue",
	"View",
	"Question",
	"Recall",
	"Relay",
	"Doodle",
	"Absorb",
	"Sketch",
	"Inform",
	"Ask",
	"Detail",
	"Present",
	"Answer",
	"Solve",
	"Share",
	"Respond",
	"Create",
	"Compose",
	"Demonstrate",
	"Watch",
	"Revise",
	"Reveal",
	"Modify",

	"Pencil",
	"Chair",
	"Paper",
	"Notebook",
	"Desk",
	"Window",
	"Student",
	"Teacher",
	"Book",
	"Page",
	"Lesson",
	"Door",
	"Laptop",
	"Outlet",
	"Homework",
	"Eraser",
	"Marker",
	"Board",
	"Shelf",
	"Lesson",
	"Test",
	"Poster",
	"Project",
	"Textbook",

	"Bright",
	"Clumsy",
	"Loud",
	"Clear",
	"Fuzzy",
	"Smooth",
	"Sharp",
	"Vague",
	"Vivid",
	"Quiet",
	"Neat",
	"Dull",
	"Tidy",
	"Messy",
	"Rigid",
	"Mixed",
	"Blur",
	"Plain",
];

// Shuffle function
function shuffle(array) {
	let currentIndex = array.length,
		randomIndex;
	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}
	return array;
}

function createBingoCard(container) {
	const card = document.createElement("table");
	const wordList = shuffle([...baseWordList]); // Shuffle a clone of the base list

	for (let i = 0; i <= cardSize; i++) {
		const row = document.createElement("tr");
		for (let j = 0; j < cardSize; j++) {
			const cell = document.createElement("td");
			if (i === 0) {
				cell.innerText = "BINGO"[j];
			} else {
				cell.innerText = wordList.pop(); // Use the shuffled list
			}
			row.appendChild(cell);
		}
		card.appendChild(row);
	}
	container.appendChild(card);
}

function generateWord() {
	if (drawnWords.length === baseWordList.length) return; // All words drawn
	let word;
	do {
		word = baseWordList[Math.floor(Math.random() * baseWordList.length)];
	} while (drawnWords.includes(word));
	drawnWords.push(word);
	document.getElementById(
		"drawnWords"
	).innerText = `Drawn Words: ${drawnWords.join(", ")}`;
	// Check the Bingo cards and mark the word if it's there
	// TODO: Check for a win
}

function generateMultipleCards(num) {
	const container = document.querySelector(".card-container");
	for (let i = 0; i < num; i++) {
		createBingoCard(container);
	}
}

generateMultipleCards(numCards);
