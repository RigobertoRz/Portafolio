import { GradientText, Section } from 'astro-boilerplate-components';

const Aboutme = () => (
  <Section
    title={
      <>
        Sobre <GradientText>Mí</GradientText>
      </>
    }
  >
    <div className="space-y-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 text-xl font-bold">Experiencia Profesional</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-purple-600">
                Instituto Bilingüe Juan de Ugarte
              </h4>
              <p className="text-gray-300">Maestro/Coordinador de Tecnología</p>
              <p>
                <GradientText>ago 2023 - dic 2024</GradientText>
              </p>
              <ul className="mt-2 list-disc pl-5 text-gray-300">
                <li>
                  Administré infraestructura de TI, configurando equipos, redes
                  y dispositivos de conectividad
                </li>
                <li>
                  Impartí clases de tecnología para alumnos de primaria en
                  programación, diseño 3D, realidad virtual, drones y
                  electricidad
                </li>
                <li>
                  Proveí soporte técnico y asesoría en recursos tecnológicos
                  para docentes y padres
                </li>
                <li>
                  Gestioné dispositivos móviles IPads mediante Apple School
                  Manager
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600">IMSS</h4>
              <p className="text-gray-300">Desarrollador Web</p>
              <p>
                <GradientText>ene 2022 - jun 2022</GradientText>
              </p>
              <ul className="mt-2 list-disc pl-5 text-gray-300">
                <li>
                  Desarrollé un sistema web de control de empleados usando
                  Laravel y PHP
                </li>
                <li>
                  Reduje significativamente el tiempo de gestión de empleados
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold">Habilidades Principales</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-purple-600">
                Desarrollo de Software
              </h4>
              <ul className="list-disc pl-5">
                <li>Lenguajes: C#, Laravel, PHP, Kotlin</li>
                <li>Plataformas: Android Studio, Visual Studio</li>
                <li>Tipos de Aplicaciones: Web, Móviles, Escritorio</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600">Bases de Datos</h4>
              <ul className="list-disc pl-5">
                <li>Sistemas: SQL Server, SQLite, MySQL</li>
                <li>Habilidades: Diseño, Optimización, Mantenimiento</li>
                <li>Plataformas Adicionales: PostgreSQL, Firebase</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-purple-600">
                Gestión de Dispositivos
              </h4>
              <ul className="list-disc pl-5">
                <li>MDM: Intune, Google Workspace</li>
                <li>Apple Ecosystem: School Manager, Business Manager</li>
                <li>Enfoque: Seguridad y Eficiencia Operativa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-lg text-gray-100">
          Profesional versátil con amplio dominio tecnológico, desde desarrollo
          de software hasta gestión de infraestructura tecnológica, con un
          compromiso continuo con la innovación y el aprendizaje tecnológico.
        </p>
      </div>
    </div>
  </Section>
);

export default Aboutme;
