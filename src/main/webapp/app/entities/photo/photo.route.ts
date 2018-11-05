import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from 'app/shared/model/photo.model';
import { PhotoService } from './photo.service';
import { PhotoComponent } from './photo.component';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotoUpdateComponent } from './photo-update.component';
import { PhotoDeletePopupComponent } from './photo-delete-dialog.component';
import { IPhoto } from 'app/shared/model/photo.model';

@Injectable({ providedIn: 'root' })
export class PhotoResolve implements Resolve<IPhoto> {
    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id).pipe(map((photo: HttpResponse<Photo>) => photo.body));
        }
        return of(new Photo());
    }
}

export const photoRoute: Routes = [
    {
        path: 'photo',
        component: PhotoComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Photos'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'photo/:id/view',
        component: PhotoDetailComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Photos'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'photo/new',
        component: PhotoUpdateComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Photos'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'photo/:id/edit',
        component: PhotoUpdateComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Photos'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const photoPopupRoute: Routes = [
    {
        path: 'photo/:id/delete',
        component: PhotoDeletePopupComponent,
        resolve: {
            photo: PhotoResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Photos'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
