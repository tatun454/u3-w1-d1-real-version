import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent label="Cliccami" />
        <ImageComponent
          imageSrc="http://placecats.com/100/100"
          altText="Gattino"
        />
        <ImageComponent
          imageSrc="http://placecats.com/200/200"
          altText="Gattino"
        />
        <ButtonComponent label="Clicca anche me" />
      </header>
    </div>
  );
}

export default App;
