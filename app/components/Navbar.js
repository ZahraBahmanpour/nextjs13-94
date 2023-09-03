import Link from "next/link";
import Logo from "../../public/next.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image src={Logo} alt="next logo" width={70} quality={100} />
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  );
}
