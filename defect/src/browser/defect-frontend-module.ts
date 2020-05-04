/**
 * Generated using theia-extension-generator
 */

import { DefectCommandContribution, DefectMenuContribution } from './defect-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";

import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    
    bind(CommandContribution).to(DefectCommandContribution);
    bind(MenuContribution).to(DefectMenuContribution);
    
});
