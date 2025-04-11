import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() { }
  handler:any = null;

  ngOnInit() {
    this.loadStripeScript();
  }


  loadStripeScript()
  {
    if(!window.document.getElementById('stripe-script'))
    {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () =>
      {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_key',
          locale: 'en',
          token: function (token: any)
          {
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(s);
    }
  }


  pay(amount: any)
  {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_key',
      locale: 'en',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Test Site',
      description: 'Test Description',
      amount: amount * 100,
      email: "test@yopmail.com"
    });

  }

}
