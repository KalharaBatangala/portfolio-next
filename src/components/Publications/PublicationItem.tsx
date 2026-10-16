import { Fragment } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { Publication, highlightedAuthors } from '@/data/publications';

type PublicationItemProps = {
  publication: Publication;
  index: number;
};

const linkClass =
  'inline-flex items-center gap-1 text-sm font-medium text-secondary hover:text-orange-600 dark:hover:text-gray-300 transition-colors duration-200';

export default function PublicationItem({ publication, index }: PublicationItemProps) {
  const { title, authors, venue, year, month, location, volume, issue, pages, doi, url, urlLabel, status } =
    publication;

  const details = [
    location,
    volume && `vol. ${volume}`,
    issue && `no. ${issue}`,
    pages && `pp. ${pages}`,
    [month, year].filter(Boolean).join(' '),
  ].filter(Boolean);

  return (
    <li className="flex gap-4 sm:gap-6">
      <span className="flex-shrink-0 w-10 text-lg font-bold text-secondary tabular-nums">[{index}]</span>

      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 leading-snug">
          {title}
          {status && (
            <span className="ml-3 align-middle inline-block px-2 py-0.5 text-xs font-semibold text-secondary border border-secondary rounded-full">
              {status}
            </span>
          )}
        </h3>

        <p className="mt-1 text-base text-gray-700 dark:text-gray-300">
          {authors.map((author, i) => (
            <Fragment key={author}>
              {i > 0 && ', '}
              {highlightedAuthors.includes(author) ? (
                <span className="font-semibold text-gray-900 dark:text-white">{author}</span>
              ) : (
                author
              )}
            </Fragment>
          ))}
        </p>

        <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
          <span className="italic">{venue}</span>
          {details.length > 0 && `, ${details.join(', ')}`}
        </p>

        {(doi || url) && (
          <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-1">
            {doi && (
              <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className={linkClass}>
                DOI: {doi}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            )}
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {urlLabel ?? 'View Paper'}
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <span className="flex-shrink-0 w-16 text-right text-lg font-semibold text-gray-800 dark:text-gray-100 tabular-nums">
        {year}
      </span>
    </li>
  );
}
