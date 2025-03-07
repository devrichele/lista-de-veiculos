import cars from './cars.json';

export async function GET (request: Request){
        return Response.json (cars);
}