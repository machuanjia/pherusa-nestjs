export interface Task {
    _id?: string;
    name?: string;
    description?: string;
    type?: number;
    state?: number;
    important?: number;
    urgent?: number;
    tomato?: number;
    group?: string;
    position?: number;
    created_at?: number;
    accountId?: string;
    staffId?: string;
    user?: any;
    project?: any;
    scrum?: any;
}
