import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, ToastController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { RestService } from '../rest.service';
import { environment } from './../../environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.page.html',
  styleUrls: ['./book-new.page.scss'],
})
export class BookNewPage implements OnInit {
  
  resposeData: any;
  twitts: any;
  userData: any;
  isLoading: boolean;
  filterObj: any;
  router: any;
  namebook
  criterica
    constructor(   private modalController: ModalController,
    private navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public restService: RestService,
    public activatedRoute: ActivatedRoute,
    public toastCtrl: ToastController) { }

  ngOnInit() {
  }
 // Dismiss Login Modal
 dismisssearch() {
  this.modalController.dismiss();
}
async laravelnewpost(){
  this.present();
  console.log('post');

  let userD={
    "namebook": this.namebook,
    "criterica": this.criterica
    
}


  
  this.restService.postDataLara(userD, environment.laravel.book_post).then(async (result) => {
    this.resposeData = result;
    console.log(this.resposeData);
    if (this.resposeData.length) {
      if (this.resposeData.code==200) {
        //????
        //save token
        localStorage.setItem('token',this.resposeData.token)
        this.router.navigate(['/result']);
      }

    }
    else if (this.resposeData.total == 0) {
      this.presentToast(" نتیجه ای نداشت هیچ مسیری با فیلتر فوق نداشتیم");
    }
    else {
      this.presentToast(" انجام نشد اشکال از سرور است با مدیر شبکه تماس بگیرید");
    }
    this.dismiss();
  }, (err) => {
    //Connection failed message
    this.dismiss();
  });
}

async present() {
  this.isLoading = true;
  return await this.loadingCtrl.create({
    duration: 5000,
  }).then(a => {
    a.present().then(() => {
      console.log('presented');
      if (!this.isLoading) {
        a.dismiss().then(() => console.log('abort presenting'));
      }
    });
  });
}

async dismiss() {
  this.isLoading = false;
  return await this.loadingCtrl.dismiss().then(() => console.log('dismissed')).catch(() => { });
}
async presentToast(msg: string, time = 2000) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: time,
    position: "top"
  });
  await toast.present();
}


}
