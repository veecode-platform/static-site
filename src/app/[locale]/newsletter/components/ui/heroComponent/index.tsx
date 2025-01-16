"use client";

import React from "react";
import { Container, Feedback } from "@/components";
import style from "./HeroComponentStyles.module.scss";
import Image from "next/image";
import { EmailInput } from "./emailInput";
import { FeedbackReducer, initialFeedbackState } from "./state/feedbackReducer";
import { IFeedback } from "./state/types";


const ChatImage = "/assets/newsletter/img.png";

export const HeroComponent = () => {  

  const [ showFeedback, setShowFeedback ] = React.useState<boolean>(false);
  const [ feedbackState, dispatchFeedback ] = React.useReducer(FeedbackReducer, initialFeedbackState);

  const handleFeedback = (action: "create" | "remove", feeback : IFeedback) => {
    if(action === "remove") {
      dispatchFeedback({type: "REMOVE_FEEDBACK", payload: initialFeedbackState});
      setShowFeedback(false);
      return;
    }
    dispatchFeedback({type: "ADD_FEEDBACK", payload: feeback});
    setShowFeedback(true);
  }

  return (
    <section className={style.wrapper}>
      <Container>
        <div className={style.content}>
          <div className={style.content__text}>
            <h1 className={style["content__text-title"]}>
              Conecte-se ao universo da <strong>VeeCode Platform</strong>
            </h1>
            <p className={style["content__text-details"]}>
              Receba as últimas novidades, conteúdos exclusivos e atualizações
              sobre a VeeCode direto no seu e-mail. Assine nossa newsletter e
              esteja sempre à frente!
            </p>
            <EmailInput 
              handleFeedback={handleFeedback}
            />
          </div>
        </div>
      </Container>
      <Image
        src={ChatImage}
        alt="Chat bubble image"
        width={750}
        height={750}
        className={style.chatImageStyle}
        style={{
          height: "auto",
        }}
      />
      <Feedback show={showFeedback} variant={feedbackState.variant} message={feedbackState.message}/>
    </section>
  );
};
