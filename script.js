const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	// filtering the fruits in the fruit list based on user input

	fruit.forEach(function(f){
		if(f.toLowerCase().indexOf(str.toLowerCase()) !== -1){
			results.push(f);
			
		}

		// if user input is empty or a space no results will populate

		if(str === "" || str === " "){
			results = [];
		}
	})
	let inputVal = str;
	showSuggestions(results,inputVal)
	return results;
}

function searchHandler(e) {
	// TODO
	let userInput = e.target.value;
	search(userInput);
	
}

function showSuggestions(results, inputVal) {

	// TODO
	
	suggestions.innerHTML = '';
	results.forEach(function(result){
		 let li = document.createElement("li");
		 let startIndex =  result.toLowerCase().indexOf(inputVal.toLowerCase())
		 let endIndex = result.toLowerCase().lastIndexOf(inputVal.toLowerCase()[inputVal.length-1]);
		 let beforeInput = result.slice(0,startIndex);
		 if (inputVal.length === 1){
			let afterInput = result.slice(startIndex + 1);
			let atInput = result.slice(startIndex,startIndex+1)
			let boldText = document.createElement('strong')
			boldText.innerText = atInput;
			li.innerHTML = beforeInput + "<strong>" + atInput + "</strong>" + afterInput;
			suggestions.append(li);
		 }
		 else{
			let afterInput = result.slice(endIndex + 1);
			let atInput = result.slice(startIndex,endIndex +1)
			let boldText = document.createElement('strong')
			boldText.innerText = atInput;
			li.innerHTML = beforeInput + "<strong>" + atInput + "</strong>" + afterInput;
			suggestions.append(li);
		 }
		 
	});
	
}

function useSuggestion(e) {
	// TODO
	let autoFill = e.target.innerText;
	input.value = autoFill;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);