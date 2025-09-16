export default function ProfileContent() {
  return (
    <main className="flex-1 p-6 bg-cover bg-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="bg-white/80 shadow-md rounded-lg p-6 backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <p><b>Name:</b> Lloyd Lato</p>
        <p><b>Age:</b> 25</p>
        <p><b>Location:</b> Zone 14, Teves Abuno, Iligan City</p>
        <p><b>Hobbies:</b> Playing basketball, music</p>
      </div>
    </main>
  );
}
