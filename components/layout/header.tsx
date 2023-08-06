import Image from "next/image";
import Icon from "public/assets/icons/icon-512x512.png";
import "@/styles/layout/header.css";

export default function Header() {
  return (
    <header>
      <Image src={Icon} width={20} height={20} alt="daily_money" />
    </header>
  );
}
