import Image from "next/image";
import Link from "next/link";
import data from "../data/headerSection.json";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link href="/">
          <a>
            <Image src={data.logo} width={180} height={65} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
