import { TestBed, waitForAsync } from '@angular/core/testing';

import { ShareUiModule } from './share-ui.module';

describe('ShareUiModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ShareUiModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(ShareUiModule).toBeDefined();
  });
});
