import {NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {MyApp} from './app.component';

//PAGAS
import {HomePage} from '../pages/home/home';
import {ItemsPage} from '../pages/items/items';
import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ItemDetailsPageTextView} from '../pages/item-details-text-view/item-details-text-view';
import {ItemDetailsPageSpinner} from '../pages/item-details-spinner/item-details-spinner';
import {ItemDetailsPageSplashScreen} from '../pages/item-details-splash-screen/item-details-splash-screen';
import {ItemDetailsPageSearchBar} from '../pages/item-details-search-bar/item-details-search-bar';
import {ItemDetailsPageCheckBox} from '../pages/item-details-check-box/item-details-check-box';
import {ItemDetailsPageWizard} from '../pages/item-details-wizard/item-details-wizard';
import {ItemDetailsPageTabs} from '../pages/item-details-tabs/item-details-tabs';
import {TabPage1} from '../pages/tab-page-1/tab-page-1';
import {TabPage2} from '../pages/tab-page-2/tab-page-2';
import {TabPage3} from '../pages/tab-page-3/tab-page-3';
import {TabPage4} from '../pages/tab-page-4/tab-page-4';
import {TabPage5} from '../pages/tab-page-5/tab-page-5';
import {TabPage6} from '../pages/tab-page-6/tab-page-6';

import {ItemDetailsPageLogin} from '../pages/item-details-login/item-details-login';
import {ItemDetailsPageRegister} from '../pages/item-details-register/item-details-register';

import {ItemDetailsPageExpandable} from '../pages/item-details-expandable/item-details-expandable';
import {ItemDetailsPageSwipeToDismiss} from '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss';
import {ItemDetailsPageDragAndDrop} from '../pages/item-details-drag-and-drop/item-details-drag-and-drop';
import {ItemDetailsPageAppearanceAnimation} from '../pages/item-details-appearance-animation/item-details-appearance-animation';
import {ItemDetailsPageGoogleCard} from '../pages/item-details-google-card/item-details-google-card';
import {ItemDetailsPageParallax} from '../pages/item-details-parallax/item-details-parallax';
import {ItemDetailsPageImageGallery} from '../pages/item-details-image-gallery/item-details-image-gallery';
import {ItemDetailsPageSubImageGallery} from '../pages/item-details-sub-image-gallery/item-details-sub-image-gallery';
import {ItemDetailsPageFullScreenGallery} from '../pages/item-details-full-screen-gallery/item-details-full-screen-gallery';
import {ItemDetailsPageMaps} from '../pages/item-details-maps/item-details-maps';
import {ItemDetailsPageQRCode} from '../pages/item-details-qrcode/item-details-qrcode';


//components
import {Spinner} from '../components/spinner/spinner';
import {SplashScreenLayout1} from '../components/splash-screen/layout-1/splash-screen-layout-1';
import {SplashScreenLayout2} from '../components/splash-screen/layout-2/splash-screen-layout-2';
import {SplashScreenLayout3} from '../components/splash-screen/layout-3/splash-screen-layout-3';
import {SearchBarLayout1} from '../components/search-bar/layout-1/search-bar-layout-1';
import {SearchBarLayout2} from '../components/search-bar/layout-2/search-bar-layout-2';
import {SearchBarLayout3} from '../components/search-bar/layout-3/search-bar-layout-3';
import {CheckBoxLayout1} from '../components/check-box/layout-1/check-box-layout-1';
import {CheckBoxLayout2} from '../components/check-box/layout-2/check-box-layout-2';
import {CheckBoxLayout3} from '../components/check-box/layout-3/check-box-layout-3';
import {WizardLayout1} from '../components/wizard/layout-1/wizard-layout-1';
import {WizardLayout2} from '../components/wizard/layout-2/wizard-layout-2';
import {WizardLayout3} from '../components/wizard/layout-3/wizard-layout-3';
import {TabsLayout1} from '../components/tabs/layout-1/tabs-layout-1';
import {TabsLayout2} from '../components/tabs/layout-2/tabs-layout-2';
import {TabsLayout3} from '../components/tabs/layout-3/tabs-layout-3';

