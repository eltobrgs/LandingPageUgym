import Image from 'next/image';
import FitnessStats from '@/assets/SVG/undraw_fitness-stats_uk0g.svg';
export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-red-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Sobre o UGym</h2>
            <p className="text-lg text-muted-foreground mb-6">
              No UGym, acreditamos que todos merecem alcançar seu potencial máximo de saúde e bem-estar. Nossa missão é fornecer uma plataforma que capacite indivíduos e personalize a jornada fitness, tornando-a acessível, motivadora e eficaz.
            </p>
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Nossa Visão</h3>
                <p className="text-muted-foreground">Ser o aplicativo de fitness líder, reconhecido por inovar na personalização de treinos e na conexão significativa entre usuários e profissionais de educação física.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Nossos Diferenciais</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Algoritmo inteligente para criação de treinos verdadeiramente personalizados.</li>
                  <li>Interface intuitiva e amigável, focada na experiência do usuário.</li>
                  <li>Comunidade engajada e suporte de personal trainers qualificados.</li>
                  <li>Compromisso com a evolução contínua, baseada em feedback e ciência do esporte.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
             <Image
              src={FitnessStats}
              alt="Equipe UGym ou conceito de bem-estar"
              width={500}
              height={400}
              className="rounded-xl shadow-xl object-cover"
              data-ai-hint="teamwork fitness"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
