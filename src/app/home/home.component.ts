import { ChangeDetectorRef, Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public playlists: Playlist[] = [];
  public selectedPlaylist!: Playlist;
  public showAddSection: boolean = false;

  public addPlaylist(): void {
    this.selectedPlaylist = new Playlist();
    this.showAddSection = true;
  }
  
  public savePlaylist(): void {
    // validation
    this.playlists.push(this.selectedPlaylist!);
    this.hidePlaylist();
  }
  
  public hidePlaylist(): void {
    this.selectedPlaylist = new Playlist;
    this.showAddSection = false;
  }

  public addSong(currentPlaylist: Playlist): void {
    
  }
}

class Playlist {
    public Intitule!: string;
    public DateCreation!: Date;
    public Songs!: Song[];
    constructor(){
        this.DateCreation = new Date();
        this.Songs = [];
    }
}

class Song {
    public Title!: string;
}