import { useState } from "react";
import TextArea from "../basic/TextArea";
import ButtonIcon from "../basic/ButtonIcon";
import { PiCheckBold, PiClipboardBold, PiXBold } from "react-icons/pi";

export default function DataInput() {
  const [text, setText] = useState<string>("");

  return (
    <div className="flex lg:w-1/2 2xl:w-1/3">
      <TextArea
        value={text}
        placeholder="Enter or Paste Data Here"
        onChange={(e) => setText(e.target.value)}
        rows={4}
        className="grow px-2 py-1"
      />
      <div className="m-1 flex flex-col gap-y-1">
        <ButtonIcon title="Clear Data" size="small" onClick={() => setText("")}>
          <PiXBold />
        </ButtonIcon>
        <ButtonIcon title="Use Entered Text" size="small">
          <PiCheckBold />
        </ButtonIcon>
        <ButtonIcon
          title="Paste from Clipboard"
          size="small"
          onClick={() => {
            if (navigator.clipboard) {
              navigator.clipboard
                .readText()
                .then((pasted: string) => {
                  setText(pasted);
                })
                .catch((e) => {
                  console.error("Unable to Paste Text", e);
                });
            }
          }}
        >
          <PiClipboardBold />
        </ButtonIcon>
      </div>
    </div>
  );
}
