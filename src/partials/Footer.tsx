import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="container mx-auto px-4 text-center">
      <div className="mb-4">
        <p className="text-gray-700">
          Contacto:
          <a
            href="mailto:rigoberto.ruiz@live.com.mx"
            className="ml-2 transition-colors hover:text-purple-600"
          >
            rigoberto.ruiz@live.com.mx
          </a>
        </p>
        <p className="text-gray-700">
          {' '}
          Teléfono:
          <a
            className="mt-2 text-gray-700 transition-colors hover:text-purple-600"
            href="tel:+526121366990"
          >
            +52 (612) 136-6990
          </a>
        </p>
      </div>

      <div className="mb-4 flex justify-center space-x-4">
        <a
          href="https://www.linkedin.com/in/rigoberto-contreras-vrtx"
          target="_blank"
          className="text-gray-600 hover:text-purple-600"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/RigobertoRz"
          target="_blank"
          className="text-gray-600 hover:text-purple-600"
        >
          GitHub
        </a>
      </div>

      <div className="text-sm text-gray-500">
        {new Date().getFullYear()} {AppConfig.site_name}. Todos los derechos
        reservados.
      </div>
    </div>
  </Section>
);

export { Footer };
