import { motion } from 'framer-motion'
import { ArrowRight, Dumbbell, GraduationCap, MapPin, ShieldCheck, Swords, Trophy, Users } from 'lucide-react'

const TELEGRAM_URL = 'https://t.me/rageacademycenter2018'

const benefits = [
  { icon: MapPin, title: '7 залов по Запорожью', text: 'Выбери удобную локацию рядом с домом или работой.' },
  { icon: Users, title: 'Дети и взрослые', text: 'Группы по возрасту и уровню подготовки.' },
  { icon: ShieldCheck, title: 'Новичкам и опытным', text: 'От первой тренировки до уверенного прогресса.' },
  { icon: Trophy, title: 'Подготовка к соревнованиям', text: 'Системный путь для тех, кто хочет выступать.' },
]

const programs = [
  { title: 'MMA', description: 'Ударная и борцовская техника, спарринги, тактика боя.', icon: Swords },
  { title: 'Детские группы', description: 'Дисциплина, физическое развитие и уверенность в себе.', icon: GraduationCap },
  { title: 'Самооборона', description: 'Практичные навыки защиты в реальных ситуациях.', icon: ShieldCheck },
  { title: 'Функциональная подготовка', description: 'Сила, выносливость, мобильность и скорость.', icon: Dumbbell },
]

const halls = ['Центр города', 'Бородинский', 'Космос', 'Шевченковский', 'Пески', 'Хортицкий', 'Правый берег']

export default function App() {
  return (
    <div className="bg-rage-gradient min-h-screen">
      <header className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3">
          <img src="/rage-symbol.png" alt="RAGE symbol" className="h-10 w-10 rounded-md object-contain" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">Zaporizhzhia, Ukraine / Запорожье</p>
            <p className="text-lg font-bold">RAGE Academy Centr</p>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-2 lg:items-center lg:pt-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">RAGE Academy Centr</h1>
            <p className="mt-4 text-xl text-zinc-200">MMA и единоборства в Запорожье</p>
            <p className="mt-4 max-w-xl text-zinc-400">
              MMA Запорожье, ММА Запорожье, единоборства Запорожье и секция MMA Запорожье для новичков и опытных спортсменов.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-rage-red px-6 py-3 font-semibold text-white shadow-rage transition hover:bg-red-700">
                Записаться на тренировку <ArrowRight size={18} />
              </a>
              <a href="#halls" className="inline-flex items-center justify-center rounded-md border border-zinc-700 px-6 py-3 font-semibold text-zinc-200 transition hover:border-zinc-400">
                Найти ближайший зал
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-2xl border border-zinc-800 bg-rage-steel/60 p-6">
            <img src="/rage-logo.png" alt="RAGE Academy Centr" className="mx-auto w-full max-w-md object-contain" />
          </motion.div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Почему выбирают RAGE Academy Centr</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                <Icon className="mb-3 text-rage-red" />
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">Программы</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {programs.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5">
                <Icon className="mb-3 text-rage-red" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="halls" className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <h2 className="text-2xl font-bold sm:text-3xl">7 залов RAGE по Запорожью</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {halls.map((hall) => (
              <div key={hall} className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-4">{hall}</div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-400">Точные адреса будут добавлены после согласования.</p>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="rounded-2xl border border-rage-blood bg-rage-blood/30 p-8 text-center">
            <h2 className="text-3xl font-black">Запишись на пробную тренировку</h2>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-rage-red px-8 py-3 font-semibold text-white shadow-rage transition hover:bg-red-700">
              Написать в Telegram <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-400">
        RAGE Academy Centr · MMA и единоборства в Запорожье
      </footer>
    </div>
  )
}
