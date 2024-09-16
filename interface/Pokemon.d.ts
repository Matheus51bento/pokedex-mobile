interface Abilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Forms {
  name: string;
  url: string;
}

interface GameIndice {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
}

interface Move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    };
    version_group: {
      name: string;
      url: string;
    };
  }[];
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Annotation {
  id: string;
  pokeId: number;
  annotation: string;
  date: string;
  type: string;
}

interface Pokemon {
  color: string;
  abilities: Abilities[];
  base_experience: number;
  cries: {
    latest: string;
    legacy: string;
  };
  forms: Forms[];
  game_indices: GameIndice[];
  height: number;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
    other: {
      dream_world: {
        front_default?: string;
        front_female?: string;
      };
      home: {
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
      "official-artwork": {
        front_default?: string;
        front_shiny?: string;
      };
      showdown: {
        back_default?: string;
        back_female?: string;
        back_shiny?: string;
        back_shiny_female?: string;
        front_default?: string;
        front_female?: string;
        front_shiny?: string;
        front_shiny_female?: string;
      };
    };
  };
  stats: Stats[];
  types: Type[];
  weight: number;
}
