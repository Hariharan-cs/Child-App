import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // production = false
  title = 'Child APP';

  // trialUrl = 'https://trial.onedpo-poc.com?accessToken=1access2Token&refreshToken=1refresh2Token&idToken=1id2Token';
  // complianceUrl = 'https://compliance.onedpo-poc.com?accessToken=1access2Token&refreshToken=1refresh2Token&idToken=1id2Token';

  constructor(private activatedRoute: ActivatedRoute, private apiService: ApiService) {
    // let host = this.production ?'.onedpo-poc.com' :'.localhost';
    this.activatedRoute.queryParams.subscribe(params => {
          console.log('Tokens from URL', params)
          this.validateToken(params)
          // Object.keys(params).forEach((key) => {
          //   let token = params[key];
          //   var now = new Date();
          //   now.setTime(now.getTime() + 1 * 3600 * 1000);
          //   document.cookie =
          //     key + "=" + token +
          //     ";domain=" + host +
          //     ";expires=" + now.toUTCString() +
          //     ";path=/;secure=true";
          //   ";max-age=3600;secure=true";
          // });

          // console.log('Tokens from URL set to cookies:', document.cookie)
      });
  }

  ngOnInit(){
    // this.trialUrl = 'http://localhost:4200?accessToken=1access2Token&refreshToken=1refresh2Token&idToken=1id2Token';
  }

  logout(){
    // document.cookie = "mycookie=;domain=.localhost;path=/;max-age=0";
    const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    console.log('Cookies cleared:', document.cookie)

  }


  validateToken(data : any){
    let toUTCString = new Date().toUTCString()

    // data = {
    //   accessToken: "1access2Token" + toUTCString,
    //   refreshToken: "1refresh2Token" + toUTCString,
    //   idToken: "1id2Token" + toUTCString,
    // };
    this.apiService.validateToken(data).subscribe(x=> console.log(this.title +'Validate Token From API', x))
  }

  acquireToken(){
    this.apiService.acquireToken().subscribe(x=> console.log(this.title +'Acquire Token From API', x))
  }

}

