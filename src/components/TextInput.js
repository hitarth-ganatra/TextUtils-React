import  { React } from 'react';
import { useState } from 'react';

import '../App.css';

function TextInput(props) {
    const toUpper = () => {
        let text = document.getElementById("hero-field").value;
        if(!!text){
          document.getElementById("hero-field").value = text.toUpperCase();
          props.showAlert("Success: Converted to Uppercase", "success")
        }
        else{
          props.showAlert("Fail: Please enter some text first", "fail")
        }
    }
    const toLower = () => {
        let text = document.getElementById("hero-field").value;
        if(!!text){
          document.getElementById("hero-field").value = text.toLowerCase();
          props.showAlert("Success: Converted to Lowercase", "success")
        }
        else{
          props.showAlert("Fail: Please enter some text first", "fail")
        }
    }
    const speak = () => {
        try{
          const message = new SpeechSynthesisUtterance();
          const voices = window.speechSynthesis.getVoices();
          message.voice = voices[5];
          message.text = document.getElementById("hero-field").value;
          if (document.getElementById("hero-field").value !== '') {
              window.speechSynthesis.speak(message);
          }
          else
          {
              message.text = "Please enter some text first"
              props.showAlert("Fail: Please enter some text first", "fail")
              window.speechSynthesis.speak(message);
          }
        }
        catch(e){
          props.showAlert("Fail: Some error occurred", "fail")
          console.error(e)
        }
    }
    const copy = () => {
        let text = document.getElementById("hero-field").value;

        if (text !== '') {
            navigator.clipboard.writeText(text);
        }
        else{
            props.showAlert("Fail: Please enter some text first", "fail");
        }
    }

    const [words, setWords] = useState(0);
    const [letters, setLetters] = useState(0);

    const countWords = () => {
        let text = document.getElementById("hero-field").value;
        let trimedText = text.trim();
        if(trimedText === ""){
          setWords(0);
          setLetters(0);
          return;
        }
        else{
          setWords(trimedText.split(" ").length);
          setLetters(text.length);
        }
    }
  return (
    <>
      <section style={{height: "90vh"}} className="bg-gradient text-gray-400 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Enter your text
            </h1>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <textarea
                  id="hero-field"
                  name="hero-field"
                  rows={10}
                  cols={100}
                  style={{resize: "none", width: "auto"}}
                  className="w-full bg-gray-800 rounded bg-opacity-40 border border-gray-700 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={countWords}
                >
                </textarea>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col text-gray-300 my-5">
              <button onClick={toUpper} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">Convert to Uppercase</button>
              <button onClick={toLower} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">Convert to Lowercase</button>
              <button onClick={speak} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">Listen to Text</button>
              <button onClick={copy} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mr-5">Copy Text</button>
            </div>
            <div className="textInfo">
              <h1>Words : {words}</h1>
              <h1>Letters : {letters}</h1>
            </div>
            
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TextInput;
