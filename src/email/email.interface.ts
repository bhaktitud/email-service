export interface EmailTemplateParams {
    to_name: string;
    from_name: string;
    to_email: string;
    reply_to?: string;
    message: string;
    [key: string]: unknown;
}
