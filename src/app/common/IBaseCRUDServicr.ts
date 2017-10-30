import {HttpClient, HttpParams} from '@angular/common/http';
import {IAppConfig} from './IAppConfig';
import {Observable} from 'rxjs/Observable';
import {IDBEntity} from './models/IDBEntity';
export interface ICRUD<T extends  IDBEntity>{
  create(entity: T): Observable<T>;
  getById(id: number): Observable<T>;
  getAll(): Observable<T[]>;
  update(entity: T, id?: number): Observable<T>;
  remove(id: number): Observable<T>;
}
export abstract class IBaseCRUDServicr<T extends IDBEntity> implements ICRUD<T> {
  protected abstract route: string;
  protected removeGeneratedFields({_id, createdAt, updatedAt, ...data}: IDBEntity): T {
    return data as T;
  }
  public create(entity: T): Observable<T> {
    return this.http.post<T>(this.route, entity);
  }

  public getById(id: number): Observable<T> {
    return this.http.get<T>(`${this.route}/${id}`);
  }

  public getAll(query?: object): Observable<T[]> {
    return this.http.get<T[]>(this.route, {params: query && this.toHttpParams(query)});
  }

  public update(entity: T, id?: number): Observable<T> {
    return this.http.put<T>(`${this.route}/${id || entity._id}`, this.removeGeneratedFields(entity));
  }

  public remove(id: number): Observable<T> {
    return this.http.delete<T>(`${this.route}/${id}`);
  }

  constructor(protected http: HttpClient,
              protected config: IAppConfig) {
  }
  /**
   * Convert Object to HttpParams
   * @param {Object} obj
   * @returns {HttpParams}
   */
  private toHttpParams(obj: Object): HttpParams {
    return Object.getOwnPropertyNames(obj)
      .reduce((p, key) => p.set(key, obj[key]), new HttpParams());
  }
}
