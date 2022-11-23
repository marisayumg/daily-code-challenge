import { GlobalStyle } from "./styles";
import albumCover from "./assets/sleeve_design-arctic_monkeys.webp";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <h1>Arctic Monkeys</h1>
      <img src={albumCover} alt="Arctic Mokeys cover mashup" />
    </div>
  );
}

export default App;
