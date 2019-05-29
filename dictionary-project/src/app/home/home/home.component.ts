import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  wordOfTheDay: {};
  randomWord;
  toggle = false;
  buttonToggleText = 'More';

  constructor(private getData: GetDataService) { }

  // WORK ON WORD OF THE DAY AND THEN GETTING A RANDOM WORD, FIGURE OUT IF BETTER
  // ON HOME OR ON SEARCH PAGE, IF ON HOME, WILL NEED TO TOGGLE TEXT BETWEEN RANDOM AND WORD OF THE DAY

  onSelectList() {

  }

  ngOnInit() {

    this.getData.getWordOfDay().subscribe((data: any) => {
      console.log(data);
      const word = data.word;
      const definition = data.definitions[0].text;
      const partOfSpeech = data.definitions[0].partOfSpeech;
      const note = data.note;
      const example = data.examples[0].text;
      const attributionText = data.contentProvider.name;
      const exampleAttribution = data.examples[0].title;


      // this.wordOfTheDay = new Word (word, definition, partOfSpeech, origin, [''], attributionText);

      this.wordOfTheDay = {
        word: word,
        definition: definition,
        partOfSpeech: partOfSpeech,
        note: note,
        example: example,
        exampleAttribution: exampleAttribution,
        attributionText: attributionText
      };
    });
  }


// CONSOLIDATE SEARCH, LISTS AND HOME. USE SERVICE? ALSO MAY NEED TO EDIT HTML WHEN I CHANGE
  buttonToggle() {
    if (this.toggle) {
      this.buttonToggleText = 'More';
      this.toggle = !this.toggle;
    } else {
      this.buttonToggleText = 'Less';
      this.toggle = !this.toggle;
    }
  }

}