import {LoginLayout1} from '../components/login/layout-1/login-layout-1';
import {LoginLayout2} from '../components/login/layout-2/login-layout-2';
import {RegisterLayout1} from '../components/register/layout-1/register-layout-1';
import {RegisterLayout2} from '../components/register/layout-2/register-layout-2';

import {AppearanceAnimationLayout1} from '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1';
import {AppearanceAnimationLayout2} from '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2';
import {AppearanceAnimationLayout3} from '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3';
import {AppearanceAnimationLayout4} from '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4';
import {AppearanceAnimationLayout5} from '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5';
import {DragAndDropLayout1} from '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1';
import {DragAndDropLayout2} from '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2';
import {DragAndDropLayout3} from '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3';
import {ExpandableLayout1} from '../components/list-view/expandable/layout-1/expandable-layout-1';
import {ExpandableLayout2} from '../components/list-view/expandable/layout-2/expandable-layout-2';
import {ExpandableLayout3} from '../components/list-view/expandable/layout-3/expandable-layout-3';
import {GoogleCardLayout1} from '../components/list-view/google-card/layout-1/google-card-layout-1';
import {GoogleCardLayout2} from '../components/list-view/google-card/layout-2/google-card-layout-2';
import {GoogleCardLayout3} from '../components/list-view/google-card/layout-3/google-card-layout-3';
import {SwipeToDismissLayout1} from '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1';
import {SwipeToDismissLayout2} from '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2';
import {SwipeToDismissLayout3} from '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3';
import {ParallaxLayout1} from '../components/parallax/layout-1/parallax-layout-1';
import {ParallaxLayout2} from '../components/parallax/layout-2/parallax-layout-2';
import {ParallaxLayout3} from '../components/parallax/layout-3/parallax-layout-3';
import {ParallaxLayout4} from '../components/parallax/layout-4/parallax-layout-4';
import {ElasticHeader} from '../components/parallax/elastic-header';

import {FullScreenGallery} from '../components/full-screen-gallery/full-screen-gallery';
import {ImageGalleryLayout1} from '../components/image-gallery/layout-1/image-gallery-layout-1';
import {ImageGalleryLayout2} from '../components/image-gallery/layout-2/image-gallery-layout-2';
import {ImageGalleryLayout3} from '../components/image-gallery/layout-3/image-gallery-layout-3';
import {SubImageGalleryLayout1} from '../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1';
import {SubImageGalleryLayout3} from '../components/sub-image-gallery/layout-3/sub-image-gallery-layout-3';

import {MapsLayout1} from '../components/maps/layout-1/maps-layout-1';
import {MapsLayout2} from '../components/maps/layout-2/maps-layout-2';
import {MapsLayout3} from '../components/maps/layout-3/maps-layout-3';

