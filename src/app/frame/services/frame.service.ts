import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Frame } from '../models/frame.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FrameService {
  private url = 'https://my-json-server.typicode.com/acadevmy/t-frame-api/frames/'; // this.endPointUrlService

  constructor(private http: HttpClient) {}

  getAll$ = (): Observable<Frame[]> => this.http.get<Frame[]>(this.url);

  get$ = (id: number): Observable<Frame> => this.http.get<Frame>(`${this.url}/${id}`);

  post$ = (frame: Frame) => this.http.post<Frame>(this.url, { frame }).pipe(
    map((newFrame: any) => ({id: newFrame.id, ...newFrame.frame})) // Utile solo per il response payload dell'API free utilizzata
  )

  patch$ = (frame: Frame) => this.http.patch<Frame>(`${this.url}/${frame.id}`, { frame }).pipe(
    map((newFrame: any) => ({...newFrame.frame})) // Utile solo per il response payload dell'API free utilizzata
  )

  delete$ = (frame: Frame) => this.http.delete<Frame>(`${this.url}/${frame.id}`);
}
