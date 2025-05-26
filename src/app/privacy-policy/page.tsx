import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 pt-32 md:pt-40">
        <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidade</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Bem-vindo à Política de Privacidade do UGym.</p>
          <p>Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de Dados Pessoais quando você usa nosso Serviço e as opções que você associou a esses dados.</p>
          
          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Coleta e Uso de Informações</h2>
          <p>Coletamos vários tipos diferentes de informações para diversos fins, a fim de fornecer e melhorar nosso Serviço para você.</p>

          <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Tipos de Dados Coletados</h3>
          <h4>Dados Pessoais</h4>
          <p>Ao usar nosso Serviço, podemos solicitar que você nos forneça algumas informações de identificação pessoal que podem ser usadas para contatá-lo ou identificá-lo ("Dados Pessoais"). As informações de identificação pessoal podem incluir, mas não se limitam a:</p>
          <ul className="list-disc pl-6">
            <li>Endereço de e-mail</li>
            <li>Nome e sobrenome</li>
            <li>Número de telefone</li>
            <li>Endereço, Estado, Província, CEP/Código Postal, Cidade</li>
            <li>Cookies e Dados de Uso</li>
          </ul>

          <h4>Dados de Uso</h4>
          <p>Também podemos coletar informações sobre como o Serviço é acessado e usado ("Dados de Uso"). Estes Dados de Uso podem incluir informações como o endereço de Protocolo de Internet do seu computador (por exemplo, endereço IP), tipo de navegador, versão do navegador, as páginas do nosso Serviço que você visita, a hora e data da sua visita, o tempo gasto nessas páginas, identificadores únicos de dispositivos e outros dados de diagnóstico.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Uso de Dados</h2>
          <p>O UGym usa os dados coletados para diversos fins:</p>
          <ul className="list-disc pl-6">
            <li>Para fornecer e manter nosso Serviço</li>
            <li>Para notificá-lo sobre alterações em nosso Serviço</li>
            <li>Para permitir que você participe de recursos interativos do nosso Serviço quando você optar por fazê-lo</li>
            <li>Para fornecer suporte ao cliente</li>
            <li>Para coletar análises ou informações valiosas para que possamos melhorar nosso Serviço</li>
            <li>Para monitorar o uso do nosso Serviço</li>
            <li>Para detectar, prevenir e resolver problemas técnicos</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Segurança dos Dados</h2>
          <p>A segurança dos seus dados é importante para nós, mas lembre-se que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger seus Dados Pessoais, não podemos garantir sua segurança absoluta.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Alterações a Esta Política de Privacidade</h2>
          <p>Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade nesta página.</p>
          <p>Aconselhamos que você revise esta Política de Privacidade periodicamente para quaisquer alterações. As alterações a esta Política de Privacidade entram em vigor quando são publicadas nesta página.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Entre em Contato</h2>
          <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
          <ul className="list-disc pl-6">
            <li>Por e-mail: projetougymm@gmail.com</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

