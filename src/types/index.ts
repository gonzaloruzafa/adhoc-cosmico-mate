export type ArchetypeId =
  | 'tradicional'
  | 'tereré'
  | 'intenso'
  | 'dulce'
  | 'botánico'
  | 'social'
  | 'oficinista'
  | 'madrugador'
  | 'estudiantil'
  | 'rebelde'
  | 'zen'
  | 'nostalgico';

export interface Archetype {
  id: ArchetypeId;
  name: string;
  vibe: string;
  ritual: string[];
  recommendation: string;
  tip: string;
  image: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  text: string;
  scores: Partial<Record<ArchetypeId, number>>;
  dominant?: ArchetypeId; // For tie-breaking
}
