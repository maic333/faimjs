/// <reference types="node" />
import { ReadStream } from 'fs';
interface ReadableFile {
    stream: ReadStream;
    name?: string;
    size?: number;
    mimeType?: string;
}
export default ReadableFile;
