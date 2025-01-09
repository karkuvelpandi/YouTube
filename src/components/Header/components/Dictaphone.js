import React, { useEffect } from "react";
import "./_dictaphone.scss";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IoMdMic } from "react-icons/io";

const Dictaphone = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const onClose = () => {
    props.onClose();
    resetTranscript();
  };

  useEffect(() => {
    if (!listening && transcript) {
      props.onClose(transcript);
      resetTranscript();
    }
  }, [listening, props, resetTranscript, transcript]);

  useEffect(() => {
    SpeechRecognition.startListening();
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="micPopup">
      <span onClick={onClose} className="micPopup__close">
        X
      </span>
      <p>
        {listening
          ? "Listening..."
          : transcript
          ? transcript
          : "Didn't hear that. Try again."}
      </p>
      <div className="micPopup__mic">
        {/* <button onClick={SpeechRecognition.startListening}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button> */}

        <div className={listening && "pulse-ring"} />
        <IoMdMic
          className={`micPopup__mic__icon ${listening && "active"}`}
          size={50}
          onClick={() =>
            listening
              ? SpeechRecognition.stopListening()
              : SpeechRecognition.startListening()
          }
        />
      </div>
    </div>
  );
};
export default Dictaphone;
