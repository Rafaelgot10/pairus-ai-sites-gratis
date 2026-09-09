import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Gift,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";

import logo from "@/assets/pairus-logo.png.asset.json";
import portDentista from "@/assets/port-dentista.jpg";
import portAdvogado from "@/assets/port-advogado.jpg";
import portEletricista from "@/assets/port-eletricista.jpg";
import portSalao from "@/assets/port-salao.jpg";
import portPersonal from "@/assets/port-personal.jpg";
import portRestaurante from "@/assets/port-restaurante.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Site grátis para seu comércio | Pairus IA" },
      {
        name: "description",
        content:
          "Parceiros oficiais Wix. A Pairus IA cria a landing page do seu negócio de graça: design profissional, pronta para vender e no ar em poucos dias.",
      },
      { property: "og:title", content: "Site grátis para seu comércio | Pairus IA" },
      {
        property: "og:description",
        content:
          "Parceiros oficiais Wix. A Pairus IA cria a landing page do seu negócio de graça, pronta para vender.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vi a página da Pairus IA e quero garantir o meu site gratuito.",
)}`;

const portfolio = [
  { img: portDentista, nicho: "Odontologia", titulo: "Clínica Sorriso Vivo" },
  { img: portAdvogado, nicho: "Advocacia", titulo: "Escritório Andrade & Lima" },
  { img: portEletricista, nicho: "Elétrica", titulo: "Volt Serviços Elétricos" },
  { img: portSalao, nicho: "Beleza", titulo: "Studio Bella Hair" },
  { img: portPersonal, nicho: "Fitness", titulo: "Personal Trainer Pro" },
  { img: portRestaurante, nicho: "Alimentação", titulo: "Cantina do Chef" },
];

const beneficios = [
  {
    icon: Rocket,
    titulo: "Landing page completa",
    texto: "Página profissional feita do zero para o seu negócio, com textos que vendem.",
  },
  {
    icon: Smartphone,
    titulo: "Perfeita no celular",
    texto: "Mais de 80% dos seus clientes chegam pelo celular. Sua página vai brilhar lá.",
  },
  {
    icon: MessageCircle,
    titulo: "Botão de WhatsApp",
    texto: "Cada visitante vira uma conversa direta no seu WhatsApp, sem intermediários.",
  },
  {
    icon: Search,
    titulo: "Pronta para o Google",
    texto: "Estrutura otimizada para as pessoas encontrarem o seu comércio na busca.",
  },
  {
    icon: ShieldCheck,
    titulo: "Tecnologia Wix",
    texto: "Somos parceiros oficiais Wix: segurança, velocidade e estabilidade garantidas.",
  },
  {
    icon: CalendarClock,
    titulo: "No ar em poucos dias",
    texto: "Você envia as informações, a gente cuida de absolutamente todo o resto.",
  },
];

const passos = [
  { n: "01", t: "Você chama no WhatsApp", d: "Conta em 2 minutos o que o seu negócio faz." },
  { n: "02", t: "A Pairus IA cria tudo", d: "Design, textos, fotos e estrutura por nossa conta." },
  { n: "03", t: "Você aprova", d: "Ajustamos os detalhes até ficar do seu jeito." },
  { n: "04", t: "Seu site no ar", d: "Link pronto para colocar na bio, no cartão e nos anúncios." },
];

const faq = [
  {
    q: "O site é realmente gratuito?",
    a: "Sim. A criação da sua landing page é 100% gratuita. Você não paga nada pelo nosso trabalho de design e desenvolvimento.",
  },
  {
    q: "Por que vocês fazem de graça?",
    a: "Somos parceiros oficiais Wix e queremos colocar os comércios locais no digital. Cada negócio que cresce com a gente vira um case do nosso portfólio.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. Você só envia as informações do seu negócio pelo WhatsApp e a Pairus IA cuida de todo o resto.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Na maioria dos casos a primeira versão fica pronta em poucos dias após você enviar as informações.",
  },
];

function CtaButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-primary-foreground shadow-brand transition-transform hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      <MessageCircle className="size-5" />
      {label}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <img src={logo.url} alt="Pairus IA" className="h-11 w-auto object-contain" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border px-5 py-2 text-sm font-semibold transition-colors hover:bg-secondary sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="aurora relative overflow-hidden px-5 pt-16 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <BadgeCheck className="size-4 text-brand-blue" />
            Parceiro oficial Wix
          </span>

          <h1 className="mt-7 text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Parabéns! Você está apto a receber
            <span className="text-gradient"> um site profissional 100% gratuito</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A <strong className="text-foreground">Pairus IA</strong> cria a página do seu comércio do
            começo ao fim — design, textos, fotos e publicação. Você não paga nada e não precisa
            mexer em nada. Só aprovar e começar a receber clientes.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3">
            <CtaButton label="QUERO MEU SITE GRATUITO" className="w-full max-w-md sm:w-auto" />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Gift className="size-4 text-brand-violet" />
              Vagas limitadas por cidade — resposta no mesmo dia
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Sem mensalidade escondida", "Sem contrato", "Sem conhecimento técnico"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-blue" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio */}
      <section className="border-t border-border/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-brand-violet uppercase">
              Portfólio
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Veja o nível de site que você vai receber
            </h2>
            <p className="mt-3 text-muted-foreground">
              Exemplos de páginas criadas pela Pairus IA para profissionais e comércios locais.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p) => (
              <figure
                key={p.titulo}
                className="glass-card group overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={p.img}
                    alt={`Exemplo de site criado para ${p.nicho.toLowerCase()}: ${p.titulo}`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="font-semibold">{p.titulo}</p>
                    <p className="text-sm text-muted-foreground">{p.nicho}</p>
                  </div>
                  <Sparkles className="size-5 text-brand-blue" />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <CtaButton label="QUERO UM SITE ASSIM" />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-t border-border/60 bg-surface/40 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Tudo isso incluso, <span className="text-gradient">sem custo nenhum</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b) => (
              <div key={b.titulo} className="glass-card rounded-2xl p-6">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand">
                  <b.icon className="size-5 text-primary-foreground" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{b.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-t border-border/60 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Como funciona</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p) => (
              <div key={p.n} className="rounded-2xl border border-border p-6">
                <span className="text-gradient font-display text-3xl font-extrabold">{p.n}</span>
                <h3 className="mt-3 font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prova social */}
      <section className="border-t border-border/60 bg-surface/40 px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-3">
          {[
            {
              n: "Marcela A.",
              c: "Dentista",
              t: "Em uma semana eu tinha um site melhor que o de clínicas grandes da região.",
            },
            {
              n: "Carlos R.",
              c: "Eletricista",
              t: "Os orçamentos passaram a chegar direto no WhatsApp. Mudou meu mês.",
            },
            {
              n: "Juliana S.",
              c: "Salão de beleza",
              t: "Eu não entendia nada de internet. Eles fizeram tudo e eu só aprovei.",
            },
          ].map((d) => (
            <blockquote key={d.n} className="glass-card rounded-2xl p-6">
              <div className="flex gap-1 text-brand-blue">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed">“{d.t}”</p>
              <footer className="mt-4 text-sm font-semibold">
                {d.n} <span className="font-normal text-muted-foreground">· {d.c}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
          <div className="mt-8 space-y-4">
            {faq.map((f) => (
              <div key={f.q} className="rounded-2xl border border-border p-6">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="aurora relative overflow-hidden border-t border-border/60 px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Seu concorrente já está no digital.
            <span className="text-gradient"> Sua vez é agora — e é de graça.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Fale com a Pairus IA no WhatsApp e garanta a criação gratuita do site do seu comércio.
          </p>
          <div className="mt-8">
            <CtaButton label="GARANTIR MEU SITE GRATUITO" className="w-full max-w-md sm:w-auto" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <img src={logo.url} alt="Pairus IA" className="h-10 w-auto object-contain" />
          <p className="text-sm text-muted-foreground">
            Pairus IA · Parceiro oficial Wix · Seu negócio no digital, de forma simples.
          </p>
        </div>
      </footer>

      {/* Botão flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="animate-float fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-brand"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
