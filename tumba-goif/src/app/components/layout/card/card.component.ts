import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent {
  @Input() label?: string;
  @Input() text?: string;
  @Input() email?: string;
  @Input() websiteUrl?: string;
  @Input() specialWebsiteUrlName?: string;
  @Input() imageUrl?: string;
  exampleText =
    "With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.";
}
