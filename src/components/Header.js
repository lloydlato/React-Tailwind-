export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-6 flex items-center space-x-4 shadow-md">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
      />
      <div>
        <h1 className="text-2xl font-bold">Lloyd Lato</h1>
        <p className="text-sm">Zone 14, Teves Abuno, Iligan City</p>
        <p className="text-sm">lloydlato19@gmail.com</p>
      </div>
    </header>
  );
}
