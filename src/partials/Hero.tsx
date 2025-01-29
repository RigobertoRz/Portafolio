import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hola soy <a style={{ color: '#C874D9' }}>Rigoberto Ruiz Contreras</a>
        </>
      }
      description={
        <>
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            malesuada
          </a>{' '}
          nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit amet,{' '}
          <a className="text-cyan-400 hover:underline" href="/">
            consectetur
          </a>{' '}
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. */}
          <GradientText>Ingeniero en Sistemas Computacionales</GradientText>,
          con experiencia en desarrollo de aplicaciones de escritorio{' '}
          <a style={{ color: '#C874D9' }}>(WinForms)</a> y{' '}
          <a style={{ color: '#05FF7E' }}>móviles</a>,
          <a style={{ color: 'yellow' }}> gestión de bases de datos</a>, y
          dominio avanzado de{' '}
          <GradientText> herramientas de Office. </GradientText>
          Me destaco por ser una persona responsable, proactiva y comprometida
          con la excelencia profesional, enfocándome en entregar soluciones
          eficientes y de alta calidad. Busco contribuir con mis habilidades
          técnicas y organizativas al éxito de los proyectos en los que
          participo.
        </>
      }
      avatar={
        <img
          src="/assets/images/avatar.jpeg"
          className="h-80 w-64 rounded-full border-4 border-white/50 object-cover ring-4 ring-blue-500/50"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.linkedin.com/in/rigoberto-contreras-vrtx"
            target="_blank"
          >
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/RigobertoRz" target="_blank">
            <HeroSocial src="/assets/images/Github-Icon.png" alt="Git Icon" />
          </a>
          <a
            href="/assets/pdf/cvrigoberto.pdf"
            download
            className="ml-4 inline-flex items-center justify-center rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors duration-300 hover:bg-purple-700"
          >
            Descargar CV
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
