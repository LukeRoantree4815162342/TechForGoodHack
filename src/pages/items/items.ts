import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {HttpService} from '../../services/HttpService';
import {ValidationService} from '../../services/validation';
import {MailChimpService} from '../../services/mail-chimp-service';


import {IService} from '../../services/IService';
import {ItemDetailsPage} from '../item-details/item-details';

import {CheckBoxService} from '../../services/check-box-service';
import {TextViewService} from '../../services/text-view-service';
import {SpinnerService} from '../../services/spinner-service';
import {SplashScreenService} from '../../services/splash-screen-service';
import {SearchBarService} from '../../services/search-bar-service';
import {WizardService} from '../../services/wizard-service';
import {TabsService} from '../../services/tabs-service';
import {LoginService} from '../../services/login-service';
import {RegisterService} from '../../services/register-service';
import {ListViewService} from '../../services/list-view-service';
import {ListViewExpandableService} from '../../services/list-view-expandable-service';
import {ListViewDragAndDropService} from '../../services/list-view-drag-and-drop-service';
import {ListViewSwipeToDismissService} from '../../services/list-view-swipe-to-dismiss-service';
import {ListViewAppearanceAnimationService} from '../../services/list-view-appearance-animation-service';
import {ListViewGoogleCardsService} from '../../services/list-view-google-card-service';
import {ParallaxService} from '../../services/parallax-service';
import {ImageGalleryService} from '../../services/image-gallery-service';
import {MapsService} from '../../services/maps-service';
import {QRCodeService} from '../../services/qrcode-service';

import {ItemDetailsPageTextView} from '../item-details-text-view/item-details-text-view';
import {ItemDetailsPageSpinner} from '../item-details-spinner/item-details-spinner';
import {ItemDetailsPageSplashScreen} from '../item-details-splash-screen/item-details-splash-screen';
import {ItemDetailsPageSearchBar} from '../item-details-search-bar/item-details-search-bar';
import {ItemDetailsPageCheckBox} from '../item-details-check-box/item-details-check-box';
import {ItemDetailsPageWizard} from '../item-details-wizard/item-details-wizard';
import {ItemDetailsPageTabs} from '../item-details-tabs/item-details-tabs';
import {ItemDetailsPageLogin} from '../item-details-login/item-details-login';
import {ItemDetailsPageRegister} from '../item-details-register/item-details-register';

import {ItemDetailsPageExpandable} from '../item-details-expandable/item-details-expandable';
import {ItemDetailsPageSwipeToDismiss} from '../item-details-swipe-to-dismiss/item-details-swipe-to-dismiss';
import {ItemDetailsPageDragAndDrop} from '../item-details-drag-and-drop/item-details-drag-and-drop';
import {ItemDetailsPageAppearanceAnimation} from '../item-details-appearance-animation/item-details-appearance-animation';
import {ItemDetailsPageGoogleCard} from '../item-details-google-card/item-details-google-card';
import {ItemDetailsPageParallax} from '../item-details-parallax/item-details-parallax';
import {ItemDetailsPageImageGallery} from '../item-details-image-gallery/item-details-image-gallery';
import {ItemDetailsPageMaps} from '../item-details-maps/item-details-maps';
import {ItemDetailsPageQRCode} from '../item-details-qrcode/item-details-qrcode';


@Component({
  templateUrl: 'items.html',
  providers: [MailChimpService, TextViewService, SpinnerService, SplashScreenService, LoginService, RegisterService,
    SearchBarService, CheckBoxService, WizardService, TabsService, ParallaxService,
    ListViewService, ListViewExpandableService, ListViewDragAndDropService, ImageGalleryService,
    ListViewSwipeToDismissService, ListViewGoogleCardsService, ListViewAppearanceAnimationService,
    HttpService, ValidationService, MapsService, QRCodeService]
})

export class ItemsPage {
  title:string;
  componentName:string;
  pages:any;
  listServices:{ [key:string]:IService; } = {};
  service:IService;

