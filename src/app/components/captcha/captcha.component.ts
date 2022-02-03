import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReCaptcha2Component } from 'ngx-captcha';


@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.scss'],
})
export class CaptchaComponent implements OnInit {


  @ViewChild('captchaElem', { static: false }) captchaElem: ReCaptcha2Component;
  @ViewChild('langInput', { static: false }) langInput: ElementRef;

  siteKey = '6Lcm0YIdAAAAAJ8b7mARLJ_P61Ga22wy4_K20qQx';

  formGroup: FormGroup;



  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  public theme: 'light' | 'dark' = 'light';
  public size: 'compact' | 'normal' = 'normal';
  public lang = 'esp';
  public type: 'image' | 'audio' = 'image';
  public useGlobalDomain = false;


  constructor( private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {


    // const script = this.renderer.createElement('script');

    // script.defer = true;
    // script.async = true;
    // script.src = 'https://www.google.com/recaptcha/api.js';
    // this.renderer.appendChild(document.body, script);


    // Re captcha 2
    this.formGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }



  handleReset(): void {
    this.captchaSuccess = false;
    this.captchaResponse = undefined;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleSuccess(captchaResponse: string): void {
    this.captchaSuccess = true;
    this.captchaResponse = captchaResponse;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleLoad(): void {
    this.captchaIsLoaded = true;
    this.captchaIsExpired = false;
    this.cdr.detectChanges();
  }

  handleExpire(): void {
    this.captchaSuccess = false;
    this.captchaIsExpired = true;
    this.cdr.detectChanges();
  }

  changeTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
  }

  changeSize(size: 'compact' | 'normal'): void {
    this.size = size;
  }

  changeType(type: 'image' | 'audio'): void {
    this.type = type;
  }

  setLanguage(): void {
    this.lang = this.langInput.nativeElement.value;
  }

  setUseGlobalDomain(use: boolean): void {
    this.useGlobalDomain = use;
  }

  getCurrentResponse(): void {
    const currentResponse = this.captchaElem.getCurrentResponse();
    if (!currentResponse) {
      alert('There is no current response - have you submitted captcha?');
    } else {
      alert(currentResponse);
    }
  }

  getResponse(): void {
    const response = this.captchaElem.getResponse();
    if (!response) {
      alert('There is no response - have you submitted captcha?');
    } else {
      alert(response);
    }
  }

  reload(): void {
    this.captchaElem.reloadCaptcha();
  }

  getCaptchaId(): void {
    alert(this.captchaElem.getCaptchaId());
  }

  reset(): void {
    this.captchaElem.resetCaptcha();
  }


  // resolved(token) {
  //   console.log(token);
  //   this.captchaService.sendTokenCaptcha(token);
  // }


}
