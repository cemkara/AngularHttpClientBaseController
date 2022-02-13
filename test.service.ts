import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "./base.service";
@Injectable()

export class TestService {
  constructor(private baseService: BaseService) {}
    getItem(itemId): Observable<any> {
      return this.baseService.get("Items/GetItem/" + itemId);
  }
}