import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GallerySharedModule } from 'app/shared';
import {
    PhotoComponent,
    PhotoDetailComponent,
    PhotoUpdateComponent,
    PhotoDeletePopupComponent,
    PhotoDeleteDialogComponent,
    photoRoute,
    photoPopupRoute
} from './';

const ENTITY_STATES = [...photoRoute, ...photoPopupRoute];

@NgModule({
    imports: [GallerySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [PhotoComponent, PhotoDetailComponent, PhotoUpdateComponent, PhotoDeleteDialogComponent, PhotoDeletePopupComponent],
    entryComponents: [PhotoComponent, PhotoUpdateComponent, PhotoDeleteDialogComponent, PhotoDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryPhotoModule {}
