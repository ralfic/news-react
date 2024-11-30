interface Props {
  keywords: string;
  setKeywords: (keywords: string) => void;
}

export function Search({ keywords, setKeywords }: Props) {
  return (
    <input
      className="border border-gray-200 rounded-2xl px-4 py-2.5 text-sm w-full dark:text-black"
      type="text"
      value={keywords}
      onChange={(e) => setKeywords(e.target.value)}
      placeholder="Java Script"
    />
  );
}
