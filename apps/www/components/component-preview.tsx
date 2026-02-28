export function ComponentPreview({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-(--border) bg-(--background) p-6 sm:p-10 flex items-center justify-center min-h-[200px] ${className}`}
    >
      <div className="w-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}
