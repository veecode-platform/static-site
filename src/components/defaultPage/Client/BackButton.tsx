"use client";

import { useRouter } from "@/i18n/routing";
import style from "./BackButton.module.scss";
import { BackButtonProps } from "./types";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const BackButton: React.FC<BackButtonProps> = ({
  backToUrl,
  noPrevious,
}) => {
  const router = useRouter();

  const HandlerBack = () => {
    if (backToUrl) {
      router.push(backToUrl as any);
    } else {
      noPrevious ? router.push("/") : router.back();
    }
  };

  return (
    <section className={style.back}>
      <span onClick={HandlerBack}>
        <FaLongArrowAltLeft />
      </span>
    </section>
  );
};
