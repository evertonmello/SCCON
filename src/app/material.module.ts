import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import {
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatButtonModule
} from '@angular/material';


@NgModule({
    imports: [MatPaginatorModule, MatSelectModule, MatProgressBarModule, MatInputModule, MatTableModule, MatSortModule, MatFormFieldModule, MatButtonModule, MatMenuModule],
    exports: [MatPaginatorModule, MatSelectModule, MatProgressBarModule, MatInputModule, MatTableModule, MatSortModule, MatFormFieldModule, MatButtonModule, MatMenuModule]
})

export class MaterialMdl { }