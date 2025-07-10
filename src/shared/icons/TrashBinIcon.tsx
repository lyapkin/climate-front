import Image from "next/image";

const TrashBinIcon = () => {
  return (
    <span style={{ position: "relative", height: "100%", width: "100%" }}>
      <Image
        src="/images/icons/trashbin.svg"
        alt=""
        fill
        style={{ objectFit: "contain" }}
      />
    </span>
  );
};

export default TrashBinIcon;
