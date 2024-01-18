export class Project {

    ProjectId: number;
    ProjectName: string | null;
    DateOfStart: string | null;
    TeamSize!: number | null;

    constructor() {
        this.ProjectId = 0;
        this.ProjectName = null;
        this.DateOfStart = null;
        this.TeamSize = 0;
    }

}
