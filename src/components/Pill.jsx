export default function Pill({
  icon,
  dotColor,
  borderColor,
  textColor,
  children,
  customClassName,
  textSize,
  padding,
}) {
  const style = {
    borderColor: borderColor || dotColor,
    color: textColor || dotColor,
  };
  return (
    <span
      style={style}
      className={`inline-flex items-center gap-2 rounded-full border-[1.5px] bg-black/30 ${padding || "px-4 py-2"} ${textSize || "text-[0.85rem]"} font-semibold ${customClassName || ""}`}
    >
      {icon ? (
        <span aria-hidden="true" className="inline-flex">
          {icon}
        </span>
      ) : dotColor ? (
        <span
          aria-hidden="true"
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ background: dotColor }}
        />
      ) : null}
      {children}
    </span>
  );
}
