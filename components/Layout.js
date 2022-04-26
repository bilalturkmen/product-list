import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <div>
      <NavBar></NavBar>
      <main className=""> {children} </main>
    </div>
  );
}
