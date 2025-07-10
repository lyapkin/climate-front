// import { JSX, useEffect, useRef, useState } from "react";
import { Slider } from "@/src/shared/components";
import s from "../styles.module.css";
// import cn from "classnames";

import { getCategoriesApi } from "@/src/entities/category/api";
// import Dots from "@/src/shared/components/slider/Dots";
// import { ArrowButton } from "@/src/shared/ui";
import { CategoryCard } from "@/src/widgets/category";

const Catalog = async () => {
  const categories = await getCategoriesApi();
  const content = categories.map((item) => {
    return <CategoryCard key={item.id} category={item} />;
  });
  return (
    <>
      <Slider
        className={s.catalogSection__catalog}
        dots
        dotsClassName={s.catalogSection__dots}
        buttonsClassName={s.catalogSection__buttons}
      >
        {content}
      </Slider>
      {/* <div className={s.catalogSection__catalog}>{content}</div>
      <div className={s.catalogSection__buttons}>
        <ArrowButton direction="left" />
        <ArrowButton direction="right" />
      </div>
      <div className={s.catalogSection__dots}>
        <Dots amount={5} current={2} />
      </div> */}
    </>
  );
};

export default Catalog;
