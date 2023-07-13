import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-etytooltip',
  templateUrl: './etytooltip.component.html',
  styleUrls: ['./etytooltip.component.css']
})
export class EtytooltipComponent {
  @Input() word: string = "";
  wordData: any;
  nowThis: string = "\u0393;"
  

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    let url = "http://localhost:3001/word/" + this.word;
    this.httpClient.get(url).subscribe(response => {
      this.wordData = response;
      console.log(this.wordData);
      if (this.wordData.transliteral){
        this.wordData.transliteral = this.greekify(this.wordData.transliteral);
      }
      for (let part of this.wordData.parts){
        if (part.transliteral) {
          part.transliteral = this.greekify(part.transliteral)
        }
      }
    });
  }

  greekify(word: string) {
    let greekWord = ""
    const letters = "ABGDEZHQIKLMNXOPRSTUFCYWabgdezhqiklmnxoprstufcyw"
    for(let i = 0; i < word.length; i ++) {
      let index = letters.indexOf(word[i]);
      let char;
      if (word[i] == "s" && i+1 == word.length) {
        char = String.fromCharCode(962);
      } else if (index < 17) {
        char = String.fromCharCode(913 + index);
      } else if (index < 24) {
        char = String.fromCharCode(914 + index);
      } else if (index < 41) {
        char = String.fromCharCode(921 + index);
      } else {
        char = String.fromCharCode(922 + index);
      }
      greekWord += char;
    }
  
    return greekWord;
  }
}
