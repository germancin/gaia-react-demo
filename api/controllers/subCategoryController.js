const fetch = require("node-fetch");
const endPoint = process.env.END_POINT;
const chunkSize = process.env.CHUNK_SIZE;

/**
 * Get the data from given subCategory id
 * 
 * @param {number} - tid
 * @return {object} - term, heroImg, initialTiles, moreTiles.
 */
const getData = async (req, res) => {
	const url = endPoint + '/' + req.params.tid;

	try {
		const data = await fetch(url);
		const json = await data.json();
		const mapedData = await splitData(json);
		
		res.status(200).send(mapedData);

	} catch (error) {
		res.status(500).send({error: "Something went wrong!", info: error});
	}

};

/**
 * Split the endpoint response in equal parts
 * and push the first chunk of elements in
 * initialTiles and the rest of the records into
 * moreTiles to show them if user requires to load more.
 * 
 * @param {object}
 * @return {object} - term, heroImg, initialTiles, moreTiles.
 */
const splitData = async (data) => {
	let initialTiles = [];
	let moreTiles = [];
	const term = data.term;
	const heroImg = data.term.termImages.hero;

	while (data.titles.length) {
		if(initialTiles.length === 0){
			initialTiles.push(data.titles.splice(0, chunkSize));
		}else{
			moreTiles.push(data.titles.splice(0, chunkSize));
		}  
    }

	return {
		term,
		heroImg,
		initialTiles,
		moreTiles,
	}
}

module.exports = {getData};
