import { defineStore } from "pinia";
import type { Experience, Skill } from "@/types/app";

export const useAppStore = defineStore("app", () => {
  const aboutPage = {
    descriptions: [
      "My name is Bruno Clappe. I am a software engineer attracted toward DevOps. I am a graduate of CESI with a master’s degree in software development.",
      "Enthusiast learner, I aim at providing great code and giving it the possibility to easily flow.",
    ],
  };
  const experiencesPage = {
    experiences: [
      { jobTitle: "Chief Technical Officer", location: "Canada", technologies: ["Typescript", "Go"], company: "WeArt", startDate: "10/2022", endDate: "Present" },
      {
        jobTitle: "IT association president",
        location: "Lyon, France",
        technologies: ["Javascript", "Proxmox", "Docker", "Python"],
        company: "Coding Cartel",
        startDate: "02/2022",
        endDate: "Present",
      },
      { jobTitle: "Backend developer", location: "Copenhagen, Denmark", technologies: ["Go", "BigQuery", "API", "Redis"], company: "Wult", startDate: "09/2021", endDate: "02/2022" },
      { jobTitle: "Backend developer", location: "Montpellier, France", technologies: ["Java", "Qlik"], company: "Berger-Levrault", startDate: "01/2021", endDate: "04/2021" },
    ] as Array<Experience>,
  };

  const skillsPage = {
    chart: {
      data: {
        datasets: [
          {
            data: [4, 3.5, 2.5, 2.5, 2],
            backgroundColor: ["#FF0000AA", "#FFFF00AA", "#00FF00AA", "#0080FFAA", "#8000FFAA"],
            borderWidth: 0,
            label: "My skills",
            max: 5,
          },
        ],
        labels: ["Development", "Database", "DevOps", "Network", "Security"],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "#fff",
              font: {
                size: 18,
              },
            },
            position: "bottom",
          },
        },
        scales: {
          r: {
            grid: {
              color: "#fff",
            },
            ticks: {
              color: "white",
              count: 6,
              stepSize: 1,
              z: 10,
              showLabelBackdrop: false,
              font: {
                size: 25,
              },
            },
            suggestedMax: 5,
          },
        },
      },
    },
    skills: [
      { name: "Go", field: "Development", use: ["Backend", "Standalone"], framework: false, skill: 4 },
      { name: "Javascript", field: "Development", use: ["Frontend", "Backend"], framework: false, skill: 4 },
      { name: "CSS", field: "Development", use: ["Frontend"], framework: false, skill: 4 },
      { name: "HTML", field: "Development", use: ["Frontend"], framework: false, skill: 3.5 },
      { name: "Kubernetes", field: "DevOps", use: ["Infrastructure as Code", "Deployment"], framework: false, skill: 3.5 },
      { name: "Java", field: "Development", use: ["Backend", "Standalone"], framework: false, skill: 3 },
      { name: "SCSS", field: "Development", use: ["Frontend"], framework: false, skill: 3 },
      { name: "VueJS", field: "Development", use: ["Frontend"], framework: true, skill: 3 },
      { name: "ReactJS", field: "Development", use: ["Frontend"], framework: true, skill: 3 },
      { name: "Linux", field: "System", use: ["OS"], framework: false, skill: 3 },
      { name: "MySQL", field: "Database", use: ["SQL"], framework: false, skill: 3 },
      { name: "Python", field: "Development", use: ["Scripting", "Standalone"], framework: false, skill: 2.5 },
      { name: "Typescript", field: "Development", use: ["Frontend", "Backend"], framework: false, skill: 2.5 },
      { name: "Docker", field: "DevOps", use: ["Containers"], framework: false, skill: 2.5 },
      { name: "ScyllaDB", field: "Database", use: ["NoSQL"], framework: false, skill: 2 },
      { name: "Podman", field: "DevOps", use: ["Containers"], framework: false, skill: 2 },
      { name: "MongoDB", field: "Database", use: ["NoSQL"], framework: false, skill: 2 },
      { name: "C#", field: "Development", use: ["Standalone"], framework: false, skill: 2 },
      { name: "Unity", field: "Development", use: ["Standalone", "Virtual Reality", "Augmented Reality"], framework: false, skill: 2 },
      { name: "Bash", field: "System", use: ["Scripting"], framework: false, skill: 1.5 },
      { name: "Windows", field: "System", use: ["OS"], framework: false, skill: 1.5 },
      { name: "Redis", field: "Database", use: ["NoSQL"], framework: false, skill: 1 },
    ] as Array<Skill>,
  };

  return { aboutPage, experiencesPage, skillsPage };
});
