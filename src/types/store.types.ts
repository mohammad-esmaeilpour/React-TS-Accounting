export interface IUserBasicInfo {
    activations: string;
    birthDate: string;
    created_at: string;
    deleted_at: unknown;
    email: string;
    fax: string;
    firstName: string;
    gender: string;
    id: number;
    isActive: string;
    isEmailValidate: string;
    lastName: string;
    mobile: string;
    tel: null | string;
}

export interface IUserService {
    created_at: string;
    deleted_at: null | string;
    description: string;
    id: number;
    isActive: number;
    payment_id: null | number;
    role_description: string;
    role_icon: string;
    role_id: number;
    role_name: string;
    service_description: string;
    service_id: number;
    service_name: string;
    service_show_name: string;
    service_type_description: null | string;
    service_type_descrition: string;
    service_type_id: number;
    service_type_name: string;
    service_type_price: string;
    service_type_validity_days: number;
    user_id: number;
    vaild_until: null | string;
}
