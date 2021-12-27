import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/services/projects.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { ProjectsDocumentsService } from 'src/app/services/projects-documents.service';

interface proye {
    date_created: string;
    description: string;
    id: number,
    status: string;
    user_id: number;
}

@Component({
  selector: 'app-projects-documents',
  templateUrl: './projects-documents.component.html',
  styleUrls: ['./projects-documents.component.scss']
})
export class ProjectsDocumentsComponent implements OnInit {
    selected = 'option2';
    selectedProy = ' ';
    projectsList!: proye[];
    ready = false;
    text = "";
    base = [[""]];
    baseId = [[""]];
    input2!: string;
    input3!: string;
    input4!: string;
    input5!: string;
    aux = -1;
    image = false;
    identification = false;
    uploadedImage: any;
    file: any;
    constructor(
        private projectService: ProjectsService,
        private router: Router,
        private projectsDocumentsService: ProjectsDocumentsService,
    ) { }

    ngOnInit(): void {
        this.projectService.getAllProjects().then((projects: any) => {
        //this.projectService.getAll().then((projects: any) => { 
            if (projects) { 
              this.projectsList = projects;
              if(!localStorage.hasOwnProperty("data")){
                this.base = [[""]];
                for (let index = 0; index < this.projectsList.length; index++) {
                    if(index === 0){
                        this.base[0] = ["prueba"]
                    }
                    else{
                        this.base.push(["prueba"]);
                    }
                    for (let index2 = 0; index2 < 10; index2++) {
                        if(index2 === 7 || index2 === 8){
                            this.base[index].push("https://i0.wp.com/elfutbolito.mx/wp-content/uploads/2019/04/image-not-found.png?ssl=1")
                        }
                        else{
                            this.base[index].push("x")
                        }
                    }
                }
              }
              if(localStorage.hasOwnProperty("data")){
                var z: any;
                z = localStorage.getItem('data');
                this.base = JSON.parse(z);
              }
              if(!localStorage.hasOwnProperty("dataId")){
                  console.log("entre bro")
                this.baseId = [[""]];
                for (let index = 0; index < this.projectsList.length; index++) {
                    if(index === 0){
                        this.baseId[0] = ["prueba"]
                    }
                    else{
                        this.baseId.push(["prueba"]);
                    }
                    for (let index2 = 0; index2 < 3; index2++) {
                        this.baseId[index].push("x")
                    }
                }
              }
              if(localStorage.hasOwnProperty("dataId")){
                  console.log("entre a la base")
                  var y: any;
                  y = localStorage.getItem('dataId');
                  this.baseId = JSON.parse(y);
                  console.log(this.baseId)
              }
              
            }
        });  
    }

