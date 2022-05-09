import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { AuthentificationService } from '../service/authentification.service';
import { UrlService } from '../service/url.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-membrespasses',
  templateUrl: './membrespasses.component.html',
  styleUrls: ['./membrespasses.component.css']
})
export class MembrespassesComponent implements OnInit {

  participants: any;
  id: any;
  form: FormGroup;

  constructor(
    private url: UrlService,
    private authService: AuthentificationService,
    private http: HttpClient,
    public dialogRef: MatDialogRef<MembrespassesComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
    public fb: FormBuilder,
  ) {
    this.id = data.id;
    this.form = fb.group({
      selectedMembres: new FormArray([])
    });
  }

  ngOnInit(): void {
    this.callParticpantsEvent(this.id)
  }

  callParticpantsEvent(id: any) {
    this.http.get(this.url.baseURL + 'Participants/getallmember/event/' + this.id)
      .subscribe({
        next: (data) => { this.participants = data, console.log(data) },

        error: (err) => { console.log(err) }
      })
  }

  onCheckboxChange(event: any) {
    const selectedMembres = (this.form.controls['selectedMembres'] as FormArray);
    if (event.target.checked) {
      selectedMembres.push(new FormControl(event.target.value));
    } else {
      const index = selectedMembres.controls
        .findIndex(x => x.value === event.target.value);
      selectedMembres.removeAt(index);
    }
  }

  setScores() {
    console.log(this.form.value.selectedMembres);
    let parts = this.form.value.selectedMembres;
    for (var id of parts) {
      console.log(id)
      this.http.patch(this.url.baseURL + "membre/set/score/" + id, 5)
        .subscribe({
          next: (data) => { this.dialogRef.close(), window.location.reload() },
          error: (err) => { console.log(err) }
        });

      this.setFini()
    }
  }

  setFini() {
    console.log(this.id)
    this.http.patch(this.url.baseURL + "evenements/set/fini/" + this.id, true)
      .subscribe({
        next: (data) => { },
        error: (err) => { console.log(err) }
      });
  }

}
