export function NavButtons({ text }: { text: string }) {
  return (
    <li className="cursor-pointer px-4 py-1.5 hover:text-neutral-200 transition-all ease-linear">
      {text}
    </li>
  );
}
