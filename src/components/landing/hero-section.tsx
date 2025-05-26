import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-background via-red-50 to-red-100 py-20 pt-32 md:pt-40 min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-primary mb-6">
              UGym
            </h1>
            <p className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
              Seu treino, sua evolução.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0">
              O UGym é um app completo para treinos personalizados, acompanhamento de performance e conexão entre personal trainers e alunos. Alcance seus objetivos de forma inteligente e motivadora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform hover:scale-105" asChild>
                <Link href="#">
                  Baixar App
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-md transition-transform hover:scale-105" asChild>
                <Link href="#features">
                  Ver Funcionalidades
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/500x550.png"
              alt="Mockup do aplicativo UGym"
              width={500}
              height={550}
              className="rounded-xl shadow-2xl object-cover"
              data-ai-hint="app mockup fitness"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
