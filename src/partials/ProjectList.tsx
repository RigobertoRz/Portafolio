import {
  ColorTags,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Proyectos <a style={{ color: '#C874D9' }}>De escritorio</a>
      </>
    }
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      <Project
        name="Punto de Venta"
        description="Como parte de aplicar mi conocimiento en bases de datos y programacion por capas.
         Desarrolle un punto de venta con tematica de una tienda de suplementos."
        link="/posts/first-post/"
        img={{
          src: '/assets/images/Pdv.png',
          alt: 'Punto de Venta',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
      <Project
        name="Memorama"
        description="Este es un divertido juego de memoria desarrollado en C#, inspirado en el popular juego Among Us. En este memorama, los jugadores deben emparejar cartas con tematica de Among Us."
        link="/"
        img={{ src: '/assets/images/memorama.gif', alt: 'memorama' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>Blog</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
      />
      <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);
const ProjectListandroid = () => (
  <Section
    title={
      <>
        Proyectos <a style={{ color: '#81F499' }}>Android</a>
      </>
    }
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      <Project
        name="SusAPP(App de Mensajeria)"
        description="En este proyecto desarrolle una app para poder enviar mensajes entre usuarios utilizando firebase"
        link="/"
        img={{ src: '/assets/images/SusApp.png', alt: 'SusApp Logo' }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>Android</Tags>
            <Tags color={ColorTags.EMERALD}>Mensajeria</Tags>
            <Tags color={ColorTags.BLUE}>Firebase</Tags>
          </>
        }
      />
      <Project
        name="GLHF"
        description="Good Luck Have Fun, es un proyecto que desarrolle en universidad para servir como un tracker de los videojuegos 
        que has jugado y quieres completar Inspirado en apps como Letterbox o TV Time. "
        link="/"
        img={{
          src: '/assets/images/GLHF.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.GREEN}>Android</Tags>
            <Tags color={ColorTags.SKY}>SQLite</Tags>
            <Tags color={ColorTags.GRAY}>Simple</Tags>
          </>
        }
      />
    </div>
  </Section>
);
const ProjectListc = () => (
  <Section
    title={
      <>
        Proyectos <a style={{ color: 'yellow' }}>Python</a>
      </>
    }
  >
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
      <Project
        name="Crypto_Analyzer"
        description="Este proyecto lo hice para aprender sobre señales de trading. 
        Este programa analiza graficas de cryptos y detecta Death Crosses y Golden Crosses"
        link="/"
        img={{
          src: '/assets/images/Crypto_analyzer.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
export { ProjectListc };
export { ProjectListandroid };
