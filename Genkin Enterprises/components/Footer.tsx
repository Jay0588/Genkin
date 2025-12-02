import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-200">
            Genkin Enterprises
          </p>
          <p className="text-xs text-slate-500">
            Civil Engineering · General Building · Project Management
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} Genkin Enterprises</span>
          <span className="hidden md:inline">•</span>
          <Link href="/certificates" className="hover:text-amber-400">
            Certificates
          </Link>
          <Link href="/values-quality" className="hover:text-amber-400">
            Quality Policy
          </Link>
          <a
            href="mailto:genkinenterprises@gmail.com"
            className="hover:text-amber-400"
          >
            genkinenterprises@gmail.com
          </a>
          <span>+254 719 613 475 · +254 717 904 242</span>
        </div>
      </div>
    </footer>
  );
};
