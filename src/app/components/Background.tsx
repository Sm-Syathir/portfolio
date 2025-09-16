export default function Background() {
  return (
    <div 
    className="fixed inset-0 -z-10 overflow-hidden h-screen w-screen">
      {/* Biru kiri atas */}
      <div className="fixed top-[-200px] left-[-200px] w-[500px] h-[600px] 
                      rounded-full bg-blue-200 opacity-40 blur-[120px]" />
      
      {/* Ungu atas tengah */}
      <div className="absolute top-[-150px] left-1/3 w-[400px] h-[400px] 
                      rounded-full bg-purple-300 opacity-30 blur-[120px]" />
      
      {/* Kuning kanan atas */}
      <div className="absolute top-[-200px] right-[-150px] w-[600px] h-[600px] 
                      rounded-full bg-yellow-200 opacity-40 blur-[120px]" />
      
      {/* Peach kanan bawah */}
      <div className="absolute bottom-[-200px] right-0 w-[500px] h-[500px] 
                      rounded-full bg-pink-200 opacity-30 blur-[120px]" />
      
      {/* Ungu kiri bawah */}
      <div className="absolute bottom-[-200px] left-[-150px] w-[450px] h-[450px] 
                      rounded-full bg-indigo-300 opacity-30 blur-[120px]" />
    </div>
  );
}
