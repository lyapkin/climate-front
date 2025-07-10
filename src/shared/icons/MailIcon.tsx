import Image from "next/image";

const MailIcon = () => {
  return (
    <span style={{ position: "relative" }}>
      <Image
        src="/images/icons/email.svg"
        alt="Иконка почты"
        fill
        style={{ objectFit: "contain" }}
      />
    </span>
  );
};

export default MailIcon;
