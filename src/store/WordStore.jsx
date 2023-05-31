import { action, makeAutoObservable } from "mobx";

export class WordStore {
  words = [];
  state = "pending"; // "pending", "done" or "error"

  constructor() {
    makeAutoObservable(this);
  }

  fetchProjects() {
    this.words = [];
    this.state = "pending";
    debugger;
    fetchWords().then(
      action("fetchSuccess", (projects) => {
        this.words = projects;
        this.state = "done";
      }),
      action("fetchError", (error) => {
        this.state = "error";
      })
    );
  }
}
const fetchWords = () => {
  return fetch("/api/words");
};
