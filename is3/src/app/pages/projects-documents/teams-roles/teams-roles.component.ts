import { Component, OnInit, Inject } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserStoriesService } from 'src/app/services/user-stories.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { AddMemberComponent } from './dialogs/add-member/add-member.component';
import { EditMemberComponent } from './dialogs/edit-member/edit-member.component';
import { DeleteMemberComponent } from './dialogs/delete-member/delete-member.component';
import { AddTeamComponent } from './dialogs/add-team/add-team.component';
import { AddTeamMemberComponent } from './dialogs/add-team-member/add-team-member.component';
import { EditTeamMemberComponent } from './dialogs/edit-team-member/edit-team-member.component';
import { DeleteTeamMemberComponent } from './dialogs/delete-team-member/delete-team-member.component';

export interface DialogData {
  nombre: string;
  mail: string;
  telefono: string;
  rol: string;
}

@Component({
  selector: 'app-teams-roles',
  templateUrl: './teams-roles.component.html',
  styleUrls: ['./teams-roles.component.scss']
})

export class TeamsRolesComponent implements OnInit { 
    
    // la lista esta inicializada solo para probar
    membersList = [{name: "Jose Pulido", email: "jose@gmail.com", phone_number: "0414567893", role: "Scrum Master", username: "josepulido"}];

    /////////////////////////////////////////////////////////////
    miembros = [{name: "Jose Pulido", email: "jose@gmail.com", phone_number: "0414567893", role: "Scrum Master", username: "josepulido"}];
    teamsList = [{name: "Equipo 1", members: this.miembros}];
    /////////////////////////////////////////////////////////////

    selectedProjectId!: any;
    member_endpoint!: string;
    teams_endpoint!: string;
    
    constructor(
      public dialog: MatDialog
    ) { }
  
    ngOnInit(): void {
      this.selectedProjectId = localStorage.getItem("current-teams-roles-project");

      this.member_endpoint = this.selectedProjectId + "/members";
      let stored_members: any = localStorage.getItem(this.member_endpoint);
      if (stored_members) {
        this.membersList = JSON.parse(stored_members);
      }

      this.teams_endpoint = this.selectedProjectId + "/teams";
      let stored_teams: any = localStorage.getItem(this.teams_endpoint);
      if (stored_teams) {
        this.teamsList = JSON.parse(stored_teams);
      }
    }
  
    displayedColumns: string[] = ['nombre', 'mail', 'telefono', 'rol', 'actions'];

    /**
     * addMember
     * Opens dialog and adds a new member to the project
     */
    addMember() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { members: this.membersList }

      this.dialog.open(AddMemberComponent, dialogConfig).afterClosed().subscribe(response => {
        if (response) {
          this.membersList.push(response);
          localStorage.setItem(this.member_endpoint, JSON.stringify(this.membersList));
          this.ngOnInit();
        }
      });
    }

    /**
     * editMember
     * Opens dialog and edits the information of a given member
     */
    editMember(name: string, email: string, phone_number: string, role: string, username: string, index: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { name: name, email: email, phone_number: phone_number, role: role, username: username }

      this.dialog.open(EditMemberComponent, dialogConfig).afterClosed().subscribe(response => {
        if (response) {
          this.membersList[index] = response;
          localStorage.setItem(this.member_endpoint, JSON.stringify(this.membersList));

          // Edit the details of the same user if it's part of other teams
          let count_team = 0;
          for (let x of this.teamsList) {
            let count_members = 0;
            for (let i of this.teamsList[count_team].members) {
              let team_member: any = i;
              if (team_member.username == response.username) this.teamsList[count_team].members[count_members] = response;
              count_members++;
            }
            count_team++;
          }
          localStorage.setItem(this.teams_endpoint, JSON.stringify(this.teamsList));

          this.ngOnInit();
        }
      })
    }

    /**
     * deleteMember
     * Deletes a given member of the team
     */
    deleteMember(index: any) {
      this.dialog.open(DeleteMemberComponent).afterClosed().subscribe(response => {
        if (response) {
          this.membersList.splice(index, 1);
          localStorage.setItem(this.member_endpoint, JSON.stringify(this.membersList));
          this.ngOnInit();
        }
      })
    }


    /**
     * addTeam
     * Adds a new team to the project
     */
    addTeam() {
      this.dialog.open(AddTeamComponent).afterClosed().subscribe(response => {
        if (response) {
          this.teamsList.push(response);
          localStorage.setItem(this.teams_endpoint, JSON.stringify(this.teamsList));
          this.ngOnInit();
        }
      })
    }

    /**
     * addTeamMember
     * Adds a new member to a given team
     */
    addTeamMember(teamIndex: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { members: this.teamsList[teamIndex].members }

      this.dialog.open(AddTeamMemberComponent, dialogConfig).afterClosed().subscribe(response => {
        if (response) {
          this.teamsList[teamIndex].members.push(response);
          localStorage.setItem(this.teams_endpoint, JSON.stringify(this.teamsList));
          this.ngOnInit();
        }
      })
    }


    /**
     * editTeamMember
     * Edits the information of a member from a given team
     */
    editTeamMember(team_name: string, name: string, email: string, phone_number: string, role: string, username: string, index: any, teamIndex: any) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = { team_name: team_name, name: name, email: email, phone_number: phone_number, role: role, username: username }

      this.dialog.open(EditTeamMemberComponent, dialogConfig).afterClosed().subscribe(response => {
        if (response) {
          this.teamsList[teamIndex].name = response.team_name;
          this.teamsList[teamIndex].members[index] = {name: response.name, email: response.email, phone_number: response.phone_number, role: response.role, username: response.username};
          localStorage.setItem(this.teams_endpoint, JSON.stringify(this.teamsList));

          // Edit the details of the same user if it's part of other teams
          let count_team = 0;
          for (let x of this.teamsList) {
            let count_members = 0;
            for (let i of this.teamsList[count_team].members) {
              let team_member: any = i;
              if (team_member.username == response.username) this.teamsList[count_team].members[count_members] = response;
              count_members++;
            }
            count_team++;
          }
          localStorage.setItem(this.teams_endpoint, JSON.stringify(this.teamsList));

          let count_members = 0;
          for (let x of this.membersList) {
            let member: any = x;
            if (member.username == response.username) this.membersList[count_members] = response;
            count_members++;
          }
          localStorage.setItem(this.member_endpoint, JSON.stringify(this.membersList));


          this.ngOnInit();
        }
      })
    }

    /**
     * deleteTeamMember
     * Deletes a member from a given team
     */
    deleteTeamMember(index: any, teamIndex: any) {
      this.dialog.open(DeleteMemberComponent).afterClosed().subscribe(response => {
        if (response) {
          this.teamsList[teamIndex].members.splice(index, 1);
          localStorage.setItem(this.teams_endpoint, JSON.stringify(this.teamsList));
          this.ngOnInit();
        }
      })
    }

}
