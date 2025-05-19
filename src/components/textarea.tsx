function TextArea({ text, setText }: { text: string; setText: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <div className="flex justify-center p-6 bg-blue-500">
      <textarea
        placeholder="Digite aqui..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-64 p-4 text-white bg-blue-500  placeholder-white outline-none resize-none"
      />
    </div>
  );
}

export default TextArea;
