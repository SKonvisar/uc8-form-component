import { MessageForm } from "./MessageForm";
import { DisplayData } from "./DisplayData";

export const FormPage = () => {
  return (
    <main>
      <section>
        <MessageForm />
      </section>
      <section>
        <DisplayData />
      </section>
    </main>
  );
};
