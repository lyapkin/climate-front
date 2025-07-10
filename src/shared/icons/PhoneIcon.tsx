import Image from "next/image";

const PhoneIcon = () => {
  return (
    <span style={{ position: "relative" }}>
      <Image
        src="/images/icons/phone.svg"
        alt="Иконка телефона"
        fill
        style={{ objectFit: "contain" }}
      />
    </span>
  );
};

export default PhoneIcon;
