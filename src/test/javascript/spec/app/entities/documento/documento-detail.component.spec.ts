import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { JhiDataUtils } from 'ng-jhipster';

import { DocAppTestModule } from '../../../test.module';
import { DocumentoDetailComponent } from 'app/entities/documento/documento-detail.component';
import { Documento } from 'app/shared/model/documento.model';

describe('Component Tests', () => {
  describe('Documento Management Detail Component', () => {
    let comp: DocumentoDetailComponent;
    let fixture: ComponentFixture<DocumentoDetailComponent>;
    let dataUtils: JhiDataUtils;
    const route = ({ data: of({ documento: new Documento(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [DocAppTestModule],
        declarations: [DocumentoDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(DocumentoDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DocumentoDetailComponent);
      comp = fixture.componentInstance;
      dataUtils = fixture.debugElement.injector.get(JhiDataUtils);
    });

    describe('OnInit', () => {
      it('Should load documento on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.documento).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });

    describe('byteSize', () => {
      it('Should call byteSize from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'byteSize');
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.byteSize(fakeBase64);

        // THEN
        expect(dataUtils.byteSize).toBeCalledWith(fakeBase64);
      });
    });

    describe('openFile', () => {
      it('Should call openFile from JhiDataUtils', () => {
        // GIVEN
        spyOn(dataUtils, 'openFile');
        const fakeContentType = 'fake content type';
        const fakeBase64 = 'fake base64';

        // WHEN
        comp.openFile(fakeContentType, fakeBase64);

        // THEN
        expect(dataUtils.openFile).toBeCalledWith(fakeContentType, fakeBase64);
      });
    });
  });
});
