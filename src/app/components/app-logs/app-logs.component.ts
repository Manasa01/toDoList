import { Component, OnInit } from "@angular/core";
import { Log } from "../../models/Log";
import { LogService } from "../../services/log.service";
@Component({
  selector: "app-app-logs",
  templateUrl: "./app-logs.component.html",
  styleUrls: ["./app-logs.component.css"]
})
export class AppLogsComponent implements OnInit {
  logs: Log[];
  selectedLog: Log;
  loaded: boolean;
  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logService.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = { id: "", text: "", date: "" };
      }
    });
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    });
  }
  onSelect(log: Log) {
    this.logService.setFormLog(log);
    this.selectedLog = log;
  }
  onDelete(log: Log) {
    if (confirm("Are you sure?")) {
      this.logService.deleteLog(log);
      if (this.selectedLog.id == log.id) {
        this.logService.setFormLog({ id: "", text: "", date: "" });
      }
    }
  }
}
