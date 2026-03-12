export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="mb-14">
        <div className="h-16 w-48 bg-neutral-100 dark:bg-neutral-900 mb-6" />
        <div className="h-10 bg-neutral-100 dark:bg-neutral-900" />
      </div>

      {[...Array(3)].map((_, i) => (
        <div key={i} className="mb-10 pb-10 border-b border-neutral-100 dark:border-neutral-900">
          <div className="h-7 bg-neutral-100 dark:bg-neutral-900 mb-3 w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-neutral-100 dark:bg-neutral-900 w-full" />
            <div className="h-4 bg-neutral-100 dark:bg-neutral-900 w-5/6" />
            <div className="h-4 bg-neutral-100 dark:bg-neutral-900 w-4/6" />
          </div>
        </div>
      ))}
    </div>
  );
}