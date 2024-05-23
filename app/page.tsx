import Image from "next/image";
import Hero from "./components/Hero"
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import Articles from "./components/Articles";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";




export default function Home() {
  return (
    <main className="container mx-auto">
      <Hero /> 
      <Categories />
      <Featured />
      <Articles />
    </main>
  
  );
}
