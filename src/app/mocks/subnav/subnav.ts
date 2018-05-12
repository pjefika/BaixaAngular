import { SubNav } from "../../viewmodels/subnav/subnav";
import { PrincipalComponent } from "../../utilcomponents/principalcomponent/principal.component";
import { BaixaComponent } from "../../utilcomponents/baixacomponent/baixa.component";

export const SubNavList: SubNav[] = [
    {
        nome: "Home",
        component: PrincipalComponent,
        ativo: true
    },
    {
        nome: "Baixa",
        component: BaixaComponent,
        ativo: true
    }
]