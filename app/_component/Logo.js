import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="DB Screens Streaming"
        width={169.04}
        height={42.38}
      />
    </Link>
  );
}

export default Logo;
