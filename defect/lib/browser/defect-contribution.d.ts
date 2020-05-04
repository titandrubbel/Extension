import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
export declare const DefectApiCommand: {
    id: string;
    label: string;
};
export declare class DefectCommandContribution implements CommandContribution {
    readonly messageService: MessageService;
    constructor(messageService: MessageService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class DefectMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=defect-contribution.d.ts.map