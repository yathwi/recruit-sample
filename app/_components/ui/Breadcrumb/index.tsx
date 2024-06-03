import Link from 'next/link';

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className=" bg-white" aria-label="Breadcrumb">
      <ol className=" flex max-w-[90%] mx-auto  py-2 items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className=" flex items-center">
            <Link
              href={item.href}
              className={` flex items-center text-sm  hover:text-blue-600 ${
                index === items.length - 1 ? ' pointer-events-none' : ''
              }`}
            >
              {item.label}
            </Link>
            {index !== items.length - 1 && (
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
