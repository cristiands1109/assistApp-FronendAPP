import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/mobile/mobile.module').then(m => m.MobilePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'registro-emergencia',
    loadChildren: () => import('./pages/set-reminder/set-reminder.module').then(m => m.SetReminderPageModule)
  },
  {
    path: 'notificaciones',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./pages/documents/documents.module').then(m => m.DocumentsPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'detalle-emergencia',
    loadChildren: () => import('./pages/order-detail/order-detail.module').then(m => m.OrderDetailPageModule)
  },
  
  
/*
  {
    path: 'choose-location',
    loadChildren: () => import('./pages/choose-location/choose-location.module').then(m => m.ChooseLocationPageModule)
  },
  {
    path: 'location-map',
    loadChildren: () => import('./pages/location-map/location-map.module').then(m => m.LocationMapPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'pharmacy',
    loadChildren: () => import('./pages/pharmacy/pharmacy.module').then(m => m.PharmacyPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'doctors',
    loadChildren: () => import('./pages/doctors/doctors.module').then(m => m.DoctorsPageModule)
  },
  {
    path: 'emergancy',
    loadChildren: () => import('./pages/emergancy/emergancy.module').then(m => m.EmergancyPageModule)
  },
  {
    path: 'current-location',
    loadChildren: () => import('./pages/current-location/current-location.module').then(m => m.CurrentLocationPageModule)
  },
  {
    path: 'appoinments',
    loadChildren: () => import('./pages/appoinments/appoinments.module').then(m => m.AppoinmentsPageModule)
  },
  {
    path: 'chat-detail',
    loadChildren: () => import('./pages/chat-detail/chat-detail.module').then(m => m.ChatDetailPageModule)
  },
  {
    path: 'doctor-list',
    loadChildren: () => import('./pages/doctor-list/doctor-list.module').then(m => m.DoctorListPageModule)
  },
  {
    path: 'doctor-detail',
    loadChildren: () => import('./pages/doctor-detail/doctor-detail.module').then(m => m.DoctorDetailPageModule)
  },
  {
    path: 'get-ambulance',
    loadChildren: () => import('./pages/get-ambulance/get-ambulance.module').then(m => m.GetAmbulancePageModule)
  },
  {
    path: 'booking',
    loadChildren: () => import('./pages/booking/booking.module').then(m => m.BookingPageModule)
  },
  {
    path: 'payment2',
    loadChildren: () => import('./pages/payment2/payment2.module').then(m => m.Payment2PageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'upload-document',
    loadChildren: () => import('./pages/upload-document/upload-document.module').then(m => m.UploadDocumentPageModule)
  },
  {
    path: 'doc-list',
    loadChildren: () => import('./pages/doc-list/doc-list.module').then(m => m.DocListPageModule)
  }**/
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
