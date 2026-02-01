import { Waves, Dumbbell, Sparkles, Flame, Users } from "lucide-react";
import { TechItem, Trainer, NavItem } from "./types";

// --- ИМПОРТЫ ЛОКАЛЬНЫХ КАРТИНОК ---
import gymImg from "../assets/zal.webp";
import spaImg from "../assets/spa.avif";
import cosmetologyImg from "../assets/cosmetology.avif";
import crossfitImg from "../assets/crossfit.avif";
import groupImg from "../assets/group.webp";

export const NAV_ITEMS: NavItem[] = [
  { label: "FITNESS", href: "#hero" },
  { label: "SPA", href: "#tech" },
  { label: "КОМАНДА", href: "#trainers" },
  { label: "БЛОГ", href: "#footer" },
];

export const TECH_ITEMS: TechItem[] = [
  {
    id: "01",
    title: "ТРЕНАЖЕРНЫЙ ЗАЛ",
    subtitle: "STRENGTH & POWER",
    description:
      "Линейка тренажеров ARTIS от Technogym. Продуманное зонирование, панорамные виды и персональный подход к каждой тренировке.",
    icon: Dumbbell,
    image: gymImg, // Использован импорт
    stats: [
      { label: "AREA", value: "800m²" },
      { label: "EQUIP", value: "ELITE" },
    ],
    colSpan: 2,
  },
  {
    id: "02",
    title: "SPA ПРОЦЕДУРЫ",
    subtitle: "RELAX & RECOVERY",
    description:
      "Гармония души и тела в термальной зоне. Хаммам, сауна из канадского кедра и авторские программы восстановления.",
    icon: Waves,
    image: spaImg, // Использован импорт
    stats: [
      { label: "WATER", value: "32°C" },
      { label: "PEACE", value: "100%" },
    ],
    colSpan: 1,
  },
  {
    id: "03",
    title: "КОСМЕТОЛОГИЯ",
    subtitle: "BEAUTY & CARE",
    description:
      "Индивидуальные решения для вашей красоты. Уходовые процедуры и методики, направленные на мгновенный результат.",
    icon: Sparkles,
    image: cosmetologyImg, // Использован импорт
    stats: [{ label: "SERVICE", value: "5 STAR" }],
    colSpan: 1,
  },
  {
    id: "04",
    title: "ЗОНА CROSSFIT",
    subtitle: "LIMITLESS ENERGY",
    description:
      "Пространство для тех, кто не боится вызова. Функциональное оборудование Rogue и интенсивные тренировки для выносливости.",
    icon: Flame,
    image: crossfitImg, // Использован импорт
    stats: [{ label: "INTENSITY", value: "HIGH" }],
    colSpan: 2,
  },
  {
    id: "05",
    title: "ГРУППОВЫЕ ЗАНЯТИЯ",
    subtitle: "COMMUNITY & FOCUS",
    description:
      "Более 20 направлений: от мягкого пилатеса и йоги до взрывных силовых классов под руководством топовых тренеров.",
    icon: Users,
    image: groupImg, // Использован импорт
    stats: [{ label: "CLASSES", value: "20+" }],
    colSpan: 1,
  },
];

export const TRAINERS: Trainer[] = [
  {
    id: "T1",
    name: "Иван Иванов",
    role: "Тренер",
    specialty: "Силовые",
    // Внешние ссылки оставляем строками, они работают
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "T2",
    name: "Ольга Попова",
    role: "Тренер",
    specialty: "Выносливость",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: "T3",
    name: "Петр Петров",
    role: "Тренер",
    specialty: "Кроссфит",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1760&auto=format&fit=crop",
  },
  {
    id: "T4",
    name: "Елена Смирнова",
    role: "Тренер",
    specialty: "Групповые",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
  },
];
