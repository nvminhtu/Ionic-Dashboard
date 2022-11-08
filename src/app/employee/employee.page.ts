import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {
  filterTerm: string;
  employees = [
    { name: 'ABC', position: 'Developer', location: 'Ho Chi Minh' },
    { name: 'Young', position: 'Designer', location: 'Ho Chi Minh' },
    { name: 'Erik', position: 'Coder', location: 'Ho Chi Minh' },
  ];
  constructor() {}

  ngOnInit() {}
}
