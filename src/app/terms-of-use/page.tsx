import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function TermsOfUsePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-24 pt-32 md:pt-40">
        <h1 className="text-4xl font-bold text-primary mb-8">Termos de Uso</h1>
        <div className="prose prose-lg max-w-none text-foreground space-y-6">
          <p>Bem-vindo aos Termos de Uso do UGym.</p>
          <p>Ao acessar ou usar o serviço UGym ("Serviço"), você concorda em ficar vinculado por estes Termos. Se você não concordar com qualquer parte dos termos, então você não poderá acessar o Serviço.</p>
          
          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Contas</h2>
          <p>Ao criar uma conta conosco, você deve nos fornecer informações precisas, completas e atuais em todos os momentos. A falha em fazê-lo constitui uma violação dos Termos, o que pode resultar na rescisão imediata da sua conta em nosso Serviço.</p>
          <p>Você é responsável por proteger a senha que usa para acessar o Serviço e por quaisquer atividades ou ações sob sua senha, seja sua senha com nosso Serviço ou um serviço de terceiros.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Propriedade Intelectual</h2>
          <p>O Serviço e seu conteúdo original, recursos e funcionalidades são e permanecerão propriedade exclusiva do UGym e seus licenciadores. O Serviço é protegido por direitos autorais, marcas registradas e outras leis do Brasil e de países estrangeiros.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Links Para Outros Sites</h2>
          <p>Nosso Serviço pode conter links para sites ou serviços de terceiros que não são de propriedade ou controlados pelo UGym.</p>
          <p>O UGym não tem controle sobre, e não assume responsabilidade pelo conteúdo, políticas de privacidade ou práticas de quaisquer sites ou serviços de terceiros. Você também reconhece e concorda que o UGym não será responsável, direta ou indiretamente, por qualquer dano ou perda causada ou alegadamente causada por ou em conexão com o uso ou dependência de qualquer conteúdo, bens ou serviços disponíveis em ou através de quaisquer sites ou serviços.</p>
          
          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Rescisão</h2>
          <p>Podemos rescindir ou suspender sua conta imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar os Termos.</p>
          <p>Após a rescisão, seu direito de usar o Serviço cessará imediatamente. Se você deseja encerrar sua conta, você pode simplesmente descontinuar o uso do Serviço.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Limitação de Responsabilidade</h2>
          <p>Em nenhuma circunstância o UGym, nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, ágio, ou outras perdas intangíveis, resultantes de (i) seu acesso ou uso ou incapacidade de acessar ou usar o Serviço; (ii) qualquer conduta ou conteúdo de terceiros no Serviço; (iii) qualquer conteúdo obtido do Serviço; e (iv) acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo, seja com base em garantia, contrato, ato ilícito (incluindo negligência) ou qualquer outra teoria legal, quer tenhamos sido informados ou não da possibilidade de tais danos, e mesmo que uma solução aqui estabelecida seja considerada falha em seu propósito essencial.</p>

          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Alterações</h2>
          <p>Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, tentaremos fornecer pelo menos 30 dias de aviso prévio antes que quaisquer novos termos entrem em vigor. O que constitui uma alteração material será determinado a nosso exclusivo critério.</p>
          
          <h2 className="text-2xl font-semibold text-primary mt-6 mb-3">Entre em Contato</h2>
          <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco:</p>
          <ul className="list-disc pl-6">
            <li>Por e-mail: contato@ugym.com</li>
          </ul>
          <p className="italic mt-8">Este é um exemplo de texto. Adapte conforme necessário.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

