//TODO:
//Add location of where to insert link element (createRef())
//Connect default lang to dropdown & cookies?
//Add option for immutable language verse reference
//Add way for user to insert bible ref link
//Handle verse exception

var lang = "esv";

//Changes language for all refTaggers
function updateLang(){
	//Change language to dropdown selection
	lang = document.getElementById("lang-select").value;

	//Get all bible ref elements
	let ref_array = document.getElementsByClassName("rtBibleRef");

	//Change all bible ref elements to language choice
	for(let i = 0; i < ref_array.length; i++){

		//Change data-version language
		ref_array[i].setAttribute("data-version",lang);

		//Change link language
		cur_link = ref_array[i].href;//Take current link
		let verse = cur_link.substring(cur_link.lastIndexOf("/") + 1);//Chop verse off end
		ref_array[i].setAttribute("href","https://biblia.com/bible/"+lang+"/"+verse); //Set new link
	}
}

function fillRefs(){
	let input = document.getElementById("output");
	let text = input.innerHTML;
	console.log(text);
}

//Creates a new refTagger instance
function createRef(verse="Genesis 1:1"){
	const e = document.createElement("a");

	//Independent attributes
	e.setAttribute("class","rtBibleRef");
	e.setAttribute("target","_blank");
	e.setAttribute("data-purpose","bible-reference");
	e.setAttribute("rel","noopener");

	//Dependent attributes
	e.setAttribute("href","https://biblia.com/books/"+lang+"/"+verse);
	e.setAttribute("data-reference",verse);
	e.setAttribute("data-version",lang);
	e.innerHTML = verse;

	return e;
}

//Bible refTagger customizations
var refTagger = {settings:{}};

//Functionality	behind pop up verse
(function(d, t) {
	var n=d.querySelector("[nonce]");
	refTagger.settings.nonce = n && (n.nonce||n.getAttribute("nonce"));
	var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
	g.src = "https://api.reftagger.com/v2/RefTagger.js";
	g.nonce = refTagger.settings.nonce;
	s.parentNode.insertBefore(g, s);
}(document, "script"));