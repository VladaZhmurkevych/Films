import {Production_companies} from "./production_companies";
import {Genre} from "./genre";
import {Production_countrie} from "./production_countrie";
import {Spoken_language} from "./spoken_language";

export class Film {
  constructor(
    private readonly adult: boolean,
    private readonly backdrop_path: string,
    private readonly belongs_to_collection: null,
    private readonly budget: number,
    private readonly genres: Genre[],
    private readonly homepage: string,
    private readonly id: number,
    private readonly imdb_id: string,
    private readonly original_language: string,
    private readonly original_title: string,
    private readonly overview: string,
    private readonly popularity: number,
    private readonly poster_path: string,
    private readonly production_companies: Production_companies[],
    private readonly production_countries: Production_countrie[],
    private readonly release_date: string,
    private readonly revenue: number,
    private readonly runtime: number,
    private readonly spoken_languages: Spoken_language[],
    private readonly status: string,
    private readonly tagline: string,
    private readonly title: string,
    private readonly video: boolean,
    private readonly vote_average: number,
    private readonly vote_count: number,
  ){}
}
