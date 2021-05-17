import Link from 'next/link'
export default function MenuButton({ children, text, pagelink }) {

  return (
    <>
      <Link href={pagelink}>
          <a>
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 px-3 py-3 md:py-4 md:px-5 rounded-xl text-grey transition duration-200 hover:bg-hovergrey hover:text-primary">
                  {children}
                  <div className="text-captionsm md:text-title font-semibold">{text}</div>
              </div>
          </a>
      </Link>
    </>
  );
}
