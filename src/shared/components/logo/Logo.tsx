import Image from "next/image";
import Link from "next/link";

const Logo = ({ className }: LogoProps) => {
  return (
    <Link
      href={"/"}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "4px",
      }}
      className={className}
    >
      <span
        style={{
          position: "relative",
          minWidth: 0,
          height: "80%",
          aspectRatio: "1/1",
        }}
      >
        <Image
          src={"/images/logo-pic.svg"}
          alt={'Логотип компании "Климов Климат"'}
          fill
          loading="eager"
          style={{ objectFit: "contain" }}
        />
      </span>
      <span
        style={{
          position: "relative",
          minWidth: 0,
          height: "80%",
          aspectRatio: "102/36",
        }}
      >
        <Image
          src={"/images/logo-text.svg"}
          alt={'Логотип компании "Климов Климат"'}
          fill
          loading="eager"
          style={{ objectFit: "contain" }}
        />
      </span>
    </Link>
  );
};

interface LogoProps {
  className: string;
}

export default Logo;
