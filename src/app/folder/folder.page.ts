import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerService } from '../services/pdf-viewer.service';
import { DownloadfileService } from '../services/downloadfile.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private testFile:string = 'https://storage.googleapis.com/apiapppcm/Preguntas_frecuentesReglamentoADM.UT_1.pdf?Expires=1598402291&GoogleAccessId=api-app-pcm-django%40secret-imprint-275717.iam.gserviceaccount.com&Signature=IZhC5ehmqWH9aFQrFhCpEOtHkL8xQn38vqEMi8wq3FzZH8rkm7urYN6cG%2FE4LL2FrhiK%2Fe8K9hOGXLMNN78OUeq30DnqKr02abhNPD%2B%2B4ueFW%2BJlVC4UzHZPo07qU3t1ip0tF7RX%2BT2QH9H%2Bf5EAQ3ogaqbj8OYuXwn70bYLU4iuxVEy3Zsrp3EdeeCBk2tt3C3DmprlYSstSp8DjF4DIbdNQttfx41%2FhZcxbMwVFEHCFIzJWjqy9G37VoOTJzkzzwwP6oNs%2FrjepkJmMFvHC%2Bj1w7WBhd%2FXNuEtxBsnLJvhtsI1DvDxuuuqZffp3BmmuhfVlozZZLJQjuxFHDAidQ%3D%3D';

  constructor(private activatedRoute: ActivatedRoute, private pdfsrv: PdfViewerService, private dl:DownloadfileService) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  download(url: string, title: string){
    const pdfReader = this.pdfsrv.download(url, title);
  }

  downloadFile2(){
    this.dl.downloadPdfFile2(this.testFile,"pcm-pagos.pdf");
  }

}
