import { Component, Input, OnInit } from '@angular/core';
import { AppEventData, EventService } from 'src/app/shared/event.service';
import { InputService } from 'src/app/shared/input.service';
import { TemplateFieldData } from 'src/app/shared/models/templateField';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.scss']
})
export class RichTextComponent implements OnInit {

  @Input() render: string;
  @Input() data: TemplateFieldData;
  msg: string = "";

  constructor(public inputService: InputService, private eventService: EventService) {
    this.eventService.eventAdded$.subscribe((e: AppEventData) => {
      if (e.type === EventService.VALIDATE_FIELDS && e.data.formId === this.data.formId) {
        if (environment.debugOn) {
          console.log("VALIDATE_FIELDS triggered for this input. Validating fields");
          console.log(this.data);
        }
        this.fieldChanged();
      }
    })
  }

  ngOnInit() {
    debugger;
    //adding new field to template, setting default settings that can be changed from ui
    if (this.render === "settings") {
      this.data.settings = {
        required: false,
        validate: this.validateField,
        otherSettings: {}
      }
    }

    if (this.render === "input") {

    }

    if (this.render === "output") {
      debugger;
    }
  }

  fieldChanged() {        
    let valid = this.validateField();
    this.inputService.updateFormField({
      valid: valid,
      type: "richtext",
      data: this.data
      // formId: this.data.formId, 
      // fieldId: this.data.fieldId,       
      // value: this.data.value,       
      // settings: this.data.settings
    });
  }

  validateField(): boolean {
    if (this.data.settings.required) {
      let toReturn = this.inputService.requiredField(this.data.value);
      if (!toReturn) {
        this.msg = "Field is required";
      } else {
        this.msg = "";
      }
      return toReturn;
    }
    this.msg = "";
    return true;
  }

}
