import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JhiAlertService } from 'ng-jhipster';

import { ITag } from 'app/shared/model/tag.model';
import { TagService } from './tag.service';
import { IPhoto } from 'app/shared/model/photo.model';
import { PhotoService } from 'app/entities/photo';

@Component({
    selector: 'jhi-tag-update',
    templateUrl: './tag-update.component.html'
})
export class TagUpdateComponent implements OnInit {
    tag: ITag;
    isSaving: boolean;

    photos: IPhoto[];

    constructor(
        private jhiAlertService: JhiAlertService,
        private tagService: TagService,
        private photoService: PhotoService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.isSaving = false;
        this.activatedRoute.data.subscribe(({ tag }) => {
            this.tag = tag;
        });
        this.photoService.query().subscribe(
            (res: HttpResponse<IPhoto[]>) => {
                this.photos = res.body;
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    previousState() {
        window.history.back();
    }

    save() {
        this.isSaving = true;
        if (this.tag.id !== undefined) {
            this.subscribeToSaveResponse(this.tagService.update(this.tag));
        } else {
            this.subscribeToSaveResponse(this.tagService.create(this.tag));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<ITag>>) {
        result.subscribe((res: HttpResponse<ITag>) => this.onSaveSuccess(), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess() {
        this.isSaving = false;
        this.previousState();
    }

    private onSaveError() {
        this.isSaving = false;
    }

    private onError(errorMessage: string) {
        this.jhiAlertService.error(errorMessage, null, null);
    }

    trackPhotoById(index: number, item: IPhoto) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}
