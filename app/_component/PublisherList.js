import Image from "next/image";
import { PUB_LIST } from "@/constants";

function PublisherList() {
  return (
    <div className="w-full py-12 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {PUB_LIST.map((company, index) => (
          <li key={index}>
            <Image
              src={company.imgPath}
              width={100}
              height={100}
              alt={company.name}
            />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {PUB_LIST.map((company, index) => (
          <li key={index}>
            <Image
              src={company.imgPath}
              width={100}
              height={100}
              alt={company.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PublisherList;
