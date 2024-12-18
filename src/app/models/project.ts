import { Component } from "@angular/core";

export interface Project {
  name: string;
  description: string;
  HowWasDone: string;
  image: string;
  url: string;
  git: string;
  technologies: string[];
}