import { Film } from './film';

export class FilmResponse{
    Search: Film[];
    totalResults: number;
    Response: string;
}