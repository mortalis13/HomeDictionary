import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorials-page.component.html',
})
export class TutorialsPageComponent {
}

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-about-dsl-format.html',
})
export class TutorialAboutDslFormat {
}

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-how-to-compress-dsl-dz.html',
})
export class TutorialCompressDsl {
}

@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutorial-how-to-convert-to-dsl.html',
})
export class TutorialConvertToDsl {
}


