import { Button } from "flowbite-react";
import CarouselMovie from "./_component/Carousel";
import PublisherList from "./_component/PublisherList";

export default function Home() {
  return (
    <main className="">
      <CarouselMovie />
      <PublisherList />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
      expedita. Tempora veritatis nesciunt, ratione in atque cupiditate, facilis
      vero aliquam ipsa illo, eveniet maxime dolores consequatur? Quibusdam
      commodi ea placeat?
      <Button>Click me</Button>
    </main>
  );
}
