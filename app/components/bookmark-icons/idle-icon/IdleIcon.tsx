// Idle Bookmark Icon

type BookmarkIconProps = {
  className?: string;
};
export const IdleIcon = ({ className }: BookmarkIconProps) => {
  return (
    <div className={className}>
      <svg
        width="12"
        height="14"
        xmlns="http://www.w3.org/2000/svg"
        data-testid="idle-icon"
      >
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </div>
  );
};
