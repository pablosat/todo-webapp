import { ToDo } from "./components/ToDo/ToDo";
import "./App.scss";

export default function App() {
  return (
    <div className="App responsive">
      <h1>Welcome!</h1>

      <ToDo />
    </div>
  );
}
