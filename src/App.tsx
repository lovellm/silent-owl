import Menu from "./components/menu/Menu";
import MenuButton from "./components/menu/MenuButton";

function App() {
  return (
    <>
      <header className="flex justify-between border-b border-pink-900 p-2">
        <h1>Untitled Project</h1>
        <div>
          <MenuButton />
        </div>
      </header>
      <main className="relative p-2">Stuff Goes Here</main>
      <Menu />
    </>
  );
}

export default App;
