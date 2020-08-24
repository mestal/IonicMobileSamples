import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { TestBed, async } from '@angular/core/testing';
import { ActionSheetController } from '@ionic/angular';

import { FalListPage } from './fal-list';
import { ConferenceData } from '../../providers/conference-data';

const confDataSub = {};

describe('FalListPage', () => {
  let fixture, app;
  beforeEach(async(() => {
    const actionSheetSpy = jasmine.createSpyObj('ActionSheetController', [
      'create'
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    const iabSpy = jasmine.createSpyObj('InAppBrowser', ['create']);

    TestBed.configureTestingModule({
      declarations: [FalListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActionSheetController, useValue: actionSheetSpy },
        { provide: Router, useValue: routerSpy },
        { provide: ConferenceData, useValue: confDataSub }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FalListPage);
    app = fixture.debugElement.componentInstance;
  });
  it('should create the fal list page', () => {
    expect(app).toBeTruthy();
  });
});
