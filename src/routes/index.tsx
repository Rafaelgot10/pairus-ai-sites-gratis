import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  MessageCircle,
  Rocket,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from "lucide-react";

import logo from "@/assets/pairus-logo.png.asset.json";
import portDentista from "@/assets/port-dentista.jpg";
import portAdvogado from "@/assets/port-advogado.jpg";
import portEletricista from "@/assets/port-eletricista.jpg";
import portSalao from "@/assets/port-salao.jpg";
import portPersonal from "@/assets/port-personal.jpg";
import portRestaurante from "@/assets/port-restaurante.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Site profissional para o seu negócio | Pairus IA" },
      {
        name: "description",
        content:
          "Parceiros oficiais Wix. A Pairus IA cria o site do seu negócio sem cobrar pela criação: design profissional, pronto para vender e no ar em poucos dias.",
      },
      { property: "og:title", content: "Site profissional para o seu negócio | Pairus IA" },
      {
        property: "og:description",
        content:
          "Parceiros oficiais Wix. A Pairus IA cria o site do seu negócio sem cobrar pela criação, pronto para vender.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "5511958696248";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Olá! Vi a página da Pairus IA e quero criar o site do meu negócio.",
)}`;

const portfolio = [
  { img: portDentista, nicho: "Odontologia", titulo: "Clínica Sorriso Vivo" },
  { img: portAdvogado, nicho: "Advocacia", titulo: "Andrade & Lima Advogados" },
  { img: portEletricista, nicho: "Elétrica", titulo: "Volt Serviços Elétricos" },
  { img: portSalao, nicho: "Beleza", titulo: "Studio Bella Hair" },
  { img: portPersonal, nicho: "Fitness", titulo: "Personal Trainer Pro" },
  { img: portRestaurante, nicho: "Alimentação", titulo: "Cantina do Chef" },
];

const nichos = [
  "Dentistas",
  "Advogados",
  "Eletricistas",
  "Salões de beleza",
  "Personal trainers",
  "Restaurantes",
  "Clínicas",
  "Arquitetos",
  "Contadores",
  "Pet shops",
  "Barbearias",
  "Encanadores",
];

const beneficios = [
  {
    icon: Rocket,
    titulo: "Site completo",
    texto: "Site profissional feito do zero para o seu negócio, com textos que vendem.",
  },
  {
    icon: Smartphone,
    titulo: "Perfeito no celular",
    texto: "Mais de 80% dos seus clientes chegam pelo celular. Seu site vai brilhar lá.",
  },
  {
    icon: MessageCircle,
    titulo: "Botão de WhatsApp",
    texto: "Cada visitante vira uma conversa direta no seu WhatsApp, sem intermediários.",
  },
  {
    icon: Search,
    titulo: "Pronto para o Google",
    texto: "Estrutura otimizada para as pessoas encontrarem o seu negócio na busca.",
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
    q: "Quanto custa para ter o meu site?",
    a: "A criação do site é por nossa conta: você não paga pelo nosso trabalho de design e desenvolvimento. Para o site ficar no ar existe apenas a assinatura da Wix, que fica em menos de R$ 20 por mês e é paga direto para a plataforma.",
  },
  {
    q: "Por que vocês não cobram pela criação?",
    a: "Somos parceiros oficiais Wix e queremos colocar os negócios locais no digital. Cada negócio que cresce com a gente vira um case do nosso portfólio.",
  },
  {
    q: "Preciso entender de tecnologia?",
    a: "Não. Você só envia as informações do seu negócio pelo WhatsApp e a Pairus IA cuida de todo o resto.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Na maioria dos casos a primeira versão fica pronta em poucos dias após você enviar as informações.",
  },
  {
    q: "Existe fidelidade ou contrato?",
    a: "Não. O site é seu, hospedado na sua própria conta Wix. Você pode continuar ou parar quando quiser.",
  },
];

function CtaButton({ label, className = "" }: { label: string; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`animate-glow group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-brand px-8 py-4 text-base font-bold text-primary-foreground shadow-brand transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] active:translate-y-0 ${className}`}
    >
      <MessageCircle className="size-5 transition-transform duration-300 group-hover:rotate-12" />
      {label}
    </a>
  );
}

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <img
            src={logo.url}
            alt="Pairus IA"
            className="h-14 w-auto object-contain drop-shadow-[0_0_24px_color-mix(in_oklab,var(--brand-violet)_55%,transparent)] transition-transform duration-300 hover:scale-105 sm:h-16"
          />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-border px-5 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="aurora relative overflow-hidden px-5 pt-14 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <BadgeCheck className="size-4 text-brand-blue" />
            Parceiro oficial Wix
          </span>

          <h1 className="reveal mt-7 text-4xl leading-[1.05] font-extrabold sm:text-6xl">
            Parabéns! O seu negócio está apto a receber
            <span className="text-gradient"> um site profissional sem custo de criação</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            A <strong className="text-foreground">Pairus IA</strong> cria o site do seu negócio do
            começo ao fim — design, textos, fotos e publicação. Você só cuida do que sabe fazer de
            melhor: atender bem os seus clientes.
          </p>

          <div className="reveal mt-9 flex flex-col items-center gap-3">
            <CtaButton label="QUERO O SITE DO MEU NEGÓCIO" className="w-full max-w-md sm:w-auto" />
            <span className="text-sm text-muted-foreground">
              Você paga apenas a assinatura da Wix para manter o site no ar (menos de R$ 20/mês)
            </span>
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["Sem custo de criação", "Sem contrato", "Sem conhecimento técnico"].map((t) => (
              <span key={t} className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4 text-brand-blue" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Faixa de nichos */}
      <div className="group relative overflow-hidden border-y border-border/60 bg-surface/40 py-4">
        <div className="animate-marquee flex w-max gap-8 group-hover:[animation-play-state:paused]">
          {[...nichos, ...nichos].map((n, i) => (
            <span
              key={`${n}-${i}`}
              className="flex items-center gap-3 text-sm font-semibold whitespace-nowrap text-muted-foreground"
            >
              <Sparkles className="size-4 text-brand-violet" />
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Portfólio */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal max-w-2xl">
            <span className="text-sm font-bold tracking-widest text-brand-violet uppercase">
              Portfólio
            </span>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Veja o nível de site que você vai receber
            </h2>
            <p className="mt-3 text-muted-foreground">
              Exemplos de sites criados pela Pairus IA para profissionais e negócios locais.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((p, i) => (
              <figure
                key={p.titulo}
                style={{ animationDelay: `${i * 90}ms` }}
                className="glass-card reveal group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-brand"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={p.img}
                    alt={`Exemplo de site criado para ${p.nicho.toLowerCase()}: ${p.titulo}`}
                    width={800}
                    height={1008}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-[2500ms] ease-out group-hover:-translate-y-[35%]"
                  />
                </div>
                <figcaption className="flex items-center justify-between px-5 py-4">
                  <div>
                    <p className="font-semibold">{p.titulo}</p>
                    <p className="text-sm text-muted-foreground">{p.nicho}</p>
                  </div>
                  <Sparkles className="size-5 text-brand-blue transition-transform duration-300 group-hover:scale-125" />
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <CtaButton label="QUERO UM SITE ASSIM" />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="border-t border-border/60 bg-surface/40 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="reveal max-w-2xl text-3xl font-bold sm:text-4xl">
            Tudo isso incluso, <span className="text-gradient">sem cobrar pela criação</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((b, i) => (
              <div
                key={b.titulo}
                style={{ animationDelay: `${i * 80}ms` }}
                className="glass-card reveal group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/40"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-brand transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
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
          <h2 className="reveal text-3xl font-bold sm:text-4xl">Como funciona</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {passos.map((p, i) => (
              <div
                key={p.n}
                style={{ animationDelay: `${i * 100}ms` }}
                className="reveal rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-surface/60"
              >
                <span className="text-gradient font-display text-3xl font-extrabold">{p.n}</span>
                <h3 className="mt-3 font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparência */}
      <section className="border-t border-border/60 bg-surface/40 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="glass-card reveal rounded-2xl p-8">
            <span className="text-sm font-bold tracking-widest text-brand-violet uppercase">
              Transparência total
            </span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">O que você paga e o que não paga</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-border p-5">
                <p className="font-semibold text-brand-blue">Por nossa conta</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Criação, design, textos, imagens, estrutura e publicação do site.
                </p>
              </div>
              <div className="rounded-xl border border-border p-5">
                <p className="font-semibold">Por sua conta</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Apenas a assinatura da Wix, que mantém o site no ar: menos de R$ 20 por mês, paga
                  direto para a plataforma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 px-5 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
          <div className="mt-8 space-y-4">
            {faq.map((f, i) => (
              <details
                key={f.q}
                style={{ animationDelay: `${i * 70}ms` }}
                className="reveal group rounded-2xl border border-border p-6 transition-colors duration-300 hover:border-brand-blue/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="text-gradient text-xl transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="aurora relative overflow-hidden border-t border-border/60 px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="reveal text-3xl font-extrabold sm:text-5xl">
            Seu concorrente já está no digital.
            <span className="text-gradient"> A sua vez é agora.</span>
          </h2>
          <p className="reveal mt-5 text-lg text-muted-foreground">
            Fale com a Pairus IA no WhatsApp e comece a criação do site do seu negócio hoje mesmo.
          </p>
          <div className="reveal mt-8">
            <CtaButton label="FALAR COM A PAIRUS IA" className="w-full max-w-md sm:w-auto" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-5 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
          <img
            src={logo.url}
            alt="Pairus IA"
            className="h-16 w-auto object-contain drop-shadow-[0_0_30px_color-mix(in_oklab,var(--brand-violet)_45%,transparent)]"
          />
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
        className="animate-float fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-whatsapp text-background shadow-brand transition-transform duration-300 hover:scale-110"
      >
        <MessageCircle className="size-7" />
      </a>
    </div>
  );
}
