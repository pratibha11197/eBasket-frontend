import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(!(req.url.toString().includes("/auth/register")) && !(req.url.toString().includes("/auth/login")) && !(req.url.toString().includes("/products"))){
        const modifiedRequest = req.clone(
        { headers: new HttpHeaders({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Content-Type': 'application/json'
        })});     
        return next.handle(modifiedRequest);
    }
    else{
        return next.handle(req);
    }
    }
  
}