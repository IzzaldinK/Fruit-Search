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
	// setting inputVal to user input and calling showSuggestions
	let inputVal = str;
	showSuggestions(results,inputVal)
	return results;
}

function searchHandler(e) {
	// setting userinput to equal input that is entered in the text bar
	let userInput = e.target.value;
	search(userInput);
	
}

function showSuggestions(results, inputVal) {

	// resetting the innerHTML each time this function is called upon
	
	suggestions.innerHTML = '';

	// looping over each filtered fruit 

	results.forEach(function(result){
		 let li = document.createElement("li");
		 
		// creaeting a regular expression to replace each the text that matches 
		// user input with bolded text

		 let regex = new RegExp(inputVal, 'gi');
		 let boldText = result.replace(regex, '<strong>$&</strong>');

		 // appending the fruit with the bolded text to an li and appending that
		 // li to our suggestions list

		 li.innerHTML = boldText;
		 suggestions.append(li);
		 
	});
	
}

function useSuggestion(e) {
	// grabbing the text of the clicked li and replacing it with the input value
	let autoFill = e.target.innerText;
	input.value = autoFill;
	suggestions.innerHTML = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);