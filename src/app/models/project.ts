import { ClienLocationModel } from "./clien-location-model";

export class Project {

    projectId: number = 0;
    projectName: string | null =null;
    dateOfStart: string | null = null;
    teamSize: number | null = 0;
    active: boolean = false;
    status: string = '';
    clientLocationID: number = 0;
    clientLocation = new ClienLocationModel();
}
