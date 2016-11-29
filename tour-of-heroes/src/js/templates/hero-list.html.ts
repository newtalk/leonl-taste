export const htmlTemplate = `
  <h2>My Heroes</h2>
  <div>
      <label>Hero name:</label> <input #heroName />
      <button (click)="add(heroName.value); heroName.value=''">Add</button>
  </div>
  <ul class="heroes">
      <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
          <span class="badge">{{hero.id}}</span>
          <span>{{hero.name}}</span>
          <button class="delete" (click)="delete(hero, $event)">x</button>
      </li>
  </ul>
  <div *ngIf="selectedHero">
      <h2>{{selectedHero.name | uppercase}} is my hero</h2>
      <button (click)="gotoDetail()">View Details</button>
  </div>
`;
