import {Team} from '../models/team.model';

export class TeamRepository {
  constructor() {}
  public Austria = new Team('AUT', 'Austria',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Austria.svg/1920px-Flag_of_Austria.svg.png');
  public CzechRepublic = new Team('CZE', 'Czech Republic',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/800px-Flag_of_the_Czech_Republic.svg.png');
  public Finland = new Team('FIN', 'Finland',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1280px-Flag_of_Finland.svg.png');
  public France = new Team('FRA', 'France',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png');
  public Japan = new Team('JPN', 'Japan',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png');
  public Kazakhstan = new Team('KAZ', 'Kazakhstan',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Flag_of_Kazakhstan.svg/1280px-Flag_of_Kazakhstan.svg.png');
  public Germany = new Team('GER', 'Germany',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png');
  public Norway = new Team('NOR', 'Norway',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/1280px-Flag_of_Norway.svg.png');
  public Poland = new Team('POL', 'Poland',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Flag_of_Poland_2.svg/400px-Flag_of_Poland_2.svg.png');
  public Russia = new Team('RUS', 'Russia',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Flag_of_Russia_with_border.svg/1280px-Flag_of_Russia_with_border.svg.png');
  public Slovenia = new Team('SLO', 'Slovenia',
    // tslint:disable-next-line:max-line-length
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flag_of_Slovenia_with_border.svg/1280px-Flag_of_Slovenia_with_border.svg.png');
  public Switzerland = new Team('SUI', 'Switzerland',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Civil_Ensign_of_Switzerland.svg/1280px-Civil_Ensign_of_Switzerland.svg.png');
  public Italy = new Team('ITA', 'Italy',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1280px-Flag_of_Italy.svg.png');

  public teams: Team[] = [
    this.Austria,
    this.CzechRepublic,
    this.Finland,
    this.France,
    this.Italy,
    this.Japan,
    this.Kazakhstan,
    this.Germany,
    this.Norway,
    this.Poland,
    this.Russia,
    this.Slovenia,
    this.Switzerland
  ];
}
