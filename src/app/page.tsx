import Image from "next/image";
import Hero from "./_component/Hero";
import Presentation from "./_component/Presentation";
import ProductList from "./_component/ProductList";
import BigImage from "./_component/BigImage";
import TextImage from "./_component/TextImage";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Presentation />
      <ProductList />
      <BigImage src="/heroArtShop.jpg" />
      <TextImage />
    </div>

  );
}
