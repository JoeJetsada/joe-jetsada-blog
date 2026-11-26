const GITHUB_URL = "https://github.com/JoeJetsada";
const LINKEDIN_URL = "#"; // TODO: ใส่ลิงก์ LinkedIn
const GOOGLE_URL = "#"; // TODO: ใส่ลิงก์ (เช่น mailto: หรือ Google profile)

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const iconLinkClass =
  "flex size-6 items-center justify-center rounded-full bg-brown-500 text-white transition-opacity hover:opacity-80";

export default function Footer() {
  return (
    <footer className="bg-brown-200">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 py-10 md:flex-row md:justify-between md:px-12 md:py-7 lg:px-[72px]">
        {/* Get in touch + social icons */}
        <div className="flex items-center gap-6 md:gap-4">
          <span className="text-base font-medium text-brown-500">Get in touch</span>

          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconLinkClass}
            >
              <span className="text-[11px] font-bold leading-none">in</span>
            </a>

            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-brown-500 transition-opacity hover:opacity-80"
            >
              <GithubIcon className="size-6" />
            </a>

            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google"
              className={iconLinkClass}
            >
              <span className="text-[11px] font-bold leading-none">G</span>
            </a>
          </div>
        </div>

        {/* Home page link */}
        <a
          href="/"
          className="text-base font-medium text-brown-600 underline underline-offset-2 transition-colors hover:text-brown-500"
        >
          Home page
        </a>
      </div>
    </footer>
  );
}