import {QRcodeLayout1} from '../components/qrcode/layout-1/qrcode-layout-1';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    ElasticHeader,
    MyApp,
    HomePage,
    ItemsPage,
    ItemDetailsPage,
    ItemDetailsPageTextView,
    ItemDetailsPageSpinner,
    ItemDetailsPageSplashScreen,
    ItemDetailsPageSearchBar,
    ItemDetailsPageCheckBox,
    ItemDetailsPageWizard,
    ItemDetailsPageTabs, ItemDetailsPageFullScreenGallery,
    ItemDetailsPageLogin, ItemDetailsPageRegister, ItemDetailsPageSubImageGallery,
    ItemDetailsPageParallax, ItemDetailsPageImageGallery,
    TabPage1, TabPage2, TabPage3, TabPage4, TabPage5, TabPage6,
    ItemDetailsPageExpandable, ItemDetailsPageSwipeToDismiss, ItemDetailsPageDragAndDrop,
    ItemDetailsPageAppearanceAnimation, ItemDetailsPageGoogleCard,
    Spinner, MapsLayout1, MapsLayout2, MapsLayout3, ItemDetailsPageMaps,
    SplashScreenLayout1, SplashScreenLayout2, SplashScreenLayout3,
    SearchBarLayout1, SearchBarLayout2, SearchBarLayout3,
    CheckBoxLayout1, CheckBoxLayout2, CheckBoxLayout3,
    WizardLayout1, WizardLayout2, WizardLayout3,
    TabsLayout1, TabsLayout2, TabsLayout3, 
    QRcodeLayout1, ItemDetailsPageQRCode,
    LoginLayout1, LoginLayout2, RegisterLayout1, RegisterLayout2,
    AppearanceAnimationLayout1, AppearanceAnimationLayout2,
    AppearanceAnimationLayout3, AppearanceAnimationLayout4, AppearanceAnimationLayout5,
    DragAndDropLayout1, DragAndDropLayout2, DragAndDropLayout3,
    ExpandableLayout1, ExpandableLayout2, ExpandableLayout3,
    GoogleCardLayout1, GoogleCardLayout2, GoogleCardLayout3,
    SwipeToDismissLayout1, SwipeToDismissLayout2, SwipeToDismissLayout3,
    ParallaxLayout1, ParallaxLayout2, ParallaxLayout3, ParallaxLayout4,
    SubImageGalleryLayout1, SubImageGalleryLayout3,
    FullScreenGallery, ImageGalleryLayout1, ImageGalleryLayout2, ImageGalleryLayout3
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ItemsPage,
    ItemDetailsPage,
    ItemDetailsPageTextView,
    ItemDetailsPageSpinner,
    ItemDetailsPageSplashScreen,
    ItemDetailsPageSearchBar,
    ItemDetailsPageCheckBox,
    ItemDetailsPageWizard,
    ItemDetailsPageTabs, ItemDetailsPageFullScreenGallery,
    ItemDetailsPageLogin, ItemDetailsPageRegister, ItemDetailsPageSubImageGallery,
    ItemDetailsPageParallax, ItemDetailsPageImageGallery,
    TabPage1, TabPage2, TabPage3, TabPage4, TabPage5, TabPage6,
    ItemDetailsPageExpandable, ItemDetailsPageSwipeToDismiss, ItemDetailsPageDragAndDrop,
    ItemDetailsPageAppearanceAnimation, ItemDetailsPageGoogleCard,
    Spinner, MapsLayout1, MapsLayout2, MapsLayout3, ItemDetailsPageMaps,
    SplashScreenLayout1, SplashScreenLayout2, SplashScreenLayout3,
    SearchBarLayout1, SearchBarLayout2, SearchBarLayout3,
    CheckBoxLayout1, CheckBoxLayout2, CheckBoxLayout3,
    WizardLayout1, WizardLayout2, WizardLayout3,
    TabsLayout1, TabsLayout2, TabsLayout3, 
    QRcodeLayout1, ItemDetailsPageQRCode,
    LoginLayout1, LoginLayout2, RegisterLayout1, RegisterLayout2,
    AppearanceAnimationLayout1, AppearanceAnimationLayout2,
    AppearanceAnimationLayout3, AppearanceAnimationLayout4, AppearanceAnimationLayout5,
    DragAndDropLayout1, DragAndDropLayout2, DragAndDropLayout3,
    ExpandableLayout1, ExpandableLayout2, ExpandableLayout3,
    GoogleCardLayout1, GoogleCardLayout2, SwipeToDismissLayout1, SwipeToDismissLayout2,
    ParallaxLayout1, ParallaxLayout2, ParallaxLayout3, ParallaxLayout4,
    SubImageGalleryLayout1, SubImageGalleryLayout3,
    FullScreenGallery, ImageGalleryLayout1, ImageGalleryLayout2, ImageGalleryLayout3
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    ElasticHeader
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
