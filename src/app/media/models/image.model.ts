export class Image {
  id: number;
  title: string;
  path: string;
  createdAt: Date;
  thumbnail: any;

  constructor(id: number, title: string, path: string, createdAt: Date, thumbnail: any) {
    this.id = id;
    this.title = title;
    this.path = path;
    this.createdAt = createdAt;
    this.thumbnail = thumbnail;
  }
}
