import { ThisReceiver } from '@angular/compiler';
import { ChangeDetectorRef, Component } from '@angular/core';
import {Router} from '@angular/router';
import { AppService } from '../app.service';
import { Playlist, Song } from '../model';
import * as data from './data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private service: AppService) {
    const songs = JSON.parse(JSON.stringify(data));
    Object.keys(songs).forEach((element: string) => {
      if(!isNaN(+element)){
        const s = songs[element];
        s.selected = false;
        this._originalSongs.push(s);
      }
    });    
  }
  public _originalPlaylists: Playlist[] = [];
  public playlists: Playlist[] = [];
  public selectedPlaylist!: Playlist;
  public showAddSection: boolean = false;

  public showSongsSection: boolean = false;
  private _originalSongs: Song[] = [];
  public songs: Song[] = [];
  public rangeDate?: Date[];
  public intituleSearch?: string;

  private _isForAdd: boolean = false;
  public _isForEdit: boolean = false;

  public get maxId(): number 
  {
    const ids = (this.playlists ?? []).map((item: Playlist) => item.ID ?? 0)
    return Math.max(...ids);
  }

  public addPlaylist(): void {
    this.selectedPlaylist = new Playlist;
    this.selectedPlaylist.ID = this.maxId;
    this.songs = [];
    this._isForAdd = true;
    this._isForEdit = false;
    this.showAddSection = true;
  }
  
  public savePlaylist(): void {
    // validation
    if(!this.selectedPlaylist.Intitule){
      alert("Intitulé obligatoire");
      return;
    }
      this.selectedPlaylist.Songs = [];

      this.songs.filter((item: Song) => item.selected).forEach((element: Song) => {
        this.selectedPlaylist.Songs.push(element);
      });
    if(this._isForAdd)
    {
      this.playlists.push(this.selectedPlaylist!);
      this._originalPlaylists.push(this.selectedPlaylist!);
    }
    if(this._isForEdit){
      this.playlists.forEach((element: Playlist) => {
        if(element.ID === this.selectedPlaylist.ID) {
          element = this.selectedPlaylist;
          return;
        }
      });
      this._originalPlaylists.forEach((element: Playlist) => {
        if(element.ID === this.selectedPlaylist.ID) {
          element = this.selectedPlaylist;
          return;
        }
      });
    }
    
    this.hidePlaylist();
  }
  
  public hidePlaylist(): void {
    this._isForAdd = false;
    this._isForEdit = false;
    this.selectedPlaylist = new Playlist;
    this.songs = [];
    this.showAddSection = false;
  }

  public addSong(): void {
   this.copySong();
    this.showSongsSection = true;
  }

  public editPlaylist(playlist: Playlist): void {
    this.selectedPlaylist = playlist;
    this.copySong();
    this.songs.forEach((element: Song) => {
      playlist.Songs.forEach((item: Song) => {
        if(item.id === element.id) {
          element.selected = item.selected;
        }
      });
    });
    this._isForAdd = false;
    this._isForEdit = true;
    this.showAddSection = true;
  }
  public deletePlaylist(playlist: Playlist): void {
    if(confirm("Voulez-vous vraiment supprimer le playlist ?")) {
      let idToDelete = -1;
      this.playlists.forEach((element: Playlist, index: number) => {
        if(element.ID === playlist.ID){
            idToDelete = index;
        }
      });
      if(idToDelete !== -1) {
        this.playlists.splice(idToDelete, 1);
      }
    }
  }

  public reinitCriteres(): void {
    this.intituleSearch = undefined;
    this.rangeDate = [];
    this.search(undefined, undefined);
  }

  public search(intitule?: string, date?: Date[]): void {
    this.intituleSearch = intitule;
    this.rangeDate = date;
    if(!this.intituleSearch && !(this.rangeDate && this.rangeDate.length > 0))
    {
      this.playlists = this._originalPlaylists;
      return;
    }
    this.playlists = this._originalPlaylists.filter((item: Playlist) => (!!item.Intitule && this.intituleSearch && item.Intitule.toLowerCase().indexOf(this.intituleSearch.toLowerCase()) !== -1) || (!!date && item.DateCreation >= date[0] && item.DateCreation <= date[1]));
  }

  private copySong(): void {
    this.songs = [];
    this._originalSongs.forEach((element: Song) => {
      this.songs.push(new Song(element));
    });
  }
}
