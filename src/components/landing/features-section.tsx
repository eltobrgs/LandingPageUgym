import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, LineChart, Watch, CalendarDays, PlayCircle, Zap } from 'lucide-react';

const features = [
  {
    icon: Dumbbell,
    title: 'Treinos Personalizados',
    description: 'Receba treinos feitos sob medida para seus objetivos e nível de condicionamento.',
  },
  {
    icon: LineChart,
    title: 'Acompanhamento de Evolução',
    description: 'Monitore seu progresso com gráficos detalhados e métricas de performance.',
  },
  {
    icon: Watch,
    title: 'Integração com Wearables',
    description: 'Sincronize seus dados de smartwatches e pulseiras fitness automaticamente.',
  },
  {
    icon: CalendarDays,
    title: 'Agenda de Treinos',
    description: 'Organize sua rotina de treinos e receba lembretes para não perder nenhum.',
  },
  {
    icon: PlayCircle,
    title: 'Vídeos Demonstrativos',
    description: 'Acesse uma biblioteca de vídeos com instruções claras para cada exercício.',
  },
  {
    icon: Zap,
    title: 'Motivação Constante',
    description: 'Desafios, conquistas e uma comunidade para te manter engajado e motivado.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Funcionalidades Incríveis</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra como o UGym pode transformar sua jornada fitness com ferramentas poderosas e intuitivas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300_ease-in-out bg-card rounded-xl overflow-hidden group">
              <CardHeader className="bg-primary/10 p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-center text-primary group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
