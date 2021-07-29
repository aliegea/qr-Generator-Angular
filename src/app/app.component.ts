import { dashCaseToCamelCase } from "@angular/compiler/src/util";
import { Component } from "@angular/core";

interface Datos {
  name: string;
  surname: string;
  email: string;
  phone: string;
  web?: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  codes: Datos[] = [];

  public values: string;
  public level: "L" | "M" | "Q" | "H";
  public width: number;
  public background: string;
  public data: Datos = {
    name: "Elena",
    surname: "Polo",
    email: "poloe@yahoo.com",
    phone: "654839202",
    web: "",
  };
  constructor() {
    this.level = "L";
    this.values = JSON.stringify(this.data);
    this.width = 200;
    this.background = "white";
  }

  qrLevel(val: "L" | "M" | "Q" | "H") {
    this.level = val;
  }

  qrData(val: string) {
    let cliente = this.data;
    let clienteStr = JSON.stringify(this.data);
    this.codes.push({
      name: cliente.name,
      surname: cliente.surname,
      email: cliente.email,
      phone: cliente.phone,
      web: cliente.web,
    });
    let i: number;
    for (i = 0; i < this.codes.length; i++) {
      if (i == this.codes.length - 1) {
        clienteStr = JSON.stringify(this.codes[i]);
        this.values = clienteStr;
        val = clienteStr;
        console.log(val);
      }
    }
  }

  qrWidth(val: number) {
    this.width = val;
  }
  qrBackground(val: "WHITE" | "BLUE" | "YELLOW") {
    switch (val) {
      case "WHITE":
        this.background = "#FFFFFF";
        break;
      case "BLUE":
        this.background = "#0000FF";
        break;
      case "YELLOW":
        this.background = "#FFFF00";
        break;
    }
  }
}
