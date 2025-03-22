import Menu from "./components/page/Menu";
import MenuButton from "./components/page/MenuButton";

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
