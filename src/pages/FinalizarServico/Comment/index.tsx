import React from "react";
import TextArea from "../../../components/TextArea";
import "./_styles.scss";
import Button from "../../../components/Button";

const Comment = () => {
  const [state, setState] = React.useState("");

  const sendComment = () => console.log(state);

  return (
    <div className="comment">
      <div className="mb-10">
        <TextArea
          size="sm"
          label="Observações (opcional)"
          onChange={(e) => setState(e.target.value)}
        >
          {state}
        </TextArea>
      </div>
      <nav>
        <Button size="sm" variant="primary" onClick={sendComment}>
          Fianlizar Serviço
        </Button>
      </nav>
    </div>
  );
};
export default Comment;
