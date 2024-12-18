import { ANGULARComponent } from "../components/techstak/angular/angular.component";
import { CSHARPComponent } from "../components/techstak/csharp/csharp.component";
import { CSSComponent } from "../components/techstak/css/css.component";
import { EXPRESSComponent } from "../components/techstak/express/express.component";
import { GITComponent } from "../components/techstak/git/git.component";
import { GITACTIONSComponent } from "../components/techstak/gitactions/gitactions.component";
import { HTMLComponent } from "../components/techstak/html/html.component";
import { MYSQLComponent } from "../components/techstak/mysql/mysql.component";
import { NEXTComponent } from "../components/techstak/next/next.component";
import { NODEComponent } from "../components/techstak/node/node.component";
import { REACTComponent } from "../components/techstak/react/react.component";
import { SPRINGComponent } from "../components/techstak/spring/spring.component";
import { TAILWINDComponent } from "../components/techstak/tailwind/tailwind.component";
import { TYPESCRIPTComponent } from "../components/techstak/typescript/typescript.component";
import { VITEComponent } from "../components/techstak/vite/vite.component";

export const TECHNOLOGIES = [
    {
      label: "HTML",
      Component: HTMLComponent,
    },
    {
      label: "CSS",
      Component: CSSComponent,
    },
    {
      label: "React",
      Component: REACTComponent,
    },
    {
      label: "Nextjs",
      Component: NEXTComponent,
    },
    {
      label: "TypeScript",
      Component: TYPESCRIPTComponent,
    },
    {
      label: "TailwindCSS",
      Component: TAILWINDComponent,
    },
    {
      label: "Nodejs",
      Component: NODEComponent,
    },
    {
      label: "Expressjs",
      Component: EXPRESSComponent,
    },
    {
      label: "Git",
      Component: GITComponent,
    },
    {
      label: "C#",
      Component: CSHARPComponent,
    },
    {
      label: "Vite",
      Component: VITEComponent,
    },
    {
      label: "Angular",
      Component: ANGULARComponent,
    },
    {
      label: "Spring",
      Component: SPRINGComponent,
    },
    {
      label: "GitActions",
      Component: GITACTIONSComponent,
    },
    {
      label: "MySQL",
      Component: MYSQLComponent,
    },
  ] as const;