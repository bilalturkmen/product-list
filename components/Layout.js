import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12 bg-slate-100 h-screen ">
      <NavBar></NavBar>
      <main> {children} </main>
    </div>
  );
}
