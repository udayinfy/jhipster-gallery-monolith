import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { GalleryAlbumModule } from './album/album.module';
import { GalleryPhotoModule } from './photo/photo.module';
import { GalleryTagModule } from './tag/tag.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        GalleryAlbumModule,
        GalleryPhotoModule,
        GalleryTagModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryEntityModule {}
