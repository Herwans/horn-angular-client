export class Video {
  id: number;
  title: string;
  file: string;
  duration: string;
  createdAt: Date;
  isFavorite: Boolean
  thumbnail: Blob;

  constructor(id: number, title: string, file: string, duration: string, createdAt: Date, isFavorite: Boolean, thumbnail: Blob) {
    this.id = id;
    this.title = title;
    this.file = file;
    this.duration = duration;
    this.createdAt = createdAt;
    this.isFavorite = isFavorite;
    this.thumbnail = thumbnail;
  }
}
