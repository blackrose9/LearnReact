import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
    //used Babel to convert my HTML into JSX. for learning purposes.
      render(){
          return(
    //creates the section which will hold the form and the list
    React.createElement("section", null, 
    //this is the beginning of the form element
    React.createElement("form", {
      id: "todo"
    }, 
    //the code below creates a user input text box and a button to add their input to the list. (no functionality yet)
    React.createElement("input", {
      type: "text",
      placeholder: "To Do"
    }, " "), 
    React.createElement("input", {
      type: "button",
      onclick: "addToDo"
    }, "Add")), //end of our form tag 

    //this div element encloses our list
    React.createElement("div", {
      id: "list"
    }, 
    //the code below creates our main list with it's own checkbox
    React.createElement("ul", null, 

    React.createElement("li", null, 
    React.createElement("input", {
      type: "checkbox"
    }, " "), 
    React.createElement("label", null, "I am a list item!"), 
    //the code below creates our sublist complete with it's own checkbox
    React.createElement("ul", {
      id: "sublist"
    }, 
    React.createElement("li", null, 
    React.createElement("input", {
      type: "checkbox"
    }, " "), 
    React.createElement("label", null, " I am a sublist item! ") 
    ) //end of sub-list <li>
    ) //end of sub-list <ul>
    ) //end of main <li>
    ) //end of main <ul>
    ) //end of div id=list
    ) //end of the section tag
    );
    }
}
export default App;
