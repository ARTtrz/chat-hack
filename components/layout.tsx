import Image from "next/image";


interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="mx-auto flex flex-col space-y-4">
      <header className="sticky top-0 z-40 bg-white">
        <div className="h-16 border-b-2 border-b-black py-4">
          <nav className="ml-28 pl-6 flex justify-between">
            <a href="#" className="hover:text-slate-600 cursor-pointer text-2xl font-semibold leading-[1.1] tracking-tighter text-start">
              Universal Mentor
            </a>
            <div className="mr-28 pr-6 flex items-center gap-4">
              <Image
                src="/user.png"
                width={40}
                height={40}
                alt="User"
              />
              <span>
                Yerdaulet D.
              </span>
            </div>
          </nav>
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
