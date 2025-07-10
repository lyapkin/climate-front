import localFont from "next/font/local";

const montserrat = localFont({
  src: [
    { path: "../../public/fonts/Montserrat-Light.ttf", weight: "300" },
    { path: "../../public/fonts/Montserrat-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/Montserrat-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/Montserrat-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/Montserrat-Bold.ttf", weight: "700" },
  ],
  variable: "--main-font",
});

export { montserrat };
