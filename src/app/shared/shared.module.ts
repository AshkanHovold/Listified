import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from '../standard/sidenav/sidenav.component';
import { ButtonComponent } from '../standard/button/button.component';
import { ButtonGroupComponent } from '../standard/button-group/button-group.component';
import { CardComponent } from '../standard/card/card.component';
import { CardBodyComponent } from '../standard/card-body/card-body.component';
import { InfoMsgComponent } from '../standard/info-msg/info-msg.component';
import { InputComponent } from '../standard/input/input.component';
import { ListComponent } from '../standard/list/list.component';
import { ListItemComponent } from '../standard/list-item/list-item.component';
import { RadioComponent } from '../standard/radio/radio.component';
import { SelectComponent } from '../standard/select/select.component';
import { SubnavComponent } from '../standard/subnav/subnav.component';
import { TextAreaComponent } from '../input/text-area/text-area.component';
import { ToolbarComponent } from '../standard/toolbar/toolbar.component';
import { DetailedListComponent } from '../input/datafield/detailed-list/detailed-list.component';
import { DatafieldInputComponent } from '../input/datafield/input/input.component';
import { OutputComponent } from '../input/datafield/output/output.component';
import { ListifyDatafieldComponent } from '../input/datafield/listify-datafield/listify-datafield.component';
import { SettingsComponent } from '../input/datafield/settings/settings.component';
import { DisplayInputComponent } from '../input/display-input/display-input.component';
import { ImageComponent } from '../input/image/image.component';
import { RichTextComponent } from '../input/rich-text/rich-text.component';
import { TextComponent } from '../input/text/text.component';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from '../standard/textarea/textarea.component';
import { TextContainerComponent } from '../standard/text/text.component';

const components = [
  SidenavComponent, 
  ButtonComponent, 
  ButtonGroupComponent, 
  CardComponent, 
  CardBodyComponent, 
  InfoMsgComponent, 
  InputComponent, 
  ListComponent, 
  ListItemComponent, 
  RadioComponent, 
  SelectComponent, 
  SubnavComponent,     
  TextAreaComponent, 
  ToolbarComponent,
  DetailedListComponent,
  DatafieldInputComponent,
  ListifyDatafieldComponent,
  OutputComponent,
  SettingsComponent,
  DisplayInputComponent,
  ImageComponent,
  RichTextComponent,
  TextComponent,
  TextAreaComponent,
  TextareaComponent,
  TextContainerComponent

]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    FormsModule, ClarityModule, EditorModule
  ],
  exports: [
    ...components, ClarityModule
  ],
  entryComponents: [TextComponent],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' }
  ],

})
export class SharedModule { }
