import { Logo, NavbarTwoColumns, Section } from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="mr-1 h-10 w-10 stroke-purple-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M10 9l-3 3l3 3" />
              <path d="M14 9l3 3l-3 3" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
            </svg>
          }
          name="Portafolio "
        />
      </a>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