  // services: array
  constructor(public navCtrl:NavController,
              private textViewService:TextViewService,
              private spinnerService:SpinnerService,
              private imageGalleryService:ImageGalleryService,
              private searchBarService:SearchBarService,
              private checkBoxService:CheckBoxService,
              private parallaxService:ParallaxService,
              private wizardService:WizardService,
              private tabsService:TabsService,
              private listViewService:ListViewService,
              private listViewExpandableService:ListViewExpandableService,
              private listViewDragAndDropService:ListViewDragAndDropService,
              private listViewSwipeToDismissService:ListViewSwipeToDismissService,
              private listViewAppearanceAnimationService:ListViewAppearanceAnimationService,
              private listViewGoogleCardsService:ListViewGoogleCardsService,
              private loginService:LoginService,
              private registerService:RegisterService,
              private splashScreenService:SplashScreenService,
              private httpService:HttpService,
              private validationService:ValidationService,
              private mailChimpService:MailChimpService,
              private mapsService:MapsService,
              private qRCodeService:QRCodeService,             
              public alertCtrl: AlertController,
              navParams:NavParams) {

    this.listServices = {
      'checkBoxes': checkBoxService,
      'login': loginService,
      'register': registerService,
      'imageGallery': imageGalleryService,
      'textViews': textViewService,
      'spinner': spinnerService,
      'parallax': parallaxService,
      'wizard': wizardService,
      'searchBars': searchBarService,
      'tabs': tabsService,
      'listViews': listViewService,
      'expandable': listViewExpandableService,
      'dragAndDrop': listViewDragAndDropService,
      'swipeToDismiss': listViewSwipeToDismissService,
      'appearanceAnimation': listViewAppearanceAnimationService,
      'googleCards': listViewGoogleCardsService,
      'splashScreens': splashScreenService,
      'maps': mapsService,
      'qrcode': qRCodeService
    };

    this.componentName = navParams.get('componentName');
    this.service = this.listServices[this.componentName];
    if (this.service) {
      this.pages = this.service.getAllThemes();
      this.title = this.service.getTitle();
    }
  }

  selectPageForOpen(value:string):any {
    let page;

    if (value === "spinner") {
      page = ItemDetailsPageSpinner;
    } else if (value === "textViews") {
      page = ItemDetailsPageTextView;
    } else if (value === "splashScreens") {
      page = ItemDetailsPageSplashScreen;
    } else if (value === "searchBars") {
      page = ItemDetailsPageSearchBar;
    } else if (value === "checkBoxes") {
      page = ItemDetailsPageCheckBox;
    } else if (value === "wizard") {
      page = ItemDetailsPageWizard;
    } else if (value === "tabs") {
      page = ItemDetailsPageTabs;
    } else if (value === "login") {
      page = ItemDetailsPageLogin;
    } else if (value === "register") {
      page = ItemDetailsPageRegister;
    } else if (value === "expandable") {
      page = ItemDetailsPageExpandable;
    } else if (value === "swipeToDismiss") {
      page = ItemDetailsPageSwipeToDismiss;
    } else if (value === "dragAndDrop") {
      page = ItemDetailsPageDragAndDrop;
    } else if (value === "appearanceAnimation") {
      page = ItemDetailsPageAppearanceAnimation;
    } else if (value === "googleCards") {
      page = ItemDetailsPageGoogleCard;
    } else if (value === "parallax") {
      page = ItemDetailsPageParallax;
    } else if (value === "maps") {
      page = ItemDetailsPageMaps;
    } else if (value === "imageGallery") {
      page = ItemDetailsPageImageGallery;
    } else if (value === "qrcode") {
      page = ItemDetailsPageQRCode;
    }
    if(!page) {
      page = ItemDetailsPage;
    }
    return page;
  }

  openPage(page:any) {
    if (this.mailChimpService.showMailChimpForm()) {
      this.mailChimpService.setMailChimpForm(false);
      this.showPrompt();
    } else {
      if (page.listView) {
        this.navCtrl.push(ItemsPage, {
          componentName: page.theme
        });
      } else {
        this.navCtrl.push(this.selectPageForOpen(this.componentName), {
          service: this.service,
          page: page
        });
      }
    }
  }

  showPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'STAY TUNED FOR NEW <br> THEMES AND FREEBIES',
      message: "SUBSCRIBE TO <br> OUR NEWSLETTER",
      inputs: [
        {
          name: 'email',
          placeholder: 'Your e-mail'
        },
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Send',
          handler: data => {
            if (data) {
              if (this.validationService.isMail(data.email)) {
                this.httpService.sendData(data.email).subscribe(
                  data => {
                    this.mailChimpService.hideMailChimp();
                  },  err => {
                    alert(err);
                  }, null);
              } else {
                return false;
              }
            } else {
              return false
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
