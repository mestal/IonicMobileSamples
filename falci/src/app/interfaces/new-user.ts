
export interface NewUser {
    UserName: string;
    Password: string;
    Password2: string;
    FullName: string;
    EMail: string;
  }

  export interface ForgatPassword {
    UserName: string;
    EMail: string;
  }

  export interface ResetPassword {
    NewPassword: string;
    NewPassword2: string;
    Email: string;
    Token: string;
  }

  export interface ChangePassword {
    NewPassword: string;
    NewPassword2: string;
    CurrentPassword: string;
  }