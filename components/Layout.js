import NavBar from "./NavBar";
import SocialMedia from "./SocialMedia";

export default function Layout({ children }) {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12 bg-slate-100 h-screen ">
      <NavBar></NavBar>
      <main> {children} </main>
      <SocialMedia></SocialMedia>
    </div>
  );
}
