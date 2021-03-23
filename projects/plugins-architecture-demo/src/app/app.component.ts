import { Component } from '@angular/core';
import { OrchestratorService } from 'projects/core-system/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'plugins-architecture-demo';

  constructor(private orchestrator: OrchestratorService) {
    this.orchestrator.coreOperationA();
  }
}
