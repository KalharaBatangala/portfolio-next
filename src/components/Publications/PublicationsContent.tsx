import PublicationItem from './PublicationItem';
import { publications, publicationCategories } from '@/data/publications';

export default function PublicationsContent() {
  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-200 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl mb-20 w-full text-center sm:mb-10 sm:text-5xl dark:text-white animate-fade-in">
          Publications
        </h1>

        {publicationCategories.map(({ type, title, emptyMessage }) => {
          const items = publications
            .filter((pub) => pub.type === type)
            .sort((a, b) => b.year - a.year);

          return (
            <section key={type} className="mb-16 last:mb-0">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{title}</h2>
                {items.length > 0 && (
                  <span className="flex-shrink-0 w-16 text-right text-lg font-semibold text-gray-800 dark:text-white">
                    Year
                  </span>
                )}
              </div>

              {/* Divider */}
              <div className="h-[2px] w-full bg-secondary mt-3 mb-8" />

              {items.length > 0 ? (
                <ol className="space-y-8">
                  {items.map((pub, i) => (
                    <PublicationItem key={pub.id} publication={pub} index={i + 1} />
                  ))}
                </ol>
              ) : (
                <p className="text-base italic text-gray-500 dark:text-gray-400">{emptyMessage}</p>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
