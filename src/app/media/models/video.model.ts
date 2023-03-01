export class Video {
  id: number;
  title: string;
  file: string;
  duration: string;
  createdAt: Date;
  isFavorite: Boolean
  thumbnail?: string;

  constructor(id: number, title: string, file: string, duration: string, createdAt: Date, isFavorite: Boolean, thumbnail?: string) {
    this.id = id;
    this.title = title;
    this.file = file;
    this.duration = duration;
    this.createdAt = createdAt;
    this.isFavorite = isFavorite;
    this.thumbnail = thumbnail;
  }
}
