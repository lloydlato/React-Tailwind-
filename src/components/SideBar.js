export default function SideBar() {
  return (
    <aside
      className="w-56 text-white p-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <h2 className="font-bold text-lg mb-4">Navigation</h2>
      <ul className="space-y-2">
        <li><a href="#" className="hover:text-yellow-300">Home</a></li>
        <li><a href="#" className="hover:text-yellow-300">About</a></li>
        <li><a href="#" className="hover:text-yellow-300">Projects</a></li>
        <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </aside>
  );
}
