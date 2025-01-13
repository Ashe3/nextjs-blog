'use client';

import { useRouter } from 'next/navigation';

const Pagination = ({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) => {
  const router = useRouter();
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const goToPage = (page: number) => {
    router.push(`/?page=${page}`);
  };

  return (
    <div className="flex items-center justify-center my-6 gap-8">
      {!isFirstPage && (
        <button
          onClick={() => goToPage(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
      )}
      <span className="text-gray-700">
        Page {currentPage} of {totalPages}
      </span>
      {!isLastPage && (
        <button
          onClick={() => goToPage(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
