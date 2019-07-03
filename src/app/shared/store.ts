import { BehaviorSubject, Observable } from 'rxjs';

export abstract class Store<T> {
  private internalState$: BehaviorSubject<T>;
  state$: Observable<T>;

  protected constructor(initialState: T) {
    this.internalState$ = new BehaviorSubject(initialState);
    this.state$ = this.internalState$.asObservable();
  }

  protected get state(): T {
    return this.internalState$.getValue();
  }

  protected setState(nextState: T): void {
    this.internalState$.next(nextState);
  }
}
