
//const validator = require("validator")
//const chalk = require('chalk')
const yargs = require('yargs')
const notes = require("./notes");

yargs
  .command({
    command: "add",
    describe: "add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note body",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.addNotes(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: " remove a note",
    builder: {
      title: {
        describe: "remove a note",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: " list notes",
    builder: {
      all: {
        describe: "listing all notes",
        //demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.listNotes(argv.all);
    },
  })
  .command({
    command: "read",
    describe: " read notes",
    builder: {
      title: {
        describe: "reading all notes",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      notes.readNote(argv.title);
    },
  })
  ;

console.log(yargs.parse())

