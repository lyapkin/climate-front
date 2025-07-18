import s from "./styles.module.css";
import cn from "classnames";
import { getPageApi } from "@/src/shared/api";
import ServicesContent from "./ServicesContent";
import { getServicesApi } from "../api";
import { Contact } from "@/src/widgets/sections";

const Services = async () => {
  const [data, content] = await Promise.all([
    getPageApi("services"),
    getServicesApi(),
  ]);
  return (
    <>
      <div className="page hero">
        <div className="bluebg">
          <div className="container">
            <main className={s.services}>
              <h1 className={cn(s.services__title, "page-title")}>
                {data.title}
              </h1>
              <ServicesContent data={content} />
            </main>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Services;
