import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './components/nav-bar/nav-bar';
import { HubCard } from './ui/hub-card/hub-card';

declare global {
  interface Window {
    electronAPI: {
      openFile(): Promise<{ filePath: string; content: string }>;
    };
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, HubCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('electron-app-testing');

  public openFile() {
    window.electronAPI
      .openFile()
      .then(({ filePath, content }: { filePath: string; content: string }) => {
        console.log('Selected file:', filePath);
        console.log('File content:', content);
      });
  }
}
