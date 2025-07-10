import Image from "next/image";

const ManIcon = () => {
  return (
    <span style={{ position: "relative" }}>
      <Image
        src="/images/icons/man.svg"
        alt="Иконка человека"
        fill
        style={{ objectFit: "contain" }}
      />
    </span>
  );
};

export default ManIcon;
