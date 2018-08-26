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
 * Get the sorted data based on criteria from given subCategory id
 * 
 * @param {number} - tid
 * @param {string} - sortby
 * @return {object} - term, heroImg, initialTiles, moreTiles.
 */
const getSortedData = async (req, res) => {
	const criteria = req.params.sortby; // In a real scenario I would pass this to get a sorted data from DB.
	const url = endPoint + '/' + req.params.tid ;
	const arrayData = [];
	let initialTiles = [];
	let moreTiles = [];

	try {
		const data = await fetch(url);
		const json = await data.json();

		// assigning sections to be sent within the response.
		const term = json.term;
		const heroImg = json.term.termImages.hero;
		
		// getting the tiles section to be sorted.
		arrayData.push(json.titles.splice(0, json.titles.length));

		// sort the data base on the criteria.
		const sortedData = sortData(arrayData[0], criteria);

		// chunk up the sorted data.
		while (sortedData.length) {
			if(initialTiles.length === 0){
				initialTiles.push(sortedData.splice(0, chunkSize));
			}else{
				moreTiles.push(sortedData.splice(0, chunkSize));
			}  
		}

		res.status(200).send({
								term,
								heroImg,
								initialTiles,
								moreTiles,
							});

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

const sortData = (data, criteria) => {

	if(criteria === 'popular'){

		data.sort(function (a, b) {
			let up_countA = a.fivestar.up_count.value;
			let up_countB = b.fivestar.up_count.value;

			if (up_countA < up_countB) {
				return 1;
			}
			if (up_countA > up_countB) {
				return -1;
			}
			return 0;
		});

	}else if(criteria === 'newest') {

		data.sort(function (a, b) {
			let createdA = a.created;
			let createdB = b.created;
			if (createdA < createdB) {
				return 1;
			}
			if (createdA > createdB) {
				return -1;
			}
			return 0;
		});

	}else if(criteria === 'asc') {

		data.sort(function (a, b) {
			let titleA = a.title;
			let titleB = b.title;
			if (titleA < titleB) {
				return -1;
			}
			if (titleA > titleB) {
				return 1;
			}
			return 0;
		});

	}

	return data;
}

module.exports = {getData, getSortedData};
