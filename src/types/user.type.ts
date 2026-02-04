export interface AuthSession {
  id: string;
  token: string;
  userId: string;
  expiresAt: string; // ISO date string
  createdAt: string;
  updatedAt: string;
  ipAddress: string;
  userAgent: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: "CUSTOMER" | "ADMIN" | "PROVIDER";
  status: "ACTIVE" | "INACTIVE" | "BANNED";
  createdAt: string;
  updatedAt: string;
}

export interface UserSessionResponse {
  session: AuthSession;
  user: AuthUser;
}
