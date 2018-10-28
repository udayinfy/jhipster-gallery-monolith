import { NgModule } from '@angular/core';

import { GallerySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [GallerySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [GallerySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class GallerySharedCommonModule {}