    search(){
        if(this.selected === "Cesión de Derechos de Autor"){
            this.projectsDocumentsService.getAllCopyRight().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 0;
                        }
                    }
                }
            });
            if(this.aux != 0){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][0];
                        this.aux = 0;
                    }
                }
            }
        }
        if(this.selected === "Introducción"){
            this.projectsDocumentsService.getAllIntro().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 1;
                        }
                    }
                }
            });
            if(this.aux != 1){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        console.log(this.projectsList[index1])
                        this.input2 = this.base[index1][1];
                        this.aux = 1;
                    }
                }
            }
        }
        if(this.selected === "Propósito de este documento"){
            this.projectsDocumentsService.getAllPurpose().then((result: any) => {
                console.log("soy el documento")
                console.log(result)
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 2;
                        }
                    }
                }
            });
            if(this.aux != 2){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][2];
                        this.aux = 2;
                    }
                }
            }
        }
        if(this.selected === "Motivación"){
            this.projectsDocumentsService.getAllMotivation().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 3;
                        }
                    }
                }
            });
            if(this.aux != 3){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][3];
                        this.aux = 3;
                    }
                }
            }
        }
        if(this.selected === "Estado del Proyecto"){
            this.projectsDocumentsService.getAllStatus().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 4;
                        }
                    }
                }
            });
            if(this.aux != 4){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][4];
                        this.aux = 4;
                    }
                }
            }
        }
        if(this.selected === "Alcance"){
            this.projectsDocumentsService.getAllScope().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 5;
                        }
                    }
                }
            });
            if(this.aux != 5){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][5];
                        this.aux = 5;
                    }
                }
            }
        }
        if(this.selected === "Fundamentación"){
            this.projectsDocumentsService.getAllFoundation().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 6;
                        }
                    }
                }
            });
            if(this.aux != 6){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][6];
                        this.aux = 6;
                    }
                }
            }
        }
        if(this.selected === "Valores del equipo"){
            this.projectsDocumentsService.getAllValues().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.input2 = result[index1].content;
                            this.aux = 7;
                        }
                    }
                }
            });
            if(this.aux != 7){
                for (var index1 in this.projectsList) {
                    if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                        this.input2 = this.base[index1][7];
                        this.aux = 7;
                    }
                }
            }
        }
        // apartado de imagenes
        if(this.selected === "Arquitectura del Software"){
            this.projectsDocumentsService.getAllArq().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.image = true;
                            var id = parseInt(index1);
                            setTimeout(() => {
                                var imag = <HTMLImageElement>document.getElementById('image');
                                imag.src = result[id].path;
                                this.aux = 8;    
                            }, 200);
                        }
                    }
                }
                if(this.image === false){
                    for (var index1 in this.projectsList) {
                        if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                            this.image = true;
                            var id = parseInt(index1);
                            setTimeout(() => {
                                var imag = <HTMLImageElement>document.getElementById('image');
                                imag.src = this.base[id][8];
                                this.aux = 8;
                            }, 100);
                        }
                    }
                }
            });
        }
        if(this.selected === "Diagrama de Clases"){
            this.projectsDocumentsService.getAllDiag().then((result: any) => {
                if (result.length != 0) {
                    for (var index1 in result) {
                        if(parseInt(result[index1].doc.id) === parseInt(this.selectedProy)){
                            this.image = true;
                            var id = parseInt(index1);
                            setTimeout(() => {
                                var imag = <HTMLImageElement>document.getElementById('image');
                                imag.src = result[id].path;
                                this.aux = 9;    
                            }, 200);
                        }
                    }
                }
                if(this.image === false){
                    for (var index1 in this.projectsList) {
                        if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                            this.image = true;
                            var id = parseInt(index1);
                            setTimeout(() => {
                                var imag = <HTMLImageElement>document.getElementById('image');
                                imag.src = this.base[id][9];       
                                this.aux = 9;
                            }, 100);
                        }
                    }
                }
            });
        }

        if(this.selected === "Identificación del Proyecto"){
            this.projectsDocumentsService.getAllDocs().then((result: any) => {
                if (result.length != 0) {
                    //console.log("si pude entrar lol")
                    for (var index1 in result) {
                        if(result[index1].project.id === parseInt(this.selectedProy)){
                            this.input3 = result[index1].name;
                            this.input4 = result[index1].dev_met;
                            this.input5 = result[index1].version;
                            this.identification = true;
                            console.log("antes de la imagen")
                            var id = parseInt(index1);
                            setTimeout(() => {
                                var imag = <HTMLImageElement>document.getElementById('image2');
                                imag.src = result[id].metaphor;  
                                console.log("estoy aquiiii")
                               // console.log(this.baseId[id][3])     
                            }, 200);
                        }
                    }
                }
                if(this.identification === false){
                    for (var index1 in this.projectsList) {
                        if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                            this.input3 = this.baseId[index1][0];
                            this.input4 = this.baseId[index1][1];
                            this.input5 = this.baseId[index1][2];
                            this.identification = true;
                            var id = parseInt(index1);
                            setTimeout(() => {
                                var imag = <HTMLImageElement>document.getElementById('image2');
                                imag.src = this.baseId[id][3];     
                            }, 200);
                        }
                    }
                }
            });
        }

        if(this.selected === "Historial de revisiones"){
            if(!localStorage.hasOwnProperty(this.selectedProy)){
                localStorage.setItem(this.selectedProy, JSON.stringify([["1","2","3","4"]]));
            }
            localStorage.setItem("turno", this.selectedProy);
            this.router.navigate(["/revision-history"])
        }

        if(this.selected === "Equipos y roles del proyecto"){
            localStorage.setItem("current-teams-roles-project", this.selectedProy);
            this.router.navigate(["/teams-roles"])
        }

        if((this.selected != "Diagrama de Clases") &&  this.selected != "Arquitectura del Software" &&  this.selected != "Identificación del Proyecto"){
            this.ready = true;
        }
        
    }

    save(){
        for (var index1 in this.projectsList) {
            if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                this.base[index1][this.aux] = this.input2;
                if(this.aux === 0){
                    this.projectsDocumentsService.addCopyRight(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 1){
                    this.projectsDocumentsService.addIntro(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 2){
                    this.projectsDocumentsService.addPurpose(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 3){
                    this.projectsDocumentsService.addMotivation(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 4){
                    this.projectsDocumentsService.addStatus(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 5){
                    this.projectsDocumentsService.addScope(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 6){
                    this.projectsDocumentsService.addFoundation(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                if(this.aux === 7){
                    this.projectsDocumentsService.addValues(parseInt(this.selectedProy), this.input2).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
                
            }
        }
        localStorage.setItem('data', JSON.stringify(this.base));
        this.ready = false;
        this.router.navigate(["/projects"])
    }

    onFileSelected(event: any) {
        var imag = <HTMLImageElement>document.getElementById('image');
        this.uploadedImage = URL.createObjectURL(event.target.files[0])
        imag.src = this.uploadedImage
        this.file = event.target.files[0];
    }

    onFileSelected2(event: any) {
        var imag2 = <HTMLImageElement>document.getElementById('image2');
        this.uploadedImage = URL.createObjectURL(event.target.files[0])
        imag2.src = this.uploadedImage
        this.file = event.target.files[0];
    }

    saveImage(){
        for (var index1 in this.projectsList) {
            if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                let reader = new FileReader();
                let num = parseInt(index1);
                reader.readAsDataURL(this.file as Blob);
                reader.onloadend = () => {
                    let z = reader.result as string
                    this.base[num][this.aux] = z;
                    localStorage.setItem('data', JSON.stringify(this.base));
                    if(this.aux === 8){
                        this.projectsDocumentsService.addArq(parseInt(this.selectedProy), this.base[num][this.aux]).then((error: any) => {
                            if (error) { 
                              //console.log(error);
                              this.ngOnInit();
                            }
                            console.log(error);
                        });
                    }
                    if(this.aux === 9){
                        this.projectsDocumentsService.addDiag(parseInt(this.selectedProy), this.base[num][this.aux]).then((error: any) => {
                            if (error) { 
                              //console.log(error);
                              this.ngOnInit();
                            }
                            console.log(error);
                        });
                    }
                }
            }
        }
        this.image = false;
        this.ready = false;
        this.router.navigate(["/projects"])
    }

    saveId(){
        for (var index1 in this.projectsList) {
            if(this.projectsList[index1].id === parseInt(this.selectedProy)){
                this.baseId[index1][0] = this.input3;
                this.baseId[index1][1] = this.input4;
                this.baseId[index1][2] = this.input5;
                let reader = new FileReader();
                let num = parseInt(index1);
                var id = parseInt(index1);
                reader.readAsDataURL(this.file as Blob);
                reader.onloadend = () => {
                    let z = reader.result as string
                    this.baseId[num][3] = z;
                    localStorage.setItem('dataId', JSON.stringify(this.baseId));
                    this.projectsDocumentsService.addId(this.baseId[id][0], this.baseId[id][1], parseFloat(this.baseId[id][2]), parseInt(this.selectedProy), this.baseId[id][3]).then((error: any) => {
                        if (error) { 
                          //console.log(error);
                          this.ngOnInit();
                        }
                        console.log(error);
                    });
                }
            }
        }
        this.identification = false;
        this.image = false;
        this.ready = false;
        this.router.navigate(["/projects"])
        console.log("soy la nueva base")
        console.log(this.baseId)
        console.log("soy el archivo")
        console.log(this.file)
    }
}
