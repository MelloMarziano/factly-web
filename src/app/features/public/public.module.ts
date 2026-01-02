import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PublicPageRoutingModule } from './public.page-routing.module';
import { PublicPage } from './public.page';
import {
  LucideAngularModule,
  Star,
  Power,
  Info,
  User,
  Phone,
  LogOut,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  ShoppingCart,
  Package,
  FolderOpen,
  FileText,
  BarChart3,
  Settings,
  Users,
  Check,
  Smartphone,
  Monitor,
  Building2,
  Upload,
  Lock,
  Facebook,
  Instagram,
  MessageCircle,
  Mail,
  MapPin,
} from 'lucide-angular';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { HeaderComponent } from './components/header/header.component';
import { FeaturesSectionComponent } from './components/features-section/features-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { RegistrationSectionComponent } from './components/registration-section/registration-section.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PublicPageRoutingModule,
    LucideAngularModule.pick({
      Star,
      Power,
      Info,
      User,
      Phone,
      LogOut,
      CheckCircle,
      ArrowRight,
      Menu,
      X,
      ShoppingCart,
      Package,
      FolderOpen,
      FileText,
      BarChart3,
      Settings,
      Users,
      Check,
      Smartphone,
      Monitor,
      Building2,
      Upload,
      Lock,
      Facebook,
      Instagram,
      MessageCircle,
      Mail,
      MapPin,
    }),
  ],
  declarations: [
    PublicPage,
    HeroSectionComponent,
    HeaderComponent,
    FeaturesSectionComponent,
    PricingSectionComponent,
    RegistrationSectionComponent,
    FooterComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LucideAngularModule,
  ],
})
export class PublicModule {}
