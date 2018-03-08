import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {ICardModel} from '../../../common/models/ICardModel';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DndBoardService} from '../common/dnd-board.service';
import {Subject} from 'rxjs/Subject';
import {IUser} from '../../../common/models/IUser';
const text = `
# Images
Here's our logo (hover to see the title text):
Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")
Reference-style:
![alt text][logo]
[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"
# Code and Syntax Highlighting
Inline \`code\` has \`back-ticks around\` it.
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`
\`\`\`
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
\`\`\`
# Blockquotes
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.
Quote break.
`;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  public card: ICardModel;
  public cardForm: FormGroup;
  public users: Subject<IUser[]>;
  constructor(private fb: FormBuilder, private boardService: DndBoardService) {
    this.createForm();
    this.users = boardService.users;
  }
  private createForm(): void {
    this.cardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      description: [``, Validators.required]
    });
  }
  ngOnInit() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.cardForm.patchValue( changes.card.currentValue);
    this.cardForm.patchValue( {description: text});
  }
}
