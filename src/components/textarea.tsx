import type { Iform } from "../interfaces/Iform";

function TextArea({
  text,
  setForm,
}: {
  text?: string;
  setForm: React.Dispatch<React.SetStateAction<Iform>>;
}) {
  return (
    <div className="flex justify-center p-2 bg-blue-500">
      <textarea
        placeholder="Digite aqui..."
        value={text}
        onChange={(e) => setForm({ text: e.target.value })}
        className="w-full text-white bg-blue-500  placeholder-white outline-none resize-none"
      />
    </div>
  );
}

export default TextArea;
