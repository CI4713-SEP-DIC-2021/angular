export type TModule =
    'add_project' |
    'add_sprint'  |
    'add_criteria'  |
    'add_test'  |
    'add_task' |
    'update_project' |
    'update_sprint' |
    'update_criteria' |
    'update_test'  |
    'activate_project' |
    'pause_project' |
    'delete_project' |
    'search_project' |
    'user_register' |
    'user_login' |
    'user_role_assign' |
    'user_delete'

export class Logger {
    id!: number;
    user!: string;
    event!: string;
    module!: TModule;

    constructor(user: string, event: string, module: TModule) {
        this.user = user;
        this.event = event;
        this.module = module;
    }
}
