export type CaseItem = {
  brand: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
};

export const cases: CaseItem[] = [
  {
    brand: 'Nordic Home',
    industry: 'eCommerce / мебель',
    challenge: 'Рост CAC и стагнация выручки в платных каналах.',
    solution: 'Пересобрали воронку, внедрили креативные спринты и ремаркетинг по сегментам.',
    result: '+120% лидов, -35% CPL за 4 месяца.'
  },
  {
    brand: 'FinEdge',
    industry: 'Финтех',
    challenge: 'Сложный продукт, низкая конверсия из трафика в демо.',
    solution: 'Новая messaging-стратегия, SEO-кластеры по боли клиента, A/B посадочных.',
    result: 'x2 ROAS и +68% конверсии в демо.'
  },
  {
    brand: 'Mediora',
    industry: 'MedTech',
    challenge: 'Высокая стоимость лидов и разрозненная аналитика.',
    solution: 'Сквозная аналитика, перераспределение бюджета, обновление креативов.',
    result: '-41% CPL и +87% квалифицированных заявок.'
  },
  {
    brand: 'Urban Estate',
    industry: 'Недвижимость',
    challenge: 'Нестабильный поток обращений и слабая узнаваемость.',
    solution: 'Full-funnel стратегия: performance + контент + SMM в едином ритме.',
    result: '+95% обращений и +52% брендового трафика.'
  }
];
