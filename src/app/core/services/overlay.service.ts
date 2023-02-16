import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable()
export class OverlayService {

  constructor(private overLay: Overlay) { }

  open<T>(component: ComponentType<T>) {
    const position = this.overLay.position().global().centerVertically().centerHorizontally();

    const overlayRef = this.overLay.create({
      positionStrategy: position, hasBackdrop: true, backdropClass: 'overlay-backdrop', panelClass: 'overlay-panel',
    });

    const portal = new ComponentPortal(component);
    overlayRef.attach(portal);

    overlayRef.backdropClick().subscribe(() => { overlayRef.detach(); });
  }

}
// function position() {
//   throw new Error('Function not implemented.');
// }
