const fs = require("fs");
const chalk = require('chalk')

const getNotes =  () => "Your notes";

/**
 * Add note receive as param the title and body text
 * @param  {[string]} title [title of note]
 * @param  {[string]} body  [description of note]
 * @return {[type]}       [description]
 */
const addNote = (title, body) => {
  const notes = loadNotes();
  //const duplicateNotes = notes.filter( (note) =>  note.title === title);
  const duplicateNote = notes.find((note)=>note.title === title)

  debugger 
  
  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
	saveNotes(notes);
	console.log(chalk.green.inverse('Note added!'))
  }else{	  
    console.log(chalk.red.inverse('Note title taken!'))
  }
};

const readNote = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if(note){
    //return note;
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  }else{
    console.log(chalk.red.inverse('note not found!'))
  }
}

/**
 * Write each note
 * @param  {[string]} notes [String cont]
 * @return {[type]}       [description]
 */
const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
};

/**
 * Read into the file all notes available
 * @return {[json]} [Json string with information parsed]
 */
const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
/**
 * Remove Notes
 * @param  {[string]} title [note Title used as index ]
 * @return {[null]}       [do not return any value]
 */
const removeNote = (title) => {
	const notes = loadNotes();
	const notesToKeep = notes.filter((note) => note.title !== title);
	if(notes.length > notesToKeep.length){
		console.log(chalk.green.inverse('Note removed!'));saveNotes(notesToKeep);
	}else{
		console.log(chalk.red.inverse("Note not found"));
	}

}

/**
 *  listed all notes available
 */
const listNotes = () => {
	const notes= loadNotes();
	notes.forEach(note => {
		console.log(note.title)
	});

}


module.exports = {
  addNotes: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
