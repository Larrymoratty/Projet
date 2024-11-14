import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh] w-full">
      <Navbar className=""/>
      <div className="flex-1">
        home page
      </div>
      <Footer className=""/>
    </main>
  );
}
