import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-100 h-screen">
      <NavBar></NavBar>
      <main className=""> {children} </main>
    </div>
  );
}
