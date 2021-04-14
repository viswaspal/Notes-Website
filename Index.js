showNotes();
console.log('Welcome to notes app .This is app.js');
let addBtn= document.getElementById('addBtn');
addBtn.addEventListener('click',function(e){
	let addTxt=document.getElementById('addTxt');
	let notes=localStorage.getItem("notes");
	if(notes==null)
	{
		notesObj=[];
	}
	else
	{
		notesObj=JSON.parse(notes);
	}
	notesObj.push(addTxt.value);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	addTxt.value="";
	// console.log(notesObj);
	showNotes();

})
function showNotes(){
	let notes=localStorage.getItem('notes');
	if(notes==null)
	{
		notesObj=[];
	}
	else
	{
		notesObj=JSON.parse(notes);
	}
	let html="";
	notesObj.forEach(function(element,index){
		html+=`<div class="notecard" style="width:18rem;">
			<div class="card_body">
				<h5 class="card_title">Note ${index+1}</h5>
				<p class="card_text">${element}</p>
				<button class="btn btn-primary" id="${index}"onclick="deleteNote(this.id)">Delete Note</button>
			</div>
		</div>
		`;
	});
	let notesElm=document.getElementById('notes');
	if(notesObj.length!=0)
	{
		notesElm.innerHTML=html;

	}
}
function deleteNote(index)
{
	console.log("Delet",index);
	let notes = localStorage.getItem("notes");
	if(notes==null)
	{
		notesObj=[];
	}
	else
	{
		notesObj=JSON.parse(notes);
	}
	notesObj.splice(index,1);
	localStorage.setItem('notes',JSON.stringify(notesObj));
	showNotes();	
}
search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
	let inputVal=search.value.toLowerCase();
	// console.log("input");
	let noteCards=document.getElementsByClassName('notecard');		
	Array.from(noteCards).forEach(function(element){
		let cardTxt=element.getElementsByTagName("p")[0].innerText;
		if(cardTxt.includes(inputVal)){
			element.style.display="inline-block";
		}
		else{
			element.style.display="none";
		}
		});
	});