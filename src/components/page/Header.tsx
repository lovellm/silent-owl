import MenuButton from "../menu/MenuButton";

export default function Header() {
  return (
    <header className="flex justify-between border-b border-pink-900 p-2">
      <h1 className="text-2xl">Untitled Project</h1>
      <div>
        <MenuButton />
      </div>
    </header>
  );
}
