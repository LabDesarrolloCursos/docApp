import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IDocumento } from 'app/shared/model/documento.model';
import { DocumentoService } from './documento.service';

@Component({
  templateUrl: './documento-delete-dialog.component.html'
})
export class DocumentoDeleteDialogComponent {
  documento?: IDocumento;

  constructor(protected documentoService: DocumentoService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.documentoService.delete(id).subscribe(() => {
      this.eventManager.broadcast('documentoListModification');
      this.activeModal.close();
    });
  }
}
