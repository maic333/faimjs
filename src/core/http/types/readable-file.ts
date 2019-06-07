import { ReadStream } from 'fs';

interface ReadableFile {
  // file readable stream
  stream: ReadStream;
  // file name
  name?: string;
  // file size
  size?: number;
  // file MIME type
  mimeType?: string;
}

export default ReadableFile;
