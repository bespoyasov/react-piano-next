import React, { FunctionComponent } from "react";
import { Playground } from "../Playground";
import { BookPromotion } from "../BookPromotion";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";

export const Main: FunctionComponent = () => {
  const AudioContext = useAudioContext();
  return !!AudioContext ? (
    <div>
      <Playground />
      <BookPromotion />
    </div>
  ) : (
    <NoAudioMessage />
  );
};
