export interface IAnime {
  anilist_id: Number;
  mal_id: Number;
  tmdb_id: Number;
  format: Number;
  status: Number;
  titles: {
    rj: string;
    en: string;
    jp: string;
    fr: string;
    it: string;
  };
  descriptions: {
    en: string;
    fr: string;
    it: string;
    jp: string;
  };
  start_date: Date;
  end_date: Date;
  weekly_airing_day: Number;
  season_period: Number;
  season_year: Number;
  episodes_count: Number;
  episode_duration: Number;
  cover_image: string;
  banner_image: string;
  genres: string[];
  sagas: saga[];
}

export interface saga {
  titles: {
    en: string;
    fr: string;
    it: string;
    jp: string;
  };
  descriptions: {
    en: string;
    fr: string;
    jp: string;
  };
  episode_from: Number;
  episode_to: Number;
  episodes_count: Number;
}
