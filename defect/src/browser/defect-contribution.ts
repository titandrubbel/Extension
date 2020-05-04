import { injectable,inject} from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry,MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";
const fileDialog = require('file-dialog');

export const DefectApiCommand = {
    id: 'DefectApi.command',
    label: "Defect API"
};


@injectable()
export class DefectCommandContribution implements CommandContribution {

    constructor(
       @inject(MessageService) public readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(DefectApiCommand, {
           execute: () =>{ 
               

          fileDialog()
            .then((file:any) => {
                const data = new FormData()

         
                // Post to server
               
                
                fetch('http://localhost:5000/api/classification/classify', {
                    method: 'POST',
                   // mode: 'cors',
                   headers: {
                    'Accept': 'application/text',
                    'Content-Type': 'multipart/form-data'
                
                  },     
                   body:data,
                   }).then(response => response.text())
                    .then((text) => {this.messageService.info(text)});
                
       })
       

}
})
    }
}

@injectable()
export class DefectMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: DefectApiCommand.id,
            label: DefectApiCommand.label
        });
    }
}
