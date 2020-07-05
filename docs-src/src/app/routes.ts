import { MainPageComponent } from './main-page/main-page.component';
import { LinksPageComponent } from './links-page/links-page.component';
import * as TUTORIALS from './tutorials-page/tutorials-page.component';
import * as MISC from './misc-pages/misc-pages.component';

import { TestComponent } from './tests/test.component';


export const routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'tutorials',
    component: TUTORIALS.TutorialsPageComponent
  },
  {
    path: 'tutorials/about_dsl_format',
    component: TUTORIALS.TutorialAboutDslFormat
  },
  {
    path: 'tutorials/how_to_compress_dsl_dz',
    component: TUTORIALS.TutorialCompressDsl
  },
  {
    path: 'tutorials/how_to_convert_to_dsl',
    component: TUTORIALS.TutorialConvertToDsl
  },
  {
    path: 'links',
    component: LinksPageComponent
  },
  {
    path: 'privacy-policy',
    component: MISC.PrivacyPolicyPageComponent
  },
]
