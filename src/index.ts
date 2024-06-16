import { forkJoin } from 'rxjs';
import { ajax } from "rxjs/ajax";
import { BITBUCKET, GITHUB } from "../config";

const request = (url: string) => ajax.getJSON(url);
const o =
  forkJoin({
    github: request(GITHUB),
    bitbucket: request(BITBUCKET),
  });

o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})