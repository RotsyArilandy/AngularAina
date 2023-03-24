export class Playlist {
    public ID!: number;
    public Intitule!: string;
    public CreePar!: string;
    public NombreClics!: number;
    public DateCreation!: Date;
    public Songs!: Song[];
    constructor(){
        this.DateCreation = new Date();
        this.Songs = [];
        this.NombreClics = 0;
    }
}

export class Song {
    public id!: number;
    public title!: string;
    public artist!: string;
    public album!: string;
    public year!: number;
    public duration!: number;
    public genre!: string;
    public likes!: number;
    public image!: string;
    public audio!: string;
    public selected: boolean = false;
    constructor(obj?: any) {
        if(obj) {
            this.id = obj.id;
            this.title = obj.title;
            this.artist = obj.artist;
            this.album = obj.album;
            this.year = obj.year;
            this.duration = obj.duration;
            this.genre = obj.genre;
            this.likes = obj.likes;
            this.image = obj.image;
            this.audio = obj.audio;
            this.selected = obj.selected;
        }
    }
}