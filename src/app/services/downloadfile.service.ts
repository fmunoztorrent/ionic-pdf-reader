import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@Injectable({
  providedIn: 'root'
})
export class DownloadfileService {

  dir = this.file.externalRootDirectory;
  constructor(private http: HttpClient,private file: File, private docV: DocumentViewer, private fO:FileOpener) { }

  downloadPdfFile(url, destFile) {
    const file = this.http.get(url, {responseType: 'blob'}).toPromise();
    file.then(blob=>{

      return this.file.writeFile(this.dir, destFile, blob, {replace: true});

    }).then(async writenFile => {
      console.log({writenFile});
      this.docV.viewDocument(`${this.dir}${destFile}`, 'application/pdf', {title: destFile});

    })
}

downloadPdfFile2(url, destFile) {
  const file = this.http.get(url, {responseType: 'blob'}).toPromise();
  file.then(blob=>{

    return this.file.writeFile(this.dir, destFile, blob, {replace: true});

  }).then(async writenFile => {
    
    await writenFile;
    this.fO.open(`${this.dir}${destFile}`, 'application/pdf')
    .then(() => console.log('File is opened'))
    .catch(e => console.log('Error opening file', e));

  })
}

}
