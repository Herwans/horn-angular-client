export class Image {
  id: number;
  title: string;
  path: string;
  createdAt: Date;
  thumbnail?: string;

  constructor(id: number, title: string, path: string, createdAt: Date, thumbnail?: string) {
    this.id = id;
    this.title = title;
    this.path = path;
    this.createdAt = createdAt;
    this.thumbnail = thumbnail;
  }
}
